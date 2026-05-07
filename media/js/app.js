const words = ["REQUERIMIENTO", "SOFTWARE", "USUARIO", "CLIENTE", "RESTRICCIÓN", "DESCRIPCIÓN", "NECESIDAD", "SISTEMA", "ANÁLISIS", "ESPECIFICACIÓN", "OBJETIVO", "PROCESO", "VALIDACIÓN", "VERIFICACIÓN", "FUNCIONAL", "NOFUNCIONAL", "CONTRATO", "SATISFACCIÓN"]; 
const gridSize = 20; 
let wordGrid;
let placedGrid;
let wordPositions = {};
let currentSelection = []; 
let wordsFound = []; 

document.addEventListener('DOMContentLoaded', () => {
    startNewGame();
    document.getElementById('generateNew').addEventListener('click', startNewGame);
});

function startNewGame() {
    wordGrid = generateEmptyGrid(gridSize);
    currentSelection = []; 
    wordsFound = [];
    wordPositions = {};
    placeWordsInGrid(words, wordGrid);
    renderGrid(wordGrid);
    renderWordsList(words); 
}

function generateEmptyGrid(size) {
    return Array.from({length: size}, () => 
        Array.from({length: size}, () => String.fromCharCode(65 + Math.floor(Math.random() * 26)))
    );
} 

function placeWordsInGrid(words, grid) {
    placedGrid = Array.from({length: gridSize}, () => Array.from({length: gridSize}, () => false));
    words.forEach(word => {
        let placed = false;
        let attempts = 0;
        while (!placed && attempts < 1000) {
            const horizontal = Math.random() < 0.5; 
            let row, col;
            if (horizontal) {
                row = Math.floor(Math.random() * gridSize);
                col = Math.floor(Math.random() * (gridSize - word.length + 1));
            } else {
                row = Math.floor(Math.random() * (gridSize - word.length + 1));
                col = Math.floor(Math.random() * gridSize);
            }

            if (canPlaceWordAt(word, grid, row, col, horizontal)) {
                const positions = [];
                for (let i = 0; i < word.length; i++) {
                    if (horizontal) {
                        grid[row][col + i] = word[i];
                        placedGrid[row][col + i] = true;
                        positions.push(row * gridSize + (col + i));
                    } else {
                        grid[row + i][col] = word[i];
                        placedGrid[row + i][col] = true;
                        positions.push((row + i) * gridSize + col);
                    }
                }
                wordPositions[word] = positions;
                placed = true;
            }
            attempts++;
        }
        if (!placed) {
            console.warn('Could not place word:', word);
        }
    });
} 

function canPlaceWordAt(word, grid, row, col, horizontal = true) {
    for (let i = 0; i < word.length; i++) {
        const r = horizontal ? row : row + i;
        const c = horizontal ? col + i : col;
        const ch = grid[r][c];
        if (placedGrid && placedGrid[r][c] && ch !== word[i]) return false;
    }
    return true;
} 

function renderGrid(grid) {
    const container = document.getElementById('wordSearchContainer');
    container.innerHTML = '';
    grid.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            const cellElement = document.createElement('div');
            cellElement.textContent = cell;
            cellElement.dataset.index = rowIndex * gridSize + colIndex;
            cellElement.addEventListener('click', () => selectCell(rowIndex, colIndex, cellElement));
            container.appendChild(cellElement); 
        });
    });
}

function renderWordsList(words) {
    const wordsListContainer = document.getElementById('wordsList');
    wordsListContainer.innerHTML = '';
    words.forEach(word => {
        const wordElement = document.createElement('div');
        wordElement.textContent = word;
        wordElement.setAttribute('data-word', word);
        wordsListContainer.appendChild(wordElement);
    });
}

function selectCell(rowIndex, colIndex, cellElement) {
    const index = rowIndex * gridSize + colIndex;

    if (currentSelection.includes(index)) {
        cellElement.classList.remove('selected');
        currentSelection = currentSelection.filter(i => i !== index);
        return;
    }

    cellElement.classList.add('selected');
    currentSelection.push(index);

    let matchedWord = null;
    const selectedSet = new Set(currentSelection);

    for (const word of words) {
        if (wordsFound.includes(word)) continue;
        const positions = wordPositions[word];
        if (!positions) continue;
        if (positions.length !== currentSelection.length) continue;
        const allMatch = positions.every(pos => selectedSet.has(pos));
        if (allMatch) {
            matchedWord = word;
            break;
        }
    }

    if (matchedWord) {
        wordsFound.push(matchedWord);
        alert(`¡Has encontrado la palabra "${matchedWord}"!`);
        const positions = wordPositions[matchedWord];
        positions.forEach(idx => {
            const el = document.querySelector(`[data-index="${idx}"]`);
            if (el) {
                el.classList.remove('selected');
                el.classList.add('found');
            }
        });

        const wordEl = document.querySelector(`[data-word="${matchedWord}"]`);
        if (wordEl) wordEl.classList.add('found');
        currentSelection = [];

        if (wordsFound.length === words.length) {
            setTimeout(() => {
                alert('¡Has ganado!');
                startNewGame();
            }, 1000);
        }
    }
}
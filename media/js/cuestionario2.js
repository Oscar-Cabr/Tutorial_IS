

function valuap(respuest) {
    var reto;
    if (parseInt(respuest) == this.correcta) {
        // var reto;
        alert("Es correcta");
        reto = true;
        return reto;
    } else {
        alert("Es false");
        return reto;
    }
}

function pregunta(pregun, respuesta1, respuesta2, respuesta3, respuesta4, correcta) {
    this.pregun = pregun;
    this.respuestas = [];
    this.respuestas[0] = respuesta1;
    this.respuestas[1] = respuesta2;
    this.respuestas[2] = respuesta3;
    this.respuestas[3] = respuesta4;
    this.correcta = parseInt(correcta);
    this.ocupado = false;
    this.valuap = valuap;
}

var retorno = [];
var preguntas = [];

preguntas[0] = new pregunta("Según los autores, ¿por qué los requerimientos son la base de todo proyecto de software?","A) Porque describen las funcionalidades y características que el software debe tener para satisfacer las necesidades de los usuarios y/o clientes","B) Porque definen las pruebas unitarias que el equipo de calidad ejecutará","C) Porque establecen el lenguaje de programación y la arquitectura","D) Porque determinan el presupuesto y cronograma",0);
preguntas[1] = new pregunta("¿Cuál es la advertencia que hacen Contreras & Hernández respecto a la dicotomía funcional/no funcional?","A) Que los requerimientos no funcionales deben redactarse primero","B) Que existe una relación entre funcionales y no funcionales más cercana de lo esperado","C) Que la separación es absoluta","D) Que los no funcionales son opcionales",1);
preguntas[2] = new pregunta("¿Cuál es la frase central de Sommerville que define el propósito de los requerimientos de software?","A) Son atributos de calidad","B) Los requerimientos funcionales para un sistema refieren lo que el sistema debe hacer","C) Describen restricciones operacionales","D) Son condiciones contractuales",1);
preguntas[3] = new pregunta("¿Cómo formula Sommerville de manera extendida los requerimientos funcionales?","A) Como diagramas UML","B) Como listas de chequeo ISO","C) Como enunciados sobre servicios, reacciones y comportamientos del sistema","D) Como métricas de rendimiento",2);
preguntas[4] = new pregunta("Según Celi-Párraga et al., ¿cómo se definen los requerimientos funcionales?","A) Como restricciones del hardware","B) Como criterios de aceptación","C) Como contratos legales","D) Como enunciados sobre servicios y comportamiento del sistema",3);
preguntas[5] = new pregunta("¿Qué frase-resumen ofrecen Celi-Párraga et al. tomada de Sommerville?","A) Los requerimientos funcionales para un sistema refieren lo que el sistema debe hacer","B) Son componentes verificables","C) Son la traducción técnica del negocio","D) Derivan de los no funcionales",0);
preguntas[6] = new pregunta("¿Cómo describe Laplante los functional requirements?","A) Como propiedades de calidad","B) Como algoritmos específicos","C) Describen los servicios y cómo reaccionará el sistema","D) Como interfaces gráficas",2);
preguntas[7] = new pregunta("¿Qué énfasis añade Laplante sobre lo que el sistema no debe hacer?","A) Deben establecer explícitamente ciertos comportamientos que el sistema no debe ejecutar","B) Solo deben describir comportamientos positivos","C) Nunca deben mencionar restricciones negativas","D) Solo deben enumerar casos de éxito",0);
preguntas[8] = new pregunta("Según SWEBOK, ¿qué describen los requerimientos funcionales?","A) Propiedades de mantenibilidad","B) Las funciones que el software debe ejecutar","C) Protocolos de comunicación","D) La estructura de la base de datos",1);
preguntas[9] = new pregunta("¿Cuál es el criterio de identificación operativo que aporta SWEBOK?","A) Que sean comprensibles solo por arquitectos","B) Que se redacten en voz pasiva","C) Que estén numerados ANSI/IEEE","D) Que pueda escribirse un conjunto finito de pruebas para validarlos",3);
preguntas[10] = new pregunta("Según SWEBOK, ¿cuál es la propiedad esencial de todos los requerimientos?","A) Que estén traducidos","B) Que los escriba un ingeniero certificado","C) Que sean verificables","D) Que tengan un costo estimado",2);
preguntas[11] = new pregunta("¿Cuál es la formulación más breve y precisa de un requerimiento funcional según Wiegers & Beatty?","A) Una descripción de un comportamiento que el sistema exhibirá","B) Una promesa contractual","C) Una implementación detallada","D) Una métrica de rendimiento",0);
preguntas[12] = new pregunta("¿Qué precisa la versión ampliada de Wiegers sobre los tres niveles?","A) Que deben escribirse después del código","B) Que solo los redacta el equipo de pruebas","C) Que alinean negocio, usuario y funcionalidad","D) Que son irrelevantes para el negocio",2);
preguntas[13] = new pregunta("Según Robertson & Robertson, ¿qué es un requerimiento funcional?","A) Una restricción técnica","B) Un atributo de calidad","C) Un fragmento de código","D) Algo que el producto debe hacer para soportar el negocio",3);
preguntas[14] = new pregunta("¿Cuál es la definición canónica de Robertson & Robertson?","A) Los requerimientos funcionales especifican lo que el producto debe hacer","B) Son atributos no negociables","C) Describen solo la interfaz","D) Son restricciones legales",0);
preguntas[15] = new pregunta("Según Contreras & Hernández, ¿cómo se definen los requerimientos funcionales?","A) Como pruebas de aceptación","B) Como componentes reutilizables","C) Como aquello que describe detalladamente lo que el sistema debe hacer","D) Como cláusulas penales",2);
preguntas[16] = new pregunta("¿Qué esquema propone Pressman para clasificar requisitos?","A) A,B,C,D,E","B) P,Q,R,S,T","C) U,V,W,X,Y","D) F,D,C,Z,S",3);
preguntas[17] = new pregunta("¿Cómo define Pressman la calidad del software?","A) Como satisfacción del cliente","B) Como concordancia con requisitos y estándares","C) Como cumplimiento del cronograma","D) Como cantidad de líneas de código",1);
preguntas[18] = new pregunta("Según Sommerville, ¿de qué dependen los requerimientos funcionales?","A) Del estilo del analista","B) Del tipo de software, usuarios y enfoque organizacional","C) Solo de la plataforma","D) Solo del presupuesto",1);
preguntas[19] = new pregunta("¿Cuál es la formulación de Sommerville sobre usuario/sistema?","A) Los del usuario son más detallados","B) Solo aplican al nivel sistema","C) Los del usuario son abstractos y los del sistema específicos","D) El modelo binario fue descartado",2);
preguntas[20] = new pregunta("¿Cómo formulan Celi-Párraga la diferencia entre requerimientos del usuario y del sistema?","A) Los del usuario expresan servicios esperados y los del sistema detallan funciones y restricciones","B) Los del usuario son calidad","C) Los del usuario son verbales","D) Son sinónimos",0);
preguntas[21] = new pregunta("Según Sommerville, ¿qué rango interno tienen los requerimientos funcionales del sistema?","A) Van de generales a muy específicos","B) Son uniformes","C) Siempre más generales","D) Solo aplican a sistemas embebidos",0);
preguntas[22] = new pregunta("¿Cómo reproduce Laplante la estratificación clásica usuario/sistema?","A) Son del mismo nivel","B) Solo aplica a sistemas distribuidos","C) Pueden ser de alto nivel o detallados","D) Los detallados son del usuario",2);
preguntas[23] = new pregunta("¿Qué tres niveles introducen Wiegers & Beatty?","A) Alta, media y baja prioridad","B) Técnica, semitécnica y no técnica","C) Negocio, usuario y funcionales","D) Validación, verificación y aceptación",2);
preguntas[24] = new pregunta("Según Wiegers & Beatty, ¿qué es una feature?","A) Capacidades relacionadas que proveen valor y son descritas por FR","B) Un fragmento de código","C) Un atributo no funcional","D) Un documento legal",0);
preguntas[25] = new pregunta("¿Cómo describen Wiegers & Beatty la diferencia entre requerimientos del usuario y funcionales?","A) Los del usuario son técnicos","B) Los del usuario describen la vista del usuario y los funcionales la del desarrollador","C) Los del usuario son obligatorios","D) Coinciden completamente",1);
preguntas[26] = new pregunta("¿Qué jerarquía no subjetiva proponen Robertson & Robertson?","A) Estratégico, táctico y operacional","B) Cuatro niveles CMMI","C) Cinco niveles hasta requerimiento atómico","D) Jerarquía plana",2);
preguntas[27] = new pregunta("¿Cómo describen Celi-Párraga los requerimientos no funcionales?","A) Como limitaciones sobre servicios o funciones","B) Son opcionales","C) Solo describen la interfaz","D) Se derivan del código fuente",0);
preguntas[28] = new pregunta("¿Qué dice Celi-Párraga sobre los requerimientos no funcionales?","A) Coinciden con los servicios","B) No se relacionan directamente con servicios específicos","C) Solo aplican a la nube","D) Sustituyen a los funcionales",1);
preguntas[29] = new pregunta("¿En qué categorías se subdividen los NFR según Celi-Párraga?","A) Alta, media y baja prioridad","B) Producto, organizacionales y externos","C) Cuantitativos y cualitativos","D) Obligatorios y opcionales",1);
preguntas[30] = new pregunta("¿Qué advertencia da Sommerville sobre la frontera entre FR y NFR?","A) Deben expresarse siempre juntos","B) Separarlos dificulta entender sus relaciones","C) Son independientes","D) Los NFR deben omitirse",1);
preguntas[31] = new pregunta("Según SWEBOK, ¿cómo se relacionan calidad y funcionalidad?","A) Calidad sustituye funcionalidad","B) Son independientes","C) Calidad son atributos o restricciones sobre los funcionales","D) Solo aplican al hardware",2);
preguntas[32] = new pregunta("¿Cómo caracteriza SWEBOK los requerimientos no funcionales?","A) Actúan para restringir la solución","B) Son sinónimos de requerimientos del usuario","C) Solo son legales","D) Solo técnicos y comerciales",0);
preguntas[33] = new pregunta("¿Cómo se asocian los NFR con los funcionales según Laplante?","A) Pueden asociarse a FR específicos","B) Nunca pueden asociarse","C) Siempre uno a uno","D) Son equivalentes",0);
preguntas[34] = new pregunta("¿Qué ejemplo dan Wiegers & Beatty sobre trazabilidad NFR-FR?","A) Seguridad deriva FR como autenticación","B) Rendimiento pasa directo al código","C) Usabilidad nunca genera FR","D) Mantenibilidad sustituye funcionales",0);
preguntas[35] = new pregunta("¿Cuál es la taxonomía de tres tipos que propone Laplante?","A) Técnicos, comerciales y legales","B) Cliente, proveedor y usuario","C) Funcionales, no funcionales y de dominio","D) Obligatorios, deseables y opcionales",2);
preguntas[36] = new pregunta("¿Cómo describe Laplante los requerimientos de dominio?","A) Derivan del dominio de aplicación","B) Derivan del marketing","C) Son una invención hispanoamericana","D) Son sinónimos de NFR",0);
preguntas[37] = new pregunta("¿Cómo formulan Celi-Párraga el principio rector sobre la redacción de requerimientos del usuario?","A) Deben escribirse matemáticamente","B) Deben incluir arquitectura","C) Deben usar jerga técnica","D) Deben ser comprensibles para usuarios no técnicos",3);
preguntas[38] = new pregunta("Según Celi-Párraga, ¿cómo cambian las herramientas a nivel sistema?","A) Usuario usa lenguaje natural y sistema otras notaciones adicionales","B) Solo pseudocódigo","C) Solo inglés técnico","D) Formatos completamente disjuntos",0);
preguntas[39] = new pregunta("¿Cuáles son los lineamientos que recomienda Sommerville?","A) Uso obligatorio de pseudocódigo","B) Formato uniforme, distinguir prioridad, resaltar partes clave, evitar jerga y asociar razones","C) Exclusivamente lenguaje natural","D) Siempre en inglés",1);
preguntas[40] = new pregunta("¿Qué información debe incluir la plantilla de Sommerville?","A) Hora, fecha y lugar","B) Costo y recursos","C) Función, entradas, salidas, requiere, acción, condiciones y efectos","D) Título, autor y fecha",2);
preguntas[41] = new pregunta("Según Robertson & Robertson, ¿cuál es el nivel de detalle revelador?","A) Una única oración con un único verbo","B) Párrafos extensos","C) Solo diagramas UML","D) Sin verbos",0);
preguntas[42] = new pregunta("¿Cuál es la forma canónica recomendada por Robertson & Robertson?","A) Could be considered to","B) It would be nice if","C) The system might possibly","D) The product shall...",3);
preguntas[43] = new pregunta("¿Por qué desaconsejan mezclar modales como shall, must, will, might?","A) Porque el inglés no lo admite","B) Porque genera confusión semántica","C) Porque IEEE lo prohíbe","D) Porque solo aplican a calidad",1);
preguntas[44] = new pregunta("¿Qué exigen Robertson & Robertson sobre el rationale?","A) Que sustituya la descripción","B) Que solo se incluya en baja prioridad","C) Que se añada para mostrar por qué existe el requerimiento","D) Que se redacte en pseudocódigo",2);
preguntas[45] = new pregunta("¿Cuál es el ejemplo concreto de Description + Rationale?","A) The product shall record roads that have been treated","B) El sistema procesará pagos","C) The product manages users","D) Sistema de inventario",0);
preguntas[46] = new pregunta("Según Laplante (IEEE 29148), ¿qué deben capturar los requerimientos funcionales?","A) Todas las entradas, operaciones y respuestas","B) Solo casos de éxito","C) Solo restricciones legales","D) Solo flujos de interfaz",0);
preguntas[47] = new pregunta("¿Qué opciones organizacionales provee IEEE 29148?","A) Modo del sistema, clase de usuario, objeto, característica, estímulo y jerarquía","B) Orden alfabético","C) Prohíbe organización por estímulo","D) Solo por costo y prioridad",0);
preguntas[48] = new pregunta("¿Qué convención ofrecen Wiegers & Beatty para identificar requerimientos?","A) Hash SHA-256","B) Nombre y fecha","C) Prefijos como UC-9 o FR-26","D) Código de barras",2);
preguntas[49] = new pregunta("¿Qué convención sugieren Wiegers & Beatty para requerimientos jerárquicos?","A) Padre e hijos idénticos","B) El padre debe parecer un título o feature","C) No deben usarse","D) El padre debe ser el más detallado",1);
/*
  DATOS DE LOS CURSOS
  ===================
  Aquí defines tus 6 cursos, con 4 módulos cada uno y los videos de tu canal.

  Para agregar un video real:
  1. Ve al video en YouTube, clic en "Compartir" > "Insertar" (Embed).
  2. Copia solo el código que va después de "embed/", por ejemplo:
     https://www.youtube.com/embed/ABC12345XYZ  ->  el id es "ABC12345XYZ"
  3. Reemplaza el "videoId" de abajo por ese id.
  4. El campo "titulo" es el texto que se muestra debajo del video.

  Mientras el videoId empiece con "TU_VIDEO_ID", la página mostrará una
  tarjeta de "video pendiente" en vez de intentar cargar un video real.
*/

const CURSOS = [
  {
    id: "algebra",
    nombre: "Álgebra",
    color: "#5C6690",
    descripcion: "Ecuaciones, expresiones y estructuras algebraicas explicadas paso a paso.",
    modulos: [
      {
        titulo: "Módulo 1 · Expresiones algebraicas",
        videos: [
          { videoId: "TU_VIDEO_ID_1", titulo: "Introducción a las expresiones algebraicas" },
          { videoId: "TU_VIDEO_ID_2", titulo: "Reducción de términos semejantes" },
        ],
      },
      {
        titulo: "Módulo 2 · Ecuaciones lineales",
        videos: [
          { videoId: "TU_VIDEO_ID_3", titulo: "Ecuaciones de primer grado" },
        ],
      },
      {
        titulo: "Módulo 3 · Factorización",
        videos: [
          { videoId: "TU_VIDEO_ID_4", titulo: "Factor común y agrupación" },
        ],
      },
      {
        titulo: "Módulo 4 · Ecuaciones cuadráticas",
        videos: [
          { videoId: "TU_VIDEO_ID_5", titulo: "Fórmula general" },
        ],
      },
    ],
  },
  {
    id: "aritmetica",
    nombre: "Aritmética",
    color: "#4A8577",
    descripcion: "Números, operaciones y razonamiento cuantitativo desde la base.",
    modulos: [
      {
        titulo: "Módulo 1 · Números racionales",
        videos: [
          { videoId: "TU_VIDEO_ID_6", titulo: "Fracciones y decimales" },
        ],
      },
      {
        titulo: "Módulo 2 · Razones y proporciones",
        videos: [
          { videoId: "TU_VIDEO_ID_7", titulo: "Regla de tres simple y compuesta" },
        ],
      },
      {
        titulo: "Módulo 3 · Porcentajes",
        videos: [
          { videoId: "TU_VIDEO_ID_8", titulo: "Aplicaciones de porcentajes" },
        ],
      },
      {
        titulo: "Módulo 4 · Teoría de números",
        videos: [
          { videoId: "TU_VIDEO_ID_9", titulo: "Múltiplos, divisores y MCD/MCM" },
        ],
      },
    ],
  },
  {
    id: "competencia-comunicativa",
    nombre: "Competencia comunicativa",
    color: "#8C5568",
    descripcion: "Comprensión lectora, redacción y análisis de textos.",
    modulos: [
      {
        titulo: "Módulo 1 · Comprensión lectora",
        videos: [
          { videoId: "TU_VIDEO_ID_10", titulo: "Idea principal e idea secundaria" },
        ],
      },
      {
        titulo: "Módulo 2 · Plan de redacción",
        videos: [
          { videoId: "TU_VIDEO_ID_11", titulo: "Cómo ordenar un texto" },
        ],
      },
      {
        titulo: "Módulo 3 · Términos excluidos",
        videos: [
          { videoId: "TU_VIDEO_ID_12", titulo: "Estrategias para resolver" },
        ],
      },
      {
        titulo: "Módulo 4 · Analogías",
        videos: [
          { videoId: "TU_VIDEO_ID_13", titulo: "Tipos de relación semántica" },
        ],
      },
    ],
  },
  {
    id: "fisica",
    nombre: "Física",
    color: "#4F7791",
    descripcion: "Movimiento, fuerzas y energía, con ejercicios resueltos.",
    modulos: [
      {
        titulo: "Módulo 1 · Análisis vectorial",
        videos: [
          { videoId: "TU_VIDEO_ID_14", titulo: "Suma y descomposición de vectores" },
        ],
      },
      {
        titulo: "Módulo 2 · Cinemática",
        videos: [
          { videoId: "TU_VIDEO_ID_15", titulo: "MRU y MRUV" },
        ],
      },
      {
        titulo: "Módulo 3 · Dinámica",
        videos: [
          { videoId: "TU_VIDEO_ID_16", titulo: "Leyes de Newton" },
        ],
      },
      {
        titulo: "Módulo 4 · Energía y trabajo",
        videos: [
          { videoId: "TU_VIDEO_ID_17", titulo: "Trabajo, potencia y energía mecánica" },
        ],
      },
    ],
  },
  {
    id: "quimica",
    nombre: "Química",
    color: "#6B8558",
    descripcion: "Materia, reacciones y estructura atómica explicadas con claridad.",
    modulos: [
      {
        titulo: "Módulo 1 · Estructura atómica",
        videos: [
          { videoId: "TU_VIDEO_ID_18", titulo: "Modelos atómicos" },
        ],
      },
      {
        titulo: "Módulo 2 · Tabla periódica",
        videos: [
          { videoId: "TU_VIDEO_ID_19", titulo: "Propiedades periódicas" },
        ],
      },
      {
        titulo: "Módulo 3 · Enlace químico",
        videos: [
          { videoId: "TU_VIDEO_ID_20", titulo: "Enlace iónico y covalente" },
        ],
      },
      {
        titulo: "Módulo 4 · Reacciones químicas",
        videos: [
          { videoId: "TU_VIDEO_ID_21", titulo: "Balanceo de ecuaciones" },
        ],
      },
    ],
  },
  {
    id: "geometria",
    nombre: "Geometría",
    color: "#A8875A",
    descripcion: "Figuras, áreas y razonamiento espacial paso a paso.",
    modulos: [
      {
        titulo: "Módulo 1 · Ángulos y rectas",
        videos: [
          { videoId: "TU_VIDEO_ID_22", titulo: "Ángulos entre paralelas" },
        ],
      },
      {
        titulo: "Módulo 2 · Triángulos",
        videos: [
          { videoId: "TU_VIDEO_ID_23", titulo: "Propiedades y congruencia" },
        ],
      },
      {
        titulo: "Módulo 3 · Polígonos y áreas",
        videos: [
          { videoId: "TU_VIDEO_ID_24", titulo: "Áreas de figuras planas" },
        ],
      },
      {
        titulo: "Módulo 4 · Geometría del espacio",
        videos: [
          { videoId: "TU_VIDEO_ID_25", titulo: "Sólidos y volúmenes" },
        ],
      },
    ],
  },
];

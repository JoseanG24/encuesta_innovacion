// Definir los tipos de las opciones y preguntas
interface Option {
  value: string;
  label: string;
  score: number; // Puntaje asociado a cada opción
}

interface Question {
  id: number;
  text: string;
  options: Option[];
}

// Preguntas de ejemplo
export const questions: Question[] = [
  {
    id: 1,
    text: "Tenemos un gran deseo de explorar oportunidades y crear nuevos productos/servicios/procesos",
    options: [
      { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
      { value: "1", label: "Muy poco/casi nada", score: 1 },
      { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
      {
        value: "3",
        label: "Ya se comienza a ver/hay indicios reales",
        score: 3,
      },
      { value: "4", label: "Hay mucho/se nota", score: 4 },
      { value: "5", label: "Totalmente/completo/si", score: 5 },
    ],
  },
  {
    id: 2,
    text: "Tenemos un sano apetito y tolerancia por la ambigüedad, que la creemos necesaria cuando se persiguen nuevos desafíos/oportunidades",
    options: [
      { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
      { value: "1", label: "Muy poco/casi nada", score: 1 },
      { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
      {
        value: "3",
        label: "Ya se comienza a ver/hay indicios reales",
        score: 3,
      },
      { value: "4", label: "Hay mucho/se nota", score: 4 },
      { value: "5", label: "Totalmente/completo/si", score: 5 },
    ],
  },
  {
    id: 3,
    text: "Evitamos caer en la trampa de parálisis por análisis por pensar en exceso o generar un sesgo para entrar en acción y generar actividades novedosas",
    options: [
      { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
      { value: "1", label: "Muy poco/casi nada", score: 1 },
      { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
      {
        value: "3",
        label: "Ya se comienza a ver/hay indicios reales",
        score: 3,
      },
      { value: "4", label: "Hay mucho/se nota", score: 4 },
      { value: "5", label: "Totalmente/completo/si", score: 5 },
    ],
  },
  {
    id: 4,
    text: "Animamos a pensar de manera diferente y a solucionar problemas de manera efectiva y considerando diferentes perspectivas",
    options: [
      { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
      { value: "1", label: "Muy poco/casi nada", score: 1 },
      { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
      {
        value: "3",
        label: "Ya se comienza a ver/hay indicios reales",
        score: 3,
      },
      { value: "4", label: "Hay mucho/se nota", score: 4 },
      { value: "5", label: "Totalmente/completo/si", score: 5 },
    ],
  },
  {
    id: 5,
    text: "Nuestro lugar de trabajo nos entrega libertad y anima a buscar nuevas ideas y oportunidades",
    options: [
      { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
      { value: "1", label: "Muy poco/casi nada", score: 1 },
      { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
      {
        value: "3",
        label: "Ya se comienza a ver/hay indicios reales",
        score: 3,
      },
      { value: "4", label: "Hay mucho/se nota", score: 4 },
      { value: "5", label: "Totalmente/completo/si", score: 5 },
    ],
  },

  // {
  //   id: 6,
  //   text: "Nos gusta ser una organización donde nos sentimos comodos siendo espontaneos y riendonos de nosotros mismos",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 7,
  //   text: "Tenemos un gran deseo de explorar oportunidades nuevas y desafiantes",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 8,
  //   text: "Tenemos un sano apetito y tolerancia por la ambigüedad e incertidumbre",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 9,
  //   text: "Evitamos caer en la trampa de la parálisis por análisis",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 10,
  //   text: "Animamos a pensar de manera diferente y a solucionar problemas de manera creativa",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 11,
  //   text: "Nuestro lugar de trabajo nos entrega libertad para tomar decisiones y asumir riesgos",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 12,
  //   text: "Priorizamos la experimentación y el aprendizaje sobre la perfección",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 13,
  //   text: "Nos sentimos responsables de llevar nuevas ideas hasta su implementación",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 14,
  //   text: "Somos perseverantes y resilientes cuando enfrentamos desafíos",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 15,
  //   text: "Promovemos la autonomía y la autoorganización en nuestros equipos",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 16,
  //   text: "Estamos motivados por generar impacto y no solo por cumplir tareas",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 17,
  //   text: "Somos flexibles y adaptativos a cambios en el entorno",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 18,
  //   text: "Tomamos decisiones basadas en datos, pero también en intuición y experiencia",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 19,
  //   text: "Fomentamos la colaboración y el trabajo en equipo para la innovación",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 20,
  //   text: "Nuestra cultura organizacional premia la creatividad y la experimentación",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 21,
  //   text: "Tenemos procesos claros para capturar y desarrollar nuevas ideas",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 22,
  //   text: "Nos sentimos cómodos cuestionando el status quo",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 23,
  //   text: "Tenemos mecanismos para recopilar e interpretar insights de nuestros clientes",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 24,
  //   text: "Escuchamos activamente a los clientes y ajustamos nuestras soluciones en base a sus necesidades",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 25,
  //   text: "Involucramos a los clientes en el proceso de diseño y desarrollo de soluciones",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 26,
  //   text: "Implementamos herramientas tecnológicas para mejorar la innovación",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 27,
  //   text: "Nuestra estructura organizativa facilita la comunicación y el flujo de nuevas ideas",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 28,
  //   text: "Tenemos espacios físicos o virtuales diseñados para la creatividad y colaboración",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 29,
  //   text: "Incentivamos a nuestros colaboradores a desarrollar nuevas habilidades constantemente",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 30,
  //   text: "Dedicamos tiempo y recursos a la formación en innovación y creatividad",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 31,
  //   text: "Fomentamos una mentalidad de aprendizaje continuo en la organización",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 32,
  //   text: "Tenemos métricas claras para evaluar el éxito de nuestras iniciativas innovadoras",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 33,
  //   text: "Aprendemos rápidamente de los fracasos y ajustamos nuestras estrategias",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 34,
  //   text: "Contamos con liderazgo que inspira y motiva a innovar",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 35,
  //   text: "Nuestros líderes apoyan y protegen las iniciativas innovadoras de la empresa",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 36,
  //   text: "La alta dirección está comprometida con la innovación y la transformación",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 37,
  //   text: "Se asignan recursos suficientes para proyectos de innovación",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 38,
  //   text: "Existen incentivos y reconocimientos para quienes impulsan la innovación",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 39,
  //   text: "Manejamos una cultura que tolera el fracaso como parte del aprendizaje",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 40,
  //   text: "Contamos con metodologías ágiles para la gestión de proyectos innovadores",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 41,
  //   text: "Existen equipos interdisciplinarios para la generación de nuevas soluciones",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 42,
  //   text: "La innovación es un pilar estratégico de nuestra organización",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 43,
  //   text: "Nos anticipamos a cambios del mercado y nos preparamos con soluciones innovadoras",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 44,
  //   text: "Monitoreamos constantemente tendencias y tecnologías emergentes",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 45,
  //   text: "Nuestra organización fomenta la colaboración con startups y emprendedores",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 46,
  //   text: "Tenemos alianzas estratégicas con universidades, centros de investigación y expertos",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 47,
  //   text: "Experimentamos con modelos de negocio innovadores",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 48,
  //   text: "Estamos abiertos a explorar nuevas formas de generar ingresos",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 49,
  //   text: "Nos diferenciamos claramente de nuestra competencia a través de la innovación",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 50,
  //   text: "Existen mecanismos para compartir conocimiento y mejores prácticas dentro de la empresa",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 51,
  //   text: "Incentivamos a nuestros empleados a dedicar parte de su tiempo a proyectos innovadores",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 52,
  //   text: "Hay espacios o programas formales para la generación de ideas dentro de la empresa",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 53,
  //   text: "Innovamos no solo en productos y servicios, sino también en procesos y modelos de gestión",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
  // {
  //   id: 54,
  //   text: "Nuestras iniciativas de innovación se alinean con los valores y propósito de la empresa",
  //   options: [
  //     { value: "0", label: "Realmente nada/ninguno/no", score: 0 },
  //     { value: "1", label: "Muy poco/casi nada", score: 1 },
  //     { value: "2", label: "Trabajamos en ello/lo intentamos", score: 2 },
  //     {
  //       value: "3",
  //       label: "Ya se comienza a ver/hay indicios reales",
  //       score: 3,
  //     },
  //     { value: "4", label: "Hay mucho/se nota", score: 4 },
  //     { value: "5", label: "Totalmente/completo/si", score: 5 },
  //   ],
  // },
];

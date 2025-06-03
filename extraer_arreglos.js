// Función principal que recibe como entrada un objeto
function extraerArreglos(obj) {
  const resultado = {}; // Este objeto almacenará todos los arreglos encontrados, con su ruta correspondiente

  // Función auxiliar recursiva que recorre el objeto completo, sin importar la profundidad
  function buscarArreglos(actual, ruta) {
    // Iteramos sobre cada clave del objeto actual
    for (let clave in actual) {
      const valor = actual[clave];

      // Construimos una nueva ruta concatenando claves separadas por ":"
      // Ejemplo: usuario:perfil:redes:activas
      const nuevaRuta = ruta ? `${ruta}:${clave}` : clave;

      // Si encontramos un arreglo, lo almacenamos en el objeto resultado usando la ruta construida como clave
      if (Array.isArray(valor)) {
        resultado[nuevaRuta] = valor;
      
      // Si encontramos otro objeto (que no sea null), continuamos recorriendo en profundidad
      } else if (typeof valor === 'object' && valor !== null) {
        buscarArreglos(valor, nuevaRuta); // Llamada recursiva
      }

      // Si el valor es un tipo primitivo (string, number, boolean), lo ignoramos
    }
  }

  // Llamamos a la función recursiva por primera vez, con el objeto original y ruta vacía
  buscarArreglos(obj, '');

  // Retornamos el objeto resultado que contiene todas las rutas a los arreglos encontrados
  return resultado;
}

// 🧪 PRUEBA DE FUNCIONAMIENTO
// Este objeto contiene arreglos en distintos niveles de anidación
const data = {
  usuario: {
    nombre: "Ana",
    gustos: ["arte", "música"], // arreglo a nivel 2
    perfil: {
      redes: {
        activas: ["twitter", "github"] // arreglo a nivel 4
      }
    }
  },
  edad: 25 // valor primitivo, se ignora
};

// Imprimimos el resultado de extraer los arreglos
console.log(extraerArreglos(data));

/*
✅ Salida esperada:
{
  'usuario:gustos': [ 'arte', 'música' ],
  'usuario:perfil:redes:activas': [ 'twitter', 'github' ]
}
*/

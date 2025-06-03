function extraerArreglos(obj) {
  const resultado = {};

  function buscarArreglos(actual, ruta) {
    for (let clave in actual) {
      const valor = actual[clave];
      const nuevaRuta = ruta ? `${ruta}:${clave}` : clave;

      if (Array.isArray(valor)) {
        resultado[nuevaRuta] = valor;
      } else if (typeof valor === 'object' && valor !== null) {
        buscarArreglos(valor, nuevaRuta);
      }
    }
  }

  buscarArreglos(obj, '');
  return resultado;
}

// Prueba
const data = {
  usuario: {
    nombre: "Ana",
    gustos: ["arte", "música"],
    perfil: {
      redes: {
        activas: ["twitter", "github"]
      }
    }
  },
  edad: 25
};

console.log(extraerArreglos(data));

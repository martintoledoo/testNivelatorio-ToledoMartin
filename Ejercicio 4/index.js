let input = [
    {nombre: "Pedro", edad: 20, ciudad: "Córdoba" },
    {nombre: "Patricia", edad: 22, ciudad: "Córdoba" },
    {nombre: "José", edad: 23, ciudad: "Mendoza" },
    {nombre: "María", edad: 20, ciudad: "Córdoba" },
    {nombre: "Juan", edad: 20, ciudad: "Córdoba" },
    {nombre: "Ana", edad: 22, ciudad: "Córdoba" }
];

function obtenerNombres(arrayDatos) {

    let resultado = [];

    arrayDatos = arrayDatos.filter((persona) => persona.ciudad == "Córdoba");

    arrayDatos.sort( (a, b) => {
        if (a.edad > b.edad) {
            return 1;
        }

        if (a.edad < b.edad) {
            return -1;
        }

        if (a.nombre > b.nombre) {
            return 1;
        }
        
        if (a.nombre < b.nombre) {
            return -1;
        }

        return 0;
    });

    arrayDatos.forEach(persona => {
        resultado.push(persona.nombre)
    });

    return resultado;
}

let resultado = obtenerNombres(input);
console.log(resultado);
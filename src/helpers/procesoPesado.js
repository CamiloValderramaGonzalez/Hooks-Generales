export const procesoPesado = (iteraciones) => {
    for (let i = 0; i < iteraciones; i++) {
        console.log(`iternacion numero: ${iteraciones}`);
    }
    return `${iteraciones} iteraciones realizadas`;
};
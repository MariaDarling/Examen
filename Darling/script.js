
function calcularPromedio() {
    const parcial1 = parseFloat(document.getElementById('parcial1').value);
    const parcial2 = parseFloat(document.getElementById('parcial2').value);
    const final = parseFloat(document.getElementById('final').value);

    // Validar que las calificaciones están en el rango correcto
    if (isNaN(parcial1) || isNaN(parcial2) || isNaN(final) ||
        parcial1 < 0 || parcial1 > 10 ||
        parcial2 < 0 || parcial2 > 10 ||
        final < 0 || final > 10) {
        alert('Por favor, ingrese calificaciones válidas entre 1 y 10.');
        return;
    }

    // Calcular el promedio ponderado
    const promedio = (parcial1 * 0.3) + (parcial2 * 0.3) + (final * 0.4);
    const estado = promedio >= 6 ? 'Aprobatorio' : 'Reprobatorio';

    // Mostrar resultado
    document.getElementById('resultado').innerText = `Promedio: ${promedio.toFixed(2)} / Estado: ${estado}`;
}
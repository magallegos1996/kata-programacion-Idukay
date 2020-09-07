let pociones = [];
export const generarAtaques = (datos) => {
    pociones = datos
    console.log(datos);
    let totalPociones = calcularTotalPociones();
    let totalAtaque = 0;
    while(totalPociones !== 0){
        const ataque = formarAtaques(pociones)
        const efectividad = obtenerEfectividadAtaque(ataque.length);
        totalAtaque = totalAtaque + efectividad;
        mostrarAtaque(ataque, efectividad);
        totalPociones = calcularTotalPociones();
    }
    console.log(`EFECTIVIDAD TOTAL: ${totalAtaque}%`);
    return totalAtaque;
}
function formarAtaques () {
    const pocionesValidas = pociones.filter(pocion => pocion.numero !== 0);
    return configurarAtaque(pocionesValidas);
}
function calcularTotalPociones () {
    return pociones.reduce((a, b) => a + (b.numero || 0), 0);
}
function obtenerEfectividadAtaque (ataque){
    switch (ataque) {
        case 5:
            return 25;
            break;
        case 4:
            return 20;
            break;
        case 3:
            return 10;
            break;
        case 2:
            return 5;
            break;
        case 1:
            return 3;
            break;
        default:
            return 0;
            break

    }
}
function mostrarAtaque(ataque, efectividad) {
    console.log(`[${ataque}] ======== EFECTIVIDAD: ${efectividad}%`);
}
function configurarAtaque(pocionesValidas) {
    const ataque = [];
    if (pocionesValidas.length === 2 && JSON.stringify(pocionesValidas[0]) !== JSON.stringify(pocionesValidas[1])){
        ataque.push(pocionesValidas[0].color)
        if (pociones.includes(pocionesValidas[0])) {
            pocionesValidas[0].numero = pocionesValidas[0].numero - 1;
        }
    } else {
        pocionesValidas.forEach(pocion => {
            ataque.push(pocion.color);
            if (pociones.includes(pocion)) {
                pocion.numero = pocion.numero - 1;
            }
        });
    }
    return ataque;
}


/***
 * Esta función retorna el valor numerico de la carta dada por deck
 * @param {String} carta Eejemplo: [''7C','2D','4H','5S','AC']
 * @returns {Number} retorna el valor numerico de la carta recibida 
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
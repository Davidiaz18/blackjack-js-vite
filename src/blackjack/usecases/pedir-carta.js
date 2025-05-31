/***
 * Esta función pide una carta
 * @param {Array<String>} deck Eejemplo: ['7C','2D','4H','5S','AC','JD','QH','KS']
 * @returns String} retorna una carte del deck en string
 */

export const pedirCarta = (deck) => {
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
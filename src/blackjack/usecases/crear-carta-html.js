/***
 * Esta función crea la imagen de la carta en pantalla
 * @param {String} carta Eejemplo: [''7C','2D','4H','5S','AC']
 * @returns {HTMLImageElement} retorna la el elemento HTML de la para crear la imagen de la carta  
 */
export const crearCarta = (carta) => {
     // <img class="carta" src="assets/cartas/2C.png">
        if(!carta)throw new Error('La carta es un elemento obligatorio')
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        return imgCarta;
        
}
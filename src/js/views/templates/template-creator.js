const createItemTemplate = ({name, imgUrl}) => {

  return `<img id="pokeCard" src="${imgUrl}" dataId="${name}"><p id="pokeCard" dataId="${name}">${name}</p>`
  ;
  
}

const createModalPokemonStatsDetail = ({title, bodyStats}) => `
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="pokemonModalLabel">${title}</h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">${bodyStats}</div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
      </div>
    </div>
  </div>
`;

const createBodyStats = () => {
  
}

const bgColorCardConverter = ({type}) => {
  const colorType = {
    fire: '#ee8130',
    grass: '#7ac74c',
    electric: '#f7d02c',
    water: '#6390f0',
    ground: '#e2bf65',
    rock: '#b6a136',
    fairy: '#d685ad',
    poison: '#a33ea1',
    bug: '#a6b91a',
    dragon: '#6f35fc',
    psychic: '#f95587',
    flying: '#a98ff3',
    fighting: '#c22e28',
    normal: '#a8a77a',
    ice: '#96d9d6',
    ghost: '#735797',
    dark: '#705746',
    steel: '#b7b7ce',
  };

  return colorType[type]
} 
export { createItemTemplate, bgColorCardConverter, createModalPokemonStatsDetail }
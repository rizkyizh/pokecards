const createItemTemplate = ({name, imgUrl}) => {

  return `<img id="pokeCard" src="${imgUrl}" dataId="${name}"><p id="pokeCard" dataId="${name}">${name}</p>`
  ;
  
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

const createModalPokemonStatsDetail = ({title, bodyStats}) => `
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="pokemonModalLabel">DETAIL ${title.toUpperCase()}</h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body ">${bodyStats}</div>
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

const createBodyStats = ({
  sprites:{
    front_default: fontImg,
    back_default: backImg,
    other: {
      dream_world: { front_default: img },  
    },
  },
  name,
  types,
  stats,
}) => {
  const [type1, type2] = types.map(({ type })=> type.name)
  const [hp, atk, def, spAtk, spDef, speed] = stats.map(({base_stat}) => base_stat)
  
  
return `
<div class="container">
<div class="row">
  <div class="col-5 text-center" border-primary>
    <img
      src="${img}" style="width: 150px;"
    />
    <h2 class="mt-2">${ name }</h2>
    <div class="col-12 text-center">
      <div class="container text-center">
      <div class="row align-items-start border border-start rounded">
        <div class="col">
        <img src="${fontImg}" style="width: 100px;"/>
        </div>
        <div class="col">
        <img src="${backImg}" style="width: 100px;"/>
        </div>
      </div>
      <div class="row align-items-start mt-2">
        <div class="col">
        <span class="badge px-4 rounded" style="background-color: ${ bgColorCardConverter({type: type1}) };">${ type1 }</span>
        </div>
        <div class="col">
        ${
           (type2 !== undefined) ?
            `<span class="badge px-4 rounded" style="background-color: ${ bgColorCardConverter({type: type2}) };">${ type2 }</span>` : ""
        }
        </div>
      </div>
    </div>
    </div>
  </div>
  <div class="col-7 border border-start rounded">
    <div class="col-7 mt-2"><p>Stats</p></div>
    <div class="d-flex flex-column mb-3">
      <div class="p-2 border ">
          <div class="container text-center">
          <div class="row">
            <div class="col-4 text-start" style="font-size: 12px;">
              Hp :
            </div>
            <div class="col">
              <div
              class="progress"
              style="height: 25px"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar bg-success px-2" style="width: ${ 2 * hp }px">
                ${ hp }
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-2 border ">
          <div class="container text-center">
          <div class="row">
            <div class="col-4 text-start" style="font-size: 12px;">
              Attack :
            </div>
            <div class="col">
              <div
              class="progress"
              style="height: 25px"
              role="progressbar"
              aria-label="warning example"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar bg-warning px-2" style="width: ${ 2 * atk }px">
                ${ atk }
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-2 border ">
          <div class="container text-center">
          <div class="row">
            <div class="col-4 text-start" style="font-size: 12px;">
              Defence :
            </div>
            <div class="col">
              <div
              class="progress"
              style="height: 25px"
              role="progressbar"
              aria-label="danger example"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar bg-danger px-2" style="width: ${ 2 * def }px">
                ${ def }
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-2 border ">
          <div class="container text-center">
          <div class="row">
            <div class="col-4 text-start" style="font-size: 12px;">
              Special-Attack :
            </div>
            <div class="col">
              <div
              class="progress"
              style="height: 25px"
              role="progressbar"
              aria-label="primary example"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar bg-primary px-2" style="width: ${ 2 * spAtk }px">
                ${ spAtk }
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-2 border ">
        <div class="container text-center">
        <div class="row">
          <div class="col-4 text-start" style="font-size: 14px;">
            Special-Defence :
          </div>
          <div class="col">
            <div
            class="progress"
            style="height: 25px"
            role="progressbar"
            aria-label="secondary example"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar bg-secondary px-2" style="width: ${ 2 * spDef }px">
              ${ spDef }
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
      <div class="p-2 border ">
          <div class="container text-center">
          <div class="row">
            <div class="col-4 text-start" style="font-size: 14px;">
              Speed :
            </div>
            <div class="col">
              <div
              class="progress"
              style="height: 25px"
              role="progressbar"
              aria-label="info example"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar bg-info px-2" style="width: ${ 2 * speed }px">
                ${ speed }
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  `
}

export { createItemTemplate, bgColorCardConverter, createModalPokemonStatsDetail, createBodyStats }
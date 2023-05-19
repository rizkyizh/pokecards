import PokeApi  from "../../networks/poke-api";
import { createItemTemplate,bgColorCardConverter, createModalPokemonStatsDetail, createBodyStats } from "../templates/template-creator";
import * as bootstrap from 'bootstrap';

const Dasboard = {
  async render() {
    return `
      <div class="content">
        <h1 class="bg-warning p-2 text-center rounded-top-2 fs-3 bold">Daftar Pokemon</h1>
        <div id="pokeList" class="d-flex align-content-start flex-wrap"></div>
        <div class="bg-warning p-2 mt-2 text-center fs-3 bold">
            <button id="btn-previous" type="button" class="btn w-10 btn-secondary btn-sm">Previous</button>
            <button id="btn-next" type="button" class="btn w-10 btn-secondary btn-sm">Next</button>
        </div>
      </div>`
  },

  async afterRender(){
    console.log('dasboard page');

    this._initialData();
  },

  async _initialData(){
    const pokeListEl = document.querySelector('#pokeList')

    const btnNext = document.getElementById('btn-next')
    const btnPrevious = document.getElementById('btn-previous')
    let offset = 0;
    btnNext.addEventListener('click', async () => {
      if (offset >= 0) {
        offset += 20;
        const datas = await PokeApi.getNextAll(offset);
        this._populatePokemonList(pokeListEl, datas);
      }
    })
    btnPrevious.addEventListener('click', async () => {
      if (offset >= 0 && offset > 19) {
        offset -= 20;
        const datas = await PokeApi.getNextAll(offset);
        this._populatePokemonList(pokeListEl, datas);
      }
    })
    
    const datas = await PokeApi.getNextAll(0);
    this._populatePokemonList(pokeListEl, datas);
      this._afterPopulatePokemonList(pokeListEl)
    //get poke list
  },

  _populatePokemonList(containerEl, pokes){
    containerEl.innerHTML = '';
    //populate cards list
    pokes.results.forEach( async (item) => {
      const data = await PokeApi.getPokeByName(item.name);
      const imgRaw = data.sprites["front_default"]
      const colorType = bgColorCardConverter({ type: data.types[0].type.name }) 
      
      containerEl.innerHTML += `
      <div id="pokeCard" class="text-center flex-fill m-1" style="background-color: ${colorType}" dataId="${item.name}">
      ${createItemTemplate({
        name: item.name,
        imgUrl: imgRaw
      })}</div>`
      
    });
  },


  _afterPopulatePokemonList(containerEl){

    // Add event listener using event delegation
    containerEl.addEventListener('click', async (event) => {
      if (event.target.id === 'pokeCard') {
        // Element with id "pokeCard" is clicked
        const pokeCardId = event.target.attributes.dataId.value;
        const datas = await PokeApi.getPokeByName(pokeCardId)
        
        // modal element
        document.getElementById('pokemonModal')
        .innerHTML = createModalPokemonStatsDetail({title: pokeCardId, bodyStats: createBodyStats(datas)})
        const myModalAlternative = new bootstrap.Modal(document.getElementById('pokemonModal'));
        myModalAlternative.show()
      }
    });
  },

  async _NextAndPreviousData(offset){
    const datas = await PokeApi.getNextAll(offset);
    const pokeListEl = document.querySelector('#pokeList')
    this._populatePokemonList(pokeListEl, datas);
    this._afterPopulatePokemonList(pokeListEl)
  },


}

export default Dasboard;
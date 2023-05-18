import API_ENDPOINT from "../globals/api-endpoint";

class PokeApi {
   static async getNextAll(offset){
      const response = await fetch(API_ENDPOINT.GET_NEXT_ALL_POKE(offset))
      return await response.json()
   }

   static async getPokeByName(name){
    const response = await fetch(API_ENDPOINT.GET_POKE_BY_NAME(name))
    return await response.json()
   }
}

export default PokeApi;
import CONFIG from "./config";

const API_ENDPOINT = {
  GET_NEXT_ALL_POKE:(offset) =>`${CONFIG.ENDPOINT}/?offset=${offset}&limit=20`,
  GET_POKE_BY_NAME: (name) => `${CONFIG.ENDPOINT}/${name}`
}

export default API_ENDPOINT;  
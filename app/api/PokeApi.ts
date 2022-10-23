import Axios from "axios";

Axios.defaults.baseURL = `https://pokeapi.co/api/v2/`;

export type Pokemon ={
    id: number,
    name: string,
    sprites: {front_default: string}
};

export type PokemonColor ={
    id: number,
    name: string,
};

export type Characteristic ={
    id: number,
    description: {
        description: string;
        language: {name: string};
        }[]
};

    const getPokemon = async (pokemon: number | string) => {
    try {
        const response = await Axios.get<Pokemon>("pokemon/" + pokemon)
        return response.data;
    } catch (error) {
        throw"Feil med å hente pokemon " + error;
    }
}

const getPokemonColor = async (pokemon: number | string) => {
    try {
        const response = await Axios.get<PokemonColor>(`pokemon-color/` + pokemon)
        return response.data;
    } catch (error) {
        throw"Feil med å hente pokemon " + error;
    }
}



const getCharacteristic = async (pokemonId: number) => {
    try {
        const response = await Axios.get<Characteristic>(`characteristic/${pokemonId}`)
        return response.data;
    } catch (error) {
        throw"Feil med å hente pokemon " + error;
    }
}





export default {
    getPokemon,
    getPokemonColor,
    getCharacteristic,
}
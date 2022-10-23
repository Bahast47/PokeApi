import React, {useEffect} from "react";
import { Dimensions, Image, View } from "react-native";
import colors from "../config/colors";
import PokeApi, {Pokemon, PokemonColor} from "../api/PokeApi";
import useApi from "../hooks/useApi";

type Props = { pokemon: Pokemon };

export default function Sprite({ pokemon }: Props) {
    const {data, request} = useApi<PokemonColor>(PokeApi.getPokemonColor);

    useEffect(() => {
        request(pokemon.id);

    }, [pokemon]);

    const width = Dimensions.get("window").width / 2;

  return (
    <View
      style={{
        width,
        height: width,
        borderColor: data?.name ?? colors.gray,
        borderWidth: 2,
        borderRadius: width,
        marginBottom: 8,
        overflow: "hidden"
      }}
    >
      <Image
        source={{
          uri: pokemon.sprites.front_default,
          width: 200,
          height: 200,
        }}
      />
    </View>
  );
}

import React, {Fragment, useEffect, useState} from "react";
import {SafeAreaView, StyleSheet, Text, View, Button, ActivityIndicator} from "react-native";

import PokemonCharacteristic from "../components/PokemonCharacteristic";
import Sprite from "../components/Sprite";
import colors from "../config/colors";
import PokeApi, {Pokemon} from "../api/PokeApi";
import useApi from "../hooks/useApi";

type Props = { pokemon: Pokemon };

export default function PokemonContainer({ pokemon }: Props) {
  return (
            <>
          <Text style={[styles.text, styles.pokemonId]}>{pokemon.id}</Text>
          <Sprite pokemon={pokemon} />
          <Text style={[styles.text, styles.pokemonName]}>{pokemon.name}</Text>
          <PokemonCharacteristic pokemon={pokemon} />
            </>
        );
}


const styles = StyleSheet.create({
  text: { color: colors.gray },
  pokemonId: { marginBottom: 20 },
  pokemonName: { fontSize: 24, textTransform: "capitalize", marginBottom: 8 },
});

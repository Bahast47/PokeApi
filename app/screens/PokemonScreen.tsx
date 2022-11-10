import React, {Fragment, useEffect, useState} from "react";
import {SafeAreaView, StyleSheet, Text, View, Button, ActivityIndicator} from "react-native";

import colors from "../config/colors";
import PokeApi, {Pokemon} from "../api/PokeApi";
import useApi from "../hooks/useApi";
import PokemonContainer from "../components/PokemonContainer";

type Props = { pokemonId: number };

export default function PokemonScreen({ pokemonId }: Props) {
  const {
    data: pokemon, loading, error, request: getPokemon} = useApi<Pokemon>(PokeApi.getPokemon)

  useEffect(() => {
    getPokemon(pokemonId);
  }, [pokemonId])


  return (
    <SafeAreaView>
      <View style={styles.container}>
    <ActivityIndicator animating={loading} size="large"/>
        {error && (
            <>
            <Text> Whopps, dette gikk ikke så bra</Text>
            <Button title="Prøv igjen" onPress={() => getPokemon(pokemonId)}/>
            </>
        )}{!error && !loading && !!pokemon && <PokemonContainer pokemon={pokemon}/>}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center" },
  text: { color: colors.gray },
  pokemonId: { marginBottom: 20 },
  pokemonName: { fontSize: 24, textTransform: "capitalize", marginBottom: 8 },
});

import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "../config/colors";

type Props = { pokemon: unknown };

export default function PokemonCharacteristic({ pokemon }: Props) {
  return (
    <Text style={styles.pokemonCharacteristic}>
      {`Hva er greia til ${pokemon ?? "unknown"}? <= Insert here`}
    </Text>
  );
}

const styles = StyleSheet.create({
  pokemonCharacteristic: { color: colors.gray, fontSize: 16 },
});

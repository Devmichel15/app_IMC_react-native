import { StyleSheet, Text, TextInput, View } from "react-native";
import { Input } from "./Input";
import { Button } from "./Button";
import { Calculate } from "../services/Calculate";
import { useState } from "react";
import { Result } from "./Result";

export const Main = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    setResult(Calculate({ height, weight }));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.p}>Vamos Calcular o Seu I.M.C</Text>
      <Input 
      onChangeText={(value) => setHeight(value)}
      placeholder="digite sua altura: " />
      <Input 
      onChangeText={(value) => setWeight(value)}
      placeholder="digite seu peso: " />
      <Button name="Calcular" onPress={handleSubmit} />
      <Result value={result} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ccc",
    display: "flex",
    flexDirection: "column",
    padding: 20,
    width: "100%",
    height: 600,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  p: {
    fontSize: 20,
    textAlign: "center",
  },
});

import { Text } from "react-native";
import { View } from "react-native";

export const Calculate = ({ height, weight }) => {
  const imc = weight / (height * height);
  if(!imc) return "Preencha os campos corretamente"
  return imc.toFixed(2)
};

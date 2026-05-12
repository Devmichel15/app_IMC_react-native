import { StyleSheet, Text } from "react-native";
import Modal from "react-native-modal";
import { Button } from "./Button";

export const CustomModal = ({visible, close, value}) => {
  const verifyValue = () => {
    if(value < 18.5) return "Abaixo do peso"
    if(value >= 18.5 && value < 25) return "Peso normal"
    if(value >= 25 && value < 30) return "Sobrepeso"
    if(value >= 30 && value < 35) return "Obesidade grau 1"
    if(value >= 35 && value < 40) return "Obesidade grau 2"
    if(value >= 40) return "Obesidade grau 3"
  }

  return (
    <Modal
      isVisible={visible}
      style={styles.container}
    >
      <Text style={styles.text}>{verifyValue()}</Text>
      <Button name="Fechar" onPress={close} />
      
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    width: 300,
    alignItems: "center",
    borderRadius: 10,
    borderColor: "red",
    borderWidth: 1,
    alignSelf: "center",
    maxHeight: 200,
    padding: 12
  },
  text: {
    fontSize: 20,
    
  }
});

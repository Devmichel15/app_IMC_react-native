import { StyleSheet, Text } from "react-native";
import Modal from "react-native-modal";

export const Modal = () => {
  return (
    <Modal
      isVisible={true}
      style={{ width: 300, backgroundColor: "white", height: 200 }}
      onBackButtonPress={visible}
    >
      <Text>Resultado</Text>
      
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
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "red",
    borderWidth: 1,
  },
});

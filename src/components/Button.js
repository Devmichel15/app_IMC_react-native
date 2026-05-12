import { StyleSheet, TouchableOpacity, Text } from "react-native"


export const Button = ({name, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>{name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
        alignSelf: 'center',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        width: '100%',
    }
})
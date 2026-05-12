import { StyleSheet, TextInput } from "react-native"


export const Input = ({placeholder, onChangeText}) => {
  return (
    <TextInput style={styles.input} placeholder={placeholder} onChangeText={onChangeText} keyboardType="numeric"/>
  )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 20,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 10,
    }
})
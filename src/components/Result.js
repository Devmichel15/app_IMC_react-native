import { StyleSheet, Text, View } from "react-native"
import { Calculate } from "../services/Calculate"

export const Result = ({value}) => {
  

  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            Resultado: {value}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        marginTop: 20,
        padding: 20,
        borderRadius: 10,
        borderColor: 'red',
        borderWidth: 1,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: 'red',
        textAlign: 'center',
    }
})

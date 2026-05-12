import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Title} from "./src/components/Title"
import { Main } from './src/components/Main';


export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <View>
        <Main/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    paddingTop: 50,
    gap: 20,
    height: '100%',
  },
});

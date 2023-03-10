import { StyleSheet, Text, View } from 'react-native';
import RecipeFinder from './components/RecipeFinder';

export default function App() {
  return (
    <View style={styles.container}>
      <RecipeFinder/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

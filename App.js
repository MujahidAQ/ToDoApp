import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { COLORS } from './src/constants/colors';
import Dashboard from './src/screens/Dashboard/Dashboard';

const App = () => {

  return (
    <View style={styles.mainWrapper} >
      <Dashboard/>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
  }
});

export default App;

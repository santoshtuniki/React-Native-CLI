/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';

const styles = {
  Header: {fontSize: 30},
  Para: {fontSize: 20},
};

function App(): JSX.Element {
  return (
    <View>
      <Text style={styles.Header}>Hello React Native</Text>
      <Text style={styles.Para}>Like</Text>
      <Text style={styles.Para}>Share</Text>
      <Text style={styles.Para}>Subscribe</Text>
    </View>
  );
}

export default App;

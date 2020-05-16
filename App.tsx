import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Updates from 'expo-updates';

async function maybeUpdate() {
  let result = await Updates.checkForUpdateAsync();
  if (result.isAvailable) {
    alert('Update is available!');
  } else {
    alert('Checked for update, none available');
  }
}

export default function App() {
  useEffect(() => {
    maybeUpdate();
  }, [])

  return (
    <View style={styles.container}>
      <Text>Hello there! Nothing to see in the views here.</Text>
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

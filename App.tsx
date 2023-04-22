import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from "./components/Tabs";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </View>
    </SafeAreaProvider>

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

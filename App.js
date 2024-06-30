import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./src/navigation/HomeNavigator";
import { AppProvider } from "./src/context/AppContext";
import { registerRootComponent } from 'expo';

const App = () => {
  return (
    <AppProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <HomeNavigator />
        </NavigationContainer>
      </View>
    </AppProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff3f5",
  },
});

export default App;

// Register the main component with Expo
registerRootComponent(App);

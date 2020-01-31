import React, { FunctionComponent, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Nav from './Nav'

export type ScreensName = "PAD" | "KEY"

const App: FunctionComponent<{}> = () => {
  const [isConnected, setIsConnected] = useState(true) //TODO set false when ready
  const [currentScreen, setCurrentScreen] = useState<ScreensName>('PAD')

  if (!isConnected) {
    return <View>
      <Text>Not connected :/</Text>
    </View>
  }
  return (
    <>
      <SafeAreaView>
        <Nav
          currentScreen={currentScreen}
          setCurrentScreen={setCurrentScreen}
        />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text>{currentScreen}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
});

export default App;

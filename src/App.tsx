import React, { FunctionComponent, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import io from 'socket.io-client';

import Nav from './Nav'
import Trackpad from './Trackpad/Trackpad';
import Keyboard from './Keyboard/Keyboard';

export type ScreensName = "PAD" | "KEY"

const App: FunctionComponent<{}> = () => {
  const [isConnected, setIsConnected] = useState(true) //TODO set false when ready
  const [currentScreen, setCurrentScreen] = useState<ScreensName>('PAD')
  const socket = io('http://localhost:3333');
  console.log(socket)
  socket.on('connect', function () { console.log('connected') });
  if (!isConnected) {
    return <View>
      <Text>Not connected :/</Text>
    </View>
  }
  return (
    <>
      <SafeAreaView>
        {currentScreen === "PAD" && <Trackpad socket={socket} />}
        {/* {currentScreen === "KEY" && <Keyboard socket={socket} />} */}
        <Nav
          currentScreen={currentScreen}
          setCurrentScreen={setCurrentScreen}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
});

export default App;

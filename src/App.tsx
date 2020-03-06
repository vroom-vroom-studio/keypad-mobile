import React, { FunctionComponent, useState, useContext, Context } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import io from 'socket.io-client';

import Nav, { NavStore, NavState } from './Nav'
import Trackpad from './Trackpad/Trackpad';
import Keyboard from './Keyboard/Keyboard';
import Settings from './Settings/Settings';

export interface IGlobalContext {
  nav: NavState
}

const App: FunctionComponent<{}> = (props) => {
  const socket = io("http://192.168.1.86:3000/", { transports: ['websocket'] });
  const [isConnected, setIsConnected] = useState(true) //TODO set false when ready

  socket.on('connect', function () { console.log('connected') });
  if (!isConnected) {
    return <View>
      <Text>Not connected :/</Text>
    </View>
  }
  console.log(props)
  return (
    <SafeAreaView>
      <Nav />
      <Trackpad socket={socket} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default App;

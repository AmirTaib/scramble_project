/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
//import Main from "./src/components/Main/Main";
import { Header } from 'react-native-elements';


export default class App extends Component {
  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Password Scramble', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }} 
          />
        {/* <Main /> */}
      </View>
    );
  }
}



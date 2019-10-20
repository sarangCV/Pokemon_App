import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import Landing from './screens/landing';
import Search from './screens/search';
import Pikachu from './screens/pikachu';
import Charmander from './screens/charmander';
import Beedrill from './screens/beedrill';
import Blastoise from './screens/blastoise';
import Bulbasaur from './screens/bulbasaur';
import Butterfree from './screens/butterfree';
import Caterpie from './screens/caterpie';
import Charizard from './screens/charizard';
import Charmeleon from './screens/charmeleon';
import Ekans from './screens/ekans';
import Fearow from './screens/fearow';
import Ivysaur from './screens/ivysaur';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const RootStack = createStackNavigator(
  {
    Landing: Landing,
    Search: Search,
    Pikachu: Pikachu,
    Charmander: Charmander,
    Beedrill: Beedrill,
    Blastoise: Blastoise,
    Bulbasaur: Bulbasaur,
    Butterfree: Butterfree,
    Caterpie: Caterpie,
    Charizard: Charizard,
    Charmeleon: Charmeleon,
    Ekans: Ekans,
    Fearow: Fearow,
    Ivysaur: Ivysaur

    
    
  },
  {
    initialRouteName: 'Landing',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return(
    
       <AppContainer />

    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

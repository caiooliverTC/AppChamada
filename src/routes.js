import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

// importação das paginas 
import Início from './pages/Início';
import Turmas from './pages/Turmas';
import Cadastros from './pages/Cadastros';
import Geral from './pages/Geral';

Icon.loadFont();

// Constante e estilização Barra de menu
const mainNavigation = createMaterialBottomTabNavigator(
  {
    Início: {
      screen: Início,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="home" size={20} color={focused ? '#fff' : '#ddd'} />
        ),
      }),
    },
    Turmas: {
      screen: Turmas,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="book" size={20} color={focused ? '#fff' : '#ddd'} />
        ),
      }),
    },
    Cadastros: {
      screen: Cadastros,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="users" size={20} color={focused ? '#fff' : '#ddd'} />
        ),
      }),
    },
    Geral: {
      screen: Geral,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="bars" size={20} color={focused ? '#fff' : '#ddd'} />
        ),
      }),
    },
  },
  {
    barStyle: {
      backgroundColor: '#7159c1',
    },
  },
);

export default createAppContainer(mainNavigation);


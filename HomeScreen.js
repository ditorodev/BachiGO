import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import commonStyles from './App.styles.js';
import Logo from './Logo.js';


class HomeScreen extends React.Component {
    render() {
      return (
        <View style={commonStyles.header}>
          <Logo />
          <Text> Home Screen </Text> 
        </View>
      );
    }
  }

  export default HomeScreen;
  
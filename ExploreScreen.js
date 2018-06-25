import React from 'react';
import { ScrollView ,StyleSheet, Text, View, Image } from 'react-native';

import commonStyles from './App.styles.js';
import Logo from './Logo.js';
import Ionicons from '@expo/vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';


let ExploreSection = (props) => {
  let {name, children} = props;
  
  return (
    <View style={{
      flex: 1, 
      flexDirection: 'column',
      alignItems: 'flex-start',
      margin: 50
    }}>
        <Text style={{
          fontSize: 40,
          marginBottom: 20
        }}>{name}</Text>
        <View style={{
          backgroundColor: '#0003',
          width: '80%',
          height: 2,
          marginBottom: 30
        }}/>
        {children}
    </View>
  );
};

let ExploreCard = (props) => {
  let {
    name,
    icon,
    grado,
    color
  } = props;


  return (
    <View style={{
        width: '100%',
        height: 200,
        // borderColor:'#0003',
        borderRadius: 10,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: color
    }}
    >
    
      <Ionicons name={icon} size={210} color='#FFF4' 
      style={{
        position: 'absolute',
        top: 10,
        left:-20
      }}/>
      <Text style={{
        fontSize: 46,
        fontWeight: 'bold',
        marginRight: '10%',
        marginTop: '10%',
        textAlign: 'right',
        color: '#FFF'
      }}>
        {name}
      </Text>
      <Text style={{
        fontSize: 32,
        marginRight: '10%',
        textAlign: 'right',
        color: '#FFF6'
      }}>
        {grado + ' Grado'}
      </Text>
    </View>

  );

};

class ExploreScreen extends React.Component {
    render() {
      return (
        <View style={commonStyles.contentWrapper}>
          <View style={commonStyles.header}>
            <Logo/> 
          </View>
          <ScrollView>
            <ExploreSection name="Juegos">
              {/* <Text> Juego 1 </Text> */}
              <ExploreCard name="Matematicas 1" grado="4to" icon="md-calculator" color="#0040FF"/>
              <ExploreCard name="Fisica 1" grado="4to" icon="md-calculator" color="#01DFA5"/>
              <ExploreCard name="Lenguas 1" grado="5to" icon="md-create" color="#FF0040"/>
            </ExploreSection>
          </ScrollView>
        </View>
      );
    }
  }

  export default ExploreScreen;
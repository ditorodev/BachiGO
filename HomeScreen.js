import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import commonStyles from './App.styles.js';
import Logo from './Logo.js';

const InfoUsuario = (props) => {
  const {
    name,
    profilePic,
    escuela,
    grado,
    seccion,
    nivel
  } = props;

  return (
    <View style={{
      alignSelf: 'flex-start',
      margin: 50
    }}>
       <View style={{
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        width: '100%'
      }}>
       <Image style={{
          borderRadius: 100000,
          width: 200,
          height: 200,
          borderColor: 'green',
          borderWidth: 5
       }} 
       source= {{uri: profilePic}}/>
       <View style={{
          flex: 1,
          flexDirection: 'column',
          marginTop: 30
       }}>
          <Text style={{
            fontSize: 42,
            color: '#000',
            fontWeight: 'bold',
            textAlign: 'right'
          }}> 
          {name} 
          </Text>
          <Text style={{
            fontSize: 24,
            color: '#0008',
            textAlign: 'right'
          }}>
            {'Escuela ' + '"' + escuela + '"'}
          </Text>
          <Text style={{
            fontSize: 24,
            color: '#0008',
            textAlign: 'right'
          }}>
            {grado + ' Grado ' + '"' + seccion + '"'}
          </Text>
       </View>
      </View> 
    </View>
  );
};

class HomeScreen extends React.Component {
    render() {
      return (
        <View style={commonStyles.header}>
          <Logo />
          <InfoUsuario 
          profilePic="http://tinyeye.files.wordpress.com/2013/10/happy-child.jpg"
          name="John Doe" grado="4to" seccion="A" escuela="Mary Keller"
          />
        </View>
      );
    }
  }

  export default HomeScreen;
  
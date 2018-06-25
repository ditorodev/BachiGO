import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

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
      // alignSelf: 'flex-start',
      marginTop: 50,
      marginLeft: 50
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
          source={{ uri: profilePic }} />
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

const ProgresoCurso = (props) => {

  const {
    name,
    progress,
    color
  } = props;

  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#0002',
      borderRadius: 10,
      marginLeft: 50,
      marginBottom: 10,
      padding: 10,
      width: '80%',
      height: 100
    }}>
      <View style={{
        backgroundColor: color,
        width: progress,
        borderRadius: 10,
        height: 50
      }} >
        <Text style={{
          color: '#FFF',
          fontSize: 32,
          fontWeight: 'bold',
          marginLeft: 10
        }}>
          {progress}
        </Text>
      </View>
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 15
      }}>
        {name}
      </Text>
    </View>
  );
};

const ProgresoUsuario = (props) => {
  return (
      <ScrollView contentContainerStyle={{
        position: 'absolute',
        top: '30%',
        right: 0,
        left: 0
      }}>
            <ProgresoCurso name="Matematicas 1" progress="50%" color="#0040FF" />
            <ProgresoCurso name="Fisica 1" progress="90%" color="#01DFA5" />
            <ProgresoCurso name="Lengua 1" progress="30%" color="#FF0040" />
      </ScrollView>
  );
};

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{
        padding: 20,
        height: '100%'
      }}>
        <View style={commonStyles.header}>
          <Logo />
        </View>
          <InfoUsuario
            profilePic="http://tinyeye.files.wordpress.com/2013/10/happy-child.jpg"
            name="John Doe" grado="4to" seccion="A" escuela="Mary Keller"
          />
          <ProgresoUsuario />
      </View>
    );
  }
}

export default HomeScreen;

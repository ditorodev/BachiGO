import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = {
    imagenLogo:
  {
    width: 150, 
    height: 60, 
    marginTop: 10,
  },
}

class Logo extends React.Component {
    render() {
      return (
        <View>
          <Image 
          source={{ uri:'https://lh3.googleusercontent.com/-aBu7FDteFDg/Wy6YQy0JezI/AAAAAAAAFuk/7TzLBbxiIi4YQ-cAQv-4QT6fMbdqngJlgCJoC/w530-h212-n-rw/oie_transparent%2B%25284%2529.png'}} 
          style={styles.imagenLogo}/>
        </View>
      );
    }
  }


  export default Logo;

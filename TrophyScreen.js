import React from 'react';
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';

import commonStyles from './App.styles.js';
import Logo from './Logo.js';

export default class TrophyScreen extends React.Component 
{
  render() 
  {
    return (
      <View>
        <View style={commonStyles.header}>
        <Logo/>
        </View>
        <ScrollView contentContainerStyle={styles.stage}>
        
          <TableView>
            <Section header="Top 10- Alumnos- Seeción A- Colegio Mary Keller" >
              <Cell cellStyle="RightDetail" title="Alumno A" detail="10 Pts" />
              <Cell cellStyle="RightDetail" title="Alumno B" detail="9 Pts" />
              <Cell cellStyle="RightDetail" title="Alumno C" detail="8 Pts" />
              <Cell cellStyle="RightDetail" title="Alumno D" detail="7 Pts" />
              <Cell cellStyle="RightDetail" title="Alumno E" detail="6 Pts" />
              <Cell cellStyle="RightDetail" title="Alumno F" detail="5 Pts" />
              <Cell cellStyle="RightDetail" title="Alumno G" detail="4 Pts" />
              <Cell cellStyle="RightDetail" title="Alumno H" detail="3 Pts" />
              <Cell cellStyle="RightDetail" title="Alumno I" detail="2 Pts" />
              <Cell cellStyle="RightDetail" title="Alumno J" detail="1 Pts" />
              
            </Section>
            
              <Section header="Top 5- Secciones- Colegio Mary Keller" >
              <Cell cellStyle="RightDetail" title="Seccion A" detail="50 Pts" />
              <Cell cellStyle="RightDetail" title="Seccion B" detail="40 Pts" />
              <Cell cellStyle="RightDetail" title="Seccion C" detail="30 Pts" />
              <Cell cellStyle="RightDetail" title="Seccion D" detail="20 Pts" />
              <Cell cellStyle="RightDetail" title="Seccion E" detail="10 Pts" />
              
            </Section>
              <Section header="Top 100 - Colegios" >
              <Cell cellStyle="RightDetail" title="Colegio Mary Keller" detail="1000 Pts" />
              <Cell cellStyle="RightDetail" title="Colegio Konrad Zuse" detail="900 Pts" />
              <Cell cellStyle="RightDetail" title="Colegio Charles Babbage" detail="800 Pts" />
              <Cell cellStyle="RightDetail" title="Colegio Tim Berners Lee" detail="7000 Pts" />
              <Cell cellStyle="RightDetail" title="Colegio Ada Lovelace" detail="600 Pts" />
            </Section>
            
            
          </TableView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stage: {
    backgroundColor: '#EFEFF4',
    paddingTop: 20,
    paddingBottom: 20,
  },
});

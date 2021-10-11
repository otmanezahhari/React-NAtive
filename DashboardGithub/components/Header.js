import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

// import SvgUri from 'react-native-svg-uri';

import HamburgerIcon from '../assets/bars-solid.svg';


function SvgComponent(props) {
  return (
    <Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="30" height="30">
      <G {...props}>
        <Path fill="#fff" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></Path>
      </G>
    </Svg>
  );
}

export default function Header() {
  return (
    <View style={styles.header}>

        <SvgComponent  strokeWidth={8} stroke="#fff"  />
        <Text style={styles.headerText}>Github Dashboard</Text>

    </View>
  );
}

const styles = StyleSheet.create({

  header: {
    flexDirection : 'row',
    backgroundColor : '#0099fe',
    paddingLeft : 20,
    paddingTop : 10,
    paddingBottom : 10
  },

  headerText:{
      fontSize : 22,
      fontWeight : 'bold',
      color: '#fff',
      paddingLeft : 20,
  }
});

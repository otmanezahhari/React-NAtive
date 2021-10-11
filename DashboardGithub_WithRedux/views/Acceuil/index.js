import React, { useState, useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux";
import { StyleSheet, Button,TextInput, View, Text } from 'react-native';

import { setReposName } from '../../services/redux/Actions';



export default function Acceuil({navigation}) {

  const  dispatch = useDispatch();

  const [name, onChangeText] = useState('');

  const resetFrom = ()=>{
    onChangeText('');
  }
  
  const getRepoNameFromTextInput = ()=>{
    dispatch(setReposName(name)) ;
    resetFrom();
    navigation.navigate('Dashboard');
  }

  return (
    <View style={styles.acceuilPage}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Username"
        placeholderTextColor = "#999"
        value = {name}
      />

      <Button
        title = "Search"
        onPress = {getRepoNameFromTextInput}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  acceuilPage: {
    flex: 1,
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth : 1,
    padding: 10,
    width : '60%',
    borderBottomColor : "#999"
  }
});

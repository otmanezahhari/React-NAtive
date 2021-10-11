import React, { useState } from 'react';

import { StyleSheet, Button,TextInput, View } from 'react-native';


export default function Acceuil({navigation}) {

  const [name, onChangeText] = useState('');

  const resetFrom = ()=>{
    onChangeText('');
  }
  

  const getRepoNameFromTextInput = ()=>{
    resetFrom();
    navigation.navigate('Dashboard' , {RepoName : name});
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

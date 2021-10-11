import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector} from "react-redux";

export default function ReposDetails (){
  const state = useSelector(state => state.Repos);
  const { Language, SpecificRepos} = state;
  console.log(state)
  
  return(
    <View>
        <Text style={styles.depoName}>{SpecificRepos.name}</Text>
        <Text style = {styles.depodescription}>{SpecificRepos.description}</Text>
        <View style={styles.repoLangage}>
          {Object.keys(Language) && Object.keys(Language).length>0 ?  Object.keys(Language).map((elem,index)=><Text style={styles.textLanguage} key={index} >{elem}</Text>) : <Text></Text> }
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  depoName:{
    fontWeight : 'bold',
    fontSize : 16,
    textAlign : 'center',
    marginTop : 30,
  },
  depodescription :{
    color : '#999',
    fontSize : 12,
    textAlign : 'center',
    marginBottom : 25,
  },
  repoLangage:{
    color : '#000',
    fontSize : 14,
    textAlign : 'center',
    flexDirection : 'row',
    justifyContent : 'center'
  },
  textLanguage:{
    marginRight : 10,
    borderColor : '#000',
    borderWidth : 0.5,
    padding : 8,
    borderRadius : 8
  }
  
});
import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Api from '../services/api/ConfigApi';

export default function Details({navigation}) {


  const SpecificRepoData = navigation.getParam('item');
  const RepoName = navigation.getParam('RepoName');

  const [language, setLanguage] = useState({})

   useEffect(()=>{
    async function fetchData(){

      try{
        const request = 
        await Api.get(SpecificRepoData.languages_url);
        setLanguage(request.data)

      }
      catch(err){
        console.log(err)
      }
    }

    fetchData();

  },[SpecificRepoData])
  
  return (
    <View style={styles.details}>
      <View style={styles.detailsContent}>
            <Image 
              style={styles.imageClient}
              source={{
                          uri: `https://avatars.githubusercontent.com/${RepoName}`,
                        }}
            />
            <View>
              <Text style={styles.repoName}>{RepoName}</Text>
              <Text style={styles.repoLink}>{`https://api.github.com/users/${RepoName}`}</Text>
            </View>
      </View>

      <View>
        <Text style={styles.depoName}>{SpecificRepoData.name}</Text>
        <Text style = {styles.depodescription}>{SpecificRepoData.description}</Text>
        <View style={styles.repoLangage}>
          {Object.keys(language) && Object.keys(language).length>0 ?  Object.keys(language).map((elem,index)=><Text style={styles.textLanguage} key={index} >{elem}</Text>) : <Text></Text> }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    backgroundColor: '#efefef',
    paddingTop : 15,
    paddingBottom : 15,
    marginTop : 8,
    borderRadius : 8,
    marginLeft : 6,
    marginRight : 6,
  },
  imageClient : {
    width : 50,
    height : 50,
    alignItems : 'center',
    borderRadius : 25,
    marginRight : 8
  },
  repoName:{
    fontWeight : 'bold',
    textAlign : 'center',
    textTransform : 'capitalize',
    fontSize : 18,
  },
  repoLink:{
    color :'#000',
    fontSize : 12,
    textAlign : 'center'
  },
  detailsContent :{
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent : 'center',
    marginTop : 10,
  },
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

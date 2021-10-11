import React , {useEffect, useState} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';

import Api from '../services/api/ConfigApi';

export default function Dashboard({navigation}) {

  const [data, setData] = useState([])

  const getRepoName = navigation.getParam('RepoName')

  useEffect(()=>{
    async function fetchData(){

      try{
        const request = 
        await Api.get(`https://api.github.com/users/${getRepoName}/repos`);
        setData(request.data)
      }
      catch(err){
        console.log("not found")
      }
    }

    fetchData();

  },[getRepoName])
  return (
    <View style={styles.dashboard}>

      <View style = {styles.avatarClient}>
          <View style = {styles.avatarContent}> 
            <Image 
                style={styles.imageClient}
                source={{
                          uri: `https://avatars.githubusercontent.com/${getRepoName}`,
                        }}
            />         
            <Text style = {styles.name}>{getRepoName}</Text>
            
          </View>
      </View>

      <FlatList 
        data = {data}
        renderItem = {({item})=> (
          <TouchableOpacity
            onPress = {() => navigation.navigate('Details', {item, RepoName : getRepoName})}
          >
              <View style = {styles.depotsListes}>
                <View style = {styles.depotsItem}>
                
                  <Image 
                      style={styles.depaIcon}
                      source={{
                                uri: 'https://img.icons8.com/ios/50/000000/repository.png',
                              }}
                  />
                  <View>
                    <Text style = {styles.depotName}>{item.name}</Text>
                  </View>
                </View>
              </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dashboard: {
    flex : 1,
    flexDirection : 'column'
  },
  avatarClient:{
    justifyContent :'center',
    alignItems : 'center',
    marginTop : 35,
    marginBottom : 35,
  },
  avatarContent :{
    backgroundColor : '#eea',
    flex : 1,
    flexDirection : 'row',
    alignItems : 'center',
    paddingTop : 25,
    paddingBottom : 25,
    paddingRight : 12,
    borderRadius : 25
  },
  name:{
    color : '#000',
    fontWeight : 'bold',
    fontSize : 18,
    textTransform : 'uppercase',
    alignItems : 'center',
    marginLeft : 8,
  },
  imageClient : {
    width : 50,
    height : 50,
    alignItems : 'center',
    borderRadius : 25
  },
  depotsListes :{
    marginTop : 8,
    paddingLeft : 25,
    backgroundColor : '#e5fdfd',
    paddingBottom : 8,
    paddingTop :8,
    borderRadius : 6,
  },
  depotsItem :{
    flexDirection : 'row',
    alignItems : 'center',
  },
  depaIcon :{
    width : 30,
    height : 30,
  },
  
  depotName :{
    textAlign : 'center',
    fontWeight : 'bold',
    fontSize : 16,
    marginLeft : 20
  }
});

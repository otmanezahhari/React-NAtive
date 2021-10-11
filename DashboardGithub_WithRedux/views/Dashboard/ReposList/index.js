import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { useSelector, useDispatch} from "react-redux";

import { getLanguageURl,setSpecificRepos } from "../../../services/redux/Actions"; 

export default function ReposList ({navigation}){
  const  dispatch = useDispatch();
  const getUserRepos = useSelector(state => state.Repos);
  const {Repos} = getUserRepos;
  const getRepoName = navigation.getParam('RepoName')

  const DisplayReposDetail = (item)=>{
    dispatch(getLanguageURl(item.languages_url));
    dispatch(setSpecificRepos(item))
    navigation.navigate('Details', {item, RepoName : getRepoName})
  }

  if(Repos && Repos.length>0){
    return(
      <FlatList 
        data = {Repos}
        renderItem = {({item})=> (
          <TouchableOpacity
            onPress = {() => DisplayReposDetail(item) }

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
    )
  }else{
    return(
      <Text></Text>
    )
  }
  
}

const styles = StyleSheet.create({
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

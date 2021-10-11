import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSelector} from "react-redux";


export default function UserInfo () {
  const getUserRepos = useSelector(state => state.Repos);
  const {Username} = getUserRepos;

  return(
    
    <View style = {styles.avatarClient}>
          <View style = {styles.avatarContent}> 
            <Image 
                style={styles.imageClient}
                source={{
                          uri: `https://avatars.githubusercontent.com/${Username}`,
                        }}
            />
            
            <Text style = {styles.name}>{Username}</Text>
            
          </View>
    </View>

  )
}


const styles = StyleSheet.create({
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
});
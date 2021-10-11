import { useSelector} from "react-redux";
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function UserInfo (){
  const getUserRepos = useSelector(state => state.Repos);
  const {Username} = getUserRepos;

  return(
    
    <View style={styles.detailsContent}>

        <Image 
            style={styles.imageClient}
            source={{
                        uri: `https://avatars.githubusercontent.com/${Username}`,
                    }}
        />
        <View>
            <Text style={styles.repoName}>{Username}</Text>
            <Text style={styles.repoLink}>{`https://api.github.com/users/${Username}`}</Text>
        </View>
    </View>

  )
}

const styles = StyleSheet.create({ 
  detailsContent :{
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent : 'center',
    marginTop : 10,
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
  
});

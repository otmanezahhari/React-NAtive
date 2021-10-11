import React , {useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import {useDispatch, useSelector} from "react-redux";

import { setCurrentUserRepos } from '../../services/redux/Actions'; 

import Api from '../../services/api/ConfigApi';

import Userinfo from "./UserInfo";
import ReposList from './ReposList';



export default function Dashboard({navigation}) {

  const  dispatch = useDispatch();
  const getReposName = useSelector(state => state.Repos.Username);

  const Request = `${getReposName}/repos`;


  useEffect(()=>{
    async function fetchData(){
      try{
        const request = 
        await Api.get(Request);
        dispatch(setCurrentUserRepos(request.data));
      }
      catch(err){
        console.log("not found")
      }
    }

    fetchData();

  },[Request])

  return (
    <View style={styles.dashboard}>

      <Userinfo/>
      <ReposList navigation = {navigation}/>

    </View>
  );

}

const styles = StyleSheet.create({
  dashboard: {
    flex : 1,
    flexDirection : 'column'
  },
});

import React,{useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import { setLanguage } from "../../services/redux/Actions"; 

import Api from '../../services/api/ConfigApi';

import UserInfo from './UserInfo';
import ReposDetails from './ReposDetails';

export default function Details() {

  const getURL = useSelector(state => state.Repos.URL);
  const  dispatch = useDispatch();

   useEffect(()=>{
    async function fetchData(){

      try{
        const request = 
        await Api.get(getURL);
        console.log(request)
        dispatch(setLanguage(request.data));
      }
      catch(err){
        console.log(err)
      }
    }

    fetchData();

  },[Request])
  
  return (
    <View style={styles.details}>

      <UserInfo/>
      <ReposDetails/>

    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    backgroundColor : '#efefef',
    paddingTop      : 15,
    paddingBottom   : 15,
    marginTop       : 8,
    borderRadius    : 8,
    marginLeft      : 6,
    marginRight     : 6,
  },
});

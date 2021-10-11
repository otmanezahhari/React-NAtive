import {ActionTypes} from "../Constants";

const initialState ={
  Repos:[],
  Username:'',
  URL : '',
  Language : '',
  SpecificRepos : null,
}


export const UserRepos = (state=initialState, {type, payload})=>{
  switch(type){
    case ActionTypes.SET_REPOS_NAME   :
      return{
        ...state,
        Username : payload
      };
    case ActionTypes.SET_GITHUB_REPOS :
      
      return{
        ...state,
        Repos : payload
      };
    case ActionTypes.GET_LANGUAGE_URL  :
      return{
        ...state,
        URL : payload
      }
    case ActionTypes.SET_LANGUAGE       :
      return{
        ...state,
        Language : payload
      }
    case ActionTypes.SET_SPECIFIC_REPOS : 
      return{
        ...state,
        SpecificRepos : payload
      }
    default : 
        return state;
  }
}
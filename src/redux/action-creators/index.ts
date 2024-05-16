import axios from 'axios';
import { ActionType } from 'redux/action-types';
import { Action } from 'redux/actions';

const searchGithubUsers = (term:string) => {
    return async (dispatch:any) => {

            dispatch({
                 type:ActionType.SEARCH_USERS
            });

            try {


            }catch(err){

                 if(err instanceof Error){

                    dispatch({
                         type:ActionType.SEARCH_USERS_ERROR,
                         payload:err.message
                    })
                 }
            }
    }

};
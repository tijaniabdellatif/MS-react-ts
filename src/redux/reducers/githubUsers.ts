interface IGithubUsersState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (state: IGithubUsersState, action: any):IGithubUsersState => {
  switch (action.type) {
    case 'search_users': 
        return {loading:true,error:null,data:[]}
    case 'search_users_success':
        return {loading:false,error:null,data:action.payload}
    case 'search_users_error':
        return {loading:true,error:action.payload,data:[]}
    default:
      return state;
  }
};

export default reducer;

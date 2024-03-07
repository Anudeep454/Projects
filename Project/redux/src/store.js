import {createStore} from 'redux';
import {thunk} from 'redux-thunk'
import { applyMiddleware, combineReducers } from "redux";

const posts = {
      data:[],
      error:""
}
function counterReducer(state=0, action){
    switch(action.type)
    {
        case 'INCR':
            return state + 1;

        case 'DECR':
            return state - 1;
        default:
            return state;
    }
}

function fetchReducer (state= posts, action){
  switch(action.type)
  {
    case "Fetch_Fail":
        return{
            ...state,
            error:action.payload,
        }
        case "Fetch_Success":
          return{
              ...state,
              data:action.payload,
          }

          default :
                    return state
  }
}


 function authReducer (state = false, action)  {
    switch (action.type) {
      case 'LOGIN':
        return true;
      case 'LOGOUT':
        return false;
      default:
        return state;
    }
  };

const rootReducer = combineReducers({counter: counterReducer, auth: authReducer, fetch: fetchReducer})
const store = createStore(rootReducer, applyMiddleware(thunk))
console.log(store.getState(fetchReducer))
export default  store;


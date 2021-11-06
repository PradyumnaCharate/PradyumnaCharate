import  {createStore} from "redux";
import { Reducer ,initialState } from "./reducer";
//to Configure Store
export const ConfigureStore=()=>{
    //this will create store
    const store=createStore(
        Reducer,
        initialState
    )
    return store;

}
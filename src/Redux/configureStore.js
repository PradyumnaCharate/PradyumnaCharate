import  {createStore,combineReducers, applyMiddleware} from "redux";//We have created these 4 different reducers so to combine them in store combineReducers is imported
import { Dishes } from "./dishes";
import { createForms } from 'react-redux-form';//enables form state into reduux store 
import { Comments } from "./comments";
import { Promotions } from "./promotions";
import { Leaders } from "./leaders";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { InitialFeedback } from './forms';

//to Configure Store
export const ConfigureStore=()=>{
    //this will create store
    const store=createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback//reduccer action creators is not necessary ..redux takes care of it
            })
        }),
        applyMiddleware(thunk,logger)
    )
    return store;

}
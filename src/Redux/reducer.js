import {LEADERS} from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import { COMMENTS } from "../shared/comments";
import { DISHES } from "../shared/dishes";


//These are initial States whenever we are going to change it we will use this to make new state
export const initialState={
    dishes: DISHES,
    comments:COMMENTS,
    promotions:PROMOTIONS,
    leaders:LEADERS

}


//thius is reducer function taking state and action as argument to generate modified state
//default argument value will be initialState if no state is provided 
export const Reducer=(state=initialState,action)=>{
    return state;
}
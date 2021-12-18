import * as ActionTypes from './ActionTypes';


export const Dishes=(state = { isLoading: true,
    errMess: null,
    dishes:[]}, action)=>{
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            //... is spread operator.it takes current state and makes copy of it and then make requiured changes on duplicate cpy and returns it
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
}
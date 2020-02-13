
import { createStore } from 'redux';
import axios from 'axios';

var store=createStore(function(state="",action){
    console.log(action)
    switch(action.type){
        case 'CHECK_TRACK':
            return action.payload;
        default:
            return state
    }
})

export default store
import {createStore} from 'redux'
var store=createStore(function(state=10,action){
    console.log(action)
})

export default store
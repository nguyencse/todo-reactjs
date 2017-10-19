import { getCookie } from '../helper/functions'
import * as types from '../constants/action-types'

var initialState = {
  allTasks: getCookie('tasks') !== "" ? JSON.parse(getCookie("tasks")) : []
}

var myReducer = (state = initialState, action) => {
  switch(action.type){
    case types.LIST_ALL:
      return state
    case types.ADD_TASK:
    console.log(action)
      return state
    default: return state
  }
}

export default myReducer
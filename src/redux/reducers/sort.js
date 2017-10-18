import * as types from "../constants/action-type"

var initialState = {
  by: "name",
  value: 1    // 1-increase 2-decrease
}

var myReducer = (state = initialState, action) => {
  if(action.type === types.SORT){
    return {
      by: action.sort.by,
      value: action.sort.value
    }
  }
  return state
}

export default myReducer
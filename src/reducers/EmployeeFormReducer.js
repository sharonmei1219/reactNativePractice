import {
  EMPLOYEE_UPDATE
} from '../actions/types'

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }
      //[action.payload.prop]: key interperation
    default:
      return state
  }
}

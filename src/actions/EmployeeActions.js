import firebase from 'firebase'
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE
} from './types'

export const employeeUpdate = ( { prop, value} ) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  }
}

export const employeeCreate = ( { name, phone, shift }) => {
  const { currentUser } = firebase.auth()
  console.log(name, phone, shift)
  const ref = firebase.database().ref(`/users/${currentUser.uid}/employees/`)
    .push({ name, phone, shift }, error => { if (error){
       console.log(error)
     } else {
       console.log("push successfully")
     }
     })
  console.log(ref.key)
  return {
    type: EMPLOYEE_CREATE,
    playload: "ahha"
  }
  // `/user/${currentUser.uid}/employees` is template, key near button '1' on the keyboard
  //not '' which is an ordinary strings
}

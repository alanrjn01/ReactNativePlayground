import { createSlice } from "@reduxjs/toolkit";

//defino el estado inicial
const initialState = {
  username:'',
  password:'prueba',
  logged: null
}

//creo el slice con el nombre de usuario, su estado inicial y sus reducers
export const userSlice = createSlice({
  name:'user',
  initialState,
  reducers:{
    loginUser:(state,action) => {
      if (state.password===action.payload.password){
        state.logged = true
        state.username = action.payload.username
        console.log(state)
      }
      else{
        state.logged = false
      }
    },
    logoutUser:(state,action) => {
      /* if (action.payload.logged!=null) */
        state.logged = action.payload.logged
        console.log('deslogeado')
        console.log(state)
    } 
  }
})

//los exporto
export const {loginUser,logoutUser} = userSlice.actions
export default userSlice.reducer
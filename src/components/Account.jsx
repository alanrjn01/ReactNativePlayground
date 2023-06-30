import React from "react";
import { View, Text, Button, Pressable, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../slices/userSlice";

const Account = () => {

  
  //para acceder al estado
  const user = useSelector((state)=>state.user)
  const dispatch = useDispatch()

  const onSubmit = () => {
      dispatch(logoutUser({logged:false}))
  }

  return <View>
    <View style={styles.container}>
    <Text style={{fontSize:28,color:'#586069'}}>hello {user.username}</Text>
      <Button title="Cerrar sesión" onPress={onSubmit}>
      </Button>
    </View>
    
  </View>
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center'
  }
})

export default Account


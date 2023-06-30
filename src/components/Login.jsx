import React from "react";
import { Text, View, TextInput, Button, Alert, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import loginValidationSchema from '../validationSchemas/loginValidationSchema'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { loginUser } from "../slices/userSlice";
import {Dimensions} from 'react-native';
import { useEffect } from "react";
import { logoutUser } from "../slices/userSlice";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = () => {

  useEffect(()=>{
    dispatch(logoutUser({logged:null}))
  },[])

  const user = useSelector((state)=>state.user)

  //metodo dispatch para llamar a las acciones del estado
  const dispatch = useDispatch()

  //hook
  //uso para validar un schema de yup
  const { control, handleSubmit, formState: { errors },reset} = useForm({
    resolver: yupResolver(loginValidationSchema)
  });

  //funcion que se realiza al submitear
  const onSubmit = data => {
    console.log(data);
    dispatch(loginUser(data))
    reset()
  }

  return (
    <View
    style={styles.container}>
      <Text style={{textAlign:'center',fontSize:24, color:'black'}}>Iniciar sesión</Text>
      <Text style={{fontSize:18,color:'black'}}>username:</Text>
      <Controller
        control={control}
        rules={{
          
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.textInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            
          />
        )}
        name="username"
      />
      <Text style={styles.error}>{errors.username?.message}</Text>
      <Text style={{fontSize:18,color:'black'}}>password:</Text>
      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            secureTextEntry
            style={styles.textInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      <Text style={styles.error}>{errors.password?.message}</Text>
      <Text></Text>
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      {user.logged===false ? <Text style={{color:'red'}}>usuario o contraseñas incorrectos</Text>:<></>}
    </View>
  );
}

export default Login

const styles = StyleSheet.create({
  textInput:{
    paddingVertical:10,
    borderStyle:'solid',
    borderWidth:3,
    borderColor:'#aaaa',
    borderRadius:20,
    marginVertical:5,
    color:'black'
  },
  container:{
    alignSelf:'center',
    paddingHorizontal:30,
    paddingVertical:30,
    backgroundColor:'white',
    width:windowWidth,
    height:windowHeight
  },
  error:{
    color:'red',
    marginTop:-8
  }
})
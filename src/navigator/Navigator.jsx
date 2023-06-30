import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

//screens
import RepositoryListWithApi from '../components/RepositoryListWithApi'
import RepositoryList from '../components/RepositoryList';
import Settings from '../components/Settings'
import Account from '../components/Account'
import Login from '../components/Login'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

//tab 
function MyTabs() {
  const userLogged = useSelector((state)=>state.user.logged)
  return (
    <>
      {!userLogged ? (
      <Stack.Navigator>
        <Stack.Screen
        name='Login'
        component={Login}
        options={{
          headerShown: false,
        }}>
        </Stack.Screen>
      </Stack.Navigator>
    ) : (
      <Tab.Navigator
      initialRouteName='RepositoryList'    
      > 
        <Tab.Screen name='RepositoryList' component={RepositoryList}
        options={{
          tabBarLabelStyle:{fontSize:14,color:'black'},
          tabBarLabel: 'RepositoryList',
          tabBarIcon: () => (
            <MaterialCommunityIcons name={'home'} color={'black'} size={28} />
          ),
        }}
        ></Tab.Screen>
        <Tab.Screen name='Settings' component={Settings}
        options={{
          tabBarLabelStyle:{fontSize:14,color:'black'},
          tabBarIcon: () => (
            <MaterialCommunityIcons name={'cog'} color={'black'} size={28} />
          ),
        }}
        ></Tab.Screen>
        <Tab.Screen name='Account' component={Account}
        options={{
          tabBarLabelStyle:{fontSize:14,color:'black'},
          tabBarIcon: () => (
            <MaterialCommunityIcons name={'account'} color={'black'} size={28} />
          ),
        }}
        ></Tab.Screen>
      </Tab.Navigator>
    )}
    </>
  )
}

const Navigator = () => {
  return (
      <MyTabs></MyTabs>
  )
}

export default Navigator
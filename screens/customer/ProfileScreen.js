import React, {useContext} from 'react'
import {View, Text, Button} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import {GlobalContext} from '../../context/userContext'

function ProfileScreen() {

  const { globalState, setGlobalState } = useContext(GlobalContext);

  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Customer Profile Screen</Text>
        <Button title='Log-Out' onPress={async() => {
            try{
                await AsyncStorage.removeItem('logged-in-user');
                setGlobalState({...globalState, isLoggedIn:false});
            }
            catch(err){
                console.log(err);
            }
        }}  />
    </View>
  )
}

export default ProfileScreen;
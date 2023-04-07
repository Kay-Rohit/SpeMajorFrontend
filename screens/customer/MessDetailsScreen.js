import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import { View } from 'react-native';
import { Text } from 'react-native-paper';


function MessPageScreen({route}){
    const [messData, setMessData] = useState(route.params?.data)
    // console.log(messData)
    return(
        <View className="flex-1 items-center justify-center">
            <Text>Hello this is mess page of {messData.messname}</Text>
        </View>
    )
}
export default MessPageScreen
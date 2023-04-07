import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Text, SegmentedButtons } from 'react-native-paper';

function MessPageScreen({route}){
    const [messData, setMessData] = useState(route.params?.data);
    const [screen, setScreen] = React.useState('about');

    // console.log(messData)
    return(
        <ScrollView>
            <SegmentedButtons
                value={screen}
                onValueChange={setScreen}
                buttons={[
                {
                    value: 'about',
                    label: 'About',
                },
                {
                    value: 'menu',
                    label: 'Menu',
                },
                { value: 'review', label: 'Reviews' },
                ]}
            />
            {
                (screen=='about') &&
                (
                    <View className="h-screen items-center justify-center">
                        <Text>Hello this is about page of {messData?.messname} </Text>
                    </View>
                )
            }
            {
                (screen=='menu') &&
                (
                    <View className="h-screen items-center justify-center">
                        <Text>Hello this is mess menu page of {messData?.menu} </Text>
                    </View>
                )
            }
            {
                (screen=='review') &&
                (
                    <View className="h-screen items-center justify-center">
                        <Text>Hello this is mess review page of {messData?.reviews} </Text>
                    </View>
                )
            }
                
                
        </ScrollView>
    );
}
export default MessPageScreen
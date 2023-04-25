import { height } from '@mui/system';
import React, { useContext, useState } from 'react'
import { Button, StyleSheet } from 'react-native';
import { Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons";
function Card({ index,
    onChangeDay,
    onChangeBreakfast,
    onChangeLunch,
    onChangeDinner,
    onClickRemove, }) 
    {
    // const [day, setDay] = useState()
    return (
        <View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 20,
                }}>
                <Text style={{ marginLeft: 20, fontSize: 20, }}>Day: </Text>
                <TouchableOpacity
                    style={{ marginRight: 20 }}
                    onPress={() => {
                        onClickRemove();
                    }}>
                    <Text style={{ color: 'red' }}>Remove</Text>
                </TouchableOpacity>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Enter Day"
                onChangeText={txt => {
                    onChangeDay(txt);
                  }}
            />
            <Text style={styles.text}>Breakfast :</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter food item in Breakfast"
                onChangeText={txt => {
                    onChangeBreakfast(txt);
                  }}
            />

            <Text style={styles.text}>Lunch:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter food item in Lunch"
                onChangeText={txt => {
                    onChangeLunch(txt);
                  }}
            />


            <Text style={styles.text}>Dinner:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter food item in Dinner"
                onChangeText={txt => {
                    onChangeDinner(txt);
                  }}
            />



            

        </View>


    )
}

export default Card;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    input: {
        width: '90%',
        height: 50,
        borderWidth: 0.5,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,
        paddingLeft: 15,

    },
    text: {
        fontSize: 20,
        marginLeft: 20,
        marginTop: 10
    },
    add: {
        

    },
})



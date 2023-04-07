import HomeScreen from "./HomeScreen";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ProfileScreen from "./ProfileScreen";

const Tab = createMaterialBottomTabNavigator();

//component to be rendered if user logs in
function CustomerTabScreen(){
  return(
    <Tab.Navigator
      // screenOptions={{headerShown:false}}
    >
      <Tab.Screen name='Home' component={HomeScreen}/>
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default CustomerTabScreen
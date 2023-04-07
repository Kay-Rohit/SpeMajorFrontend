import HomeScreen from "./HomeScreen";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ProfileScreen from "./ProfileScreen";

const Tab = createMaterialBottomTabNavigator();

function MessOwnerTabScreen(){
    return(
      <Tab.Navigator
        screenOptions={{headerShown:false}}
      >
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  }

  export default MessOwnerTabScreen
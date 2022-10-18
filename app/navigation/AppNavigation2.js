import { createStackNavigator } from "@react-navigation/stack"
import Login from "../screens/Login"
import Home from "../screens/Home"


const Stack = createStackNavigator()

const AppNavigation2 = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  )
}

export default AppNavigation2
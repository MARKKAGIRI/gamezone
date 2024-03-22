import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/home'
import ReviewDetails from '../screens/Review-details'
import Header from '../shared/header'

const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#eee', height: 80 },
          headerTintColor: '#455',
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
           options={{
             headerTitle: () => <Header navigation={navigation} />,
           }}
        />
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={{ title: 'Reviews' }}
        />

      </Stack.Navigator>
    );
  };

  
  
  export default HomeStack;
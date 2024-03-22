import {createStackNavigator} from '@react-navigation/stack'
import About from '../screens/about'

const screens = {
    About: {
        screen: About,
        navigationOptions: ({navigation}) =>{
            return{
               headerTitle:() => <Header navigation={navigation}  />,
            }
           
        }
    }
}

const AboutStack = createStackNavigator(screens, {defaultNavigationOptions: {
    headerStyle: {backgroundColor:'#eee', height: 80},
    headerTintColor: '#455'
}});

export default AboutStack;
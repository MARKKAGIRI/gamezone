import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/home'
import reviewDetails from '../screens/review-details'
import Header from '../shared/header'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) =>{
            return{
                headerTitle: () => <Header navigation={navigation} />,
            }
            
        }
    },
    ReviewDetails: {
        screen: reviewDetails,
        navigationOptions: {
            title: 'Reviews'
        }
    },
    
}

const defaults = {defaultNavigationOptions: {
    headerStyle: {backgroundColor:'#eee', height: 80},
    headerTintColor: '#455'
}}

const HomeStack = createStackNavigator(screens, defaults);

export default HomeStack();
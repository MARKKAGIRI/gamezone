import {createDrawerNavigator} from '@react-navigation/drawer'
// import {createAppContainer} from '@react-navigation/native'
import HomeStack from './homeStack'
import AboutStack from './aboutStack'

const RootDrawerNavigator = createDrawerNavigator({
    Home : {
        screen: HomeStack,
    },
    About : {
        screen: AboutStack,
    }
})

export default RootDrawerNavigator;
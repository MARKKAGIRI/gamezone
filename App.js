import { useFonts } from 'expo-font'
import { Text } from 'react-native';
import Navigator from './routes/homeStack'
import {NavigationContainer} from '@react-navigation/native'


export default function App() {
  const [fontLoad] = useFonts({
    'Roboto' : require('./assets/fonts/Roboto-Regular.ttf')
  })
  if (fontLoad){
    return(
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
      
    );
  } else {
    return(
      <Text>App Loading...</Text>
    );
  }
}



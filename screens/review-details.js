import { Text, View, Button } from 'react-native';
import { globalStyles } from '../styling/global';

export default function reviewDetails({ navigation }) {
    

    return( 
        <View style={globalStyles.container}>
            <Text style={globalStyles.containerText}>{navigation.getParam('title')}</Text> 
            <Text style={globalStyles.containerText}>{navigation.getParam('body')}</Text>            
            <Text style={globalStyles.containerText}>{navigation.getParam('rating')}</Text>            
            <Text style={globalStyles.containerText}>{navigation.getParam('key')}</Text>            

        </View>
     );
}


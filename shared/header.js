import { StyleSheet, View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function Header({navigation}){
    const displayDrawer = () => {
        navigation.openDrawer()
    }

    return(
        <View style={styles.header}>
            <Entypo name="menu" size={28} color="black" onPress={displayDrawer} />
            <View>
                <Text style={styles.headerText}> Gamezone</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
        
    
})
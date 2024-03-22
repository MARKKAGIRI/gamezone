import {  Text, View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styling/global';
import { useState } from 'react';

export default function Home({ navigation}) {
    const [reviews , setReviews] = useState([
        {title:'Zelda breath of fresh air', rating: 4, body: 'lorem ipsum', key: 1},
        {title: 'Wisdom is key in life', rating: 5, body: 'lorem ipsum', key: 2},
        {title: 'not so "final" fantasy', rating: 3, body: 'lorem ipsum', key: 3}
    ])

    return( 
        <View style={globalStyles.container} >
            <FlatList
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={globalStyles.containerText}>{item.title}</Text>
                    </TouchableOpacity>
                )} 
            />
        </View>
    );
}

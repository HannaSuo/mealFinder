import {Text, TextInput, View, Button, FlatList, Image, Linking} from 'react-native';
import React, {useState} from 'react';

export default function RecipeFinder() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const url = "https://youtube.com"

    const getRecipes = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            setData(data.meals)
        })
        .catch(err => console.error(err))
    }


    return(
        <View style={{marginTop: 100}}>
            <Text onPress={() => Linking.openURL(url)}>Google</Text>
            <Text>Searchword:</Text>
            <TextInput
            value={searchTerm}
            onChangeText={text => setSearchTerm(text)}
            style={{width:250, borderColor: 'gray', borderWidth: 1}}
            />
            <Button
            title="Search"
            onPress={getRecipes}/>
            <FlatList
            data={data}
            renderItem={({item}) =>
            <View>
                <Text>{item.strMeal}</Text>
                <Image
                style={{width: 50, height: 50}}
                source={{
                    uri:`${item.strMealThumb}/preview`
                }}
                />
            </View>}
            />
        </View>
    );
}

//add input validation
//add loading animation
//add msg if no results
//add search random meal with links
//add search by meal name
import { View , FlatList, StyleSheet, Text} from "react-native";
import { useLayoutEffect } from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverViewScreen({route, navigation}){

    const catId = route.params.categoryID;
    const displayedMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation]);
    

    function renderMealItems(itemData){

        const items = itemData.item;
        const mealItemProps = {
            id: items.id,
            title: items.title ,
            imageUrl: items.imageUrl ,
            duration: items.duration, 
            complexity: items.complexity,
            affordability: items.affordability
        }
        
        return (
            <MealItem {...mealItemProps}/>
        );
    }

    return(
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItems}/> 
        </View>
    );
}
export default MealsOverViewScreen;

const styles = StyleSheet.create({

    container:{
        flex: 1,
        padding: 16,
    }
});
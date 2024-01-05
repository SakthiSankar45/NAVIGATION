import { View , FlatList, StyleSheet} from "react-native";

import MealsItem from "./MealsItem";

function MealsList({items}){

    function renderMealItems(itemData){

        const items = itemData.item;
        console.log(itemData.item);
        const mealItemProps = {
            id: items.id,
            title: items.title ,
            imageUrl: items.imageUrl ,
            duration: items.duration, 
            complexity: items.complexity,
            affordability: items.affordability
        }
        
        return (
            <MealsItem {...mealItemProps}/>
        );
    }

    return(
        <View style={styles.container}>
            <FlatList data={items} keyExtractor={(item) => item.id} renderItem={renderMealItems}/> 
        </View>
    );
}
export default MealsList;

const styles = StyleSheet.create({

    container:{
        flex: 1,
        padding: 16,
    }
});
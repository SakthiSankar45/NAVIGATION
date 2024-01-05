import { StyleSheet , View, Text} from "react-native";
// import { useContext } from "react";
import { useSelector } from "react-redux";

import MealsList from "../components/mealsLists/MealsList";
// import { FavoriteContext } from "../store/context/Favorite-Context";
import { MEALS } from "../data/dummy-data";

function FavoriteScreen(){
    // const favMealsCtx = useContext(FavoriteContext);
    const favMealIds = useSelector((state) => state.favoriteMeals.ids);
    const favMeals = MEALS.filter((meal) => favMealIds.includes(meal.id));

    if (favMeals.length === 0){
        return(
            <View style = {styles.rootContainer}>
                <Text style = {styles.textStyle}>You have no favorite meals yet.</Text>
            </View>
        )
    }
    return(
        <MealsList items={favMeals}/>
    );
}
export default FavoriteScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
});
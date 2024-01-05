import { StyleSheet , Text} from "react-native";
import { useContext } from "react";

import MealsList from "../components/mealsLists/MealsList";
import { FavoriteContext } from "../store/context/Favorite-Context";
import { MEALS } from "../data/dummy-data";

function FavoriteScreen(){
    const favMealsCtx = useContext(FavoriteContext);
    const favMeals = MEALS.filter(meal => favMealsCtx.ids.includes(meal.id));
    return(
        <MealsList items={favMeals}/>
    );
}
export default FavoriteScreen;
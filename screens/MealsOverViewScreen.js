import { useLayoutEffect } from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealsList from "../components/mealsLists/MealsList";

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
    console.log(displayedMeals);
    <MealsList items={displayedMeals}/>
}
export default MealsOverViewScreen;
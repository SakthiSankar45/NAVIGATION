import { useContext, useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import IconButton from '../components/IconButton';
import List from '../components/mealsDetails/List';
import SubTitle from '../components/mealsDetails/SubTitle';
import MealsDetails from '../components/MealsDetails';
import { MEALS } from '../data/dummy-data';
import { FavoriteContext } from '../store/context/Favorite-Context';

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const favoriteMealsCtx = useContext(FavoriteContext);
  const mealIsFav = favoriteMealsCtx.ids.includes(mealId);
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function changeFavHandler() {
    if(mealIsFav){
      favoriteMealsCtx.removeFavorite(mealId);
    }else{
      favoriteMealsCtx.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton icon={mealIsFav ? 'star' : 'star-outline'} color="white" onTap={changeFavHandler} />
        );
      },
    });
  }, [navigation, changeFavHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealsDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        extraStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          {/* {selectedMeal.ingrediants.map((ingrediant) => (
                  <Text key={ingrediant}>{ingrediant}</Text>
          ))} */}
          <List data={selectedMeal.ingrediants} />
          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
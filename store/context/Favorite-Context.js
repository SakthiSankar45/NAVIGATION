import { createContext, useState } from "react";

export const FavoriteContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});

function FavoriteContextProvider({children}){

    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    function addFavorites(id){
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
    }
    function removeFavorites(id){
        setFavoriteMealIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id));
    }

    const values = {
        ids: favoriteMealIds,
        addFavorite: addFavorites, 
        removeFavorite: removeFavorites
    }

    return(
        <FavoriteContext.Provider value={values}>{children}</FavoriteContext.Provider>
    );
}
export default FavoriteContextProvider;
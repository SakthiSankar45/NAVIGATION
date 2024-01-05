import { View, Text, StyleSheet } from "react-native";

function MealsDetails({duration, complexity, affordability, extraStyle}){
    return(
        <View style = {[styles.details]}>
            <Text style = {[styles.detailItems, extraStyle]}>{duration}m</Text>
            <Text style = {[styles.detailItems, extraStyle]}>{complexity.toUpperCase()}</Text>
            <Text style = {[styles.detailItems, extraStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    );
}
export default MealsDetails;

const styles=StyleSheet.create({
    details:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8 
    },
    detailItems:{
        marginHorizontal : 4,
        fontSize : 12,
    },
})
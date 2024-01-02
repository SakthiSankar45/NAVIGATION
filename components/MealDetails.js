import { View, Text, StyleSheet } from "react-native";

function MealDetails({duration, complexity, affordability, extraStyle, txtExtraStyle}){
    return(
        <View style = {[styles.details, extraStyle]}>
            <Text style = {[styles.detailItems, txtExtraStyle]}>{duration}m</Text>
            <Text style = {[styles.detailItems, txtExtraStyle]}>{complexity.toUpperCase()}</Text>
            <Text style = {[styles.detailItems, txtExtraStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    );
}
export default MealDetails;

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
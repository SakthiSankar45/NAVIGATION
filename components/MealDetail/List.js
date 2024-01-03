import { View, Text, StyleSheet } from 'react-native';

function List({ data }) {

  // console.log(data)
  // dataVal = ["300g Cattle Hack", "1 Tomato", "1 Cucumber", "1 Onion", "Ketchup", "2 Burger Buns"];
  // dataVal2 = ["Form 2 patties", "Fry the patties for c. 4 minutes on each side", "Quickly fry the buns for c. 1 minute on each side", "Bruch buns with ketchup", "Serve burger with tomato, cucumber and onion"]
  return (
    data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ))
  );
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  itemText: {
    color: '#351401',
    textAlign: 'center',
  },
});
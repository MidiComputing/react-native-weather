import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, SafeAreaView } from 'react-native';
import { data } from './data';

export default function App() {

  let [name, setName] = useState("Mahdi");
  const handleClick = () => {
    setName("Khaled");
  }

  const renderItem = ({item, index}) => {
    console.log(index)
    
    return(
      <View style={styles.item}>
        <Text>
          {item.title}
        </Text>
      </View>
    
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/*<Text style={styles.title}>{name}</Text>
      <Button title="Save" onPress={() => handleClick()}/> 
      <TouchableOpacity style={{ backgroundColor: "green", padding: (10, 10), marginTop: 20 }} onPress={() => handleClick()}>
        <Text>Change Name</Text>
      </TouchableOpacity>*/}

      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
      
      />


      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#f5c',
    fontSize: 21,
    fontWeight: 600,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

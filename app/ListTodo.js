import React from 'react';
import {FlatList, View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {observer} from 'mobx-react';

const ListTodo = store => {
  console.log('🚀 ~ store', store.todos);
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        <View>
          <TouchableOpacity
            style={{marginTop: -2}}
            onPress={() => taskListStore.finishItem(index)}>
            <Text> {item.isFinished ? `✅` : `🕘`} </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <Text style={{color: 'black'}}>{item.title}</Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <TouchableOpacity
            style={{marginTop: -2}}
            onPress={() => taskListStore.deleteItem(index)}>
            <Text>{`❌`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        style={styles.container}
        data={[{title: 'ádasdasd', isFinished: true}]}
        keyExtractor={(item, index) => `${index}`}
        renderItem={renderItem}
      />
    </View>
  );
};

export default observer(ListTodo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1F5FE',
    paddingTop: 220,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    borderColor: 'gray',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowColor: 'gray',
    elevation: 2,
  },
});

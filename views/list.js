import React from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';

const data = [
  {name: '买肉', detail: '雪山神猪肉', id: 1, cost: 568},
  {name: '买水', detail: '快乐肥宅水', id: 2, cost: 568},
  {name: '卖肉', detail: '雪山神猪肉22', id: 3, cost: 568},
  {name: '卖肉', detail: '雪山神猪肉3333', id: 4, cost: 568},
  {name: '卖肉', detail: '雪山神猪肉3333', id: 4, cost: 568},
  {name: '卖肉', detail: '雪山神猪肉3333', id: 4, cost: 568},
  {name: '卖肉', detail: '雪山神猪肉3333', id: 4, cost: 568},
  {name: '卖肉', detail: '雪山神猪肉3333', id: 4, cost: 568},
  {name: '卖肉', detail: '雪山神猪肉3333', id: 4, cost: 568},
  {name: '卖肉', detail: '雪山神猪肉3333', id: 4, cost: 568},
  {name: '卖肉', detail: '雪山神猪肉3333', id: 4, cost: 568},
  {name: '卖肉', detail: '雪山神猪肉3333', id: 4, cost: 568},
  {name: '卖肉', detail: '雪山神猪肉3333', id: 4, cost: 568},
  {name: '卖肉', detail: '雪山神猪肉3333', id: 4, cost: 568},
  {name: '卖肉', detail: '雪山神猪肉3333', id: 4, cost: 568},
  {name: '卖肉', detail: '雪山神猪肉3333', id: 4, cost: 568},
  {name: '卖肉', detail: '雪山神猪肉3333', id: 4, cost: 568},
  {name: '卖肉', detail: '雪山神猪肉3333', id: 4, cost: 568},
  {name: '卖肉', detail: '雪山神猪肉3333', id: 4, cost: 568},
  {name: '卖肉', detail: '雪山神猪肉3333', id: 4, cost: 568},
  {name: '卖肉', detail: '雪山神猪肉3333', id: 4, cost: 568},
  {name: '卖肉', detail: '雪山神猪肉3333', id: 4, cost: 568},
  {name: '卖肉', detail: '雪山神猪肉3333', id: 4, cost: 568},
  {name: '卖肉', detail: '雪山神猪肉3333', id: 4, cost: 568},
  {name: '卖肉', detail: '雪山神猪肉3333', id: 4, cost: 568},
  {name: '卖肉', detail: '雪山神猪肉3333', id: 4, cost: 568},
];

export default function PocketList() {
  const _keyExtractor = (item) => item.id.toString();
  const renderItem = ({item}) => {
    return (
      <TouchableNativeFeedback>
        <View style={styles.listItem}>
          <Text>{item.name}</Text>
          <Text>{item.detail}</Text>
          <Text>{item.cost}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  };
  return (
    <>
      <FlatList
        style={styles.mainVIew}
        keyExtractor={_keyExtractor}
        data={data}
        renderItem={renderItem}
      />
    </>
  );
}

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

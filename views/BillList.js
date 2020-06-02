import React, {useState} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  AsyncStorage,
} from 'react-native';
import IncreaseButton from './IncreaseButton';

if (!AsyncStorage.getItem('billList')) {
  AsyncStorage.setItem('billList', JSON.stringify([]));
}

export default function PocketList({navigation}) {
  const [data] = useState(JSON.parse(AsyncStorage.getItem('billList')));
  const _keyExtractor = (item) => item.id.toString();
  const renderItem = ({item}) => {
    return (
      <TouchableNativeFeedback
        onPress={() => navigation.navigate('Bill', {id: item.id})}>
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
      <IncreaseButton onPress={() => navigation.navigate('Bill')} />
    </>
  );
}

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 25,
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

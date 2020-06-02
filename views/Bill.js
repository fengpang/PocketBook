import React, {useState} from 'react';
import {View, Button, Alert, Picker} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {AsyncStorage} from 'react-native';

export default function ({route, navigation}) {
  const [cost, setCost] = useState();
  const [type, setType] = useState();
  const [detail, setDetail] = useState();
  const submitBill = async () => {
    const result = AsyncStorage.mergeItem(
      'billList',
      JSON.stringify([{cost, type, detail}]),
    );
    console.log(result);
  };
  return (
    <>
      <View>
        <TextInput
          keyboardType="number-pad"
          placeholder="cost"
          onChangeText={(text) => setCost(text)}
          value={cost}
        />
        <TextInput
          onChangeText={(text) => setType(text)}
          placeholder="type"
          value={type}
        />
        <TextInput
          onChangeText={(text) => setDetail(text)}
          placeholder="detail"
          value={detail}
        />
        <Picker
          selectedValue={type}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) => setType(itemValue)}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <Button title="submit" onPress={submitBill} />
      </View>
    </>
  );
}

import React from 'react';
import {View, Text, Button} from 'react-native';
export default function ({route, navigation}) {
  const {id} = route.params;
  return (
    <>
      <View>
        <Text>表单页面{id}</Text>
      </View>
    </>
  );
}

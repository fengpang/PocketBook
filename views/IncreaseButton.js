import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function IncreaseButton(props) {
  return (
    <>
      <View style={styles.addButton} onTouchStart={() => props.onPress()}>
        <Text style={styles.icon}>+</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'purple',
    position: 'absolute',
    right: 10,
    bottom: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    // shadowOffset: {width: 40, height: 40},
    // shadowOpacity: 0.8,
    // shadowRadius: 50,
    elevation: 10,
  },
  icon: {
    color: '#fff',
    fontSize: 50,
  },
});

import React from 'react'
import Checkbox from 'expo-checkbox';
import { StyleSheet} from 'react-native';
import { useState } from 'react';

export default function Custom_Checkbox() {
    const [isChecked, setChecked] = useState(false);
  return (
    <Checkbox
    style={styles.checkbox}
    value={isChecked}
    onValueChange={setChecked}
    color={isChecked ? '#3388FF' : undefined}
  />
  )
}

const styles = StyleSheet.create({

    checkbox: {
        borderWidth: 1,
        borderRadius: 6,
        height: 21,
        width: 20,
      
      },
});

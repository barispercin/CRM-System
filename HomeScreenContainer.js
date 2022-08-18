
import React from 'react';
import { Text, View,  } from 'react-native';


const Container1 = (prop) => {
  return (
    <View
      style={{
        top: 40,
        left: 40,
        width: 170,
        height: 167,
        backgroundColor: prop.color,
        borderRadius: 10
      }}
    >
      <Text style={{
        textAlign: "center",
        top: 45,
        fontSize: 25,
        color: "white"
      }}>{prop.text}</Text>
      <View
        style={{
          height: 62,
          width: 62,
          backgroundColor: prop.colorCircle,
          position: 'absolute',
          bottom: -25,
          right: 55,
          borderRadius: 31
        }}
      />
    </View>
  )
}
export default Container1;
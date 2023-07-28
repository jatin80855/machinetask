import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';
import { bgColor } from './Color';
import { hp } from './SizeMAte';

const TextInputCompnet = ({placeholder,onchnage,label,value,onBlur,keyboardType,as}) => {
  return (
    <View>
          <TextInput
          value={value}
      label={label}
    mode='outlined'
    cursorColor='black'
    placeholder={placeholder}
    textColor='#161616'
    outlineColor='#B8FFB2'
   placeholderTextColor={"#B7B6B6"}
   onBlur={onBlur}
    activeOutlineColor={as}
    keyboardType={keyboardType}
    style={{backgroundColor:bgColor,marginTop:10,fontSize:16,height:hp(6.5),}}
      onChangeText={onchnage} 
    />
    </View>
  )
}

export default TextInputCompnet

const styles = StyleSheet.create({})
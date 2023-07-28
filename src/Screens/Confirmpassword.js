import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { wp } from '../Components/SizeMAte';
import TextInputCompnet from '../Components/TextInputCompnet';

const Confirmpassword = (props) => {
  return (
    <View style={{backgroundColor: '#FAFDFF', flex: 1, paddingHorizontal: 15}}>
       <TouchableOpacity
        onPress={() => {
          props.navigation.goBack();
        }}>
        <Image
          source={require('../Imags/arrow-left.png')}
          resizeMode="contain"
          style={{width: wp(8), height: wp(8), position: 'absolute', top: 40}}
        />
      </TouchableOpacity>
      <Text style={{color:"black",fontSize:27,fontFamily:'Poppins-Regular',marginTop:130}}>
      Create A New Password
      </Text>
      <Text style={{color:"#6B6B6B",fontSize:17,fontFamily:'Poppins-Regular',marginTop:10}}>
      Your new password must be different
from previous password.
      </Text>
      <TextInputCompnet
      label={"New Password"}
      placeholder={"Enter Password"}
      as={"#B8FFB2"}
      />
      <TextInputCompnet
      label={"Confirm New Password"}
      placeholder={"Enter Password"}
      as={"#B8FFB2"}
      />
      
<TouchableOpacity
onPress={()=>{
    props.navigation.navigate("Done")
}}
      
        style={{
          backgroundColor: '#5DE750',
          alignSelf: 'center',
          paddingVertical: 3,
          paddingHorizontal: 40,
          borderRadius: 100,
          marginTop: 40,
          shadowColor: 'black',
          elevation: 5,
        }}>
        <Text
          style={{color: 'white', fontSize: 23, fontFamily: 'Poppins-Medium'}}>
       Reset
        </Text>
      </TouchableOpacity>

    </View>
  )
}

export default Confirmpassword

const styles = StyleSheet.create({})
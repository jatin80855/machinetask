import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { wp } from '../Components/SizeMAte'

const Done = (props) => {
  return (
    <View style={{backgroundColor: '#FAFDFF', flex: 1, paddingHorizontal: 15}}>
    <Image source={require("../Imags/Component121.png")} resizeMode='contain' style={{alignSelf:'center',marginTop:180,width:wp(40),height:wp(40)}}/>
   
   <Text style={{fontSize:19,fontFamily:"Poppins-Regular",textAlign:'center',width:wp(70),alignSelf:'center',marginTop:20}}>
   Your Password has been 
reset sucessfully.
   </Text>
   <TouchableOpacity
onPress={()=>{
    props.navigation.navigate("Login")
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

export default Done

const styles = StyleSheet.create({})
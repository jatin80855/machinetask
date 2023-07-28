import {StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import React from 'react';
import {hp, wp} from '../Components/SizeMAte';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import OtpInputs from 'react-native-otp-inputs';

const Otp = (props) => {
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
      <Image
        source={require('../Imags/Group36363.png')}
        resizeMode="contain"
        style={{
          alignSelf: 'center',
          marginTop: 45,
          width: wp(65),
          height: wp(65),
        }}
      />
      <Text
        style={{
          color: 'black',
          fontSize: 27,
          fontFamily: 'Poppins-Regular',
          marginTop: 20,
        }}>
        Enter OTP
      </Text>

      <Text
        style={{color: '#6B6B6B', fontSize: 17, fontFamily: 'Poppins-Regular'}}>
        Please enter your 5 digit verification code for reset password....
      </Text>

<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginHorizontal:30,marginTop:40}}>
    <TextInput style={{width:wp(12),backgroundColor:"#FAFDFF",height:wp(16),borderWidth:2,borderColor:"#B8FFB2",borderRadius:10}}/>
    <TextInput style={{width:wp(12),backgroundColor:"#FAFDFF",height:wp(16),borderWidth:2,borderColor:"#B8FFB2",borderRadius:10}}/>
    <TextInput style={{width:wp(12),backgroundColor:"#FAFDFF",height:wp(16),borderWidth:2,borderColor:"#B8FFB2",borderRadius:10}}/>
    <TextInput style={{width:wp(12),backgroundColor:"#FAFDFF",height:wp(16),borderWidth:2,borderColor:"#B8FFB2",borderRadius:10}}/>
    <TextInput style={{width:wp(12),backgroundColor:"#FAFDFF",height:wp(16),borderWidth:2,borderColor:"#B8FFB2",borderRadius:10}}/>
</View>

<TouchableOpacity
onPress={()=>{
    props.navigation.navigate("Confirmpassword")

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
       Next
        </Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
    borderStyleBase: {
        width: 30,
        height: 45
      },
    
      borderStyleHighLighted: {
        borderColor: "#03DAC6",
      },
    
      underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
      },
    
      underlineStyleHighLighted: {
        borderColor: "#03DAC6",
      },
});

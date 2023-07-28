import {Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {bgColor} from '../Components/Color';
import {hp, wp} from '../Components/SizeMAte';
import TextInputCompnet from '../Components/TextInputCompnet';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Signup = (props) => {

  const LoginVAlidationscema = Yup.object().shape({
    name: Yup.string().min(4,"Tooshort").required("Please Enter at leat 4 checter"),
    lastname: Yup.string().min(4,"Tooshort").required("Please Enter at leat 4 checter"),

    emaila: Yup.string().email("Pease Enter valid email").required("Email is Required"),
    numer : Yup.string().min(10,"Must be exactly 10 digit ").max(10,"Must be exactly 10 digit ").matches(/^[0-9]+$/,"must be only digits").required("please enter your mobile number"),
    Pass: Yup.string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required')
})


  const jatin = async (a)=>{
      try {
          await AsyncStorage.setItem("All",JSON.stringify(a))
         props.navigation.replace("Login")
         console.log("data setSucess")
      } catch (error) {
          console.log(error,"jatin error")
      } 
  }

  return (
    <Formik
    initialValues={{ emaila: '' ,Pass:"",name:"",lastname:"",numer:""}}
    validateOnMount={true}
    onSubmit={(a)=>jatin(a)}
    validationSchema={LoginVAlidationscema}
  >
     {({ handleChange, handleBlur, handleSubmit, values ,touched,isValid,errors}) => (
    <View style={{backgroundColor: bgColor, flex: 1, paddingHorizontal: 20}}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <Image
        source={require('../Imags/Component1.png')}
        resizeMode="cover"
        style={{width: wp(76), height: hp(20), position: 'absolute', right: 0}}
        />
        <ScrollView>

     
      <Text
        style={{
          color: '#161616',
          fontSize: 27,
          fontFamily: 'Poppins-Regular',
          marginTop: 140,
        }}>
        Welcome!!
      </Text>
      <Text
        style={{
          color: '#5E9959',
          fontSize: 30,
          fontFamily: 'Poppins-SemiBold',
        }}>
        Sign up
      </Text>

      <TextInputCompnet
        placeholder={'Enter First Name'}
        label={'First Name'}
        // as={'#B8FFB2'}
        value={values.name}
        onchnage={handleChange("name")}
        as={!errors.name ? "#B8FFB2" :"red"}

      />
      {(errors.name && touched.name)&& <Text style={{color:"red",fontSize:14}}>{errors.name}</Text>}

     
      <TextInputCompnet
        placeholder={'Enter Last Name'}
        label={'Last Name'}
        as={'#B8FFB2'}
        // value={LastName}
        value={values.lastname}
        onchnage={handleChange("lastname")}
        />
        {(errors.lastname && touched.lastname)&& <Text style={{color:"red",fontSize:14}}>{errors.lastname}</Text>}
      <TextInputCompnet
        placeholder={'Example@Gmail.com'}
        label={'Email Id'}
        onchnage={handleChange("emaila")}
        onBlur={handleBlur("emaila")}
        value={values.emaila}
        keyboardType={"email-address"}
        as={!errors.emaila ? "#B8FFB2":"red"}
        />
      {(errors.emaila && touched.emaila)&& <Text style={{color:"red",fontSize:14}}>{errors.emaila}</Text>}

      <TextInputCompnet
        placeholder={'Enter Number'}
        label={'Number'}
        keyboardType={"numeric"}
        as={'#B8FFB2'}
        value={values.numer}
        onchnage={handleChange("numer")}
        />

        {(errors.numer && touched.numer)&& <Text style={{color:"red",fontSize:14}}>{errors.numer}</Text>}

       <TextInputCompnet
        placeholder={'Enter Password'}
        label={'Password'}
        keyboardType={"numeric"}
   
        value={values.Pass}
        onBlur={handleBlur("Pass")}
        as={!errors.Pass ? "#B8FFB2" :"red"}
        onchnage={handleChange("Pass")}
      /> 
       {(errors.Pass && touched.Pass)&& <Text style={{color:"red",fontSize:14}}>{errors.Pass}</Text>}




<TouchableOpacity
    onPress={handleSubmit}
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
          Sign up
        </Text>
      </TouchableOpacity>
      </ScrollView>


    </View>
    )}
    </Formik>
  );
};

export default Signup;

const styles = StyleSheet.create({});

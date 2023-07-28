import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React,{useEffect, useState} from 'react';
import {bgColor} from '../Components/Color';
import {hp, wp} from '../Components/SizeMAte';
import TextInputCompnet from '../Components/TextInputCompnet';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';



const LoginVAlidationscema = Yup.object().shape({
    emaila: Yup.string().email("Pease Enter valid email").required("Email is Required"),
    Pass: Yup.string().min(8,({min})=>`Password must be at least ${min} characters`)
})

const Login = (props) => {
  useEffect(() => {
  getdata();
  }, [])
  const [Data, setData] = useState("")
  const getdata = async ()=>{
    const jatin = await AsyncStorage.getItem("All")
    setData(JSON.parse(jatin))
  }
  const pass = Data.Pass

    // const jatin = async (a)=>{
    //     try {
    //         await AsyncStorage.setItem("Email",JSON.stringify(a))
    //         await AsyncStorage.setItem("TOKEN", "asd")
    //        props.navigation.replace("Dashboard")
    //     } catch (error) {

    //         console.log(error,"jatin error")
    //     }}



const jatin =async(a)=>{
  
 if (a.Pass === pass && a.emaila === Data.emaila) {
  await AsyncStorage.setItem("TOKEN","asd" )
  props.navigation.navigate("Dashboard",)
  
 }
 else{
  Alert.alert("wrong data")
 }




}
  return (

    <Formik
    initialValues={{ emaila: '' ,Pass:""}}
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
        Sign In
      </Text>

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
        placeholder={'Enter Password'}
        label={'Password'}
        onchnage={handleChange("Pass")
        }
        onBlur={handleBlur("Pass")}
        value={values.Pass}
        as={!errors.Pass ? "#B8FFB2" :"red"}

      />
      {(errors.Pass && touched.Pass)&& <Text style={{color:"red",fontSize:14}}>{errors.Pass}</Text>}

      <TouchableOpacity
      onPress={()=>{
        // props.navigation.navigate("FprgetPas")
      }}
        style={{
          alignSelf: 'flex-end',
          marginVertical: 9,
          backgroundColor: bgColor,
        }}>
        <Text
          style={{
            color: '#B7B6B6',
            fontFamily: 'Poppins-Regular',
            fontSize: 15,
          }}>
          Forget password?
        </Text>
      </TouchableOpacity>
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
          Sign In
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          alignSelf: 'center',
          paddingVertical: 12,
          fontSize: 15,
          fontFamily: 'Poppins-Medium',
          color: '#797884',
        }}>
        or
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <Image
            source={require('../Imags/instagram.png')}
            style={{width: wp(10), height: wp(10), marginHorizontal: 6}}
            resizeMode="center"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../Imags/facebook.png')}
            style={{width: wp(10), height: wp(10), marginHorizontal: 6}}
            resizeMode="center"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../Imags/twitter.png')}
            style={{width: wp(10),height:wp(10),marginHorizontal:6}}
            resizeMode="center"
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 80,
        }}>
        <Text
          style={{
            alignSelf: 'center',
            color: '#161616',
            fontSize: 15,
            fontFamily: 'Poppins-Regular',
          }}>
          Don’t have an account ?{' '}
        </Text>

        <TouchableOpacity 
        onPress={()=>{
          props.navigation.navigate("Signup")
        }}>
          <Text
            style={{
              color: '#5E9959',
              fontFamily: 'Poppins-SemiBold',
              fontSize: 18,
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>









    </View>
       )}
       </Formik>
  );
};

export default Login;

const styles = StyleSheet.create({});

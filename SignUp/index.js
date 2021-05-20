
import React, { useState, useSelector,} from 'react';

import {
    DeviceEventEmitter,
    StyleSheet,
    ScrollView,
    View,
    Text,
    ActivityIndicator,
    StatusBar,
    Image,
    Alert,
   

} from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-elements'
import { SECONDARY } from '../../color'
import { Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from '../../style'
import Svg, { Path, G } from 'react-native-svg'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CustomText } from '../../typo'
import { URL } from '../../color'
import { signup } from '../../redux/actions/SignUpAction'
import { set } from 'react-native-reanimated';
import axios from 'axios'
import {useDispatch} from 'react-redux'
const SignUpScreen = ({ navigation }) => {
    // useEffect(() => {




    // }, [])
    const dispatch=useDispatch();
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [usererror, setUserError] = useState('')
    const [emailerror, setEmailError] = useState('')
    const [passworderror, setPassError] = useState('')
    function post(isValidEmail) {
        setLoading(true)
        //  console.log('here')
        // var obj = {}
        // console.log(isValidEmail)
        // if (isValidEmail) {
        //   obj.email = email
        //   obj.contactno = ""

        // } else {
        //   obj.contactno = email
        //   obj.email = ""
        // }
        // obj.name = name
        // obj.password = password
        // obj.fcm_token=token
        //console.log(obj)

        if (!username || !username.trim().length) {
            // Alert.alert('ddeded')
            setUserError('Please enter name')
            setLoading(false)
            return
        }

        else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) || !email || !email.trim().length) {

            setUserError('')
            setEmailError('Please enter valid email')
            // Alert.alert(email)
            setLoading(false)
            return
        }

        else if (!password) {
            setEmailError('')
            setPassError('Password Required')
            setLoading(false)
            return

        }
        //else if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)))
        else if (!password || password.trim().length < 6) {
            setEmailError('')
            setPassError('Must contain atleast 6 character')
            setLoading(false)
            return
        }

        else {
            dispatch(signup(username,email,password)).then((response)=>{
               // console.log('signup',response)
             //   console.log(JSON.stringify(response.data));
                       setLoading(false)
                         navigation.navigate('Otp', { flow: 'SignUp', id: response.data.list._id })
    

            })
            .catch((error)=>{
                console.log(error)
            });
            // const axios = require('axios');
            // let data = JSON.stringify({ "faceBook_id": "", "password": password, "googleI_id": "", "name": username, "email": email, "avatar": "", "phone": "6667778882", "location": "mp" });

            // let config = {
            //     method: 'post',
            //     url: `${URL}/user/signup`,
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     data: data
            // };

            // axios(config)
            //     .then(async (response) => {
            //         // await AsyncStorage.setItem('token', '')
            //         console.log(JSON.stringify(response.data));
            //         setLoading(false)
            //         navigation.navigate('Otp', { flow: 'SignUp', id: response.data.list._id })


            //     })
            //     .catch((error) => {
            //         console.log(error);
            //         setLoading(false)
            //     });

        }

    }
    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{}}>


                <View style={{
                    left: 124,
                    right: 124,
                    marginTop: '10%',

                }}>
                    <Image
                        style={{ height: 30, width: 100 }}
                        source={require('../../Assets/logo/CarWazi.png')}
                    />
                </View>
                <View style={{
                    left: 110,
                    marginTop: '2%',
                    width: 233,
                    height: 179,
                }}>
                    <Image
                        style={{ height: 120, width: 120 }}
                        source={require('../../Assets/logo/SignUp.png')}
                    />
                </View>
                <View style={{
                    left: 24,
                    marginTop: '-10%',
                }}>
                    <CustomText style={{
                        fontFamily: 'Poppins-Regular',
                        fontSize: 29,

                        color: '#578AE4'
                    }}>Create an Account </CustomText>
                </View>

                <View >
                    <TextInput


                        value={username}
                        onChangeText={(text) => setUsername(text)}
                        label={'Username'}
                        theme={{ colors: { primary: '#212121' } }}
                        placeholder={'\Username'}
                        style={{


                            height: 50.5,
                            width: 321.5,
                            fontFamily: 'Poppins-Regular',
                            left: 24,


                            backgroundColor: '#ffffff'
                        }}

                        fontFamily={'Poppins-Regular'}

                    />
                    <View style={{ left: 24, }}>

                        <CustomText style={{ color: 'red' }}>{usererror}</CustomText>
                    </View>
                    <TextInput
                        autoCapitalize={'none'}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        label={'Email id/Phone number'}
                        theme={{ colors: { primary: '#212121' } }}
                        placeholder={'Email id/Phone number'}
                        style={{


                            height: 50.5,
                            width: 321.5,
                            fontFamily: 'Poppins-Regular',
                            left: 24,


                            backgroundColor: '#ffffff'
                        }}

                        fontFamily={'Poppins-Regular'}

                    />
                    <View style={{ left: 24 }}>
                        <CustomText style={{ color: 'red' }}>{emailerror}</CustomText>
                    </View>
                    <TextInput
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        theme={{ colors: { primary: '#212121' } }}
                        label={'Password'}
                        placeholder={'Password'}
                        style={{


                            height: 50.5,
                            width: 321.5,
                            fontFamily: 'Poppins-Regular',
                            left: 24,


                            backgroundColor: '#ffffff'
                        }}
                        right={<TextInput.Icon
                            name='eye'
                            size={24}
                        />
                        }

                    />
                    <View style={{ left: 24 }}>
                        <CustomText style={{ color: 'red' }}>{passworderror}</CustomText>
                    </View>
                </View>


                <View style={{

                    marginTop: '2%',

                }}>
                    <Button
                        // onPress={()=>navigation.navigate('Otp',{flow:'SignUp'})}
                        loading={loading ? true : false}
                        onPress={() => post()}
                        title='Continue' titleStyle={{ fontSize: 16 }} buttonStyle={style.signupbutton} />
                </View>
                <View style={{ marginTop: '2%', alignSelf: 'center' }}>
                    <CustomText style={{ fontSize: 14 }}>Or continue using</CustomText>
                </View>
                <View style={{
                    marginTop: '2%',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly'
                }}>
                    <View>

                        <Image
                            source={require('../../Assets/logo/facebook.png')}
                        />


                    </View>
                    <View>

                        <TouchableOpacity onPress={() => Alert.alert('google')}>
                            <Image

                                source={require('../../Assets/logo/google.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: '2%', justifyContent: 'center' }}>
                    <CustomText style={{ fontSize: 14, }}>Already have an account? </CustomText>
                    <CustomText onPress={() => navigation.navigate('SignIn')} style={{ color: SECONDARY, fontSize: 14, }}>Sign in</CustomText>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
};



export default SignUpScreen;

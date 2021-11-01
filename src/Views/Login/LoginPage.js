import React, { useState } from 'react';
import { View, Text, Image, Dimensions, TouchableHighlight, TextInput, StatusBar, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../actions';

function LoginPage() {
  debugger;
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  });
  const { username, password } = inputs;
  const dispatch = useDispatch();

  function handlepasswwordChange(e) {
    setInputs(inputs => ({ ...inputs, ['password']: e }));
  }

  function handleusernameChange(text) {
    setInputs(inputs => ({ ...inputs, ['username']: text }));
  }

  function validateEmail(text) {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      console.log("Email is Not Correct");
      return false;
    }
    else {
      console.log("Email is Correct");
      return true;
    }
  }

  function handleSubmit(e) {
    if (username && password) {
      if (validateEmail(username))
        dispatch(userActions.login(username, password));
      else
        alert('enter valid email');
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#e8e8e8' }}>

      <StatusBar hidden />

      <View style={{ flex: 4, justifyContent: 'center', borderWidth: 0, alignItems: 'center', margin: 10 }} >
        <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={styles.Imagestyle} />
      </View>

      <View style={styles.formView}>
        <View style={styles.usernameView}>
          <TextInput placeholder='Username' placeholderTextColor="gray"
            onChangeText={handleusernameChange}
            value={username}
            style={{ marginLeft: 20, fontSize: 18, color: "#000" }} />
        </View>
        <View style={styles.passwordView}>
          <TextInput placeholder='Password' placeholderTextColor="gray" secureTextEntry={true}
            style={{ marginLeft: 20, fontSize: 18, color: '#000' }}
            onChangeText={handlepasswwordChange}
            value={password}
          />
        </View>
      </View>

      <View style={styles.buttonContainer} >
        <TouchableHighlight style={styles.buttonStyle} onPress={handleSubmit}>
          <Text style={{ fontSize: 15, color: '#000', fontWeight: 'bold' }} >SIGN IN</Text>
        </TouchableHighlight>
      </View>



    </View>
  );
}

export default LoginPage;

const styles = {
  formView: {
    flex: 3,
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    alignItems: 'center',
    alignContent: 'center',
    borderWidth: 0,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10
  },
  usernameView: {
    marginTop: 5, flexDirection: 'row', backgroundColor: '#fff',
    alignItems: 'center', borderColor: 'gray', borderWidth: .7,
    borderRadius: Dimensions.get("screen").height / 15,
    height: Dimensions.get('window').height / 13,
    width: Dimensions.get('window').width / 1.1
  },
  passwordView: {
    marginTop: 10, flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: Dimensions.get("screen").height / 15,
    borderColor: 'gray', borderWidth: .7,
    height: Dimensions.get('window').height / 13,
    width: Dimensions.get('window').width / 1.1
  },
  buttonContainer: { flex: 2, justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'transparent' },
  errorTextStyel: {
    fontSize: 17,
    alignSelf: 'center',
    color: 'red'
  },
  Imagestyle:
  {
    width: Dimensions.get('window').width / 1.4,
    height: Dimensions.get('window').width / 1.4,
    // borderRadius:( Dimensions.get('window').width/1.8)/2,
    resizeMode: 'contain',

    // opacity: 0.9
  },
  buttonStyle: {
    height: Dimensions.get('window').height / 14,
    width: Dimensions.get('window').width / 1.4,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fc2b74',
    borderWidth: 1
  },
  buttonsArea: {
    flex: 3,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
};
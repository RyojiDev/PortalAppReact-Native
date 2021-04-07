import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

import { useNavigation} from '@react-navigation/native';

const Login = () => {

  const navigation = useNavigation();

  const acessar = () => {
    alert("Acessar")
  }

  const newUser = () => {
    alert("funcionou");
    navigation.navigate("NewUser")
  }
  
  return (
   <View style={styles.container}>
     <View style={styles.logo}>
       <Image source={require('../../assets/logo.png')}/>
     </View>

     <TextInput
                style={styles.inputForm}
                placeholder="Usuário"
                autoCorrect={false}
                onChangeText={() => { }}
            />

            <TextInput
                style={styles.inputForm}
                placeholder="Senha"
                autoCorrect={false}
                onChangeText={() => { }}
            />


     <TouchableOpacity style={styles.btnSubmitForm} onPress={acessar}>
       <Text style={styles.txtSubmitForm}>
         Acessar
       </Text>
     </TouchableOpacity>

     <Text style={styles.linkNewUser}
     onPress={newUser}
     >
       Cadastrar
     </Text>
   </View>
  )
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#161616',
  },
  logo: {
    paddingBottom: 20
  },
  inputForm: {
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 18,
    borderRadius: 7,
    padding: 10,
},
  btnSubmitForm: {
    backgroundColor: '#ebb105',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  txtSubmitForm: {
    color: '#fff',
    fontSize: 22
  },
  linkNewUser: {
    color: '#fff',
    marginTop: 15,
    fontSize: 18,
  }
})

export default Login;
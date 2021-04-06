import React from 'react';
import { View, Text, Button} from 'react-native';

import { useNavigation} from '@react-navigation/native';

const NewUser = () => {

  const Login = () => {
    alert("funcionou");
    navigation.navigate("Login")
  }
  
  const navigation = useNavigation();
  
  
  
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Pagina de Usuario</Text>
      <Button title="Voltar" onPress={Login}></Button>
    </View>
  )
} 

export default NewUser;
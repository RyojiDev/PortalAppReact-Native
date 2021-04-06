import React from 'react';
import { View, Text, Button} from 'react-native';

import { useNavigation} from '@react-navigation/native';

const Login = () => {

  const navigation = useNavigation();

  const NewUser = () => {
    alert("funcionou");
    navigation.navigate("NewUser")
  }
  
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Pagina de login</Text>
      <Button title="cadastrar" onPress={NewUser}></Button>
    </View>
  )
} 

export default Login;
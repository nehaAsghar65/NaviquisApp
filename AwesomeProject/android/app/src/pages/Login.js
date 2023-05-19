import React from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation = useNavigation();
  return (<View>
    <Text>Login</Text>
  </View>);
}

export default Login

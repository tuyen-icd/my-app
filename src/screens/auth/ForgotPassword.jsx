import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { useRoute } from '@react-navigation/native'


const ForgotPassword = () => {
    const route = useRoute();
    console.log("route", route)
  return (
    <View>
      <Text>ForgotPassword</Text>
      <Text>Params: {route.params.userId}</Text>
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({})
import { View, Text, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const useGoBack = (screenName= '', option = {}) => {
const navigation = useNavigation();

const goBack = () => {
    if(!screenName) return;

    navigation.navigate(screenName as never, option as never);
}

useEffect(() => {
    const handleBackButtonClick = () => {
        if(screenName) {
            goBack();
        }
        return false;
    }

    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
        BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    }

}, [])


  return goBack;
}

export default useGoBack
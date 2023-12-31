import React from 'react'
import { Button } from 'react-native-paper';
import Colors from '../constants/Colors';
import { width } from '../constants/Layout';
import { PrimaryButtonProps } from '../utils/PropTypes';

const PrimaryButton = ({title,disabled,onPress}:PrimaryButtonProps) => {
    return (
        <Button
        style={{
            width:width/2,
            justifyContent:'center',
            alignSelf:'center',
        }}
        labelStyle={{
            fontSize:18,
            fontWeight:'bold'
        }}
        textColor={'#fff'}
        buttonColor={Colors.primary}
         mode="elevated"
         onPress={onPress}
         disabled={disabled}
         
         >
            {title}
        </Button>
    )
}
export default PrimaryButton;
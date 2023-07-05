import React from 'react';
import { TextInput, TextInputProps } from 'react-native-paper';
import Colors from '../constants/Colors';

const AppTextInput: React.FC<TextInputProps> = ({ placeholder, right, secureTextEntry,keyboardType }) => {
  return (
    <TextInput
      style={[
        {
          backgroundColor: '#fff',
          marginBottom: 15
        }
      ]}
      secureTextEntry={secureTextEntry}
      mode="outlined"
      activeOutlineColor={Colors.primary}
      outlineColor={Colors.gray}
      label={placeholder}
      right={secureTextEntry ? <TextInput.Icon icon='eye' /> : null}
      keyboardType={keyboardType}
      
    />
  )
}

export default AppTextInput;
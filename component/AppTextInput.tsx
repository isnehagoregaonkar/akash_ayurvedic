import React from 'react';
import { TextInput, TextInputProps } from 'react-native-paper';
import Colors from '../constants/Colors';

const AppTextInput: React.FC<TextInputProps> = ({ placeholder, value, secureTextEntry,keyboardType, editable, autoCapitalize, textContentType, onChangeText, autoFocus }) => {
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
      editable={editable}
      value={value}
      autoCapitalize={autoCapitalize}
      textContentType={textContentType}
      onChangeText={onChangeText}
      autoFocus={autoFocus}
    />
  )
}

export default AppTextInput;
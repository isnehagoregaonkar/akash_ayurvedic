import React from 'react';
import { Checkbox } from 'react-native-paper';
import Colors from '../constants/Colors';

const AppCheckbox = () => {
    const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
      color={Colors.primary}
      uncheckedColor={Colors.gray}
    />
  )
}

export default AppCheckbox
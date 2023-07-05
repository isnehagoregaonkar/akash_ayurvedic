import React from 'react';
import { Button } from 'react-native-paper';

type TextButtonProps = {
    title: string
}

const AppTextButton = ({ title }: TextButtonProps) => {
    return (
        <Button
            style={{ alignSelf: 'flex-end', padding: 0, margin: 0 }}
            mode="text"
            onPress={() => console.log('Pressed')}
            textColor={'#8f9195'} 
            rippleColor={'#fff'}
            >
            {title}
            </Button>
    )
}

export default AppTextButton
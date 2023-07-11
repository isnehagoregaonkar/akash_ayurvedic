import React from 'react';
import { IconButton } from 'react-native-paper';

type IconButtonProps = {
    containerColor?:string
    color: string
    icon: string
    mode: 'outlined' | 'contained' | 'contained-tonal'
}

const AppIconButton = ({ containerColor, color, icon, mode }: IconButtonProps) => {
    return (
        <IconButton
            mode={mode}
            icon={icon}
            iconColor={color}
            containerColor={containerColor}
            size={20}
            onPress={() => console.log('Pressed')}
        
        />
    )
}

export default AppIconButton
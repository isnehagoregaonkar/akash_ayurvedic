import React from 'react';
import { Appbar } from 'react-native-paper';

type AppBarProps = {
    title: string
}

const AppBar = ({title}:AppBarProps) => {
    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={() => { }} />
            <Appbar.Content title={title} />
            <Appbar.Action icon="magnify" onPress={() => { }} />
        </Appbar.Header>
    )
}

export default AppBar
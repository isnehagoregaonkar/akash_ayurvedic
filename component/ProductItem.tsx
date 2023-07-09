import { } from 'moti';
import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import Colors from '../constants/Colors';
import { images } from '../constants/data';
import { width } from '../constants/Layout';
import AppIconButton from './AppIconButton';

type ProductItemProps = {
    index: number,
    item: any,
    isCat?:boolean
}

const ProductItem = ({ index, item, isCat}: ProductItemProps) => {
    return (
        <View style={[styles.container, {
            backgroundColor: index === 0 ? '#e7f6e4' : '#f6f6f6',
        }]}>
            <Image
                source={{
                    uri: images[2]
                }}
                style={{
                    width: 150,
                    height: 110,
                    alignSelf: 'center'
                }}
            />
            <Text
            numberOfLines={1}
            style={{
                fontWeight: 'bold',
                fontSize: 18,
                paddingTop: 10,
                paddingBottom: 5
            }}>{item.title}</Text>
            <Text
                numberOfLines={2}
                ellipsizeMode='tail'
                style={{
                    fontSize: 12,
                    paddingTop: 5,
                    paddingBottom: 5,
                    color: Colors.text,
                    width: width * 0.4
                }}>{item.description}</Text>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <View style={{
                    alignItems: 'flex-start'
                }}>
                    <Text style={{
                        fontWeight: '600',
                        fontSize: 18,
                        color: Colors.primary
                    }}>₹ {item.price}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end'
                }}>
                    <AppIconButton mode='contained' icon='heart' color={Colors.primary} containerColor={Colors.background} />
                    <AppIconButton mode='contained' icon='cart' color={Colors.background} containerColor={Colors.primary} />
                </View>
            </View>
        </View>
    )
}

export default ProductItem;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 15,
        borderRadius: 15,
        elevation: 1,      
        width: width * 0.55,
    }
})
import React, { useEffect, useRef, useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'
import { MotiView } from 'moti'

type AppListViewProps = {
    data: any[]
}
type ItemProps = {
    item: any,
    index: number
}

const AppListView = ({ data }: AppListViewProps) => {
    const ref = useRef<FlatList>(null);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        ref.current?.scrollToIndex({
            index,
            animated: true,
            viewPosition: 0.5,
        })
    }, [index]);
    return (
        <FlatList
            ref={ref}
            data={data}
            initialScrollIndex={index}
            style={{ flexGrow: 0, marginBottom:5 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item,index:findex}) => {
                return (
                    <TouchableOpacity
                      onPress={() => { 
                         setIndex(findex);
                     }}>
                         <MotiView
                         animate={{
                             backgroundColor: findex === index ? Colors.primary : Colors.background,
                             opacity:findex===index?1:0.5
                         }}
                         transition={{
                             duration:500
                         }}
                          style={{
                             padding: 8,
                             borderColor:Colors.primary,
                             borderWidth: 2,
                             margin: 5,
                             borderRadius: 10,
                             width:100,
                             justifyContent:'center',
                             alignItems:'center'
                            //  backgroundColor: findex === index ? Colors.primary : Colors.background,
                         }}>
                             <Text style={{ color: findex === index ? Colors.background : Colors.primary, fontWeight: '700' }}>{item.title}</Text>
                         </MotiView>

                     </TouchableOpacity>
                )
            }}
        />
    )
}

export default AppListView;
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,

    }
});

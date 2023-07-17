import { NavigationProp } from "@react-navigation/native";

export interface RouterProps {
    navigation: NavigationProp<any, any>;
}

export type PrimaryButtonProps={
    title:string,
    disabled:boolean
    onPress:()=>void
    
}

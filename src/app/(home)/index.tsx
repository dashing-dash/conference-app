import { Redirect, Href } from 'expo-router';

export default function TabIndex() {    
    return <Redirect href={"/(home)/profile/" as Href} />;
}

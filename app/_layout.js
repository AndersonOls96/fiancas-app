import { useEffect } from "react";
import { Stack, router, useSegments } from 'expo-router'
import { ActivityIndicator, View } from 'react-native'
import { useAuth } from '../src/context/AuthContext'


export default function RootLayout() {
    const { user, loading } = useAuth();
    const segments = useSegments();

    useEffect(() => {
        if (loading) return;

        const inAuthGroup = segments[0] === '(auth)'

        if (!user && !inAuthGroup) {
            router.replace('/(auth)/login')
        } else if (user && inAuthGroup) {
            router.replace('/(tabs)/home')
        }
    }, [user, loading, segments])


    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#800ff" />
            </View>
        )
    }

    return <Stack screenOptions={{ headerShown: false }}/>

}
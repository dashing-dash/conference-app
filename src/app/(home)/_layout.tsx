import { Tabs, useRouter, useFocusEffect } from "expo-router";
import React, { useCallback } from 'react';
import { BackHandler } from 'react-native';



export default function HomeLayout() {    

    return (
        <Tabs>
            {/* The index screen is the default screen, hide it */}
            <Tabs.Screen name="index" options={{ href: null }} />
            <Tabs.Screen
                name="notifications"
                options={{ tabBarLabel: 'Notifications', headerShown: false }}
              />
            <Tabs.Screen
                name="profile"
                options={{ headerShown: false, title: 'Profile' }}
            />
        </Tabs>
    );
}
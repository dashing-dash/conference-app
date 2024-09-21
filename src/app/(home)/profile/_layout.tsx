import { Stack } from 'expo-router';

export default function ProfileStack() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Profile', 
          headerShown: false // This removes the header
        }} 
      />
    </Stack>
  );
}

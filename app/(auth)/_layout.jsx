import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="about-user"
          options={{
            headerShown: false
          }}
        />
      </Stack>

      <StatusBar backgroundColor='#ffffff' style='black' />
    </>
  )
}

export default AuthLayout
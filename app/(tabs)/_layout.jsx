import { Tabs } from "expo-router"
import { View, Text, Image } from "react-native";

import { icons } from '../../constants'

const Tab = ({ icon, color, label }) => {
    return (
        <View style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                style={{ width: 25, height: 25, marginBottom: 5 }}
            />
            <Text style={{ color: color, fontFamily: "SF-Medium", fontSize: 13, }}>{label}</Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
        tabBarLabelStyle: { fontFamily: "SF-Semibold", fontSize: 12 },
        headerTitleStyle: { fontFamily: "SF-Medium" },
        headerTitleAlign: "center",
        tabBarShowLabel: false,
        tabBarStyle: {
            borderTopColor: "#ffffff",
            height: 84
        }
    }}>
        <Tabs.Screen name="index" options={{ 
            headerTitle: "главная",
            tabBarIcon: ({ color }) => (
                <Tab 
                    icon={icons.home}
                    color={color}
                    label={"главная"}
                />
            )
        }}/>
        <Tabs.Screen name="profile" options={{
            headerTitle: "ваш профиль",
            title: "профиль",
            tabBarIcon: ({ color }) => (
                <Tab 
                    icon={icons.profile}
                    color={color}
                    label={"главная"}
                />
            )
        }}/>
    </Tabs>
  )
}

export default TabsLayout
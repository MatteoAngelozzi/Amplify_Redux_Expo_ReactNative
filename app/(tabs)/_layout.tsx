import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  size?: number;
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          height: 85,
          backgroundColor: Colors[colorScheme ?? 'light'].header,
        },
        headerTintColor: Colors[colorScheme ?? 'light'].text,
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        }
      }}>
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <TabBarIcon name="gear" size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          headerTransparent: true,
          headerTitle: '',
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" size={35} color={color} />,
        }}
      />
      <Tabs.Screen
        name="contactManager"
        options={{
          title: 'Contact Manager',
          tabBarIcon: ({ color }) => <TabBarIcon name="phone" size={25} color={color} />,
        }}
      />
    </Tabs>
  );
}

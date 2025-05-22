import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarIcon: ({ color, size }) => {
          let iconName: any = 'ellipse';
          if (route.name === 'home') iconName = 'walk';
          if (route.name === 'stats') iconName = 'bar-chart';
          if (route.name === 'profile') iconName = 'person';
          if (route.name === 'calories') iconName = 'flame'; // kalori ekranı için
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'gray',
      })}
      
    />
    
  );
}

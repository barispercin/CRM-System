import React from 'react';
import PatatesScreen from './PatatesScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import CallScreen from './CallScreen';
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';
import CustomerListContainer from './CustomerListContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import NewCustomerScreen from './NewCustomerScreen';
import CustomerCardScreen from './CustomerCardScreen';
import EditCustomerScreen from './EditCustomerScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';


const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator  >
      <HomeStack.Screen name="Drawer" component={Home} options={{
        headerShown: false,
      }} />
      <HomeStack.Screen name="CustomerListContainer" component={CustomerListContainer} options={{ title: 'Müşteri Listesi' }} />
      
      <HomeStack.Screen name="CustomerCardScreen" component={CustomerCardScreen} options={{ title: 'Müşteri Bilgileri' }} />
      <HomeStack.Screen name="EditCustomerScreen" component={EditCustomerScreen} options={{ title: 'Müşteri Bilgilerini Düzenle' }} />
      <HomeStack.Screen name="NewCustomerScreen" component={NewCustomerScreen} options={{ title: 'Yeni Müşteri Ekle', headerStyle: { height: 100, backgroundColor: "#4941A2" }, headerTintColor: "white" }} />
      <HomeStack.Screen name="DrawerScreen" component={DrawerScreen} options={{ title: 'Müşteri Bilgileri' }} />
    </HomeStack.Navigator>
  );
}

const Drawer = createDrawerNavigator();
const DrawerScreen = ({ navigation }) => {
  return (
    <Drawer.Navigator >
      <Drawer.Screen  name="Home" component={Home} />
      <Drawer.Screen   name="NewCustomerScreen" component={NewCustomerScreen} />

      <Drawer.Screen options={{
    drawerItemStyle: { height: 0 }
  }}name="CustomerCardScreen" component={CustomerCardScreen} />
      <Drawer.Screen options={{
    drawerItemStyle: { height: 0 }
  }} name="EditCustomerScreen" component={EditCustomerScreen} />
      <Drawer.Screen  name="CustomerListContainer" component={CustomerListContainer} />
    </Drawer.Navigator>
  )
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size, text }) => {
            let iconName;
            if (route.name === 'Drawer') {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === 'Ayarlar') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Profil') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Arama Geçmişi') {
              iconName = focused ? 'call' : 'call-outline';
            }
            return <Ionicons name={iconName} size={35} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
        })}
      >
        <Tab.Screen name="Drawer" component={DrawerScreen} />
        <Tab.Screen name="Arama Geçmişi" component={CallScreen} />
        <Tab.Screen name="Ayarlar" component={SettingsScreen} />
        <Tab.Screen name="Profil" component={ProfileScreen} />
      </Tab.Navigator>

    </NavigationContainer>
  );
}
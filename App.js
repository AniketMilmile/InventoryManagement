import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/Home'
import Settings from './Screens/Settings'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from './Components/Header';
import MyComponent from './Screens/Customer';

const Drawer = createDrawerNavigator();
export default function App() {
return (
<NavigationContainer>
<View>
          <Header />
        </View>
<Drawer.Navigator initialRouteName="Home">
<Drawer.Screen name="STORE ORDER FORM" component={HomeScreen} />
<Drawer.Screen name="MANAGE ORDERS" component={Settings} />
<Drawer.Screen name="CUSTOMER" component={MyComponent} />
</Drawer.Navigator>
</NavigationContainer>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

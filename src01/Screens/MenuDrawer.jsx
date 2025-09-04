import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'   
import LinearGradient from 'react-native-linear-gradient'
import { COLORS } from '../Constant/Colors'
import { useNavigation } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import AccountScreen from './AccountScreen'
import MainHome from './HomeScreen'
import Privacy from './Privacy'
import Icon from 'react-native-vector-icons/MaterialIcons'

const MenuDrawer = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Home"
                component={MainHome}
                options={{
                    drawerIcon: ({ color }) => (
                        <Icon name="home" size={24} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Privacy"
                component={Privacy}
                options={{
                    drawerIcon: ({ color }) => (
                        <Icon name="lock" size={24} color={color} />
                    ),
                }}
            />
            {/* <Text>Menu</Text> */}
            {/* <Drawer.Screen name="Profile" component={AccountScreen} /> */}
            {/* <Drawer.Screen name="Settings" /> */}
        </Drawer.Navigator>
    );
}


export default MenuDrawer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    subContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        // color: COLORS.white,
        fontSize: 18,
        textAlign: 'center'
    }
})
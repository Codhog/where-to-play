import { MaterialCommunityIcons } from '@expo/vector-icons';
import { UserSettingPage } from './UserSettingPage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

export function Tabs() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            barStyle={{ backgroundColor: '#694fad' }}
        >
            <Tab.Screen
                name="Feed"
                component={UserSettingPage}
                options={{
                    tabBarLabel: 'Map',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="map" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={UserSettingPage}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={UserSettingPage}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

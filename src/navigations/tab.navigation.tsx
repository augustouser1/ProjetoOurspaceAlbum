import {createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {Mensagem} from "../SCREENS/mensagem"
import { Home } from '../SCREENS/Homero';
import {AntDesign, Ionicons} from '@expo/vector-icons';
import { MessageNavigation } from './message.navigation';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import {Camera} from '../SCREENS/Camera';
import {Images} from '../SCREENS/Imagens';
import Entypo from '@expo/vector-icons/Entypo';
type TabParamList = {
    Home: undefined
    Mensagem: undefined
    Camera: undefined
    Imagens: undefined
}

type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Home'>

export type TabTypes = {
    navigation: TabScreenNavigationProp
}

export function TabNavigation(){
    const Tab = createBottomTabNavigator<TabParamList>()
    return(
        <Tab.Navigator 
            screenOptions={{
                tabBarActiveBackgroundColor: "#8205CE",
                tabBarActiveTintColor: "white",
                headerShown: false,
                tabBarInactiveBackgroundColor: "#8205CE",
                tabBarInactiveTintColor: "white",
            }}
        >
            <Tab.Screen name='Home' component={Home}
                options={{
                    tabBarIcon: ()=>(
                        <FontAwesome5 name="house-user" size={24} color="white" />
                    ),
                }}
            />
            <Tab.Screen name='Mensagem' component={MessageNavigation}
                options={{
                    tabBarIcon: ()=>(
                        <Entypo name="new-message" size={24} color="white" />
                    ),
                }}
            />
            <Tab.Screen name='Camera' component={Camera}
                options={{
                    tabBarIcon: ()=>(
                        <Entypo name="camera" size={24} color="white" />
                    ),
                }}
            />
            <Tab.Screen name='Imagens' component={Images}
                options={{
                    tabBarIcon: ()=>(
                        <Ionicons name="image" size={24} color="white" />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
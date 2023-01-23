import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Search, Profile } from '@screens';
import { HOME, SEARCH, PROFILE } from '@helpers';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name={HOME}
        component={Home}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: () => <Icon name={'home'} color={'#000'} size={24} />,
        }}
      />
      <Tab.Screen
        name={SEARCH}
        component={Search}
        options={{
          tabBarLabel: 'BUSCAR',
          tabBarIcon: () => <Icon name={'search'} color={'#000'} size={24} />,
        }}
      />
      <Tab.Screen
        name={PROFILE}
        component={Profile}
        options={{
          tabBarLabel: 'PERFIL',
          tabBarIcon: () => <Icon name={'user'} color={'#000'} size={24} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

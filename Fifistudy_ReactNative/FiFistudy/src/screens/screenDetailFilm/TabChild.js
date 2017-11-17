import { TabNavigator } from 'react-navigation';

import Screen1 from './Screen1.js';
import Screen2 from './Screen2.js';

const TabChild = TabNavigator({
    Screen1: { screen: Screen1 },
    Screen2: { screen: Screen2 }
}, {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'white',
            labelStyle: {
                color: 'blue',
                fontSize: 13
            },
            style: {
                backgroundColor: 'white'
            }
        }
    });

export default TabChild;
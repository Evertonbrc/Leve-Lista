import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets,  } from '@react-navigation/stack';

const appStack = createStackNavigator();

import Listas from './pages/Listas';
import Itens from './pages/Itens';

export default function Routes(){
    return(
        <NavigationContainer>
            
            <appStack.Navigator screenOptions={{ headerShown: false}}>
                <appStack.Screen name="Listas" component={Listas} options={{
                  ...TransitionPresets.SlideFromRightIOS
                }}/>
                <appStack.Screen name="Itens" component={Itens} options={{
                  ...TransitionPresets.SlideFromRightIOS
                }}/>
            </appStack.Navigator>
        </NavigationContainer>
    );
}



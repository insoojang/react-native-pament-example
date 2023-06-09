import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CertificationMain from '../screen/certification/CertificationMain'
import PaymentMain from '../screen/payment/PaymentMain'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TransitionPresets } from '@react-navigation/stack'
import ConfirmPage from '../screen/certification/ConfirmPage'
import Certification from '../screen/certification/Certification'
import Payment from '../screen/payment/Payment'

const BottomTabStack = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const BottomTabNavigation = () => {
    return (
        <BottomTabStack.Navigator>
            <BottomTabStack.Screen
                name="인증"
                component={CertificationMain}
                options={{
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    tabBarIconStyle: { display: 'none' },
                    tabBarLabelPosition: 'beside-icon',
                    tabBarLabelStyle: {
                        fontWeight: '700',
                        fontSize: 15,
                    },
                }}
            />
            <BottomTabStack.Screen
                name="결제"
                component={PaymentMain}
                options={{
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    tabBarIconStyle: { display: 'none' },
                    tabBarLabelPosition: 'beside-icon',
                    tabBarLabelStyle: {
                        fontWeight: '700',
                        fontSize: 15,
                    },
                }}
            />
        </BottomTabStack.Navigator>
    )
}

const RootNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="home"
                component={BottomTabNavigation}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                options={{
                    ...TransitionPresets.ModalPresentationIOS,
                    // headerShown: false,
                    title: '전송번호 입력',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
                name="ConfirmPage"
                component={ConfirmPage}
            />
            <Stack.Screen
                name="Certification"
                component={Certification}
                options={{
                    headerTitle: '인증해주세요.',
                }}
            />
            <Stack.Screen
                name="Payment"
                component={Payment}
                options={{
                    headerTitle: '결제해주세요.',
                }}
            />
        </Stack.Navigator>
    )
}
function AppNavigator() {
    return (
        <NavigationContainer>
            <RootNavigation />
        </NavigationContainer>
    )
}

export default AppNavigator

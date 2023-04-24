import React, { useEffect } from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import IMP from 'iamport-react-native'
import { Container } from './CertificationMain'

const Certification = (props) => {
    // const { IMP } = window
    useEffect(() => {
        // IMP.init('imp46457356')
    }, [])
    const data = {
        carrier: '64900',
        company: '두산 에너빌리티',
        merchant_uid: `mid_MIIiasTest`,
        name: '장인수',
        phone: '010-7122-2846',
        pg: 'html5_inicis',
    }
    const Loading = () => {
        return (
            <View flex={1} alignItems={'center'} justifyContent={'center'}>
                <Text fontSize={20}>잠시만 기다려주세요...</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', width: '100%' }}>
            <IMP.Certification
                userCode={'imp46457356'}
                data={data}
                loading={<Loading />}
                callback={(response) => console.log('test@@@', response)}
            />
        </SafeAreaView>
    )
}

export default Certification

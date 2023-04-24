import React, { useEffect } from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import IMP from 'iamport-react-native'
import { Container } from './CertificationMain'

const Certification2 = (props) => {
    // const { IMP } = window
    useEffect(() => {
        // IMP.init('imp46457356')
    }, [])
    const data = {
        pg: 'kcp.{nictest00m}',
        imp_uid: 'imp46457356',
        merchant_uid: `mid_${new Date().getTime()}`,
        company: '노르웨이 회전 의자',
        carrier: 64900,
        name: 'gildong@gmail.com',
        phone: '홍길동',
        min_age: '18',
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
                tierCode={{
                    value: 'RBK',
                    label: '리복 - 복수PG 사용중',
                }}
                data={data}
                loading={<Loading />}
                callback={(response) => console.log('test@@@', response)}
            />
        </SafeAreaView>
    )
}

export default Certification2

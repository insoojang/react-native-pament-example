import React, { useEffect } from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import IMP, { IMPConst } from 'iamport-react-native'

const Payment = (props) => {
    // const { IMP } = window
    useEffect(() => {
        // IMP.init('imp46457356')
    }, [])
    const data = {
        pg: 'kakaopay.TC0ONETIME',
        pay_method: 'card', //생략 가능
        merchant_uid: `mid_${new Date().getTime()}`, // 상점에서 관리하는 주문 번호
        name: '주문명:결제테스트',
        amount: 14000,
        buyer_email: 'iamport@siot.do',
        buyer_name: '구매자이름',
        buyer_tel: '010-1234-5678',
        buyer_addr: '서울특별시 강남구 삼성동',
        buyer_postcode: '123-456',
        app_scheme: 'exampleformanagedexpo',
        m_redirect_url: 'https://www.my-service.com/payments/complete',
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
            <IMP.Payment
                userCode={'imp46457356'}
                data={data}
                loading={<Loading />}
                callback={(response) => console.log('test@@@', response)}
            />
        </SafeAreaView>
    )
}

export default Payment

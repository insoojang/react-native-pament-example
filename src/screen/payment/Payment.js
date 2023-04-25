import React, { useEffect } from 'react'
import { SafeAreaView, View, Text, Alert } from 'react-native'
import IMP, { IMPConst } from 'iamport-react-native'

const Payment = (props) => {
    const data = {
        pg: 'html5_inicis', // PG사 : https://portone.gitbook.io/docs/sdk/javascript-sdk/payrq#undefined-1 참고
        pay_method: 'card', // 결제수단
        merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
        amount: 1000, // 결제금액
        name: '아임포트 결제 데이터 분석', // 주문명
        buyer_name: '홍길동', // 구매자 이름
        buyer_tel: '01012341234', // 구매자 전화번호
        buyer_email: 'example@example', // 구매자 이메일
        buyer_addr: '신사동 661-16', // 구매자 주소
        buyer_postcode: '06018', // 구매자 우편번호
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
    const callback = (response) => {
        const { success, error_msg } = response
        if (success) {
            console.log('@@@결제성공')
            alert('결제 성공')
        } else {
            console.log('@@@결제 성공', error_msg)
            alert(`결제 실패: ${error_msg}`)
        }
    }
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', width: '100%' }}>
            <IMP.Payment userCode={'imp46457356'} data={data} loading={<Loading />} callback={callback} />
        </SafeAreaView>
    )
}

export default Payment

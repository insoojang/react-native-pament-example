import React from 'react'
import {
    ConFirmTitle,
    Container,
    NextButtonContainer,
    PhoneNumberInput,
    SubTitle,
    Title,
} from '../certification/CertificationMain'
import { useNavigation } from '@react-navigation/native'

const PaymentMain = () => {
    const navigation = useNavigation()

    return (
        <>
            <Container>
                <Title>휴대폰 결제 페이지</Title>
                <SubTitle>결제 인증을 위해 필요합니다</SubTitle>
                <NextButtonContainer
                    onPress={() => {
                        navigation.navigate('Payment')
                    }}
                >
                    <ConFirmTitle>결제하기</ConFirmTitle>
                </NextButtonContainer>
            </Container>
        </>
    )
}

export default PaymentMain

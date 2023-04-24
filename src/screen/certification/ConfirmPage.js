import React from 'react'
import { ConFirmTitle, Container, NextButtonContainer, PhoneNumberInput, SubTitle, Title } from './CertificationMain'
import { useNavigation } from '@react-navigation/native'

const ConfirmPage = () => {
    const navigation = useNavigation()

    return (
        <>
            <Container>
                <Title>전송된 인증번호를 입력하세요.</Title>
                <SubTitle>본인 인증을 위해 필요합니다</SubTitle>
                <PhoneNumberInput
                    keyboardType="number-pad"
                    maxLength={11}
                    dataDetectorTypes="phoneNumber"
                    onChangeText={() => {}}
                />
                <NextButtonContainer
                    onPress={() => {
                        navigation.navigate('Certification')
                    }}
                >
                    <ConFirmTitle>확인</ConFirmTitle>
                </NextButtonContainer>
            </Container>
        </>
    )
}

export default ConfirmPage

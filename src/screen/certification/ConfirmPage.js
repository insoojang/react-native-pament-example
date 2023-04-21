import React from 'react'
import { ConFirmTitle, Container, NextButtonContainer, PhoneNumberInput, SubTitle, Title } from './CertificationMain'

const ConfirmPage = () => {
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
                        console.log('test')
                    }}
                >
                    <ConFirmTitle>확인</ConFirmTitle>
                </NextButtonContainer>
            </Container>
        </>
    )
}

export default ConfirmPage

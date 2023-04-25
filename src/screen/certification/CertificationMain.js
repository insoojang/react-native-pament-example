import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

const CertificationMain = () => {
    const [phoneNumber, setPhoneNumber] = useState(null)
    const navigation = useNavigation()

    return (
        <>
            <Container>
                <Title>휴대폰 인증 페이지</Title>
                <SubTitle>본인 인증을 위해 필요합니다</SubTitle>
                <PhoneNumberInput
                    keyboardType="number-pad"
                    maxLength={11}
                    dataDetectorTypes="phoneNumber"
                    onChangeText={setPhoneNumber}
                />
                <NextButtonContainer
                    onPress={() => {
                        // navigation.navigate('ConfirmPage')
                        navigation.navigate('Certification')
                    }}
                >
                    <ConFirmTitle>확인</ConFirmTitle>
                </NextButtonContainer>
            </Container>
        </>
    )
}

export default CertificationMain

export const Container = styled.SafeAreaView`
    flex: 1;
    margin-top: 120px;
    margin-left: 20px;
    margin-right: 20px;
`
export const Title = styled.Text`
    font-size: 20px;
    font-weight: 700;
`
export const SubTitle = styled.Text`
    font-size: 16px;
    font-weight: 700;
    padding-top: 10px;
    color: gray;
`

export const PhoneNumberInput = styled.TextInput`
    height: 40px;
    font-size: 20px;
    border-color: lightgray;
    border-bottom-width: 2px;
    margin-top: 15px;
`

export const NextButtonContainer = styled.TouchableOpacity`
    border-radius: 5px;
    padding-vertical: 12px;
    width: 100%;
    border-color: black;
    border-width: 1px;
    flex-direction: row;
    justify-content: center;
    background-color: black;
    position: absolute;
    bottom: 30px;
`
export const ConFirmTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: white;
`

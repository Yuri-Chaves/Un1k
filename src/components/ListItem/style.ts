import styled from 'styled-components/native'
import { Colors } from '../../helpers/Colors'

export const Container = styled.Pressable`
    flex-direction: row;
    gap: 8px;
    width: 100%;
    padding-left: 16px;
    height: 32px;
    align-items: center;
`
export const Dot = styled.View`
    width: 16px;
    height: 16px;
    border: 1px solid ${Colors.primary};
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`
export const Text = styled.Text`
    font-size: 16px;
    font-weight: 600;
`
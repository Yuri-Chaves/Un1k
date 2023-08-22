import styled from 'styled-components/native'
import { Colors } from '../../helpers/Colors'

export const Container = styled.Pressable`
    width: 100px;
    height: 100px;
    border-radius: 8px;
    border-width: 5px;
    border-style: solid;
    border-color: ${Colors.primary};
    background-color: ${Colors.secondary};
    align-items: center;
    justify-content: center;
`
export const Image = styled.Image`
    width: 80px;
    height: 80px;
`
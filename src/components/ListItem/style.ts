import styled from 'styled-components/native'
import { Colors } from '../../helpers/Colors'

export const Container = styled.View`
    flex-direction: row;
    width: 100%;
`
export const TaskContainer = styled.Pressable`
    flex-direction: row;
    gap: 8px;
    width: 92%;
    padding: 16px 16px;
    padding-right: 30px;
    border-radius: 8px 0px 0px 8px;
    align-items: flex-start;
    border-width: 2px;
    border-style: solid;
    position: relative;
    border-right-width: 0px;
`
export const OptionContainer = styled.Pressable`
    flex-direction: row;
    width: 8%;
    border-radius: 0px 8px 8px 0px;
    align-items: center;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-left-width: 0px;
`
export const Dot = styled.View`
    width: 24px;
    height: 24px;
    border: 2px solid ${Colors.primary};
    border-radius: 4px;
    align-items: center;
    justify-content: center;
`
export const Text = styled.Text`
    font-size: 18px;
    font-weight: 600;
`
export const PriorityText = styled.Text`
    font-size: 10px;
    position: absolute;
    top: 0px;
    left: 4px;
`
export const ModalContainer = styled.View`
    max-width: 80%;
    padding: 16px;
    border-radius: 8px;
    background-color: ${Colors.grey5};
    border-width: 2px;
    border-style: solid;
`
export const ButtonsContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 8px;
`
export const Button = styled.Pressable`
    width: 45%;
    border-radius: 4px;
    padding: 2px 0px;
    border-width: 2px;
    border-style: solid;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
`
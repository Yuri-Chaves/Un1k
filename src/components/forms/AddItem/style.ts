import { styled } from "styled-components/native";
import { Colors } from "../../../helpers/Colors";

export const Container = styled.View`
    width: 100%;
    gap: 8px;
    padding: 0 24px;
`
export const PriorityContainer = styled.View`
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
`
export const PriorityButtonContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
`
export const PriorityButton = styled.Pressable`
    width: 80px;
    padding: 2px;
    align-items: center;
    border-width: 2px;
    border-style: solid;
    border-radius: 16px;
`
export const Text = styled.Text`
    font-size: 14px;
    color: ${Colors.white};
`
export const Input = styled.TextInput`
    background-color: ${Colors.aux1L};
    border-radius: 4px;
    border: 1px solid ${Colors.aux1D};
    padding: 0px 8px;
    color: ${Colors.aux1D};
`
export const ConfirmButton = styled.Pressable`
    width: 35%;
    align-self: flex-end;
    align-items: center;
    justify-content: center;
    height: 30px;
    background-color: ${Colors.successD};
    border-radius: 4px;
`
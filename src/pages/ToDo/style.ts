import { styled } from "styled-components/native";
import { Colors } from "../../helpers/Colors";

type TextProps = {
    color?: string;
    fontSize?: number | string;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${Colors.bg};
    padding-top: 16px;
    flex-direction: column;
`
export const TitleContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    padding-left: 16px;
`
export const ActionsContainer = styled.View`
    width: 100%;
    padding: 0px 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const ActionButton = styled.Pressable`
    padding: 6px 0;
    width: 48%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 4px;
`
export const Text = styled.Text<TextProps>`
    font-weight: 600;
    font-size: ${({fontSize}) => fontSize || '18px'};
    color: ${({color}) => color || Colors.white};
`
export const FlatListContainer = styled.View`
    width: 100%;
    margin-top: 16px;
    padding: 0px 16px;
    position: absolute;
    left: 0;
    top: 125px;
`
export const Separator = styled.View`
    width: 100%;
    height: 8px;
`
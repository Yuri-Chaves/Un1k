import { styled } from "styled-components/native";
import { Colors } from "../../helpers/Colors";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-color: ${Colors.bg};
    `
export const ButtonsContainer = styled.View`
    flex-wrap: wrap;
    flex-direction: row;
    gap: 16px;
    padding: 0px 20%;
    align-items: center;
    justify-content: center;
`
import { OptionButton } from '../../components/OptionButton'

import { useNavigation } from '@react-navigation/native'
import { StackNavigatorPages } from "../../routes/app.routes";
import { StackNavigationProp } from '@react-navigation/stack'

import {
    Container,
    ButtonsContainer
} from './style'

export default function Home() {
    const navigation = useNavigation<StackNavigationProp<StackNavigatorPages>>()

    return (
        <Container>
            <ButtonsContainer>
                <OptionButton
                    source={require('../../../assets/iconToDo.png')}
                    onPress={() => navigation.navigate('ToDo')}
                />
                <OptionButton
                    source={require('../../../assets/iconCart.png')}
                />
                <OptionButton
                    source={require('../../../assets/iconCalendar.png')}
                />
            </ButtonsContainer>
        </Container>
    )
}
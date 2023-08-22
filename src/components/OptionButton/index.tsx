import { ImageSourcePropType, PressableProps } from 'react-native/types'
import {
    Container,
    Image
} from './style'

interface OptionButtonProps extends PressableProps{
    source: ImageSourcePropType
}

export function OptionButton({ source, ...rest }: OptionButtonProps){
    return(
        <Container
            {...rest}
        >
            <Image source={source} />
        </Container>
    )
}
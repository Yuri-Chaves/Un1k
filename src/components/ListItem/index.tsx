import { useState } from 'react'

import { Colors } from '../../helpers/Colors'

import { Entypo } from '@expo/vector-icons';

import {
    Container,
    Dot,
    Text
} from './style'
interface ItemProps {
    dot?: boolean
    text: string
    textDecoration?: boolean
}

export function ListItem({ dot, text, textDecoration }: ItemProps) {
    const [checked, setChecked] = useState<boolean>(false)

    return (
        <Container
        onPress={() => setChecked(!checked)}
        >
            {dot && (
            <Dot
                style={{
                    backgroundColor: checked? '#008639' : '#0000',
                    borderColor: checked? '#008639' : Colors.primary
                }}
            >
                <Entypo name='check' color={checked? '#FFF' : '#0000'} />
            </Dot>
            )}
            <Text
                style={{
                    color: checked? '#05AC4B' : Colors.primary,
                    textDecorationLine: textDecoration ? checked? 'line-through' : 'none' : 'none'
                }}
            >{text}</Text>
        </Container>
    )
}
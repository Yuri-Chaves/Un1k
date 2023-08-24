import { useState } from 'react'
import { Modal, Pressable, View } from 'react-native';

import { Colors } from '../../helpers/Colors'

import { Entypo } from '@expo/vector-icons';

import {
    Container,
    TaskContainer,
    OptionContainer,
    PriorityText,
    Dot,
    Text,
    ModalContainer,
    ButtonsContainer,
    Button,
} from './style'

interface ItemProps {
    dot?: boolean
    textDecoration?: boolean
    text: string
    priority: "low" | "normal" | "high"
}

export function ListItem({ dot, text, textDecoration, priority }: ItemProps) {
    const [checked, setChecked] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)
    const [isPressed, setIsPressed] = useState({
        edit: false,
        remove: false
    })
    const txtColor = checked ? Colors.grey3 : priority == "low" ? Colors.successD : priority == "normal" ? Colors.warningD : Colors.errorD

    return (
        <Container>
            <TaskContainer
                onPress={() => setChecked(!checked)}
                style={{ borderColor: txtColor }}
            >
                <PriorityText style={{ color: txtColor }}>{priority == "low" ? "Baixa" : priority == "high" ? "Alta" : "Normal"}</PriorityText>
                {dot && (
                    <Dot
                        style={{
                            borderColor: txtColor
                        }}
                    >
                        <Entypo name='check' color={checked ? txtColor : '#0000'} size={18} />
                    </Dot>
                )}
                <Text
                    style={{
                        color: txtColor,
                        textDecorationLine: textDecoration && checked ? 'line-through' : 'none'
                    }}
                >{text}</Text>
            </TaskContainer>
            <Modal
                animationType='slide'
                transparent
                visible={open}
                onRequestClose={() => setOpen(!open)}
            >
                <Pressable
                    onPress={() => setOpen(false)}
                    style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                >
                    <ModalContainer
                        style={{ borderColor: txtColor }}
                    >
                        <Text>{text}</Text>
                        <Text>
                            Prioridade: <Text style={{ color: txtColor }}>{priority == "low" ? "Baixa" : priority == "high" ? "Alta" : "Normal"}</Text>
                        </Text>
                        <ButtonsContainer>
                            <Button
                                style={{ borderColor: '#A36FF7', backgroundColor: isPressed.edit? "#A36FF7" : "#0000" }}
                                onPressIn={() => setIsPressed({...isPressed, edit: true})}
                                onPressOut={() => setIsPressed({...isPressed, edit: false})}
                                onPress={() => console.log('edit')}
                            >
                                <>
                                    <Entypo name='pencil' color={isPressed.edit? Colors.grey5 : "#A36FF7"} size={18} />
                                    <Text style={{ color: isPressed.edit? Colors.grey5 : "#A36FF7" }}>Editar</Text>
                                </>
                            </Button>
                            <Button
                                style={{ borderColor: '#F25F5C', backgroundColor: isPressed.remove? "#F25F5C" : "#0000" }}
                                onPressIn={() => setIsPressed({...isPressed, remove: true})}
                                onPressOut={() => setIsPressed({...isPressed, remove: false})}
                                onPress={() => console.log('remove')}
                            >
                                <>
                                    <Entypo name='trash' color={isPressed.remove? Colors.grey5 : "#F25F5C"} size={18} />
                                    <Text style={{ color: isPressed.remove? Colors.grey5 : "#F25F5C" }}>Remover</Text>
                                </>
                            </Button>
                        </ButtonsContainer>
                    </ModalContainer>
                </Pressable>
            </Modal>
            <OptionContainer
                onPress={() => setOpen(true)}
                style={{ borderColor: txtColor }}
            >
                <Entypo name='dots-three-vertical' color={txtColor} size={18} />
            </OptionContainer>
        </Container>
    )
}
import { useContext, useState } from 'react'
import { Modal, Pressable } from 'react-native';

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

import { database } from '../../database';
import { ShoppItemModel } from '../../database/models/ShoppItemModel';
import { Q } from '@nozbe/watermelondb';
import { TaskModel } from '../../database/models/TaskModel';
import { DBContext } from '../../contexts/DBContext';

interface ItemProps {
    dot?: boolean
    textDecoration?: boolean
    item: ShoppItemModel | TaskModel
    type: "ShopItem" | "TaskItem"
}

export function ListItem({ dot, item, textDecoration, type }: ItemProps) {
    const { fetchData, setItem, bottomSheetRef, setCallEdit } = useContext(DBContext)
    const [open, setOpen] = useState<boolean>(false)
    const [confirmDelete, setConfirmDelete] = useState(false)
    const [isPressed, setIsPressed] = useState({
        edit: false,
        remove: false
    })
    const txtColor = item.check ? Colors.grey3 : item.priority == "low" ? Colors.successD : item.priority == "normal" ? Colors.warningD : Colors.errorD

    async function checkItem() {
        const itemCollection = type == "ShopItem" ? database.get<ShoppItemModel>("itens_compras") : database.get<TaskModel>("tarefas")
        const res = await itemCollection.query(Q.where('id', Q.eq(`${item.id}`))).fetch()
        await database.write(async () => {
            await res[0].update(data => {
                data.check = !item.check
            })
        })
        fetchData(type)
    }
    async function deleteItem() {
        const itemCollection = type == "ShopItem" ? database.get<ShoppItemModel>("itens_compras") : database.get<TaskModel>("tarefas")
        const res = await itemCollection.query(Q.where('id', Q.eq(`${item.id}`))).fetch()
        await database.write(async () => {
            await res[0].destroyPermanently()
        })
        fetchData(type)
    }

    function editItem(){
        setOpen(false)
        setItem(item)
        setCallEdit(true)
        bottomSheetRef.current?.expand()
    }

    return (
        <Container>
            <TaskContainer
                onPress={() => checkItem()}
                style={{ borderColor: txtColor }}
            >
                <PriorityText style={{ color: txtColor }}>{item.priority == "low" ? "Baixa" : item.priority == "high" ? "Alta" : "Normal"}</PriorityText>
                {dot && (
                    <Dot
                        style={{
                            borderColor: txtColor
                        }}
                    >
                        <Entypo name='check' color={item.check ? txtColor : '#0000'} size={18} />
                    </Dot>
                )}
                <Text
                    style={{
                        color: txtColor,
                        textDecorationLine: textDecoration && item.check ? 'line-through' : 'none'
                    }}
                >
                    {item.title}
                </Text>
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
                        <Text>
                            {item.title}
                        </Text>
                        <Text>
                            Prioridade: <Text style={{ color: txtColor }}>{item.priority == "low" ? "Baixa" : item.priority == "high" ? "Alta" : "Normal"}</Text>
                        </Text>
                        <ButtonsContainer>
                            <Button
                                style={{ borderColor: '#A36FF7', backgroundColor: isPressed.edit ? "#A36FF7" : "#0000" }}
                                onPressIn={() => setIsPressed({ ...isPressed, edit: true })}
                                onPressOut={() => setIsPressed({ ...isPressed, edit: false })}
                                onPress={editItem}
                            >
                                <>
                                    <Entypo name='pencil' color={isPressed.edit ? Colors.grey5 : "#A36FF7"} size={18} />
                                    <Text style={{ color: isPressed.edit ? Colors.grey5 : "#A36FF7" }}>Editar</Text>
                                </>
                            </Button>
                            {!confirmDelete && (
                                <Button
                                    style={{ borderColor: '#F25F5C', backgroundColor: isPressed.remove ? "#F25F5C" : "#0000" }}
                                    onPressIn={() => setIsPressed({ ...isPressed, remove: true })}
                                    onPressOut={() => setIsPressed({ ...isPressed, remove: false })}
                                    onPress={() => setConfirmDelete(true)}
                                >
                                    <>
                                        <Entypo name='trash' color={isPressed.remove ? Colors.grey5 : "#F25F5C"} size={18} />
                                        <Text style={{ color: isPressed.remove ? Colors.grey5 : "#F25F5C" }}>Remover</Text>
                                    </>
                                </Button>
                            )}
                            {confirmDelete && (
                                <Button
                                    style={{ borderColor: '#EE3B45', backgroundColor: "#EE3B45" }}
                                    onPressIn={() => setIsPressed({ ...isPressed, remove: true })}
                                    onPressOut={() => setIsPressed({ ...isPressed, remove: false })}
                                    onPress={deleteItem}
                                >
                                    <>
                                        <Entypo name='trash' color={ Colors.grey5 } size={18} />
                                        <Text style={{ color: Colors.grey5 }}>Remover</Text>
                                    </>
                                </Button>
                            )}
                        </ButtonsContainer>
                    </ModalContainer>
                </Pressable>
            </Modal>
            <OptionContainer
                onPress={() => {
                    setOpen(true)
                    setConfirmDelete(false)
                    setIsPressed({edit: false, remove: false})
                }}
                style={{ borderColor: txtColor }}
            >
                <Entypo name='dots-three-vertical' color={txtColor} size={18} />
            </OptionContainer>
        </Container>
    )
}
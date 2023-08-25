import { useContext, useEffect, useState } from 'react'
import { TextInput } from "react-native"

import { DBContext } from '../../../contexts/DBContext';

import { Colors } from '../../../helpers/Colors'

import {
    Container,
    PriorityContainer,
    PriorityButtonContainer,
    PriorityButton,
    Text,
    ConfirmButton
} from './style'

import { database } from '../../../database';
import { ShoppItemModel } from '../../../database/models/ShoppItemModel';
import { TaskModel } from '../../../database/models/TaskModel';

interface AddItemFormInterface {
    placeholder?: string;
    type: "ShopItem" | "TaskItem"
}

export function AddItemForm({ placeholder, type }: AddItemFormInterface) {
    const { fetchData, item, bottomSheetRef, textInputRef, callEdit, setCallEdit } = useContext(DBContext)
    const [priority, setPriority] = useState<string>("normal")
    const [title, setTitle] = useState('')
    useEffect(() => {
        if (callEdit) {
            setTitle(item.title ? item.title : '')
            setPriority(item.priority ? item.priority : 'low')
        }
    }, [callEdit])

    async function addItem() {
        const itemCollection = type == "ShopItem" ? database.get<ShoppItemModel>("itens_compras") : database.get<TaskModel>("tarefas")
        if (title.length > 0) {
            await database.write(async () => {
                itemCollection.create(data => {
                    data.title = title
                    data.priority = priority
                    data.check = false
                })
            })
        }
        fetchData(type)
        setTitle('')
        setPriority("normal")
        bottomSheetRef.current?.collapse()
    }
    async function editItem() {
        if (title.length > 0 && title != item.title || priority != item.priority) {
            await database.write(async () => {
                await item.update(data => {
                    data.title = title
                    data.priority = priority
                    data.check = item.check
                })
            })
            fetchData(type)
        }
        setCallEdit(false)
        setTitle('')
        setPriority("normal")
        bottomSheetRef.current?.collapse()
    }

    return (
        <Container>
            <PriorityContainer>
                <Text>Prioridade</Text>
                <PriorityButtonContainer>
                    <PriorityButton
                        style={{
                            borderColor: Colors.successM,
                            backgroundColor: priority == "low" ? Colors.successD : '#0000'
                        }}
                        onPress={() => setPriority("low")}
                    >
                        <Text
                            style={{
                                color: priority == "low" ? Colors.white : Colors.successM
                            }}
                        >Baixa</Text>
                    </PriorityButton>
                    <PriorityButton
                        style={{
                            borderColor: Colors.warningM,
                            backgroundColor: priority == "normal" ? Colors.warningD : '#0000'
                        }}
                        onPress={() => setPriority("normal")}
                    >
                        <Text
                            style={{
                                color: priority == "normal" ? Colors.white : Colors.warningM
                            }}
                        >Normal</Text>
                    </PriorityButton>
                    <PriorityButton
                        style={{
                            borderColor: Colors.errorM,
                            backgroundColor: priority == "high" ? Colors.errorD : '#0000'
                        }}
                        onPress={() => setPriority("high")}
                    >
                        <Text
                            style={{
                                color: priority == "high" ? Colors.white : Colors.errorM
                            }}
                        >Alta</Text>
                    </PriorityButton>
                </PriorityButtonContainer>
            </PriorityContainer>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={Colors.grey3}
                value={title}
                onChangeText={setTitle}
                ref={textInputRef}
                style={{
                    backgroundColor: Colors.aux1L,
                    borderRadius: 4,
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: Colors.aux1D,
                    paddingVertical: 0,
                    paddingHorizontal: 8,
                    color: Colors.aux1D
                }}
            />
            <ConfirmButton
                onPress={callEdit ? editItem : addItem}
                style={{ backgroundColor: callEdit ? '#4BC3A4' : Colors.successD }}
            >
                <Text>{callEdit ? 'Editar' : 'Adicionar'}</Text>
            </ConfirmButton>
        </Container>
    )
}
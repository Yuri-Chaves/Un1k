import { useState } from 'react'
import { Colors } from '../../../helpers/Colors'
import {
    Container,
    PriorityContainer,
    PriorityButtonContainer,
    PriorityButton,
    Text,
    Input,
    ConfirmButton
} from './style'

interface AddItemFormInterface{
    placeholder?: string;
    onConfirm: () => void;
}

export function AddItemForm({placeholder, onConfirm}: AddItemFormInterface) {
    const [priority, setPriority] = useState<"low" | "normal" | "high">("normal")
    const [task, setTask] = useState('')

    const addItem = () => {
      setTask('')
      setPriority("normal")
      onConfirm()
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
            <Input
                placeholder={placeholder}
                placeholderTextColor={Colors.grey3}
                value={task}
                onChangeText={setTask}
            />
            <ConfirmButton
                onPress={addItem}
            >
                <Text>Adicionar</Text>
            </ConfirmButton>
        </Container>
    )
}
import { useRef, useState } from 'react';
import { Dimensions } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

import { Colors } from '../../helpers/Colors'
import { BottomSheetComponent } from '../../components/BottomSheet'
import { ListItem } from '../../components/ListItem'

import { useNavigation } from '@react-navigation/native'
import { StackNavigatorPages } from "../../routes/app.routes";
import { StackNavigationProp } from '@react-navigation/stack'
import { AddItemForm } from '../../components/forms/AddItem';

import { Ionicons, MaterialIcons } from '@expo/vector-icons'

import {
    Container,
    TitleContainer,
    ActionsContainer,
    ActionButton,
    Text,
    FlatListContainer,
    Separator
} from './style'

import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';

export default function ToDo() {
    const windowHeight = Dimensions.get('window').height;
    const listHeight = windowHeight - 204
    const navigation = useNavigation<StackNavigationProp<StackNavigatorPages>>()
    const bottomSheetRef = useRef<BottomSheet>(null);

    return (
        <Container>
            <TitleContainer>
                <Text
                    style={{ fontWeight: "700", marginBottom: 8 }}
                    color={Colors.primary}
                    fontSize='48px'
                >
                    Tarefas
                </Text>
            </TitleContainer>
            <ActionsContainer>
                <ActionButton
                    style={{ backgroundColor: Colors.errorM }}
                    onPress={() => navigation.goBack()}
                >
                    <Text><Ionicons name='return-up-back' size={18} /></Text>
                    <Text>Voltar</Text>
                </ActionButton>
                <ActionButton
                    style={{ backgroundColor: Colors.successM }}
                    onPress={() => bottomSheetRef.current?.expand()}
                >
                    <Text><MaterialIcons name='add' size={18} /></Text>
                    <Text>Nova</Text>
                </ActionButton>
            </ActionsContainer>
            <FlatListContainer
                style={{ height: listHeight }}
            >
                <FlatList
                    data={[]}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <ListItem text={item} priority={item} textDecoration dot />
                    )}
                    ItemSeparatorComponent={() => <Separator />}
                />
            </FlatListContainer>
            <BottomSheetComponent
                ref={bottomSheetRef}
            >
                <AddItemForm
                    onConfirm={() => bottomSheetRef.current?.collapse()}
                    placeholder="Não esqueça de conferir a prioridade..."
                />
            </BottomSheetComponent>
        </Container>
    )
}
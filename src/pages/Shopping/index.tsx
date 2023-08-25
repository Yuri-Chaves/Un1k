import { useContext, useEffect } from 'react';
import { Dimensions } from 'react-native'

import { FlatList } from 'react-native-gesture-handler';

import { Colors } from '../../helpers/Colors'

import { BottomSheetComponent } from '../../components/BottomSheet'
import { ListItem } from '../../components/ListItem'
import { AddItemForm } from '../../components/forms/AddItem';

import { useNavigation } from '@react-navigation/native'
import { StackNavigatorPages } from "../../routes/app.routes";
import { StackNavigationProp } from '@react-navigation/stack'

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

import { DBContext } from '../../contexts/DBContext';

export default function Shopping() {
    const windowHeight = Dimensions.get('window').height;
    const listHeight = windowHeight - 204
    const navigation = useNavigation<StackNavigationProp<StackNavigatorPages>>()
    const { items, fetchData, bottomSheetRef, textInputRef } = useContext(DBContext)

    useEffect(() => {
        fetchData("ShopItem")
    }, [])

    return (
        <Container>
            <TitleContainer>
                <Text
                    style={{ fontWeight: "700", marginBottom: 8 }}
                    color={Colors.primary}
                    fontSize='48px'
                >
                    Compras
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
                    <Text><MaterialIcons name='add-shopping-cart' size={18} /></Text>
                    <Text>Nova</Text>
                </ActionButton>
            </ActionsContainer>
            <FlatListContainer
                style={{ height: listHeight }}
            >
                <FlatList
                    data={items}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <ListItem item={item} type={'ShopItem'} textDecoration dot />
                    )}
                    ItemSeparatorComponent={() => <Separator />}
                />
            </FlatListContainer>
            <BottomSheetComponent
                ref={bottomSheetRef}
                textInputRef={textInputRef}
            >
                <AddItemForm
                    type={'ShopItem'}
                    placeholder="Não esqueça de conferir a prioridade..."
                />
            </BottomSheetComponent>
        </Container >
    )
}
import { createContext, useState, ReactNode, Dispatch, SetStateAction, useRef, RefObject } from "react";
import { TextInput } from "react-native"
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

import { database } from "../database";
import { ShoppItemModel } from "../database/models/ShoppItemModel";
import { TaskModel } from "../database/models/TaskModel";

type DBProviderProps = {
    children: ReactNode
}

type DBContextData = {
    items: Array<ShoppItemModel | TaskModel>
    fetchData: (type: "ShopItem" | "TaskItem") => void
    item: ShoppItemModel | TaskModel
    setItem: Dispatch<SetStateAction<ShoppItemModel | TaskModel>>
    callEdit: boolean
    setCallEdit: Dispatch<SetStateAction<boolean>>
    bottomSheetRef: RefObject<BottomSheetMethods>
    textInputRef: RefObject<TextInput>
}

export const DBContext = createContext({} as DBContextData)

export function DBContextProvider({ children }: DBProviderProps) {
    const [items, setItems] = useState<ShoppItemModel[] | TaskModel[]>([])
    const [item, setItem] = useState({} as ShoppItemModel)
    const [callEdit, setCallEdit] = useState(false)

    const bottomSheetRef = useRef<BottomSheet>(null);
    const textInputRef = useRef<TextInput>(null);

    function compareObjects(a: ShoppItemModel | TaskModel, b: ShoppItemModel | TaskModel) {
        if (a.priority === b.priority) {
            return a.title.localeCompare(b.title);
        }
        const av = a.priority == "low" ? 2 : a.priority == "normal" ? 1 : 0;
        const bv = b.priority == "low" ? 2 : b.priority == "normal" ? 1 : 0
        return av - bv;
    }

    async function fetchData(type: "ShopItem" | "TaskItem") {
        setItems([])
        const itemsCollection = type == "ShopItem" ? database.get<ShoppItemModel>("itens_compras") : database.get<TaskModel>("tarefas")
        const response = await itemsCollection.query().fetch()

        setItems(response.sort(compareObjects).sort((a, b) => (a.check ? 1 : 0) - (b.check ? 1 : 0)))
    }

    return (
        <DBContext.Provider
            value={{
                items,
                fetchData,
                item,
                setItem,
                callEdit,
                setCallEdit,
                bottomSheetRef,
                textInputRef
            }}
        >
            {children}
        </DBContext.Provider>
    )
}

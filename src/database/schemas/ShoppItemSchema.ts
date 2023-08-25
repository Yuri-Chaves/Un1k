import { tableSchema } from "@nozbe/watermelondb";

export const ShoppItemSchema = tableSchema({
    name: 'itens_compras',
    columns: [
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'priority',
            type: "string"
        },
        {
            name: 'check',
            type: 'boolean'
        }
    ]
})
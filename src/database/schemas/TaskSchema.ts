import { tableSchema } from "@nozbe/watermelondb";

export const TaskSchema = tableSchema({
    name: 'tarefas',
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
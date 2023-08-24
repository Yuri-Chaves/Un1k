import { tableSchema } from "@nozbe/watermelondb";

export const TaskSchema = tableSchema({
    name: 'tarefas',
    columns: [
        {
            name: 'tarefa',
            type: 'string'
        },
        {
            name: 'prioridade',
            type: "string"
        },
        {
            name: 'check',
            type: 'boolean'
        }
    ]
})
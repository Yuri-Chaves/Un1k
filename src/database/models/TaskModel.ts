import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators"

export class TaskModel extends Model {
    static table = 'tarefas'

    @field('tarefa')
    tarefa!: string

    @field('prioridade')
    prioridade!: string

    @field('check')
    check!: boolean
}
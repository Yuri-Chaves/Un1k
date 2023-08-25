import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators"

export class TaskModel extends Model {
    static table = 'tarefas'

    @field('title')
    title!: string;

    @field('priority')
    priority!: string;

    @field('check')
    check!: boolean
}
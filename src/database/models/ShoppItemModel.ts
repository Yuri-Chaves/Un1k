import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators"

export class ShoppItemModel extends Model {
    static table = 'itens_compras'

    @field('title')
    title!: string;

    @field('priority')
    priority!: string;

    @field('check')
    check!: boolean;
}
import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators"

export class ShoppItemModel extends Model {
    static table = 'itens_compras'

    @field('Item')
    Item!: string;

    @field('prioridade')
    prioridade!: string;

    @field('check')
    check!: boolean;
}
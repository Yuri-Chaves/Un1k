import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import { schemas } from './schemas';

import { ShoppItemModel } from "./models/ShoppItemModel";
import { TaskModel } from "./models/TaskModel";

const adapter = new SQLiteAdapter({
    schema: schemas
})

export const database = new Database({
    adapter,
    modelClasses: [ShoppItemModel, TaskModel]
})
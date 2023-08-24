import { appSchema } from "@nozbe/watermelondb";

import { TaskSchema } from "./TaskSchema";
import { ShoppItemSchema } from "./ShoppItemSchema";

export const schemas = appSchema({
    version: 1,
    tables: [TaskSchema, ShoppItemSchema]
})
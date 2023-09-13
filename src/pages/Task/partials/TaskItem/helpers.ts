import {LENGHT_OF_ID} from "./constants.ts";

export const handleTaskIds = (id: string) => id.slice(id.length-LENGHT_OF_ID)

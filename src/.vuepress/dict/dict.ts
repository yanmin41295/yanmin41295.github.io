import { Dictionary, Simple } from "../typeings";
import { GenderDict } from "./gender";
import { WeekdayDict } from "./weekday";


const dictionary: Dictionary = {
    gender: GenderDict,
    weekday: WeekdayDict
}

export type DictName = keyof typeof dictionary

export function getDict(name: DictName) {
    return dictionary[name];
}

export function getLabel(name: DictName, value: Simple) {
    return getDict(name).find(item => item.value === value).label;
}
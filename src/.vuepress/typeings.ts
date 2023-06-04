import { DictName } from "./dict/dict";

export type Simple = string | number | boolean;

export type SimpleObj = {
    [key: string]: Simple
}

export interface Dict {
    [key: string]: {
        id: number;
        label: string | number | boolean;
    }[]
}

export type DictItem = {
    label: string;
    value: Simple
}

export interface Dictionary {
    [key: string]: DictItem[]
}

export enum FormType {
    input,
    select,
}

export type Condition = "=" | "<" | ">" | ">=" | "<=" | "like" | "left like" | "right like";

export interface FormModel {
    label: string;
    type: FormType;
    condition: Condition;

}

export interface FormValue extends FormModel {
    val: Simple
}

export interface FormInput extends FormValue {

}

export interface FormSelect extends FormValue {
    dict: DictName
}

export interface FormDate extends FormValue {
    format: "date" | "datetime" | "time"
}

export type FormItem = {
    [key: string]: FormValue | FormSelect | FormDate
}

export type FormParam = {
    item: FormItem

}


export type ColDef = {
    [key: string]: {
        title: string;
        format?: (value: any) => Simple;
        formType?: DictName;
        editable?: false | DictName;
        visible?: boolean;
        query?: false | Condition
    }

}
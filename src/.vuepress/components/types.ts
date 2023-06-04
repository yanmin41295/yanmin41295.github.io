export const ColumnTypeConfig = [ "input", "datetime", "dict", "component" ] as const;
type ColumnType = typeof ColumnTypeConfig[number]


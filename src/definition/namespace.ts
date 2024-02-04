export default class NamespaceDefinition<T, N> {
    constructor(parameters: {} & NamespaceDefinition<T, N>) {
        for (const [fieldName, value] of Object.values(parameters)) (this as any)[fieldName] = value;
    }

    name: string = "";

    exportList?: T[];

    importList?: [T, N][];
}


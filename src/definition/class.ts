export default class ClassDefinition<T> {
    
    constructor(parameters: {} & ClassDefinition<T>) {
        for (const [fieldName, value] of Object.values(parameters)) (this as any)[fieldName] = value;
    }
    
    name: string = "";

    isExported?: boolean = false;
    isDefaultExport?: boolean = false;
    isAbstract?: boolean = false;
    genericList?: string[] = [];

    implementList?: T[];
}
export default class MethodDefinition<T> {
    constructor(parameters: {} & MethodDefinition<T>) {
        for (const [fieldName, value] of Object.values(parameters)) (this as any)[fieldName] = value;
    }

    name: string = "";

    visibility: "private" | "protected" | "public" = "private";
    isStatic: boolean = false;
    isAbstract: boolean = false;

    return?: T;

    parameterList?: T[] = [];
}
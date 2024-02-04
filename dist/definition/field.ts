export default class FieldDefinition<T> {

    constructor(parameters: {} & FieldDefinition<T>) {
        for (const [fieldName, value] of Object.values(parameters)) (this as any)[fieldName] = value;
    }

    name: string = "";

    visibility?: "private" | "protected" | "public" = "private";
    isStatic?: boolean = false;
    isAbstract?: boolean = false;
    isReadonly?: boolean = false;
    isInjected?: boolean = false;

    type?: T;
}
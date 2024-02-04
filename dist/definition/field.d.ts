export default class FieldDefinition<T> {
    constructor(parameters: {} & FieldDefinition<T>);
    name: string;
    visibility?: "private" | "protected" | "public";
    isStatic?: boolean;
    isAbstract?: boolean;
    isReadonly?: boolean;
    isInjected?: boolean;
    type?: T;
}
//# sourceMappingURL=field.d.ts.map
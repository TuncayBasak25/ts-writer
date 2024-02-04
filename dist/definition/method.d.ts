export default class MethodDefinition<T> {
    constructor(parameters: {} & MethodDefinition<T>);
    name: string;
    visibility: "private" | "protected" | "public";
    isStatic: boolean;
    isAbstract: boolean;
    return?: T;
    parameterList?: T[];
}
//# sourceMappingURL=method.d.ts.map
export default class ClassDefinition<T> {
    constructor(parameters: {} & ClassDefinition<T>);
    name: string;
    isExported?: boolean;
    isDefaultExport?: boolean;
    isAbstract?: boolean;
    genericList?: string[];
    implementList?: T[];
}
//# sourceMappingURL=class.d.ts.map
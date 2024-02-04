export default class NamespaceDefinition<T, N> {
    constructor(parameters: {} & NamespaceDefinition<T, N>);
    name: string;
    exportList?: T[];
    importList?: [T, N][];
}
//# sourceMappingURL=namespace.d.ts.map
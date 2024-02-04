import MethodDefinition from "../definition/method";
export default class MethodTemplate<T> extends MethodDefinition<T> {
    get privateField(): this;
    get protectedField(): this;
    get publicField(): this;
    get staticField(): this;
    get abstractField(): this;
}
//# sourceMappingURL=method.d.ts.map
import FieldDefinition from "../definition/field";
export default class FieldTemplate<T> extends FieldDefinition<T> {
    get privateField(): this;
    get protectedField(): this;
    get publicField(): this;
    get staticField(): this;
    get abstractField(): this;
    get readonlyField(): this;
    get injectedField(): this;
}
//# sourceMappingURL=field.d.ts.map
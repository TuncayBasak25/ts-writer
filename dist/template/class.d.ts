import ClassDefinition from "../definition/class";
import FieldTemplate from "./field";
import MethodTemplate from "./method";
export default class ClassTemplate<T> extends ClassDefinition<T> {
    get fieldList(): FieldTemplate<T>[];
    get methodList(): MethodTemplate<T>[];
    get exportClass(): this;
    get exportDefault(): this;
    get abstractClass(): this;
    generic(genericList: string[]): this;
    implement(...implementableList: T[]): this;
}
//# sourceMappingURL=class.d.ts.map
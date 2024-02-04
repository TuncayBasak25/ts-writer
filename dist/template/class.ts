import ClassDefinition from "../definition/class";
import FieldTemplate from "./field";
import MethodTemplate from "./method";

export default class ClassTemplate<T> extends ClassDefinition<T> {

    get fieldList(): FieldTemplate<T>[] {
        const fieldList: FieldTemplate<T>[] = [];

        if (!this.implementList) return fieldList;

        for (const implementable of this.implementList.reverse()) {
            if (implementable instanceof FieldTemplate && !fieldList.includes(implementable)) {
                fieldList.push(implementable);
            }
            if (implementable instanceof ClassTemplate) {
                for (const field of implementable.fieldList) {
                    if (!fieldList.includes(field)) {
                        fieldList.push(field);
                    }
                }
            }
        }

        return fieldList;
    }

    get methodList(): MethodTemplate<T>[] {
        const methodList: MethodTemplate<T>[] = [];

        if (!this.implementList) return methodList;

        for (const implementable of this.implementList.reverse()) {
            if (implementable instanceof MethodTemplate && !methodList.includes(implementable)) {
                methodList.push(implementable);
            }
            if (implementable instanceof ClassTemplate) {
                for (const field of implementable.methodList) {
                    if (!methodList.includes(field)) {
                        methodList.push(field);
                    }
                }
            }
        }

        return methodList;
    }

    get exportClass(): this {
        this.isExported = true;

        return this;
    }

    get exportDefault(): this {
        this.isDefaultExport = true;

        return this;
    }

    get abstractClass(): this {
        this.isAbstract = true;

        return this;
    }

    generic(genericList: string[]): this {
        this.genericList?.push(...genericList);

        return this;
    }

    implement(...implementableList: T[]): this {
        this.implementList?.push(...implementableList);

        return this;
    }
}
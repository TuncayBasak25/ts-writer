import FieldDefinition from "../definition/field";

export default class FieldTemplate<T> extends FieldDefinition<T> {

    get privateField(): this {
        this.visibility = "private";

        return this;
    }

    get protectedField(): this {
        this.visibility = "protected";

        return this;
    }

    get publicField(): this {
        this.visibility = "public";

        return this;
    }

    get staticField(): this {
        this.isStatic = true;

        return this;
    }

    get abstractField(): this {
        this.isAbstract = true;

        return this;
    }

    get readonlyField(): this {
        this.isReadonly = true;

        return this;
    }

    get injectedField(): this {
        this.isInjected = true;

        return this;
    }
}
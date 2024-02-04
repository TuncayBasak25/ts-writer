import MethodDefinition from "../definition/method";

export default class MethodTemplate<T> extends MethodDefinition<T> {

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
}
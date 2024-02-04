"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MethodDefinition {
    constructor(parameters) {
        this.name = "";
        this.visibility = "private";
        this.isStatic = false;
        this.isAbstract = false;
        this.parameterList = [];
        for (const [fieldName, value] of Object.values(parameters))
            this[fieldName] = value;
    }
}
exports.default = MethodDefinition;

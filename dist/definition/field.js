"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FieldDefinition {
    constructor(parameters) {
        this.name = "";
        this.visibility = "private";
        this.isStatic = false;
        this.isAbstract = false;
        this.isReadonly = false;
        this.isInjected = false;
        for (const [fieldName, value] of Object.values(parameters))
            this[fieldName] = value;
    }
}
exports.default = FieldDefinition;

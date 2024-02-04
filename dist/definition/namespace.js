"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NamespaceDefinition {
    constructor(parameters) {
        this.name = "";
        for (const [fieldName, value] of Object.values(parameters))
            this[fieldName] = value;
    }
}
exports.default = NamespaceDefinition;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClassDefinition {
    constructor(parameters) {
        this.name = "";
        this.isExported = false;
        this.isDefaultExport = false;
        this.isAbstract = false;
        this.genericList = [];
        for (const [fieldName, value] of Object.values(parameters))
            this[fieldName] = value;
    }
}
exports.default = ClassDefinition;

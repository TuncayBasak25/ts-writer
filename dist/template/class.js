"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_1 = __importDefault(require("../definition/class"));
const field_1 = __importDefault(require("./field"));
const method_1 = __importDefault(require("./method"));
class ClassTemplate extends class_1.default {
    get fieldList() {
        const fieldList = [];
        if (!this.implementList)
            return fieldList;
        for (const implementable of this.implementList.reverse()) {
            if (implementable instanceof field_1.default && !fieldList.includes(implementable)) {
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
    get methodList() {
        const methodList = [];
        if (!this.implementList)
            return methodList;
        for (const implementable of this.implementList.reverse()) {
            if (implementable instanceof method_1.default && !methodList.includes(implementable)) {
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
    get exportClass() {
        this.isExported = true;
        return this;
    }
    get exportDefault() {
        this.isDefaultExport = true;
        return this;
    }
    get abstractClass() {
        this.isAbstract = true;
        return this;
    }
    generic(genericList) {
        var _a;
        (_a = this.genericList) === null || _a === void 0 ? void 0 : _a.push(...genericList);
        return this;
    }
    implement(...implementableList) {
        var _a;
        (_a = this.implementList) === null || _a === void 0 ? void 0 : _a.push(...implementableList);
        return this;
    }
}
exports.default = ClassTemplate;

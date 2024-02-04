"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const method_1 = __importDefault(require("../definition/method"));
class MethodTemplate extends method_1.default {
    get privateField() {
        this.visibility = "private";
        return this;
    }
    get protectedField() {
        this.visibility = "protected";
        return this;
    }
    get publicField() {
        this.visibility = "public";
        return this;
    }
    get staticField() {
        this.isStatic = true;
        return this;
    }
    get abstractField() {
        this.isAbstract = true;
        return this;
    }
}
exports.default = MethodTemplate;

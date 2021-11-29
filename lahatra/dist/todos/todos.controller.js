"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveData = void 0;
const common_1 = require("@nestjs/common");
const todos_service_1 = require("./todos.service");
let SaveData = class SaveData {
    constructor(saveData) {
        this.saveData = saveData;
    }
    async getData() {
        const students = await this.saveData.getStudents();
        return students;
    }
    insertData(newData) {
        this.saveData.insertStudents(newData);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SaveData.prototype, "getData", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SaveData.prototype, "insertData", null);
SaveData = __decorate([
    (0, common_1.Controller)('lahatra'),
    __metadata("design:paramtypes", [todos_service_1.ProductsService])
], SaveData);
exports.SaveData = SaveData;
//# sourceMappingURL=todos.controller.js.map
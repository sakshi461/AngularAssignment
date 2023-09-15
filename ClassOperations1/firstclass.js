"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstclass = void 0;
var firstclass = /** @class */ (function () {
    function firstclass(id, name, salary) {
        this.empId = id;
        this.empName = name;
        this.empSalary = salary;
    }
    firstclass.prototype.show = function () {
        console.log("\n           Employee Id      :: ".concat(this.empId, "\n           Employee Name    :: ").concat(this.empName, " \n           Employee Salary  :: ").concat(this.empSalary, "\n        "));
    };
    return firstclass;
}());
exports.firstclass = firstclass;

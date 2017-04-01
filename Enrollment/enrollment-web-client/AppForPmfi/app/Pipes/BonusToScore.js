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
var core_1 = require('@angular/core');
var SortScorePipe = (function () {
    function SortScorePipe() {
    }
    SortScorePipe.prototype.transform = function (value1, value2, result) {
        if ((value1 == true) || (value2 == true)) {
            result++;
        }
        else if ((value1 == true) && (value2 == true)) {
            result += 2;
        }
        return result;
    };
    SortScorePipe = __decorate([
        core_1.Pipe({ name: "Bonus" }), 
        __metadata('design:paramtypes', [])
    ], SortScorePipe);
    return SortScorePipe;
}());
exports.SortScorePipe = SortScorePipe;
//# sourceMappingURL=BonusToScore.js.map
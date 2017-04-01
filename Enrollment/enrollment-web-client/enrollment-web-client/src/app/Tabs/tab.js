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
var Tab = (function () {
    function Tab() {
        this.active = false;
    }
    __decorate([
        core_1.Input('tabTitle'), 
        __metadata('design:type', String)
    ], Tab.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Tab.prototype, "active", void 0);
    Tab = __decorate([
        core_1.Component({
            selector: 'tab',
            styles: ["\n\t.pane{\n\t\tpadding: 1em;\n\t}\n\t"],
            template: "\n\t<div [hidden]=\"!active\" class=\"pane\">\n\t<ng-content></ng-content>\n\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], Tab);
    return Tab;
}());
exports.Tab = Tab;
//# sourceMappingURL=tab.js.map
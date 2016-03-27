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
var core_1 = require("angular2/core");
var all_1 = require("ng2-material/all");
var DataTableSelectableUsage = (function () {
    function DataTableSelectableUsage() {
        this.materials = [
            { 'id': 1, 'name': 'Acrylic (Transparent)', 'quantity': '25', 'price': '$2.90' },
            { 'id': 2, 'name': 'Plywood (Birch)', 'quantity': '50', 'price': '$1.25' },
            { 'id': 3, 'name': 'Laminate (Gold on Blue)', 'quantity': '10', 'price': '$2.35' }
        ];
    }
    DataTableSelectableUsage.prototype.change = function (data) {
        var names = [];
        this.materials.forEach(function (mat) {
            if (data.values.indexOf(mat.id) !== -1) {
                names.push(mat.name);
            }
        });
        this.selection = names.join(', ');
        this.count = names.length;
    };
    DataTableSelectableUsage = __decorate([
        core_1.Component({
            selector: 'data-table-selectable-usage',
            templateUrl: 'examples/components/data_table/selectable_usage.html',
            styleUrls: ['examples/components/data_table/selectable_usage.css'],
            directives: [all_1.MATERIAL_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], DataTableSelectableUsage);
    return DataTableSelectableUsage;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DataTableSelectableUsage;
//# sourceMappingURL=selectable_usage.js.map
"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_add-beneficiary_add-beneficiary_module_ts"],{

/***/ 71936:
/*!*******************************************************************!*\
  !*** ./src/app/add-beneficiary/add-beneficiary-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddBeneficiaryPageRoutingModule": () => (/* binding */ AddBeneficiaryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _add_beneficiary_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-beneficiary.page */ 34217);




const routes = [
    {
        path: '',
        component: _add_beneficiary_page__WEBPACK_IMPORTED_MODULE_0__.AddBeneficiaryPage
    }
];
let AddBeneficiaryPageRoutingModule = class AddBeneficiaryPageRoutingModule {
};
AddBeneficiaryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddBeneficiaryPageRoutingModule);



/***/ }),

/***/ 86166:
/*!***********************************************************!*\
  !*** ./src/app/add-beneficiary/add-beneficiary.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddBeneficiaryPageModule": () => (/* binding */ AddBeneficiaryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _add_beneficiary_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-beneficiary-routing.module */ 71936);
/* harmony import */ var _add_beneficiary_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-beneficiary.page */ 34217);








let AddBeneficiaryPageModule = class AddBeneficiaryPageModule {
};
AddBeneficiaryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _add_beneficiary_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddBeneficiaryPageRoutingModule
        ],
        declarations: [_add_beneficiary_page__WEBPACK_IMPORTED_MODULE_1__.AddBeneficiaryPage]
    })
], AddBeneficiaryPageModule);



/***/ }),

/***/ 34217:
/*!*********************************************************!*\
  !*** ./src/app/add-beneficiary/add-beneficiary.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddBeneficiaryPage": () => (/* binding */ AddBeneficiaryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_beneficiary_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-beneficiary.page.html?ngResource */ 8678);
/* harmony import */ var _add_beneficiary_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-beneficiary.page.scss?ngResource */ 41314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AddBeneficiaryPage = class AddBeneficiaryPage {
    constructor() {
        this.from_account = "1";
    }
    ngOnInit() {
    }
};
AddBeneficiaryPage.ctorParameters = () => [];
AddBeneficiaryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-add-beneficiary',
        template: _add_beneficiary_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_beneficiary_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddBeneficiaryPage);



/***/ }),

/***/ 41314:
/*!**********************************************************************!*\
  !*** ./src/app/add-beneficiary/add-beneficiary.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".form {\n  width: calc(100% - 32px);\n  margin-top: 30px;\n}\n.form ion-list h2 {\n  color: var(--text-black) !important;\n  font-size: 1.1rem !important;\n  letter-spacing: 0px;\n  font-weight: 600 !important;\n  margin: 0;\n  margin-bottom: 7px;\n}\n.form ion-list h2 span {\n  color: var(--primary);\n  font-size: 0.9rem;\n}\n.form ion-list ion-item {\n  background: var(--white);\n  border-radius: 0px;\n  padding: 0;\n  margin-bottom: 35px;\n}\n.form ion-list ion-item.item-select ion-select {\n  --placeholder-color: var(--text-light) !important;\n  --placeholder-opacity: 1;\n  color: var(--text-light);\n  font-size: 0.8rem !important;\n  font-weight: 500 !important;\n  letter-spacing: 0px;\n  padding: 0 18px;\n  min-height: 40px;\n  border-radius: 7px;\n  border: 1px solid #ccc !important;\n}\n.form ion-list ion-item.item-input ion-input {\n  color: var(--text-light) !important;\n  font-size: 0.8rem !important;\n  font-weight: 500 !important;\n  letter-spacing: 0px;\n  padding: 0 18px !important;\n  min-height: 40px;\n  border-radius: 7px;\n  border: 1px solid #ccc !important;\n}\nion-footer {\n  padding: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1iZW5lZmljaWFyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx3QkFBQTtFQUNBLGdCQUFBO0FBQ0Q7QUFFRTtFQUNDLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBQUg7QUFFRztFQUNDLHFCQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUlFO0VBQ0Msd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUZIO0FBS0k7RUFDQyxpREFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBSEw7QUFRSTtFQUNDLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUFOTDtBQWFBO0VBQ0MsYUFBQTtBQVZEIiwiZmlsZSI6ImFkZC1iZW5lZmljaWFyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcblx0bWFyZ2luLXRvcDogMzBweDtcblxuXHRpb24tbGlzdCB7XG5cdFx0aDIge1xuXHRcdFx0Y29sb3I6IHZhcigtLXRleHQtYmxhY2spICFpbXBvcnRhbnQ7XG5cdFx0XHRmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDBweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcblx0XHRcdG1hcmdpbjogMDtcblx0XHRcdG1hcmdpbi1ib3R0b206IDdweDtcblxuXHRcdFx0c3BhbiB7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcblx0XHRcdFx0Zm9udC1zaXplOiAuOXJlbTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpb24taXRlbSB7XG5cdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAwcHg7XG5cdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMzVweDtcblxuXHRcdFx0Ji5pdGVtLXNlbGVjdCB7XG5cdFx0XHRcdGlvbi1zZWxlY3Qge1xuXHRcdFx0XHRcdC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLXRleHQtbGlnaHQpICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0LS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcblx0XHRcdFx0XHRmb250LXNpemU6IC44cmVtICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjBweDtcblx0XHRcdFx0XHRwYWRkaW5nOiAwIDE4cHg7XG5cdFx0XHRcdFx0bWluLWhlaWdodDogNDBweDtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA3cHg7XG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdCYuaXRlbS1pbnB1dCB7XG5cdFx0XHRcdGlvbi1pbnB1dCB7XG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAuOHJlbSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC4wcHg7XG5cdFx0XHRcdFx0cGFkZGluZzogMCAxOHB4IWltcG9ydGFudDtcblx0XHRcdFx0XHRtaW4taGVpZ2h0OiA0MHB4O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDdweDtcblx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuaW9uLWZvb3RlciB7XG5cdHBhZGRpbmc6IDE2cHg7XG5cbn0iXX0= */";

/***/ }),

/***/ 8678:
/*!**********************************************************************!*\
  !*** ./src/app/add-beneficiary/add-beneficiary.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{'add_beneficiary' | translate}}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"form\">\n\t\t<ion-list lines=\"none\">\n\t\t\t<h2>{{'baneficiary_bank' | translate}}</h2>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-select mode=\"md\" [(ngModel)]=\"from_account\" interface=\"action-sheet\">\n\t\t\t\t\t<ion-select-option value=\"1\">SB 1144 2254 2478 2145</ion-select-option>\n\t\t\t\t\t<ion-select-option value=\"2\">SB 2244 1154 6778 7745</ion-select-option>\n\t\t\t\t\t<ion-select-option value=\"3\">SB 8844 5654 3278 1045</ion-select-option>\n\t\t\t\t</ion-select>\n\t\t\t</ion-item>\n\n\t\t\t<h2>{{'baneficiary_full_name' | translate}}</h2>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-input type=\"name\" value=\"Sam Smith\"></ion-input>\n\t\t\t</ion-item>\n\n\t\t\t<h2>{{'baneficiary_account_number' | translate}}</h2>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-input type=\"text\" value=\"SB 1144 2254 2478 2145\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t\n\t\t\t<h2>{{'transfer_limit' | translate}}</h2>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-input type=\"text\" value=\"$ 500.00\"></ion-input>\n\t\t\t</ion-item>\n\t\t</ion-list>\n\t</div>\n</ion-content>\n \n<ion-footer class=\"ion-no-border\">\n\t<ion-button size=\"large\" shape=\"block\" class=\"btn\">{{'submit' | translate}}</ion-button>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_add-beneficiary_add-beneficiary_module_ts.js.map
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

module.exports = ".form {\n  width: calc(100% - 32px);\n  margin-top: 30px;\n}\n.form ion-list h2 {\n  color: var(--text-black) !important;\n  font-size: 1.1rem !important;\n  letter-spacing: 0px;\n  font-weight: 600 !important;\n  margin: 0;\n  margin-bottom: 7px;\n}\n.form ion-list h2 span {\n  color: var(--primary);\n  font-size: 0.9rem;\n}\n.form ion-list ion-item {\n  background: var(--white);\n  border-radius: 0px;\n  padding: 0;\n  margin-bottom: 35px;\n}\n.form ion-list ion-item.item-select ion-select {\n  --placeholder-color: var(--text-light) !important;\n  --placeholder-opacity: 1;\n  color: var(--text-light);\n  font-size: 0.8rem !important;\n  font-weight: 500 !important;\n  letter-spacing: 0px;\n  padding: 0 18px;\n  min-height: 40px;\n  border-radius: 7px;\n  border: 1px solid #ccc !important;\n}\n.form ion-list ion-item.item-input ion-input {\n  color: var(--text-light) !important;\n  font-size: 0.8rem !important;\n  font-weight: 500 !important;\n  letter-spacing: 0px;\n  padding: 0 18px !important;\n  min-height: 40px;\n  border-radius: 7px;\n  border: 1px solid #ccc !important;\n}\nion-footer {\n  padding: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1iZW5lZmljaWFyeS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTG91aXMlMjBCZXJ0c29uXFxEZXNrdG9wXFxTcGFzcyUyMFRlbGVjb21cXE1vYmlsZUNsaWVudFxcc3JjXFxhcHBcXGFkZC1iZW5lZmljaWFyeVxcYWRkLWJlbmVmaWNpYXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHdCQUFBO0VBQ0EsZ0JBQUE7QUNDRDtBREVFO0VBQ0MsbUNBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNBSDtBREVHO0VBQ0MscUJBQUE7RUFDQSxpQkFBQTtBQ0FKO0FESUU7RUFDQyx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDRkg7QURLSTtFQUNDLGlEQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUNITDtBRFFJO0VBQ0MsbUNBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQ05MO0FEYUE7RUFDQyxhQUFBO0FDVkQiLCJmaWxlIjoiYWRkLWJlbmVmaWNpYXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIHtcclxuXHR3aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XHJcblx0bWFyZ2luLXRvcDogMzBweDtcclxuXHJcblx0aW9uLWxpc3Qge1xyXG5cdFx0aDIge1xyXG5cdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1ibGFjaykgIWltcG9ydGFudDtcclxuXHRcdFx0Zm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcclxuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDBweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG5cdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDdweDtcclxuXHJcblx0XHRcdHNwYW4ge1xyXG5cdFx0XHRcdGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuXHRcdFx0XHRmb250LXNpemU6IC45cmVtO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aW9uLWl0ZW0ge1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDBweDtcclxuXHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMzVweDtcclxuXHJcblx0XHRcdCYuaXRlbS1zZWxlY3Qge1xyXG5cdFx0XHRcdGlvbi1zZWxlY3Qge1xyXG5cdFx0XHRcdFx0LS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0tdGV4dC1saWdodCkgIWltcG9ydGFudDtcclxuXHRcdFx0XHRcdC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogLjhyZW0gIWltcG9ydGFudDtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjBweDtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDAgMThweDtcclxuXHRcdFx0XHRcdG1pbi1oZWlnaHQ6IDQwcHg7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA3cHg7XHJcblx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQmLml0ZW0taW5wdXQge1xyXG5cdFx0XHRcdGlvbi1pbnB1dCB7XHJcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCkgIWltcG9ydGFudDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogLjhyZW0gIWltcG9ydGFudDtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjBweDtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDAgMThweCFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRtaW4taGVpZ2h0OiA0MHB4O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogN3B4O1xyXG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcblx0cGFkZGluZzogMTZweDtcclxuXHJcbn0iLCIuZm9ybSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5mb3JtIGlvbi1saXN0IGgyIHtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG4uZm9ybSBpb24tbGlzdCBoMiBzcGFuIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG4uZm9ybSBpb24tbGlzdCBpb24taXRlbS5pdGVtLXNlbGVjdCBpb24tc2VsZWN0IHtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0tdGV4dC1saWdodCkgIWltcG9ydGFudDtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgcGFkZGluZzogMCAxOHB4O1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1pdGVtLml0ZW0taW5wdXQgaW9uLWlucHV0IHtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgcGFkZGluZzogMCAxOHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgcGFkZGluZzogMTZweDtcbn0iXX0= */";

/***/ }),

/***/ 8678:
/*!**********************************************************************!*\
  !*** ./src/app/add-beneficiary/add-beneficiary.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>{{'add_beneficiary' | translate}}</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"form\">\r\n\t\t<ion-list lines=\"none\">\r\n\t\t\t<h2>{{'baneficiary_bank' | translate}}</h2>\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<ion-select mode=\"md\" [(ngModel)]=\"from_account\" interface=\"action-sheet\">\r\n\t\t\t\t\t<ion-select-option value=\"1\">SB 1144 2254 2478 2145</ion-select-option>\r\n\t\t\t\t\t<ion-select-option value=\"2\">SB 2244 1154 6778 7745</ion-select-option>\r\n\t\t\t\t\t<ion-select-option value=\"3\">SB 8844 5654 3278 1045</ion-select-option>\r\n\t\t\t\t</ion-select>\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<h2>{{'baneficiary_full_name' | translate}}</h2>\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<ion-input type=\"name\" value=\"Sam Smith\"></ion-input>\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<h2>{{'baneficiary_account_number' | translate}}</h2>\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<ion-input type=\"text\" value=\"SB 1144 2254 2478 2145\"></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t\t\r\n\t\t\t<h2>{{'transfer_limit' | translate}}</h2>\r\n\t\t\t<ion-item lines=\"none\">\r\n\t\t\t\t<ion-input type=\"text\" value=\"$ 500.00\"></ion-input>\r\n\t\t\t</ion-item>\r\n\t\t</ion-list>\r\n\t</div>\r\n</ion-content>\r\n \r\n<ion-footer class=\"ion-no-border\">\r\n\t<ion-button size=\"large\" shape=\"block\" class=\"btn\">{{'submit' | translate}}</ion-button>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_add-beneficiary_add-beneficiary_module_ts.js.map
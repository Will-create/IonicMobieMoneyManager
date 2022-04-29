"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_withdrawals_withdrawals_module_ts"],{

/***/ 82041:
/*!***********************************************************!*\
  !*** ./src/app/withdrawals/withdrawals-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WithdrawalsPageRoutingModule": () => (/* binding */ WithdrawalsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _withdrawals_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withdrawals.page */ 13105);




const routes = [
    {
        path: '',
        component: _withdrawals_page__WEBPACK_IMPORTED_MODULE_0__.WithdrawalsPage
    },
    {
        path: 'shortforms',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_models_helper_models_ts-node_modules_ionic-native_call-number_index_js"), __webpack_require__.e("src_app_withdrawals_shortforms_shortforms_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./shortforms/shortforms.module */ 32772)).then(m => m.ShortformsPageModule)
    },
    {
        path: 'longforms',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_withdrawals_longforms_longforms_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./longforms/longforms.module */ 82442)).then(m => m.LongformsPageModule)
    }
];
let WithdrawalsPageRoutingModule = class WithdrawalsPageRoutingModule {
};
WithdrawalsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WithdrawalsPageRoutingModule);



/***/ }),

/***/ 76695:
/*!***************************************************!*\
  !*** ./src/app/withdrawals/withdrawals.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WithdrawalsPageModule": () => (/* binding */ WithdrawalsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _withdrawals_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withdrawals-routing.module */ 82041);
/* harmony import */ var _withdrawals_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withdrawals.page */ 13105);








let WithdrawalsPageModule = class WithdrawalsPageModule {
};
WithdrawalsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _withdrawals_routing_module__WEBPACK_IMPORTED_MODULE_0__.WithdrawalsPageRoutingModule
        ],
        declarations: [_withdrawals_page__WEBPACK_IMPORTED_MODULE_1__.WithdrawalsPage]
    })
], WithdrawalsPageModule);



/***/ }),

/***/ 13105:
/*!*************************************************!*\
  !*** ./src/app/withdrawals/withdrawals.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WithdrawalsPage": () => (/* binding */ WithdrawalsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _withdrawals_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withdrawals.page.html?ngResource */ 51453);
/* harmony import */ var _withdrawals_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withdrawals.page.scss?ngResource */ 3175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let WithdrawalsPage = class WithdrawalsPage {
    constructor() { }
    ngOnInit() {
    }
};
WithdrawalsPage.ctorParameters = () => [];
WithdrawalsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-withdrawals',
        template: _withdrawals_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_withdrawals_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WithdrawalsPage);



/***/ }),

/***/ 3175:
/*!**************************************************************!*\
  !*** ./src/app/withdrawals/withdrawals.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhkcmF3YWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUFSIiwiZmlsZSI6IndpdGhkcmF3YWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICAgICAgdG9wOiAtM3B4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 51453:
/*!**************************************************************!*\
  !*** ./src/app/withdrawals/withdrawals.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>{{'withdrawals' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_withdrawals_withdrawals_module_ts.js.map
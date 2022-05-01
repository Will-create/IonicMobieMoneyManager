"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_deposits_deposits_module_ts"],{

/***/ 37571:
/*!*****************************************************!*\
  !*** ./src/app/deposits/deposits-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositsPageRoutingModule": () => (/* binding */ DepositsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _deposits_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deposits.page */ 82699);




const routes = [
    {
        path: '',
        component: _deposits_page__WEBPACK_IMPORTED_MODULE_0__.DepositsPage
    },
    {
        path: 'shortforms',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_deposits_shortforms_shortforms_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./shortforms/shortforms.module */ 66385)).then(m => m.ShortformsPageModule)
    },
    {
        path: 'longforms',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_deposits_longforms_longforms_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./longforms/longforms.module */ 47261)).then(m => m.LongformsPageModule)
    },
    {
        path: 'pending',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_deposits_pending_pending_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pending/pending.module */ 61304)).then(m => m.PendingPageModule)
    },
    {
        path: 'success',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_deposits_success_success_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./success/success.module */ 56987)).then(m => m.SuccessPageModule)
    }
];
let DepositsPageRoutingModule = class DepositsPageRoutingModule {
};
DepositsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DepositsPageRoutingModule);



/***/ }),

/***/ 16587:
/*!*********************************************!*\
  !*** ./src/app/deposits/deposits.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositsPageModule": () => (/* binding */ DepositsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _deposits_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deposits-routing.module */ 37571);
/* harmony import */ var _deposits_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deposits.page */ 82699);








let DepositsPageModule = class DepositsPageModule {
};
DepositsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _deposits_routing_module__WEBPACK_IMPORTED_MODULE_0__.DepositsPageRoutingModule
        ],
        declarations: [_deposits_page__WEBPACK_IMPORTED_MODULE_1__.DepositsPage]
    })
], DepositsPageModule);



/***/ }),

/***/ 82699:
/*!*******************************************!*\
  !*** ./src/app/deposits/deposits.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositsPage": () => (/* binding */ DepositsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _deposits_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deposits.page.html?ngResource */ 89385);
/* harmony import */ var _deposits_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deposits.page.scss?ngResource */ 78469);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let DepositsPage = class DepositsPage {
    constructor() { }
    ngOnInit() {
    }
};
DepositsPage.ctorParameters = () => [];
DepositsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-deposits',
        template: _deposits_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_deposits_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DepositsPage);



/***/ }),

/***/ 78469:
/*!********************************************************!*\
  !*** ./src/app/deposits/deposits.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcG9zaXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUFSIiwiZmlsZSI6ImRlcG9zaXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICAgICAgdG9wOiAtM3B4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 89385:
/*!********************************************************!*\
  !*** ./src/app/deposits/deposits.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>  Transferts envoyés </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_deposits_deposits_module_ts.js.map
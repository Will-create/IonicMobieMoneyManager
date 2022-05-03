"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_deposits_longforms_longforms_module_ts"],{

/***/ 88166:
/*!****************************************************************!*\
  !*** ./src/app/deposits/longforms/longforms-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LongformsPageRoutingModule": () => (/* binding */ LongformsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _longforms_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./longforms.page */ 38758);




const routes = [
    {
        path: '',
        component: _longforms_page__WEBPACK_IMPORTED_MODULE_0__.LongformsPage
    }
];
let LongformsPageRoutingModule = class LongformsPageRoutingModule {
};
LongformsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LongformsPageRoutingModule);



/***/ }),

/***/ 47261:
/*!********************************************************!*\
  !*** ./src/app/deposits/longforms/longforms.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LongformsPageModule": () => (/* binding */ LongformsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _longforms_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./longforms-routing.module */ 88166);
/* harmony import */ var _longforms_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./longforms.page */ 38758);







let LongformsPageModule = class LongformsPageModule {
};
LongformsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _longforms_routing_module__WEBPACK_IMPORTED_MODULE_0__.LongformsPageRoutingModule
        ],
        declarations: [_longforms_page__WEBPACK_IMPORTED_MODULE_1__.LongformsPage]
    })
], LongformsPageModule);



/***/ }),

/***/ 38758:
/*!******************************************************!*\
  !*** ./src/app/deposits/longforms/longforms.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LongformsPage": () => (/* binding */ LongformsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _longforms_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./longforms.page.html?ngResource */ 87770);
/* harmony import */ var _longforms_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./longforms.page.scss?ngResource */ 44216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let LongformsPage = class LongformsPage {
    constructor() { }
    ngOnInit() {
    }
};
LongformsPage.ctorParameters = () => [];
LongformsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-longforms',
        template: _longforms_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_longforms_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LongformsPage);



/***/ }),

/***/ 44216:
/*!*******************************************************************!*\
  !*** ./src/app/deposits/longforms/longforms.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb25nZm9ybXMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 87770:
/*!*******************************************************************!*\
  !*** ./src/app/deposits/longforms/longforms.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>longforms</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_deposits_longforms_longforms_module_ts.js.map
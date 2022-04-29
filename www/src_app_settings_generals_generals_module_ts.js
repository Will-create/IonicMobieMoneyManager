"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_settings_generals_generals_module_ts"],{

/***/ 1242:
/*!**************************************************************!*\
  !*** ./src/app/settings/generals/generals-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralsPageRoutingModule": () => (/* binding */ GeneralsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _generals_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generals.page */ 4941);




const routes = [
    {
        path: '',
        component: _generals_page__WEBPACK_IMPORTED_MODULE_0__.GeneralsPage
    }
];
let GeneralsPageRoutingModule = class GeneralsPageRoutingModule {
};
GeneralsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GeneralsPageRoutingModule);



/***/ }),

/***/ 29634:
/*!******************************************************!*\
  !*** ./src/app/settings/generals/generals.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralsPageModule": () => (/* binding */ GeneralsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _generals_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generals-routing.module */ 1242);
/* harmony import */ var _generals_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generals.page */ 4941);







let GeneralsPageModule = class GeneralsPageModule {
};
GeneralsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _generals_routing_module__WEBPACK_IMPORTED_MODULE_0__.GeneralsPageRoutingModule
        ],
        declarations: [_generals_page__WEBPACK_IMPORTED_MODULE_1__.GeneralsPage]
    })
], GeneralsPageModule);



/***/ }),

/***/ 4941:
/*!****************************************************!*\
  !*** ./src/app/settings/generals/generals.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralsPage": () => (/* binding */ GeneralsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _generals_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generals.page.html?ngResource */ 45590);
/* harmony import */ var _generals_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generals.page.scss?ngResource */ 14316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let GeneralsPage = class GeneralsPage {
    constructor() { }
    ngOnInit() {
    }
};
GeneralsPage.ctorParameters = () => [];
GeneralsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-generals',
        template: _generals_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_generals_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GeneralsPage);



/***/ }),

/***/ 14316:
/*!*****************************************************************!*\
  !*** ./src/app/settings/generals/generals.page.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFscy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 45590:
/*!*****************************************************************!*\
  !*** ./src/app/settings/generals/generals.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>generals</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_settings_generals_generals_module_ts.js.map
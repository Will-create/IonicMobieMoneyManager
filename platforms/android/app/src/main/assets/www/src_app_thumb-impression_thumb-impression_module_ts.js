"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_thumb-impression_thumb-impression_module_ts"],{

/***/ 67011:
/*!*********************************************************************!*\
  !*** ./src/app/thumb-impression/thumb-impression-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThumbImpressionPageRoutingModule": () => (/* binding */ ThumbImpressionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _thumb_impression_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thumb-impression.page */ 15030);




const routes = [
    {
        path: '',
        component: _thumb_impression_page__WEBPACK_IMPORTED_MODULE_0__.ThumbImpressionPage
    }
];
let ThumbImpressionPageRoutingModule = class ThumbImpressionPageRoutingModule {
};
ThumbImpressionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ThumbImpressionPageRoutingModule);



/***/ }),

/***/ 63344:
/*!*************************************************************!*\
  !*** ./src/app/thumb-impression/thumb-impression.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThumbImpressionPageModule": () => (/* binding */ ThumbImpressionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _thumb_impression_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thumb-impression-routing.module */ 67011);
/* harmony import */ var _thumb_impression_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thumb-impression.page */ 15030);








let ThumbImpressionPageModule = class ThumbImpressionPageModule {
};
ThumbImpressionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _thumb_impression_routing_module__WEBPACK_IMPORTED_MODULE_0__.ThumbImpressionPageRoutingModule
        ],
        declarations: [_thumb_impression_page__WEBPACK_IMPORTED_MODULE_1__.ThumbImpressionPage]
    })
], ThumbImpressionPageModule);



/***/ }),

/***/ 15030:
/*!***********************************************************!*\
  !*** ./src/app/thumb-impression/thumb-impression.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThumbImpressionPage": () => (/* binding */ ThumbImpressionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _thumb_impression_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thumb-impression.page.html?ngResource */ 88750);
/* harmony import */ var _thumb_impression_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thumb-impression.page.scss?ngResource */ 15071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ThumbImpressionPage = class ThumbImpressionPage {
    constructor() { }
    ngOnInit() {
    }
};
ThumbImpressionPage.ctorParameters = () => [];
ThumbImpressionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-thumb-impression',
        template: _thumb_impression_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_thumb_impression_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ThumbImpressionPage);



/***/ }),

/***/ 15071:
/*!************************************************************************!*\
  !*** ./src/app/thumb-impression/thumb-impression.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".container {\n  width: calc(100% - 40px);\n  margin: 0 auto;\n  margin-top: 30px;\n}\n\nh2 {\n  margin: 0;\n  font-size: 0.97rem;\n  color: var(--text-light);\n  font-weight: 500;\n  text-align: center;\n  margin-bottom: 25px;\n}\n\n.fingerprint {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  width: 79px;\n  height: 128px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRodW1iLWltcHJlc3Npb24ucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXExvdWlzJTIwQmVydHNvblxcRGVza3RvcFxcU3Bhc3MlMjBUZWxlY29tXFxNb2JpbGVDbGllbnRcXHNyY1xcYXBwXFx0aHVtYi1pbXByZXNzaW9uXFx0aHVtYi1pbXByZXNzaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NEOztBREVBO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ0QiLCJmaWxlIjoidGh1bWItaW1wcmVzc2lvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuXHR3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0bWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuaDIge1xyXG5cdG1hcmdpbjogMDtcclxuXHRmb250LXNpemU6IC45N3JlbTtcclxuXHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLmZpbmdlcnByaW50IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0Ym90dG9tOiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHR3aWR0aDogNzlweDtcclxuXHRoZWlnaHQ6IDEyOHB4O1xyXG59IiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbmgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuOTdyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uZmluZ2VycHJpbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNzlweDtcbiAgaGVpZ2h0OiAxMjhweDtcbn0iXX0= */";

/***/ }),

/***/ 88750:
/*!************************************************************************!*\
  !*** ./src/app/thumb-impression/thumb-impression.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{'assign_thumb_impression' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n    <div class=\"container\">\r\n        <h2 class=\"\">\r\n            <span class=\"animate__animated animate__fadeInUp\">{{'enter_your_thumb_impression' | translate}}</span>\r\n            <br>\r\n            <span class=\"animate__animated animate__fadeInUp\">{{'3_times_to_assign' | translate}}</span>\r\n        </h2>\r\n        <div class=\"fingerprint animate__animated animate__zoomIn\">\r\n            <img src=\"assets/imgs/ic_thumb.png\">\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n    <h2>\r\n        <span class=\"animate__animated animate__fadeInUp\"> {{'tips' | translate}}:</span>\r\n        <br>\r\n        <span class=\"animate__animated animate__fadeInUp\">{{'try_to_tab' | translate}}</span>\r\n        <br>\r\n        <span class=\"animate__animated animate__fadeInUp\">{{'add_oftenly' | translate}}</span>\r\n        <br>\r\n        <span class=\"animate__animated animate__fadeInUp\">{{'you_canchange' | translate}}</span>\r\n    </h2>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_thumb-impression_thumb-impression_module_ts.js.map
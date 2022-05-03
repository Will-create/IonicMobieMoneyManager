"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sign-up_sign-up_module_ts"],{

/***/ 59204:
/*!***************************************************!*\
  !*** ./src/app/sign-up/sign-up-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPageRoutingModule": () => (/* binding */ SignUpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up.page */ 10080);




const routes = [
    {
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_0__.SignUpPage
    }
];
let SignUpPageRoutingModule = class SignUpPageRoutingModule {
};
SignUpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignUpPageRoutingModule);



/***/ }),

/***/ 73982:
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPageModule": () => (/* binding */ SignUpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-routing.module */ 59204);
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up.page */ 10080);








let SignUpPageModule = class SignUpPageModule {
};
SignUpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignUpPageRoutingModule
        ],
        declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_1__.SignUpPage]
    })
], SignUpPageModule);



/***/ }),

/***/ 10080:
/*!*****************************************!*\
  !*** ./src/app/sign-up/sign-up.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPage": () => (/* binding */ SignUpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sign_up_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up.page.html?ngResource */ 98796);
/* harmony import */ var _sign_up_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up.page.scss?ngResource */ 55585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let SignUpPage = class SignUpPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    verification() {
        this.route.navigate(['./verification']);
    }
};
SignUpPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SignUpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-sign-up',
        template: _sign_up_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sign_up_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignUpPage);



/***/ }),

/***/ 55585:
/*!******************************************************!*\
  !*** ./src/app/sign-up/sign-up.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".banner {\n  background: var(--primary);\n  height: 160px;\n  display: flex;\n  align-items: flex-start;\n}\n.banner h2 {\n  margin: 0;\n  color: var(--white);\n  align-self: center;\n  width: 100%;\n  font-size: 1.6rem;\n  font-weight: 500;\n}\n.banner h2 span {\n  font-weight: 400;\n}\n.form {\n  margin-top: 30px;\n}\n.form ion-list {\n  padding-bottom: 8px;\n}\n.form ion-list ion-item:last-of-type {\n  margin-bottom: 16px !important;\n}\n.form h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.95rem;\n  margin-bottom: 30px;\n}\n.thumb_impression {\n  padding-top: 30px;\n  width: calc(100% - 64px);\n  margin: 0 auto;\n}\n.thumb_impression h2 {\n  color: var(--text-dark);\n  margin: 0;\n  font-size: 0.95rem;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXExvdWlzJTIwQmVydHNvblxcRGVza3RvcFxcU3Bhc3MlMjBUZWxlY29tXFxNb2JpbGVDbGllbnRcXHNyY1xcYXBwXFxzaWduLXVwXFxzaWduLXVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0NEO0FEQ0M7RUFDQyxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURDRTtFQUNDLGdCQUFBO0FDQ0g7QURJQTtFQUNDLGdCQUFBO0FDREQ7QURHQztFQUNDLG1CQUFBO0FDREY7QURHWTtFQUNJLDhCQUFBO0FDRGhCO0FETUM7RUFDQyxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSkY7QURTQTtFQUNDLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FDTkQ7QURRQztFQUNDLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNORiIsImZpbGUiOiJzaWduLXVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXIge1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG5cdGhlaWdodDogMTYwcHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcblx0aDIge1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHRcdGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0Zm9udC1zaXplOiAxLjZyZW07XHJcblx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cclxuXHRcdHNwYW4ge1xyXG5cdFx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLmZvcm0ge1xyXG5cdG1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG5cdGlvbi1saXN0IHtcclxuXHRcdHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgICY6bGFzdC1vZi10eXBle1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcblx0aDIge1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG5cdFx0Zm9udC1zaXplOiAuOTVyZW07XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbi50aHVtYl9pbXByZXNzaW9uIHtcclxuXHRwYWRkaW5nLXRvcDogMzBweDtcclxuXHR3aWR0aDogY2FsYygxMDAlIC0gNjRweCk7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblxyXG5cdGgyIHtcclxuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0Zm9udC1zaXplOiAuOTVyZW07XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdH1cclxufVxyXG4iLCIuYmFubmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIGhlaWdodDogMTYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmJhbm5lciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYmFubmVyIGgyIHNwYW4ge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uZm9ybSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uZm9ybSBpb24tbGlzdCB7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG4uZm9ybSBpb24tbGlzdCBpb24taXRlbTpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG4uZm9ybSBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi50aHVtYl9pbXByZXNzaW9uIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2NHB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4udGh1bWJfaW1wcmVzc2lvbiBoMiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn0iXX0= */";

/***/ }),

/***/ 98796:
/*!******************************************************!*\
  !*** ./src/app/sign-up/sign-up.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title></ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"banner\">\r\n        <h2 class=\"ion-text-center animate__animated animate__zoomIn\">\r\n            {{'app_title' | translate}}\r\n            <span>{{'app_title_2' | translate}}</span>\r\n        </h2>\r\n    </div>\r\n\r\n    <div class=\"form\">\r\n        <h2 class=\"ion-text-center animate__animated animate__fadeInUp\">{{'register_with_your_banking_details' | translate}}</h2>\r\n        <ion-list lines=\"none\">\r\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\r\n                <ion-input type=\"email\" placeholder=\"{{'email_your_customer_id' | translate}}\"></ion-input>\r\n            </ion-item>\r\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\r\n                <ion-input type=\"number\" placeholder=\"{{'enter_account_number' | translate}}\"></ion-input>\r\n            </ion-item>\r\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\r\n                <ion-input type=\"text\" placeholder=\"{{'enter_mpin' | translate}}\"></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-button size=\"large\" shape=\"block\" class=\"btn animate__animated animate__fadeInUp\" (click)=\"verification()\">{{'continue' | translate}}</ion-button>\r\n        </ion-list>\r\n\r\n    </div>\r\n\r\n    <div class=\"thumb_impression ion-text-center \">\r\n        <h2>\r\n            <span class=\"animate__animated animate__fadeInUp\">{{'sign_up_text' | translate}}</span>\r\n            <br>\r\n            <span class=\"animate__animated animate__fadeInUp\"> {{'phone_number' | translate}}</span>\r\n        </h2>\r\n    </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_sign-up_sign-up_module_ts.js.map
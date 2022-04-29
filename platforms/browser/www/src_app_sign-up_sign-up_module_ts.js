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

module.exports = ".banner {\n  background: var(--primary);\n  height: 160px;\n  display: flex;\n  align-items: flex-start;\n}\n.banner h2 {\n  margin: 0;\n  color: var(--white);\n  align-self: center;\n  width: 100%;\n  font-size: 1.6rem;\n  font-weight: 500;\n}\n.banner h2 span {\n  font-weight: 400;\n}\n.form {\n  margin-top: 30px;\n}\n.form ion-list {\n  padding-bottom: 8px;\n}\n.form ion-list ion-item:last-of-type {\n  margin-bottom: 16px !important;\n}\n.form h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.95rem;\n  margin-bottom: 30px;\n}\n.thumb_impression {\n  padding-top: 30px;\n  width: calc(100% - 64px);\n  margin: 0 auto;\n}\n.thumb_impression h2 {\n  color: var(--text-dark);\n  margin: 0;\n  font-size: 0.95rem;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0Q7QUFDQztFQUNDLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0MsZ0JBQUE7QUFDSDtBQUlBO0VBQ0MsZ0JBQUE7QUFERDtBQUdDO0VBQ0MsbUJBQUE7QUFERjtBQUdZO0VBQ0ksOEJBQUE7QUFEaEI7QUFNQztFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFKRjtBQVNBO0VBQ0MsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUFORDtBQVFDO0VBQ0MsdUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQU5GIiwiZmlsZSI6InNpZ24tdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lciB7XG5cdGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuXHRoZWlnaHQ6IDE2MHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuXHRoMiB7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XG5cdFx0YWxpZ24tc2VsZjogY2VudGVyO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGZvbnQtc2l6ZTogMS42cmVtO1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cblx0XHRzcGFuIHtcblx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0fVxuXHR9XG59XG5cbi5mb3JtIHtcblx0bWFyZ2luLXRvcDogMzBweDtcblxuXHRpb24tbGlzdCB7XG5cdFx0cGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgaW9uLWl0ZW17XG4gICAgICAgICAgICAmOmxhc3Qtb2YtdHlwZXtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblx0fVxuXG5cdGgyIHtcblx0XHRtYXJnaW46IDA7XG5cdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHRcdGZvbnQtc2l6ZTogLjk1cmVtO1xuXHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XG5cdH1cblxufVxuXG4udGh1bWJfaW1wcmVzc2lvbiB7XG5cdHBhZGRpbmctdG9wOiAzMHB4O1xuXHR3aWR0aDogY2FsYygxMDAlIC0gNjRweCk7XG5cdG1hcmdpbjogMCBhdXRvO1xuXG5cdGgyIHtcblx0XHRjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcblx0XHRtYXJnaW46IDA7XG5cdFx0Zm9udC1zaXplOiAuOTVyZW07XG5cdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcblx0fVxufVxuIl19 */";

/***/ }),

/***/ 98796:
/*!******************************************************!*\
  !*** ./src/app/sign-up/sign-up.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title></ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"banner\">\n        <h2 class=\"ion-text-center animate__animated animate__zoomIn\">\n            {{'app_title' | translate}}\n            <span>{{'app_title_2' | translate}}</span>\n        </h2>\n    </div>\n\n    <div class=\"form\">\n        <h2 class=\"ion-text-center animate__animated animate__fadeInUp\">{{'register_with_your_banking_details' | translate}}</h2>\n        <ion-list lines=\"none\">\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                <ion-input type=\"email\" placeholder=\"{{'email_your_customer_id' | translate}}\"></ion-input>\n            </ion-item>\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                <ion-input type=\"number\" placeholder=\"{{'enter_account_number' | translate}}\"></ion-input>\n            </ion-item>\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                <ion-input type=\"text\" placeholder=\"{{'enter_mpin' | translate}}\"></ion-input>\n            </ion-item>\n\n            <ion-button size=\"large\" shape=\"block\" class=\"btn animate__animated animate__fadeInUp\" (click)=\"verification()\">{{'continue' | translate}}</ion-button>\n        </ion-list>\n\n    </div>\n\n    <div class=\"thumb_impression ion-text-center \">\n        <h2>\n            <span class=\"animate__animated animate__fadeInUp\">{{'sign_up_text' | translate}}</span>\n            <br>\n            <span class=\"animate__animated animate__fadeInUp\"> {{'phone_number' | translate}}</span>\n        </h2>\n    </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_sign-up_sign-up_module_ts.js.map
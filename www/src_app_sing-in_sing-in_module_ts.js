"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sing-in_sing-in_module_ts"],{

/***/ 40914:
/*!***************************************************!*\
  !*** ./src/app/sing-in/sing-in-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingInPageRoutingModule": () => (/* binding */ SingInPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _sing_in_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sing-in.page */ 26852);




const routes = [
    {
        path: '',
        component: _sing_in_page__WEBPACK_IMPORTED_MODULE_0__.SingInPage
    }
];
let SingInPageRoutingModule = class SingInPageRoutingModule {
};
SingInPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SingInPageRoutingModule);



/***/ }),

/***/ 21553:
/*!*******************************************!*\
  !*** ./src/app/sing-in/sing-in.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingInPageModule": () => (/* binding */ SingInPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _sing_in_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sing-in-routing.module */ 40914);
/* harmony import */ var _sing_in_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sing-in.page */ 26852);








let SingInPageModule = class SingInPageModule {
};
SingInPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _sing_in_routing_module__WEBPACK_IMPORTED_MODULE_0__.SingInPageRoutingModule
        ],
        declarations: [_sing_in_page__WEBPACK_IMPORTED_MODULE_1__.SingInPage]
    })
], SingInPageModule);



/***/ }),

/***/ 26852:
/*!*****************************************!*\
  !*** ./src/app/sing-in/sing-in.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingInPage": () => (/* binding */ SingInPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sing_in_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sing-in.page.html?ngResource */ 657);
/* harmony import */ var _sing_in_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sing-in.page.scss?ngResource */ 36313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);






let SingInPage = class SingInPage {
    constructor(navCtrl, route) {
        this.navCtrl = navCtrl;
        this.route = route;
    }
    ngOnInit() {
    }
    tabs() {
        this.navCtrl.navigateRoot(['./tabs']);
    }
    sign_up() {
        this.route.navigate(['./sign-up']);
    }
};
SingInPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
SingInPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-sing-in',
        template: _sing_in_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sing_in_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SingInPage);



/***/ }),

/***/ 36313:
/*!******************************************************!*\
  !*** ./src/app/sing-in/sing-in.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  font-size: 1.15rem;\n  font-weight: 400;\n}\n\n.banner {\n  background: var(--primary);\n  height: 160px;\n  display: flex;\n  align-items: flex-start;\n}\n\n.banner h2 {\n  margin: 0;\n  color: var(--white);\n  align-self: center;\n  width: 100%;\n  font-size: 1.6rem;\n  font-weight: 500;\n}\n\n.banner h2 span {\n  font-weight: 400;\n}\n\n.form {\n  margin-top: 30px;\n}\n\n.form ion-list {\n  padding-bottom: 8px;\n}\n\n.form ion-list ion-item:last-of-type {\n  margin-bottom: 16px !important;\n}\n\n.form h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.95rem;\n  margin-bottom: 30px;\n}\n\n.thumb_impression {\n  padding-top: 40px;\n  width: calc(100% - 64px);\n  margin: 0 auto;\n}\n\n.thumb_impression h2 {\n  color: var(--text-dark);\n  margin: 0;\n  font-size: 0.95rem;\n  margin-bottom: 30px;\n}\n\n.thumb_impression .fingerprint {\n  width: 47px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmctaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtBQUNEOztBQUVBO0VBQ0MsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0Q7O0FBQ0M7RUFDQyxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0U7RUFDQyxnQkFBQTtBQUNIOztBQUlBO0VBQ0MsZ0JBQUE7QUFERDs7QUFHQztFQUNDLG1CQUFBO0FBREY7O0FBR1k7RUFDSSw4QkFBQTtBQURoQjs7QUFNQztFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFTQTtFQUNDLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FBTkQ7O0FBUUM7RUFDQyx1QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBTkY7O0FBU0M7RUFDQyxXQUFBO0VBQ0EsY0FBQTtBQVBGIiwiZmlsZSI6InNpbmctaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuXHRmb250LXNpemU6IDEuMTVyZW07XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5iYW5uZXIge1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcblx0aGVpZ2h0OiAxNjBweDtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cblx0aDIge1xuXHRcdG1hcmdpbjogMDtcblx0XHRjb2xvcjogdmFyKC0td2hpdGUpO1xuXHRcdGFsaWduLXNlbGY6IGNlbnRlcjtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRmb250LXNpemU6IDEuNnJlbTtcblx0XHRmb250LXdlaWdodDogNTAwO1xuXG5cdFx0c3BhbiB7XG5cdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdH1cblx0fVxufVxuXG4uZm9ybSB7XG5cdG1hcmdpbi10b3A6IDMwcHg7XG5cblx0aW9uLWxpc3Qge1xuXHRcdHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgIGlvbi1pdGVte1xuICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGV7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cdH1cblxuXHRoMiB7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcblx0XHRmb250LXNpemU6IC45NXJlbTtcblx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xuXHR9XG5cbn1cblxuLnRodW1iX2ltcHJlc3Npb24ge1xuXHRwYWRkaW5nLXRvcDogNDBweDtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDY0cHgpO1xuXHRtYXJnaW46IDAgYXV0bztcblxuXHRoMiB7XG5cdFx0Y29sb3I6IHZhcigtLXRleHQtZGFyayk7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdGZvbnQtc2l6ZTogLjk1cmVtO1xuXHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XG5cdH1cblxuXHQuZmluZ2VycHJpbnQge1xuXHRcdHdpZHRoOiA0N3B4O1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHR9XG5cbn0iXX0= */";

/***/ }),

/***/ 657:
/*!******************************************************!*\
  !*** ./src/app/sing-in/sing-in.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            <span class=\"d-flex\" (click)=\"sign_up()\">\n                <span class=\"end\"> {{'new_user' | translate}}</span>\n            </span>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"bg_color\">\n    <div class=\"banner\">\n        <h2 class=\"ion-text-center animate__animated animate__zoomIn\">\n            {{'app_title' | translate}}\n            <span>{{'app_title_2' | translate}}</span>\n        </h2>\n    </div>\n\n    <div class=\"form\">\n        <h2 class=\"ion-text-center animate__animated animate__fadeInUp\">{{'or_sign_in_with_customer_id' | translate}}</h2>\n        <ion-list lines=\"none\">\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                <ion-input type=\"email\" placeholder=\"{{'email_customer_id' | translate}}\"></ion-input>\n            </ion-item>\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                <ion-input type=\"text\" placeholder=\"{{'enter_mpin' | translate}}\"></ion-input>\n            </ion-item>\n            <ion-button size=\"large\" shape=\"block animate__animated animate__fadeInUp\" class=\"btn\" (click)=\"tabs()\">{{'sign_in' | translate}}</ion-button>\n        </ion-list>\n    </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_sing-in_sing-in_module_ts.js.map
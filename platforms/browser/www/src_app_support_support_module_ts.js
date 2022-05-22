"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_support_support_module_ts"],{

/***/ 10185:
/*!***************************************************!*\
  !*** ./src/app/support/support-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportPageRoutingModule": () => (/* binding */ SupportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support.page */ 35028);




const routes = [
    {
        path: '',
        component: _support_page__WEBPACK_IMPORTED_MODULE_0__.SupportPage
    }
];
let SupportPageRoutingModule = class SupportPageRoutingModule {
};
SupportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SupportPageRoutingModule);



/***/ }),

/***/ 96758:
/*!*******************************************!*\
  !*** ./src/app/support/support.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportPageModule": () => (/* binding */ SupportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support-routing.module */ 10185);
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support.page */ 35028);








let SupportPageModule = class SupportPageModule {
};
SupportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _support_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupportPageRoutingModule
        ],
        declarations: [_support_page__WEBPACK_IMPORTED_MODULE_1__.SupportPage]
    })
], SupportPageModule);



/***/ }),

/***/ 35028:
/*!*****************************************!*\
  !*** ./src/app/support/support.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportPage": () => (/* binding */ SupportPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _support_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support.page.html?ngResource */ 51303);
/* harmony import */ var _support_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support.page.scss?ngResource */ 52620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SupportPage = class SupportPage {
    constructor() { }
    ngOnInit() {
    }
};
SupportPage.ctorParameters = () => [];
SupportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-support',
        template: _support_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_support_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SupportPage);



/***/ }),

/***/ 52620:
/*!******************************************************!*\
  !*** ./src/app/support/support.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\n.banner {\n  background: var(--primary);\n  height: 160px;\n  display: flex;\n  align-items: flex-start;\n}\n\n.banner h2 {\n  margin: 0;\n  color: var(--white);\n  align-self: center;\n  width: 100%;\n  font-size: 1.6rem;\n  font-weight: 500;\n}\n\n.banner h2 span {\n  font-weight: 400;\n}\n\n.form {\n  width: 100%;\n}\n\nion-list {\n  background: none !important;\n  padding: 0;\n  margin: 0;\n  padding-top: 5px;\n}\n\nion-list ion-card {\n  background: var(--white);\n  border-radius: 8px;\n  box-shadow: none;\n  width: calc(100% - 27px);\n  margin: 8px auto;\n  padding: 16px 15px;\n}\n\nion-list ion-card h2 {\n  color: var(--text-black);\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 500;\n  padding-bottom: 13px;\n}\n\nion-list ion-card p {\n  color: var(--text-light);\n  font-size: 0.95rem;\n  margin: 0;\n}\n\nion-list ion-card h3 {\n  color: var(--text-black);\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  padding-bottom: 13px;\n}\n\nion-list ion-card h3 ion-icon {\n  color: var(--secondary);\n  min-width: 30px;\n}\n\nion-list ion-card h3:last-child {\n  padding-bottom: 0;\n}\n\nion-list ion-card h3:first-of-type {\n  padding-top: 5px;\n}\n\nion-list ion-card .item_inner {\n  align-items: flex-start;\n  padding-top: 12px;\n}\n\nion-list ion-card .item_inner ion-icon {\n  margin: 0;\n  color: var(--secondary);\n  min-width: 30px;\n}\n\nion-list ion-card .item_inner ion-item {\n  padding: 0;\n  background: none;\n  border-radius: 0;\n  margin: 0;\n  border-bottom: 1px solid #ccc;\n  width: 100%;\n  --min-height: unset;\n}\n\nion-list ion-card .item_inner ion-item ion-textarea {\n  margin: 0;\n  padding-bottom: 9px;\n}\n\nion-footer {\n  --animate-duration: .4s !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cHBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFDSTtFQUNJLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDUjs7QUFDUTtFQUNJLGdCQUFBO0FBQ1o7O0FBSUE7RUFDSSxXQUFBO0FBREo7O0FBSUE7RUFDSSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFHSTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQURSOztBQUdRO0VBQ0ksd0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBRFo7O0FBSVE7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUZaOztBQUtRO0VBQ0ksd0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFIWjs7QUFLWTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtBQUhoQjs7QUFNWTtFQUNJLGlCQUFBO0FBSmhCOztBQU9ZO0VBQ0ksZ0JBQUE7QUFMaEI7O0FBV1E7RUFDSSx1QkFBQTtFQUNBLGlCQUFBO0FBVFo7O0FBV1k7RUFDSSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBVGhCOztBQVlZO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFWaEI7O0FBWWdCO0VBQ0ksU0FBQTtFQUNBLG1CQUFBO0FBVnBCOztBQW1CQTtFQUNJLGtDQUFBO0FBaEJKIiwiZmlsZSI6InN1cHBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIHRvcDogLTNweDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJhbm5lciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICAgaDIge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tbGlzdCB7XG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG5cbiAgICBpb24tY2FyZCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjdweCk7XG4gICAgICAgIG1hcmdpbjogOHB4IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMTVweDtcblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAuOTVyZW07XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICBoMyB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEzcHg7XG5cbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cblxuICAgICAgICAuaXRlbV9pbm5lciB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuXG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAtLW1pbi1oZWlnaHQ6IHVuc2V0O1xuXG4gICAgICAgICAgICAgICAgaW9uLXRleHRhcmVhIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmlvbi1mb290ZXIge1xuICAgIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjRzICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 51303:
/*!******************************************************!*\
  !*** ./src/app/support/support.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{'support' | translate}}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg_color\" fullscreen>\n\t<div class=\"banner\">\n\t\t<h2 class=\"ion-text-center animate__animated animate__zoomIn\">{{'app_title' | translate}} <span>{{'app_title_2' | translate}}</span></h2>\n\t</div>\n\t<div class=\"form\">\n\t\t<ion-list lines=\"none\">\n\t\t\t<ion-card class=\"animate__animated animate__fadeInUp\">\n\t\t\t\t<h2>{{'we_are_here' | translate}}</h2>\n\t\t\t\t<p>Fragment Park, Near World Trade building, Melbourne, Australia.</p>\n\t\t\t</ion-card>\n\n\t\t\t<ion-card class=\"animate__animated animate__fadeInUp\">\n\t\t\t\t<h2>{{'connect_us' | translate}}</h2>\n\t\t\t\t<h3 class=\"d-flex\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-phone ion-text-start\"></ion-icon> +1 987 654 3210\n\t\t\t\t</h3>\n\t\t\t\t<h3 class=\"d-flex\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-email ion-text-start\"></ion-icon> help@kdemmy.com\n\t\t\t\t</h3>\n\t\t\t</ion-card>\n\n\t\t\t<ion-card class=\"animate__animated animate__fadeInUp\">\n\t\t\t\t<h2>{{'write_us_directly' | translate}}</h2>\n\t\t\t\t<div class=\"d-flex item_inner\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-email ion-text-start\"></ion-icon>\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-textarea rows=\"1\" placeholder=\"{{'your_message' | translate}}\"></ion-textarea>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</div>\n\t\t\t</ion-card>\n\t\t</ion-list>\n\t</div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\n\t<ion-button size=\"large\" shape=\"full\" class=\"btn\">{{'submit' | translate}}</ion-button>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_support_support_module_ts.js.map
"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_settings_settings_module_ts"],{

/***/ 91836:
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page */ 7162);




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
    },
    {
        path: 'generals',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_settings_generals_generals_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./generals/generals.module */ 29634)).then(m => m.GeneralsPageModule)
    },
    {
        path: 'server',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_settings_server_server_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./server/server.module */ 66132)).then(m => m.ServerPageModule)
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ 27075:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 91836);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page */ 7162);








let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage]
    })
], SettingsPageModule);



/***/ }),

/***/ 7162:
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page.html?ngResource */ 75375);
/* harmony import */ var _settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.scss?ngResource */ 2282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let SettingsPage = class SettingsPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    general() {
        this.router.navigate(['settings/generals']);
    }
    language() {
        this.router.navigate(['./change-language']);
    }
    server() {
        this.router.navigate(['settings/server']);
    }
    user() {
        this.router.navigate(['./profile']);
    }
};
SettingsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-settings',
        template: _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SettingsPage);



/***/ }),

/***/ 2282:
/*!********************************************************!*\
  !*** ./src/app/settings/settings.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\nion-list {\n  margin: 0;\n  margin-top: 13px;\n  padding: 0;\n  background: none;\n}\n\nion-list ion-item {\n  width: calc(100% - 20px);\n  margin: 0 auto;\n  border-radius: 8px;\n  margin-bottom: 13px;\n  padding: 15px;\n  box-shadow: 0 5px 4px -6px rgba(0, 0, 0, 0.4);\n  --background: var(--transparent);\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --min-height: unset;\n}\n\nion-list ion-item .icon_box {\n  margin: 0;\n  width: 45px;\n  margin-right: 20px;\n}\n\nion-list ion-item .icon_box ion-icon {\n  font-size: 35px;\n}\n\nion-list ion-item .text_box {\n  width: 100%;\n}\n\nion-list ion-item .text_box h2 {\n  margin: 0;\n  margin-bottom: 5px;\n  font-weight: 700;\n  font-size: 1rem;\n}\n\nion-list ion-item .text_box h3 {\n  color: var(--text-light);\n  font-size: 0.9rem;\n  font-weight: 400;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUk7RUFDSSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDZDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRVI7O0FBQVE7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRVo7O0FBQVk7RUFDSSxlQUFBO0FBRWhCOztBQUVRO0VBQ0ksV0FBQTtBQUFaOztBQUVZO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQWhCOztBQUdZO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQURoQiIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gICAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAtM3B4O1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWxpc3Qge1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcblxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDVweCA0cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIC0tbWluLWhlaWdodDogdW5zZXQ7XG5cbiAgICAgICAgLmljb25fYm94IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuXG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplIDogMzVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0X2JveCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";

/***/ }),

/***/ 75375:
/*!********************************************************!*\
  !*** ./src/app/settings/settings.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{'settings' | translate}}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg_color\">\n\t<ion-list lines=\"none\">\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"general()\">\n\t\t\t<div class=\"icon_box\" slot=\"start\">\n\t\t\t\t<ion-icon name=\"options-outline\"></ion-icon>\n\t\t\t</div>\n\t\t\t<div class=\"text_box\">\n\t\t\t\t<h2>{{'general_settings' | translate}}</h2>\n\t\t\t\t<h3>{{'preferences' | translate}}</h3>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"language()\">\n\t\t\t<div class=\"icon_box\" slot=\"start\">\n\t\t\t\t<ion-icon name=\"language-outline\"></ion-icon>\n\t\t\t</div>\n\t\t\t<div class=\"text_box\">\n\t\t\t\t<h2>{{'language' | translate}}</h2>\n\t\t\t\t<h3>{{'change_language' | translate}}</h3>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"server()\">\n\t\t\t<div class=\"icon_box\" slot=\"start\">\n\t\t\t\t<ion-icon name=\"server-outline\"></ion-icon>\n\t\t\t</div>\n\t\t\t<div class=\"text_box\">\n\t\t\t\t<h2>{{'server' | translate}}</h2>\n\t\t\t\t<h3>{{'link_server' | translate}}</h3>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"user()\">\n\t\t\t<div class=\"icon_box\" slot=\"start\">\n\t\t\t\t<ion-icon name=\"person-outline\"></ion-icon>\n\t\t\t</div>\n\t\t\t<div class=\"text_box\">\n\t\t\t\t<h2>{{'user' | translate}}</h2>\n\t\t\t\t<h3>{{'user_profile' | translate}}</h3>\n\t\t\t</div>\n\t\t</ion-item>\t\n\t</ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_settings_settings_module_ts.js.map
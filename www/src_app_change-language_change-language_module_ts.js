"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_change-language_change-language_module_ts"],{

/***/ 15090:
/*!*******************************************************************!*\
  !*** ./src/app/change-language/change-language-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeLanguagePageRoutingModule": () => (/* binding */ ChangeLanguagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _change_language_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-language.page */ 10250);




const routes = [
    {
        path: '',
        component: _change_language_page__WEBPACK_IMPORTED_MODULE_0__.ChangeLanguagePage
    }
];
let ChangeLanguagePageRoutingModule = class ChangeLanguagePageRoutingModule {
};
ChangeLanguagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChangeLanguagePageRoutingModule);



/***/ }),

/***/ 76169:
/*!***********************************************************!*\
  !*** ./src/app/change-language/change-language.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeLanguagePageModule": () => (/* binding */ ChangeLanguagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _change_language_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-language-routing.module */ 15090);
/* harmony import */ var _change_language_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-language.page */ 10250);








let ChangeLanguagePageModule = class ChangeLanguagePageModule {
};
ChangeLanguagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _change_language_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangeLanguagePageRoutingModule
        ],
        declarations: [_change_language_page__WEBPACK_IMPORTED_MODULE_1__.ChangeLanguagePage]
    })
], ChangeLanguagePageModule);



/***/ }),

/***/ 10250:
/*!*********************************************************!*\
  !*** ./src/app/change-language/change-language.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeLanguagePage": () => (/* binding */ ChangeLanguagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _change_language_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-language.page.html?ngResource */ 51795);
/* harmony import */ var _change_language_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-language.page.scss?ngResource */ 14272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.config */ 49670);
/* harmony import */ var src_services_myevent_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/myevent.services */ 30069);
/* harmony import */ var src_models_contants_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/contants.models */ 64879);







let ChangeLanguagePage = class ChangeLanguagePage {
    constructor(config, myEvent) {
        this.config = config;
        this.myEvent = myEvent;
        this.languages = this.config.availableLanguages;
        this.defaultLanguageCode = config.availableLanguages[0].code;
        let defaultLang = window.localStorage.getItem(src_models_contants_models__WEBPACK_IMPORTED_MODULE_4__.Constants.KEY_DEFAULT_LANGUAGE);
        if (defaultLang)
            this.defaultLanguageCode = defaultLang;
    }
    ngOnInit() {
    }
    onLanguageClick(language) {
        this.defaultLanguageCode = language.code;
    }
    languageConfirm() {
        this.myEvent.setLanguageData(this.defaultLanguageCode);
        window.localStorage.setItem(src_models_contants_models__WEBPACK_IMPORTED_MODULE_4__.Constants.KEY_DEFAULT_LANGUAGE, this.defaultLanguageCode);
    }
};
ChangeLanguagePage.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject, args: [_app_config__WEBPACK_IMPORTED_MODULE_2__.APP_CONFIG,] }] },
    { type: src_services_myevent_services__WEBPACK_IMPORTED_MODULE_3__.MyEvent }
];
ChangeLanguagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-change-language',
        template: _change_language_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_change_language_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChangeLanguagePage);



/***/ }),

/***/ 14272:
/*!**********************************************************************!*\
  !*** ./src/app/change-language/change-language.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "ion-list {\n  margin: 0;\n  margin-top: 13px;\n  padding: 0;\n  background: none;\n}\nion-list ion-item {\n  width: calc(100% - 20px);\n  margin: 0 auto;\n  border-radius: 8px;\n  margin-bottom: 10px;\n  padding: 15px;\n  box-shadow: 0 5px 4px -6px rgba(0, 0, 0, 0.4);\n  --background: var(--transparent);\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --min-height: unset;\n}\nion-list ion-item .item_inner {\n  width: 100%;\n  margin-top: 0;\n  margin-bottom: 0;\n}\nion-list ion-item .item_inner ion-radio {\n  --color-checked: var(--secondary);\n}\nion-list ion-item .item_inner h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 500;\n}\nion-footer {\n  padding: 10px;\n  padding-top: 0;\n  --animate-duration: .4s !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1sYW5ndWFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNJO0VBQ0ksd0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw2Q0FBQTtFQUNBLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNSO0FBQ1E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBQ1o7QUFDWTtFQUNJLGlDQUFBO0FBQ2hCO0FBRVk7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUFoQjtBQU1BO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtBQUhKIiwiZmlsZSI6ImNoYW5nZS1sYW5ndWFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDRweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgLS1taW4taGVpZ2h0OiB1bnNldDtcblxuICAgICAgICAuaXRlbV9pbm5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgICAgICAgICBpb24tcmFkaW8ge1xuICAgICAgICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjRzICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 51795:
/*!**********************************************************************!*\
  !*** ./src/app/change-language/change-language.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" defaultHref=\"phone-number\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{'select_language' | translate}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"bg_color\" fullscreen>\n    <ion-list lines=\"none\">\n        <ion-radio-group [(ngModel)]=\"defaultLanguageCode\">\n            <ion-item class=\"animate__animated animate__fadeInUp\" *ngFor=\"let language of languages\" (click)=\"onLanguageClick(language)\">\n                <div class=\"item_inner d-flex\">\n                    <h3>{{language.name}}</h3>\n                    <ion-radio class=\"end\" value=\"{{language.code}}\"></ion-radio>\n                </div>\n            </ion-item>\n        </ion-radio-group>\n    </ion-list>\n</ion-content>\n<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\n    <ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"languageConfirm()\">\n        {{'save' | translate}}\n    </ion-button>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_change-language_change-language_module_ts.js.map
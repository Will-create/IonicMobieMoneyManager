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

module.exports = "ion-list {\n  margin: 0;\n  margin-top: 13px;\n  padding: 0;\n  background: none;\n}\nion-list ion-item {\n  width: calc(100% - 20px);\n  margin: 0 auto;\n  border-radius: 8px;\n  margin-bottom: 10px;\n  padding: 15px;\n  box-shadow: 0 5px 4px -6px rgba(0, 0, 0, 0.4);\n  --background: var(--transparent);\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --min-height: unset;\n}\nion-list ion-item .item_inner {\n  width: 100%;\n  margin-top: 0;\n  margin-bottom: 0;\n}\nion-list ion-item .item_inner ion-radio {\n  --color-checked: var(--secondary);\n}\nion-list ion-item .item_inner h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 500;\n}\nion-footer {\n  padding: 10px;\n  padding-top: 0;\n  --animate-duration: .4s !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1sYW5ndWFnZS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTG91aXMlMjBCZXJ0c29uXFxEZXNrdG9wXFxTcGFzcyUyMFRlbGVjb21cXE1vYmlsZUNsaWVudFxcc3JjXFxhcHBcXGNoYW5nZS1sYW5ndWFnZVxcY2hhbmdlLWxhbmd1YWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0k7RUFDSSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDZDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ1I7QURDUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNDWjtBRENZO0VBQ0ksaUNBQUE7QUNDaEI7QURFWTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQWhCO0FETUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0FDSEoiLCJmaWxlIjoiY2hhbmdlLWxhbmd1YWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA1cHggNHB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAtLW1pbi1oZWlnaHQ6IHVuc2V0O1xyXG5cclxuICAgICAgICAuaXRlbV9pbm5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxuICAgICAgICAgICAgaW9uLXJhZGlvIHtcclxuICAgICAgICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjRzICFpbXBvcnRhbnQ7XHJcbn0iLCJpb24tbGlzdCB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDVweCA0cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tbWluLWhlaWdodDogdW5zZXQ7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1zZWNvbmRhcnkpO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDMge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjRzICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 51795:
/*!**********************************************************************!*\
  !*** ./src/app/change-language/change-language.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" defaultHref=\"phone-number\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{'select_language' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"bg_color\" fullscreen>\r\n    <ion-list lines=\"none\">\r\n        <ion-radio-group [(ngModel)]=\"defaultLanguageCode\">\r\n            <ion-item class=\"animate__animated animate__fadeInUp\" *ngFor=\"let language of languages\" (click)=\"onLanguageClick(language)\">\r\n                <div class=\"item_inner d-flex\">\r\n                    <h3>{{language.name}}</h3>\r\n                    <ion-radio class=\"end\" value=\"{{language.code}}\"></ion-radio>\r\n                </div>\r\n            </ion-item>\r\n        </ion-radio-group>\r\n    </ion-list>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\r\n    <ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"languageConfirm()\">\r\n        {{'save' | translate}}\r\n    </ion-button>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_change-language_change-language_module_ts.js.map
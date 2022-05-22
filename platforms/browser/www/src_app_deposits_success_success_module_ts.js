"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_deposits_success_success_module_ts"],{

/***/ 38430:
/*!************************************************************!*\
  !*** ./src/app/deposits/success/success-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessPageRoutingModule": () => (/* binding */ SuccessPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _success_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./success.page */ 81945);




const routes = [
    {
        path: '',
        component: _success_page__WEBPACK_IMPORTED_MODULE_0__.SuccessPage
    }
];
let SuccessPageRoutingModule = class SuccessPageRoutingModule {
};
SuccessPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SuccessPageRoutingModule);



/***/ }),

/***/ 56987:
/*!****************************************************!*\
  !*** ./src/app/deposits/success/success.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessPageModule": () => (/* binding */ SuccessPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _success_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./success-routing.module */ 38430);
/* harmony import */ var _success_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./success.page */ 81945);








let SuccessPageModule = class SuccessPageModule {
};
SuccessPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _success_routing_module__WEBPACK_IMPORTED_MODULE_0__.SuccessPageRoutingModule
        ],
        declarations: [_success_page__WEBPACK_IMPORTED_MODULE_1__.SuccessPage]
    })
], SuccessPageModule);



/***/ }),

/***/ 81945:
/*!**************************************************!*\
  !*** ./src/app/deposits/success/success.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessPage": () => (/* binding */ SuccessPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _success_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./success.page.html?ngResource */ 7220);
/* harmony import */ var _success_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./success.page.scss?ngResource */ 11576);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SuccessPage = class SuccessPage {
    constructor() { }
    ngOnInit() {
    }
    tabs() {
    }
};
SuccessPage.ctorParameters = () => [];
SuccessPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-success',
        template: _success_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_success_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SuccessPage);



/***/ }),

/***/ 11576:
/*!***************************************************************!*\
  !*** ./src/app/deposits/success/success.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  text-align: center;\n  display: block;\n  padding: 0 15px !important;\n}\n\nion-list {\n  background: none;\n  padding: 0;\n  position: relative;\n  z-index: 999;\n  padding-top: 20px;\n  padding-bottom: 10px;\n}\n\nion-list::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: calc(100% - 25px);\n  height: calc(100% - 40px);\n  background: var(--white);\n  border-radius: 10px;\n  box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.3);\n  z-index: 9;\n}\n\nion-list .list_header {\n  position: relative;\n  z-index: 999;\n}\n\nion-list .list_header ion-icon {\n  color: var(--white);\n  font-size: 2.5rem;\n  border-radius: 50%;\n  background: var(--secondary);\n  width: 80px;\n  height: 80px;\n  line-height: 80px;\n  display: block;\n  margin: 0 auto;\n}\n\nion-list .list_header h1 {\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin: 35px 0 35px 0;\n}\n\nion-list ion-item {\n  margin: 0 auto;\n  padding: 0;\n  width: calc(100% - 70px);\n  margin-bottom: 25px;\n  --background: var(--transparent);\n  background: var(--transparent);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --min-height: unset;\n  z-index: 999;\n}\n\nion-list ion-item .item_inner {\n  padding: 0;\n  width: 100%;\n}\n\nion-list ion-item .item_inner ion-row {\n  margin: 0 -5px;\n}\n\nion-list ion-item .item_inner ion-row ion-col {\n  padding: 0 5px;\n}\n\nion-list ion-item .item_inner h3 {\n  color: var(--text-light);\n  font-size: 0.9rem;\n  margin: 0;\n  font-weight: 400;\n  margin-bottom: 6px;\n}\n\nion-list ion-item .item_inner h2 {\n  margin: 0;\n  font-weight: 700;\n  font-size: 0.97rem;\n}\n\nion-list p {\n  margin: 0 auto;\n  width: calc(100% - 70px);\n  position: relative;\n  z-index: 99;\n  color: var(--text-light);\n  font-size: 0.7rem;\n  padding-bottom: 10px;\n}\n\nion-list::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 90px;\n  background: var(--primary);\n}\n\nion-footer {\n  padding: 16px;\n  --animate-duration: .4s !important;\n}\n\nion-footer ion-row {\n  margin: 0 -5px;\n}\n\nion-footer ion-row ion-col .button.btn.send_more {\n  --background: #dfeaf2 !important;\n  color: var(--text-black) !important;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Y2Nlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0EsVUFBQTtBQUFSOztBQUdJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBRFI7O0FBR1E7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQURaOztBQUlRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBRlo7O0FBTUk7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFKUjs7QUFNUTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBSlo7O0FBTVk7RUFDSSxjQUFBO0FBSmhCOztBQU1nQjtFQUNJLGNBQUE7QUFKcEI7O0FBUVk7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFOaEI7O0FBU1k7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVBoQjs7QUFjSTtFQUNJLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQVpSOztBQWVJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBYlI7O0FBa0JBO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0FBZko7O0FBaUJJO0VBQ0ksY0FBQTtBQWZSOztBQW1CZ0I7RUFDSSxnQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUFqQnBCIiwiZmlsZSI6InN1Y2Nlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWxpc3Qge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogOTk5O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1cHgpO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICB6LWluZGV4OiA5O1xuICAgIH1cblxuICAgIC5saXN0X2hlYWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogOTk5O1xuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG4gICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMzVweCAwIDM1cHggMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAtLW1pbi1oZWlnaHQ6IHVuc2V0O1xuICAgICAgICB6LWluZGV4OiA5OTk7XG5cbiAgICAgICAgLml0ZW1faW5uZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICBpb24tcm93IHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgLTVweDtcblxuICAgICAgICAgICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC45N3JlbTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgICAgICBmb250LXNpemU6IC43cmVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgfVxufVxuXG5cbmlvbi1mb290ZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgLS1hbmltYXRlLWR1cmF0aW9uOiAuNHMgIWltcG9ydGFudDtcblxuICAgIGlvbi1yb3cge1xuICAgICAgICBtYXJnaW46IDAgLTVweDtcblxuICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgIC5idXR0b24uYnRuIHtcbiAgICAgICAgICAgICAgICAmLnNlbmRfbW9yZSB7XG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI2RmZWFmMiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjaykgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */";

/***/ }),

/***/ 7220:
/*!***************************************************************!*\
  !*** ./src/app/deposits/success/success.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-title>{{'done' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"bg_color\" fullscreen>\n  <ion-list lines=\"none\">\n      <div class=\"list_header ion-text-center animate__animated animate__fadeInUp\">\n          <ion-icon class=\"zmdi zmdi-check-all animate__animated animate__zoomIn\"></ion-icon>\n          <h1>{{'transfered_successfull' | translate}} !!</h1>\n      </div>\n      <ion-item class=\"animate__animated animate__fadeInUp\">\n          <div class=\"item_inner\">\n              <h3>{{'transfered_to' | translate}}</h3>\n              <h2>Emilli Willimoson</h2>\n          </div>\n      </ion-item>\n      <ion-item class=\"animate__animated animate__fadeInUp\">\n          <div class=\"item_inner\">\n              <h3>{{'from' | translate}}</h3>\n              <h2>SB 1241 2145 2142 1145</h2>\n          </div>\n      </ion-item>\n      <ion-item class=\"animate__animated animate__fadeInUp\">\n          <div class=\"item_inner\">\n              <ion-row>\n                  <ion-col size=\"6\">\n                      <h3>{{'amount_transfered' | translate}}</h3>\n                      <h2>$ 550<sub>.00</sub></h2>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                      <h3>{{'payment_mode' | translate}}</h3>\n                      <h2>IMPS</h2>\n                  </ion-col>\n              </ion-row>\n          </div>\n      </ion-item>\n      <ion-item class=\"animate__animated animate__fadeInUp\">\n          <div class=\"item_inner\">\n              <h3>{{'remark' | translate}}</h3>\n              <h2>Send for Home Rent.</h2>\n          </div>\n      </ion-item>\n      <p class=\"animate__animated animate__fadeInUp\">{{'sent_on' | translate}} 15 June, 2019 11:49 am</p>\n  </ion-list>\n</ion-content>\n\n\n<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\n  <ion-row>\n      <ion-col size=\"6\">\n          <ion-button size=\"large\" shape=\"block\" class=\"btn send_more\" (click)=\"tabs()\">{{'send_more' | translate}}</ion-button>\n      </ion-col>\n\n      <ion-col size=\"6\">\n          <ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"tabs()\">{{'back_to_home' | translate}}</ion-button>\n      </ion-col>\n  </ion-row>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_deposits_success_success_module_ts.js.map
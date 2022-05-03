"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_account_account_module_ts"],{

/***/ 34742:
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageRoutingModule": () => (/* binding */ AccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.page */ 97282);




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_0__.AccountPage
    }
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccountPageRoutingModule);



/***/ }),

/***/ 63879:
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageModule": () => (/* binding */ AccountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-routing.module */ 34742);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page */ 97282);








let AccountPageModule = class AccountPageModule {
};
AccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountPageRoutingModule
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_1__.AccountPage]
    })
], AccountPageModule);



/***/ }),

/***/ 97282:
/*!*****************************************!*\
  !*** ./src/app/account/account.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPage": () => (/* binding */ AccountPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.page.html?ngResource */ 59024);
/* harmony import */ var _account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page.scss?ngResource */ 8365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.config */ 49670);
/* harmony import */ var _buyappalert_buyappalert_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buyappalert/buyappalert.page */ 31344);
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/helper.models */ 71220);










let AccountPage = class AccountPage {
    constructor(config, navCtrl, route, modalController) {
        this.config = config;
        this.navCtrl = navCtrl;
        this.route = route;
        this.modalController = modalController;
        this.userprofile = src_models_helper_models__WEBPACK_IMPORTED_MODULE_4__.Helper.getUserProfile();
    }
    ngOnInit() {
    }
    profile() {
        this.route.navigate(['./profile']);
    }
    thumb_impression() {
        this.route.navigate(['./thumb-impression']);
    }
    nearby_bank() {
        this.route.navigate(['./nearby-bank']);
    }
    change_language() {
        this.route.navigate(['./change-language']);
    }
    terms_conditions() {
        this.route.navigate(['./terms-conditions']);
    }
    faqs() {
        this.route.navigate(['./faqs']);
    }
    support() {
        this.route.navigate(['./support']);
    }
    sing_in() {
        this.navCtrl.navigateRoot(['./sing-in']);
    }
    // buyappalert() {
    //   window.open("http://bit.ly/cc_OpusBanking", '_system', 'location=no');
    // }
    buyappalert() {
        this.modalController.create({ component: _buyappalert_buyappalert_page__WEBPACK_IMPORTED_MODULE_3__.BuyappalertPage }).then((modalElement) => modalElement.present());
    }
    developed_by() {
        window.open('https://opuslab.works', '_system', 'location=no');
    }
};
AccountPage.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject, args: [_app_config__WEBPACK_IMPORTED_MODULE_2__.APP_CONFIG,] }] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
AccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-account',
        template: _account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountPage);



/***/ }),

/***/ 8365:
/*!******************************************************!*\
  !*** ./src/app/account/account.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\nion-header .banner {\n  background: var(--primary);\n  padding: 9px 20px 23px 20px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\nion-header .banner .img_box {\n  min-width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  margin-right: 24px;\n}\nion-header .banner .text {\n  width: 100%;\n  overflow: hidden;\n}\nion-header .banner .text h2 {\n  margin: 0;\n  color: var(--white);\n  font-size: 1.2rem;\n  font-weight: 400;\n  margin-bottom: 3px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\nion-header .banner .text h3 {\n  margin: 0;\n  color: var(--white);\n  font-size: 0.95rem;\n  font-weight: 400;\n  opacity: 0.6;\n}\nion-list {\n  width: calc(100% - 37px);\n  margin: 0 auto;\n  background: none;\n  padding: 0;\n  padding-top: 25px;\n}\nion-list ion-item {\n  padding: 0;\n  border-bottom: 1px solid #ccc !important;\n  padding-bottom: 8px;\n  margin-bottom: 11px;\n  --background: var(--transparent);\n  background: var(--transparent);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --min-height: unset;\n  margin-bottom: 20px;\n}\nion-list ion-item .item_inner {\n  width: 100%;\n}\nion-list ion-item .item_inner h2 {\n  font-size: 1rem;\n  font-weight: 500;\n  margin: 0;\n  margin-bottom: 4px;\n}\nion-list ion-item .item_inner p {\n  color: var(--text-light);\n  font-size: 0.8rem;\n  font-weight: 500;\n  margin: auto;\n}\n.buy_this_app {\n  background: var(--white);\n  border-radius: 50px;\n  height: 39px;\n  display: flex;\n  align-items: center;\n  min-width: 132px;\n  z-index: 99999;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: absolute;\n  bottom: -14px;\n  border: 1px solid var(--primary);\n  right: 15px;\n  box-shadow: 0 1px 9px 1px rgba(0, 0, 0, 0.2);\n}\n.buy_this_app h2 {\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  margin: auto;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 0.9rem;\n  font-weight: 500;\n  font-weight: 500;\n}\n.buy_this_app h2 ion-icon {\n  font-size: 1rem;\n  min-width: 24px;\n}\nion-footer {\n  z-index: 999;\n}\nion-footer .developed_by {\n  padding: 7px 20px 5px 20px;\n  background: var(--bg-color);\n  z-index: 999;\n  position: relative;\n}\nion-footer .developed_by h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 0.9rem;\n  font-weight: 500;\n  min-width: 41%;\n  letter-spacing: 0;\n}\nion-footer .developed_by .img_box {\n  width: 100%;\n}\nion-footer .developed_by .img_box img {\n  max-width: 130px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXExvdWlzJTIwQmVydHNvblxcRGVza3RvcFxcU3Bhc3MlMjBUZWxlY29tXFxNb2JpbGVDbGllbnRcXHNyY1xcYXBwXFxhY2NvdW50XFxhY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0FSO0FERUk7RUFDSSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBRENRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ1o7QURDUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0NaO0FEQVk7RUFDSSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNFaEI7QURBWTtFQUNJLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDRWhCO0FESUE7RUFDSSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ0RKO0FERUk7RUFDSSxVQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0FSO0FEQ1E7RUFDSSxXQUFBO0FDQ1o7QURBWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ0VoQjtBREFZO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0VoQjtBRElBO0VBQ0ksd0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7QUNESjtBREVJO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FSO0FEQ1E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQ0NaO0FESUE7RUFDSSxZQUFBO0FDREo7QURFSTtFQUNJLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBUjtBRENRO0VBQ0ksU0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NaO0FEQ1E7RUFDSSxXQUFBO0FDQ1o7QURBWTtFQUNJLGdCQUFBO0FDRWhCIiwiZmlsZSI6ImFjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBpb24tdG9vbGJhciBpb24tdGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogLTNweDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5iYW5uZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgIHBhZGRpbmc6IDlweCAyMHB4IDIzcHggMjBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAuaW1nX2JveCB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjk1cmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDM3cHgpO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDExcHg7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAtLW1pbi1oZWlnaHQ6IHVuc2V0O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgLml0ZW1faW5uZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYnV5X3RoaXNfYXBwIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDM5cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1pbi13aWR0aDogMTMycHg7XHJcbiAgICB6LWluZGV4OiA5OTk5OTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTE0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggOXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBoMiB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDI0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIC5kZXZlbG9wZWRfYnkge1xyXG4gICAgICAgIHBhZGRpbmc6IDdweCAyMHB4IDVweCAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA0MSU7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1nX2JveCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICB0b3A6IC0zcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24taGVhZGVyIC5iYW5uZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgcGFkZGluZzogOXB4IDIwcHggMjNweCAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciAuaW1nX2JveCB7XG4gIG1pbi13aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciAudGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaW9uLWhlYWRlciAuYmFubmVyIC50ZXh0IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciAudGV4dCBoMyB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbmlvbi1saXN0IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDM3cHgpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDExcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiB1bnNldDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoMiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBwIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uYnV5X3RoaXNfYXBwIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IDM5cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMTMycHg7XG4gIHotaW5kZXg6IDk5OTk5O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG4gIHJpZ2h0OiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDFweCA5cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5idXlfdGhpc19hcHAgaDIge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5idXlfdGhpc19hcHAgaDIgaW9uLWljb24ge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1pbi13aWR0aDogMjRweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIHotaW5kZXg6IDk5OTtcbn1cbmlvbi1mb290ZXIgLmRldmVsb3BlZF9ieSB7XG4gIHBhZGRpbmc6IDdweCAyMHB4IDVweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG4gIHotaW5kZXg6IDk5OTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW9uLWZvb3RlciAuZGV2ZWxvcGVkX2J5IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1pbi13aWR0aDogNDElO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbmlvbi1mb290ZXIgLmRldmVsb3BlZF9ieSAuaW1nX2JveCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWZvb3RlciAuZGV2ZWxvcGVkX2J5IC5pbWdfYm94IGltZyB7XG4gIG1heC13aWR0aDogMTMwcHg7XG59Il19 */";

/***/ }),

/***/ 59024:
/*!******************************************************!*\
  !*** ./src/app/account/account.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Compte</ion-title>\r\n    </ion-toolbar>\r\n    <div class=\"banner d-flex\" (click)=\"profile()\">\r\n        <div class=\"img_box center_img\">\r\n            <img src=\"{{userprofile.picture}}\" class=\"crop_img\">\r\n        </div>\r\n        <div class=\"text\">\r\n            <h2 class=\"animate__animated animate__fadeInUp\">{{ userprofile.name}}</h2>\r\n            <h3 class=\"animate__animated animate__fadeInUp\">Voir le profile</h3>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"config.demoMode\" (click)=\"buyappalert()\" class=\"buy_this_app\">\r\n        <h2>\r\n            <!-- <ion-icon class=\"zmdi zmdi-shopping-cart\"></ion-icon> -->\r\n            {{\"buy_this_app\" | translate}}\r\n        </h2>\r\n    </div>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-list lines=\"none\">\r\n        <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"change_language()\">\r\n            <div class=\"item_inner\">\r\n                <h2 class=\"animate__animated animate__fadeInUp\">Changer la langue</h2>\r\n                <p class=\"animate__animated animate__fadeInUp\">Selectionner votre langue</p>\r\n            </div>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"terms_conditions()\">\r\n            <div class=\"item_inner\">\r\n                <h2 class=\"animate__animated animate__fadeInUp\">Termes et Conditions</h2>\r\n                <p class=\"animate__animated animate__fadeInUp\">Conditions generales d'utilisation de l'application</p>\r\n            </div>\r\n        </ion-item>\r\n        <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"faqs()\">\r\n            <div class=\"item_inner\">\r\n                <h2 class=\"animate__animated animate__fadeInUp\">FAQs</h2>\r\n                <p class=\"animate__animated animate__fadeInUp\">Questions frequenment posees</p>\r\n            </div>\r\n        </ion-item>\r\n        <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"support()\">\r\n            <div class=\"item_inner\">\r\n                <h2 class=\"animate__animated animate__fadeInUp\">Aide et Support</h2>\r\n                <p class=\"animate__animated animate__fadeInUp\">Disponible 24/7j</p>\r\n            </div>\r\n        </ion-item>\r\n        <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"sing_in()\">\r\n            <div class=\"item_inner\">\r\n                <h2 class=\"animate__animated animate__fadeInUp\">Deconnexion</h2>\r\n            </div>\r\n        </ion-item>\r\n    </ion-list>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\" *ngIf=\"config.demoMode\">\r\n    <div class=\"developed_by d-flex\" (click)=\"developed_by()\">\r\n        <h2>{{\"developed_by\" | translate}}</h2>\r\n        <div class=\"img_box ion-text-end end\">\r\n            <img src=\"assets/imgs/opus.png\" class=\"light-theme-logo\">\r\n        </div>\r\n    </div>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_account_account_module_ts.js.map
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

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\nion-header .banner {\n  background: var(--primary);\n  padding: 9px 20px 23px 20px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\nion-header .banner .img_box {\n  min-width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  margin-right: 24px;\n}\nion-header .banner .text {\n  width: 100%;\n  overflow: hidden;\n}\nion-header .banner .text h2 {\n  margin: 0;\n  color: var(--white);\n  font-size: 1.2rem;\n  font-weight: 400;\n  margin-bottom: 3px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\nion-header .banner .text h3 {\n  margin: 0;\n  color: var(--white);\n  font-size: 0.95rem;\n  font-weight: 400;\n  opacity: 0.6;\n}\nion-list {\n  width: calc(100% - 37px);\n  margin: 0 auto;\n  background: none;\n  padding: 0;\n  padding-top: 25px;\n}\nion-list ion-item {\n  padding: 0;\n  border-bottom: 1px solid #ccc !important;\n  padding-bottom: 8px;\n  margin-bottom: 11px;\n  --background: var(--transparent);\n  background: var(--transparent);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --min-height: unset;\n  margin-bottom: 20px;\n}\nion-list ion-item .item_inner {\n  width: 100%;\n}\nion-list ion-item .item_inner h2 {\n  font-size: 1rem;\n  font-weight: 500;\n  margin: 0;\n  margin-bottom: 4px;\n}\nion-list ion-item .item_inner p {\n  color: var(--text-light);\n  font-size: 0.8rem;\n  font-weight: 500;\n  margin: auto;\n}\n.buy_this_app {\n  background: var(--white);\n  border-radius: 50px;\n  height: 39px;\n  display: flex;\n  align-items: center;\n  min-width: 132px;\n  z-index: 99999;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: absolute;\n  bottom: -14px;\n  border: 1px solid var(--primary);\n  right: 15px;\n  box-shadow: 0 1px 9px 1px rgba(0, 0, 0, 0.2);\n}\n.buy_this_app h2 {\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  margin: auto;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 0.9rem;\n  font-weight: 500;\n  font-weight: 500;\n}\n.buy_this_app h2 ion-icon {\n  font-size: 1rem;\n  min-width: 24px;\n}\nion-footer {\n  z-index: 999;\n}\nion-footer .developed_by {\n  padding: 7px 20px 5px 20px;\n  background: var(--bg-color);\n  z-index: 999;\n  position: relative;\n}\nion-footer .developed_by h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 0.9rem;\n  font-weight: 500;\n  min-width: 41%;\n  letter-spacing: 0;\n}\nion-footer .developed_by .img_box {\n  width: 100%;\n}\nion-footer .developed_by .img_box img {\n  max-width: 130px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQVI7QUFFSTtFQUNJLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUFSO0FBQ1E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDWjtBQUNRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBQ1o7QUFBWTtFQUNJLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUVoQjtBQUFZO0VBQ0ksU0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFFaEI7QUFJQTtFQUNJLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBREo7QUFFSTtFQUNJLFVBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQVI7QUFDUTtFQUNJLFdBQUE7QUFDWjtBQUFZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBRWhCO0FBQVk7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRWhCO0FBSUE7RUFDSSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtBQURKO0FBRUk7RUFDSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQVI7QUFDUTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQ1o7QUFJQTtFQUNJLFlBQUE7QUFESjtBQUVJO0VBQ0ksMEJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUFSO0FBQ1E7RUFDSSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ1o7QUFDUTtFQUNJLFdBQUE7QUFDWjtBQUFZO0VBQ0ksZ0JBQUE7QUFFaEIiLCJmaWxlIjoiYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICAgICAgICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIHRvcDogLTNweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmJhbm5lciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBwYWRkaW5nOiA5cHggMjBweCAyM3B4IDIwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAuaW1nX2JveCB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDYwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC45NXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWxpc3Qge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzN3B4KTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tbWluLWhlaWdodDogdW5zZXQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIC5pdGVtX2lubmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmJ1eV90aGlzX2FwcCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgaGVpZ2h0OiAzOXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IDEzMnB4O1xuICAgIHotaW5kZXg6IDk5OTk5O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMTRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbiAgICByaWdodDogMTVweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCA5cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBoMiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjRweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWZvb3RlciB7XG4gICAgei1pbmRleDogOTk5O1xuICAgIC5kZXZlbG9wZWRfYnkge1xuICAgICAgICBwYWRkaW5nOiA3cHggMjBweCA1cHggMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xuICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaDIge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDElO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmltZ19ib3gge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */";

/***/ }),

/***/ 59024:
/*!******************************************************!*\
  !*** ./src/app/account/account.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Compte</ion-title>\n    </ion-toolbar>\n    <div class=\"banner d-flex\" (click)=\"profile()\">\n        <div class=\"img_box center_img\">\n            <img src=\"{{userprofile.picture}}\" class=\"crop_img\">\n        </div>\n        <div class=\"text\">\n            <h2 class=\"animate__animated animate__fadeInUp\">{{ userprofile.name}}</h2>\n            <h3 class=\"animate__animated animate__fadeInUp\">Voir le profile</h3>\n        </div>\n    </div>\n\n    <div *ngIf=\"config.demoMode\" (click)=\"buyappalert()\" class=\"buy_this_app\">\n        <h2>\n            <!-- <ion-icon class=\"zmdi zmdi-shopping-cart\"></ion-icon> -->\n            {{\"buy_this_app\" | translate}}\n        </h2>\n    </div>\n</ion-header>\n<ion-content>\n    <ion-list lines=\"none\">\n        <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"change_language()\">\n            <div class=\"item_inner\">\n                <h2 class=\"animate__animated animate__fadeInUp\">Changer la langue</h2>\n                <p class=\"animate__animated animate__fadeInUp\">Selectionner votre langue</p>\n            </div>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"terms_conditions()\">\n            <div class=\"item_inner\">\n                <h2 class=\"animate__animated animate__fadeInUp\">Termes et Conditions</h2>\n                <p class=\"animate__animated animate__fadeInUp\">Conditions generales d'utilisation de l'application</p>\n            </div>\n        </ion-item>\n        <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"faqs()\">\n            <div class=\"item_inner\">\n                <h2 class=\"animate__animated animate__fadeInUp\">FAQs</h2>\n                <p class=\"animate__animated animate__fadeInUp\">Questions frequenment posees</p>\n            </div>\n        </ion-item>\n        <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"support()\">\n            <div class=\"item_inner\">\n                <h2 class=\"animate__animated animate__fadeInUp\">Aide et Support</h2>\n                <p class=\"animate__animated animate__fadeInUp\">Disponible 24/7j</p>\n            </div>\n        </ion-item>\n        <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"sing_in()\">\n            <div class=\"item_inner\">\n                <h2 class=\"animate__animated animate__fadeInUp\">Deconnexion</h2>\n            </div>\n        </ion-item>\n    </ion-list>\n</ion-content>\n\n<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\" *ngIf=\"config.demoMode\">\n    <div class=\"developed_by d-flex\" (click)=\"developed_by()\">\n        <h2>{{\"developed_by\" | translate}}</h2>\n        <div class=\"img_box ion-text-end end\">\n            <img src=\"assets/imgs/opus.png\" class=\"light-theme-logo\">\n        </div>\n    </div>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_account_account_module_ts.js.map
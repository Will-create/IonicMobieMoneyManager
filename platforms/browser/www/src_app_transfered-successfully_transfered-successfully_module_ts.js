"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_transfered-successfully_transfered-successfully_module_ts"],{

/***/ 9022:
/*!***********************************************************************************!*\
  !*** ./src/app/transfered-successfully/transfered-successfully-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferedSuccessfullyPageRoutingModule": () => (/* binding */ TransferedSuccessfullyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _transfered_successfully_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfered-successfully.page */ 43063);




const routes = [
    {
        path: '',
        component: _transfered_successfully_page__WEBPACK_IMPORTED_MODULE_0__.TransferedSuccessfullyPage
    }
];
let TransferedSuccessfullyPageRoutingModule = class TransferedSuccessfullyPageRoutingModule {
};
TransferedSuccessfullyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TransferedSuccessfullyPageRoutingModule);



/***/ }),

/***/ 2951:
/*!***************************************************************************!*\
  !*** ./src/app/transfered-successfully/transfered-successfully.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferedSuccessfullyPageModule": () => (/* binding */ TransferedSuccessfullyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _transfered_successfully_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfered-successfully-routing.module */ 9022);
/* harmony import */ var _transfered_successfully_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transfered-successfully.page */ 43063);








let TransferedSuccessfullyPageModule = class TransferedSuccessfullyPageModule {
};
TransferedSuccessfullyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _transfered_successfully_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransferedSuccessfullyPageRoutingModule
        ],
        declarations: [_transfered_successfully_page__WEBPACK_IMPORTED_MODULE_1__.TransferedSuccessfullyPage]
    })
], TransferedSuccessfullyPageModule);



/***/ }),

/***/ 43063:
/*!*************************************************************************!*\
  !*** ./src/app/transfered-successfully/transfered-successfully.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferedSuccessfullyPage": () => (/* binding */ TransferedSuccessfullyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _transfered_successfully_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfered-successfully.page.html?ngResource */ 80603);
/* harmony import */ var _transfered_successfully_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transfered-successfully.page.scss?ngResource */ 21617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);






let TransferedSuccessfullyPage = class TransferedSuccessfullyPage {
    constructor(navCtrl, router) {
        this.navCtrl = navCtrl;
        this.router = router;
        if (this.router.getCurrentNavigation().extras.state) {
            this.insertion = this.router.getCurrentNavigation().extras.state;
        }
    }
    ngOnInit() {
    }
    tabs() {
        this.navCtrl.navigateRoot(['./tabs']);
    }
};
TransferedSuccessfullyPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
TransferedSuccessfullyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-transfered-successfully',
        template: _transfered_successfully_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_transfered_successfully_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TransferedSuccessfullyPage);



/***/ }),

/***/ 21617:
/*!**************************************************************************************!*\
  !*** ./src/app/transfered-successfully/transfered-successfully.page.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  text-align: center;\n  display: block;\n  padding: 0 15px !important;\n}\n\nion-list {\n  background: none;\n  padding: 0;\n  position: relative;\n  z-index: 999;\n  padding-top: 20px;\n  padding-bottom: 10px;\n}\n\nion-list::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: calc(100% - 25px);\n  height: calc(100% - 40px);\n  background: var(--white);\n  border-radius: 10px;\n  box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.3);\n  z-index: 9;\n}\n\nion-list .list_header {\n  position: relative;\n  z-index: 999;\n}\n\nion-list .list_header ion-icon {\n  color: var(--white);\n  font-size: 2.5rem;\n  border-radius: 50%;\n  background: var(--secondary);\n  width: 80px;\n  height: 80px;\n  line-height: 80px;\n  display: block;\n  margin: 0 auto;\n}\n\nion-list .list_header h1 {\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin: 35px 0 35px 0;\n}\n\nion-list ion-item {\n  margin: 0 auto;\n  padding: 0;\n  width: calc(100% - 70px);\n  margin-bottom: 25px;\n  --background: var(--transparent);\n  background: var(--transparent);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --min-height: unset;\n  z-index: 999;\n}\n\nion-list ion-item .item_inner {\n  padding: 0;\n  width: 100%;\n}\n\nion-list ion-item .item_inner ion-row {\n  margin: 0 -5px;\n}\n\nion-list ion-item .item_inner ion-row ion-col {\n  padding: 0 5px;\n}\n\nion-list ion-item .item_inner h3 {\n  color: var(--text-light);\n  font-size: 0.9rem;\n  margin: 0;\n  font-weight: 400;\n  margin-bottom: 6px;\n}\n\nion-list ion-item .item_inner h2 {\n  margin: 0;\n  font-weight: 700;\n  font-size: 0.97rem;\n}\n\nion-list p {\n  margin: 0 auto;\n  width: calc(100% - 70px);\n  position: relative;\n  z-index: 99;\n  color: var(--text-light);\n  font-size: 0.7rem;\n  padding-bottom: 10px;\n}\n\nion-list::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 90px;\n  background: var(--primary);\n}\n\nion-footer {\n  padding: 16px;\n  --animate-duration: .4s !important;\n}\n\nion-footer ion-row {\n  margin: 0 -5px;\n}\n\nion-footer ion-row ion-col .button.btn.send_more {\n  --background: #dfeaf2 !important;\n  color: var(--text-black) !important;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zZmVyZWQtc3VjY2Vzc2Z1bGx5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLFVBQUE7QUFBUjs7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQURSOztBQUdRO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFEWjs7QUFJUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUZaOztBQU1JO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBSlI7O0FBTVE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQUpaOztBQU1ZO0VBQ0ksY0FBQTtBQUpoQjs7QUFNZ0I7RUFDSSxjQUFBO0FBSnBCOztBQVFZO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTmhCOztBQVNZO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFQaEI7O0FBY0k7RUFDSSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFaUjs7QUFlSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQWJSOztBQWtCQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtBQWZKOztBQWlCSTtFQUNJLGNBQUE7QUFmUjs7QUFtQmdCO0VBQ0ksZ0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FBakJwQiIsImZpbGUiOiJ0cmFuc2ZlcmVkLXN1Y2Nlc3NmdWxseS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xufVxuXG5pb24tbGlzdCB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG5cblxuICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgIHotaW5kZXg6IDk7XG4gICAgfVxuXG4gICAgLmxpc3RfaGVhZGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiA5OTk7XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgbWFyZ2luOiAzNXB4IDAgMzVweCAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tbWluLWhlaWdodDogdW5zZXQ7XG4gICAgICAgIHotaW5kZXg6IDk5OTtcblxuICAgICAgICAuaXRlbV9pbm5lciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAtNXB4O1xuXG4gICAgICAgICAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjk3cmVtO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHAge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICB9XG59XG5cblxuaW9uLWZvb3RlciB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICAtLWFuaW1hdGUtZHVyYXRpb246IC40cyAhaW1wb3J0YW50O1xuXG4gICAgaW9uLXJvdyB7XG4gICAgICAgIG1hcmdpbjogMCAtNXB4O1xuXG4gICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgLmJ1dHRvbi5idG4ge1xuICAgICAgICAgICAgICAgICYuc2VuZF9tb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZGZlYWYyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";

/***/ }),

/***/ 80603:
/*!**************************************************************************************!*\
  !*** ./src/app/transfered-successfully/transfered-successfully.page.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>Effectue</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"bg_color\" fullscreen>\n    <ion-list lines=\"none\">\n        <div class=\"list_header ion-text-center animate__animated animate__fadeInUp\">\n            <ion-icon class=\"zmdi zmdi-check-all animate__animated animate__zoomIn\"></ion-icon>\n            <h1>Operation reussie !!</h1>\n        </div>\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <div class=\"item_inner\">\n                <h3>Du numero </h3>\n                <h2>{{insertion.fromnumber}}</h2>\n            </div>\n        </ion-item>\n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <div class=\"item_inner\">\n                <h3>Vers numero </h3>\n                <h2>{{insertion.tonumber}}</h2>\n            </div>\n        </ion-item>\n        \n        <ion-item class=\"animate__animated animate__fadeInUp\">\n            <div class=\"item_inner\">\n                <h3>Type</h3>\n                <h2>{{insertion.type == 'sending' ? 'Transfert envoye' : 'Transfert recu'}}</h2>\n            </div>\n        </ion-item>\n        <p class=\"animate__animated animate__fadeInUp\">Date {{insertion.datecreated}}</p>\n    </ion-list>\n</ion-content>\n\n\n<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\n    <ion-row>\n        <ion-col size=\"6\">\n            <ion-button size=\"large\" shape=\"block\" class=\"btn send_more\" (click)=\"tabs()\">Ok</ion-button>\n        </ion-col>\n    </ion-row>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_transfered-successfully_transfered-successfully_module_ts.js.map
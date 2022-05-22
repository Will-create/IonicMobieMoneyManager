"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_contacts_details_details_module_ts"],{

/***/ 20622:
/*!************************************************************!*\
  !*** ./src/app/contacts/details/details-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageRoutingModule": () => (/* binding */ DetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.page */ 95550);




const routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_0__.DetailsPage
    }
];
let DetailsPageRoutingModule = class DetailsPageRoutingModule {
};
DetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailsPageRoutingModule);



/***/ }),

/***/ 19088:
/*!****************************************************!*\
  !*** ./src/app/contacts/details/details.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageModule": () => (/* binding */ DetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-routing.module */ 20622);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page */ 95550);








let DetailsPageModule = class DetailsPageModule {
};
DetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsPageRoutingModule
        ],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_1__.DetailsPage]
    })
], DetailsPageModule);



/***/ }),

/***/ 95550:
/*!**************************************************!*\
  !*** ./src/app/contacts/details/details.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPage": () => (/* binding */ DetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.page.html?ngResource */ 97390);
/* harmony import */ var _details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page.scss?ngResource */ 11372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_ion_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ion-loader.service */ 45332);






let DetailsPage = class DetailsPage {
    constructor(router, loadingService) {
        this.router = router;
        this.loadingService = loadingService;
        this.contact = {};
        this.numbers = [];
        if (this.router.getCurrentNavigation().extras.state) {
            this.loadingService.autoLoader();
            let state = this.router.getCurrentNavigation().extras.state;
            this.contact = state.contact;
            this.numbers = state.numbers;
        }
    }
    ngOnInit() {
    }
    callNumber(number) {
    }
    deposit(number) {
        let extras = {
            state: {
                number: number
            }
        };
        this.router.navigate(['deposits/shortforms'], extras);
    }
    withdraw(number) {
        let extras = {
            state: {
                number: number
            }
        };
        this.router.navigate(['withdrawals/shortforms'], extras);
    }
};
DetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_ion_loader_service__WEBPACK_IMPORTED_MODULE_2__.IonLoaderService }
];
DetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-details',
        template: _details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailsPage);



/***/ }),

/***/ 11372:
/*!***************************************************************!*\
  !*** ./src/app/contacts/details/details.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\nion-list {\n  width: calc(100% - 25px);\n  margin: 0 auto;\n  margin-top: 12px;\n  background: none;\n}\n\nion-list h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.75rem;\n  font-weight: 400;\n  padding-bottom: 18px;\n  padding-top: 5px;\n}\n\nion-list ion-item {\n  padding: 9px 12px 5px 12px;\n  box-shadow: 0 2px 5px -4px rgba(0, 0, 0, 0.5);\n  margin-bottom: 13px;\n  border-radius: 10px;\n  --background: var(--transparent);\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --min-height: unset;\n}\n\nion-list ion-item .item_inner {\n  width: 100%;\n}\n\nion-list ion-item ion-row {\n  margin-bottom: 3px;\n}\n\nion-list ion-item ion-row ion-col h4 {\n  font-size: 0.9rem;\n  font-weight: 500;\n  margin: 0;\n}\n\nion-list ion-item ion-row ion-col h3 {\n  color: var(--text-light);\n  font-size: 0.75rem;\n  font-weight: 500;\n  margin: 0;\n  margin-bottom: 5px;\n}\n\nion-list ion-item ion-row ion-col h5 {\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0;\n}\n\nion-list ion-item.panding ion-row ion-col h5 {\n  color: var(--secondary);\n}\n\nion-list ion-item.deposited ion-row ion-col h5 {\n  color: var(--secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQVI7O0FBSUE7RUFDQyx3QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBREQ7O0FBR0M7RUFDQyxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlDO0VBQ0MsMEJBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUlFO0VBQ0MsV0FBQTtBQUZIOztBQUtFO0VBQ0Msa0JBQUE7QUFISDs7QUFNSTtFQUNDLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBSkw7O0FBUUk7RUFDQyx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFOTDs7QUFTSTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFQTDs7QUFZRTtFQUNDLHVCQUFBO0FBVkg7O0FBYUU7RUFDQyx1QkFBQTtBQVhIIiwiZmlsZSI6ImRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgICAgICAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgICAgICB0b3A6IC0zcHg7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG5pb24tbGlzdCB7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4KTtcblx0bWFyZ2luOiAwIGF1dG87XG5cdG1hcmdpbi10b3A6IDEycHg7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cblx0aDIge1xuXHRcdG1hcmdpbjogMDtcblx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdFx0Zm9udC1zaXplOiAwLjc1cmVtO1xuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0cGFkZGluZy1ib3R0b206IDE4cHg7XG5cdFx0cGFkZGluZy10b3A6IDVweDtcblx0fVxuXG5cdGlvbi1pdGVtIHtcblx0XHRwYWRkaW5nOiA5cHggMTJweCA1cHggMTJweDtcblx0XHRib3gtc2hhZG93OiAwIDJweCA1cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTNweDtcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuXHRcdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcblx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG5cdFx0LS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuXHRcdC0tcGFkZGluZy1zdGFydDogMDtcblx0XHRib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG5cdFx0LS1taW4taGVpZ2h0OiB1bnNldDtcblxuXHRcdC5pdGVtX2lubmVyIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdH1cblxuXHRcdGlvbi1yb3cge1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogM3B4O1xuXG5cdFx0XHRpb24tY29sIHtcblx0XHRcdFx0aDQge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogLjlyZW07XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGgzIHtcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAuNzVyZW07XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aDUge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCYucGFuZGluZyBpb24tcm93IGlvbi1jb2wgaDUge1xuXHRcdFx0Y29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG5cdFx0fVxuXG5cdFx0Ji5kZXBvc2l0ZWQgaW9uLXJvdyBpb24tY29sIGg1IHtcblx0XHRcdGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuXHRcdH1cblx0fVxufVxuIl19 */";

/***/ }),

/***/ 97390:
/*!***************************************************************!*\
  !*** ./src/app/contacts/details/details.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{contact.name}}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n\n<ion-content fullscreen class=\"bg_color\">\n  <ion-list lines=\"none\">\n\t\t<ion-item class=\"animate__animated animate__fadeInUp deposited\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'name' | translate}}</h3>\n\t\t\t\t\t\t<h4>{{contact.name}}</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'phone' | translate}}</h3>\n\t\t\t\t\t\t<h4> <a href=\"tel:{{contact.phone}}\">{{contact.phone}}</a></h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n        <ion-row>\n\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'email' | translate}}</h3>\n\t\t\t\t\t\t<h4>{{contact.email}}</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'localite' | translate}}</h3>\n\t\t\t\t\t\t<h4>{{contact.localitename}}<sub></sub></h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n        <ion-row>\n\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'whatsapp' | translate}}</h3>\n\t\t\t\t\t\t<h4><a href=\"tel:{{contact.phonewhatsapp}}\">{{contact.phonewhatsapp}}</a></h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'phonemoov' | translate}}</h3>\n\t\t\t\t\t\t<h4><a href=\"tel:{{contact.phonemoovexpress}}\">{{contact.phonemoovexpress}}</a></h4>\n\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n        <ion-row>\n\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'phoneflash' | translate}}</h3>\n\t\t\t\t\t\t<h4><a href=\"tel:{{contact.phoneflash}}\">{{contact.phoneflash}}</a></h4>\n\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'phonesapsap' | translate}}</h3>\n\t\t\t\t\t\t<h4><a href=\"tel:{{contact.phonesapsap}}\">{{contact.phonesapsap}}</a></h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\t\t</ion-item>\n\t</ion-list>\n\t<ion-list lines=\"none\">\n\t\t<h2>{{'numbers' | translate}}</h2>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp deposited\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<ion-row *ngFor=\"let number of numbers\">\n\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'number' | translate}}</h3>\n\t\t\t\t\t\t<h4>{{number.number}}</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{'agentcode' | translate}}</h3>\n\t\t\t\t\t\t<h4>{{number.agentcode}}<sub></sub></h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t    <h2>{{'actions' | translate}}</h2>\n\n        <ion-row *ngFor=\"let number of numbers\">\n\t\t\t\t\t<ion-col size=\"6\">\n            <ion-button size=\"small\" shape=\"block animate__animated animate__fadeInUp\" class=\"btn\" (click)=\"deposit(number)\">Envoyer</ion-button>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"6\">\n            <ion-button size=\"small\" shape=\"block animate__animated animate__fadeInUp\" class=\"btn\" (click)=\"withdraw(number)\">Recevoir</ion-button>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n      \n\t\t</ion-item>\n\t</ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_contacts_details_details_module_ts.js.map
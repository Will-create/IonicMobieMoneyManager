"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_distributors_pending_pending_module_ts"],{

/***/ 17914:
/*!****************************************************************!*\
  !*** ./src/app/distributors/pending/pending-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingPageRoutingModule": () => (/* binding */ PendingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _pending_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pending.page */ 73019);




const routes = [
    {
        path: '',
        component: _pending_page__WEBPACK_IMPORTED_MODULE_0__.PendingPage
    },
    {
        path: 'details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_distributors_pending_details_details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./details/details.module */ 1619)).then(m => m.DetailsPageModule)
    }
];
let PendingPageRoutingModule = class PendingPageRoutingModule {
};
PendingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PendingPageRoutingModule);



/***/ }),

/***/ 18851:
/*!********************************************************!*\
  !*** ./src/app/distributors/pending/pending.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingPageModule": () => (/* binding */ PendingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _pending_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pending-routing.module */ 17914);
/* harmony import */ var _pending_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pending.page */ 73019);







let PendingPageModule = class PendingPageModule {
};
PendingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pending_routing_module__WEBPACK_IMPORTED_MODULE_0__.PendingPageRoutingModule
        ],
        declarations: [_pending_page__WEBPACK_IMPORTED_MODULE_1__.PendingPage]
    })
], PendingPageModule);



/***/ }),

/***/ 73019:
/*!******************************************************!*\
  !*** ./src/app/distributors/pending/pending.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingPage": () => (/* binding */ PendingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _pending_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pending.page.html?ngResource */ 11837);
/* harmony import */ var _pending_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pending.page.scss?ngResource */ 50925);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_ion_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ion-loader.service */ 45332);
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/helper.models */ 71220);








let PendingPage = class PendingPage {
    constructor(router, http, loadingService) {
        this.router = router;
        this.http = http;
        this.loadingService = loadingService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        this.pendings_count = 0;
        this.loadingService.autoLoader(500);
        if (this.router.getCurrentNavigation().extras.state) {
            this.distributor = this.router.getCurrentNavigation().extras.state;
        }
        this.baseUrl = src_models_helper_models__WEBPACK_IMPORTED_MODULE_3__.Helper.getApiHostname();
        this.http.get(this.baseUrl + 'api/mobile/distributors/pending?dist=' + this.distributor.number, this.httpOptions).subscribe(list => {
            console.log(list);
            this.pendings = list;
        });
    }
    ngOnInit() {
    }
    details(pending) {
        this.extras = {
            state: pending
        };
        this.router.navigate(['distributors/pending/details'], this.extras);
    }
};
PendingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: src_app_services_ion_loader_service__WEBPACK_IMPORTED_MODULE_2__.IonLoaderService }
];
PendingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-pending',
        template: _pending_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pending_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PendingPage);



/***/ }),

/***/ 50925:
/*!*******************************************************************!*\
  !*** ./src/app/distributors/pending/pending.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\nion-list {\n  width: calc(100% - 37px);\n  margin: 0 auto;\n  padding: 0;\n  background: none;\n}\n\nion-list h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.85rem;\n  font-weight: 500;\n  margin-bottom: 25px;\n  margin-top: 20px;\n}\n\nion-list ion-item {\n  padding: 0;\n  border-bottom: 1px solid #ccc !important;\n  padding-bottom: 10px;\n  margin-bottom: 13px;\n  --background: var(--transparent);\n  background: var(--transparent);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --min-height: unset;\n}\n\nion-list ion-item .item_inner {\n  width: 100%;\n}\n\nion-list ion-item .item_inner h3 {\n  font-size: 1rem;\n  font-weight: 500;\n  margin: 0;\n  padding-bottom: 6px;\n}\n\nion-list ion-item .item_inner h4 {\n  color: var(--text-light);\n  font-size: 0.8rem;\n  font-weight: 400;\n  margin: 0;\n}\n\nion-list ion-item .item_inner h4 span.end {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--red_color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0Q7O0FBRUE7RUFDQyx3QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFDRDs7QUFDQztFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUM7RUFDQyxVQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0U7RUFDQyxXQUFBO0FBREg7O0FBR0c7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJRztFQUNDLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFGSjs7QUFLSztFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUhOIiwiZmlsZSI6InBlbmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuXHRwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcblx0cG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG5cdHRvcDogLTNweDtcblx0bGVmdDogMDtcblx0d2lkdGg6IDEwMCU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWxpc3Qge1xuXHR3aWR0aDogY2FsYygxMDAlIC0gMzdweCk7XG5cdG1hcmdpbjogMCBhdXRvOyBcblx0cGFkZGluZzogMDtcblx0YmFja2dyb3VuZDogbm9uZTtcblxuXHRoMiB7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcblx0XHRmb250LXNpemU6IC44NXJlbTtcblx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdG1hcmdpbi1ib3R0b206IDI1cHg7XG5cdFx0bWFyZ2luLXRvcDogMjBweDtcblx0fVxuXG5cdGlvbi1pdGVtIHtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG5cdFx0cGFkZGluZy1ib3R0b206IDEwcHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTNweDtcblx0XHQtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG5cdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXHRcdC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDA7XG5cdFx0LS1taW4taGVpZ2h0OiB1bnNldDtcblxuXG5cdFx0Lml0ZW1faW5uZXIge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cblx0XHRcdGgzIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiA2cHg7XG5cdFx0XHR9XG5cblx0XHRcdGg0IHtcblx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHRcdFx0XHRmb250LXNpemU6IC44cmVtO1xuXHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cblx0XHRcdFx0c3BhbiB7XG5cdFx0XHRcdFx0Ji5lbmQge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAuOTVyZW07XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLXJlZF9jb2xvcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cbn0iXX0= */";

/***/ }),

/***/ 11837:
/*!*******************************************************************!*\
  !*** ./src/app/distributors/pending/pending.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Transactions en attente | {{ distributor.number }}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<ion-list lines=\"none\">\n\t\t<h2>Transactions en attente</h2>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" *ngFor=\"let pending of pendings\" (click)=\"details(pending)\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3 class=\"d-flex\"> <h4 class=\"d-flex\">En cours vers : </h4> {{ pending.tonumber }}</h3>\n\t\t\t\t<h4 class=\"d-flex\">{{ pending.datecreated }}<span class=\"end\">{{pending.amount}} Fcfa</span></h4><br>\n\t\t\t\t<h3 class=\"d-flex\">SMS </h3>\n\t\t\t\t<h4 class=\"d-flex\">{{ pending.sms }} </h4>\n\t\t\t</div>\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_distributors_pending_pending_module_ts.js.map
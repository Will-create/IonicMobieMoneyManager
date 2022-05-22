"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_distributors_sendings_sendings_module_ts"],{

/***/ 30854:
/*!******************************************************************!*\
  !*** ./src/app/distributors/sendings/sendings-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendingsPageRoutingModule": () => (/* binding */ SendingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _sendings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendings.page */ 14756);




const routes = [
    {
        path: '',
        component: _sendings_page__WEBPACK_IMPORTED_MODULE_0__.SendingsPage
    }
];
let SendingsPageRoutingModule = class SendingsPageRoutingModule {
};
SendingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SendingsPageRoutingModule);



/***/ }),

/***/ 78578:
/*!**********************************************************!*\
  !*** ./src/app/distributors/sendings/sendings.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendingsPageModule": () => (/* binding */ SendingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _sendings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendings-routing.module */ 30854);
/* harmony import */ var _sendings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sendings.page */ 14756);







let SendingsPageModule = class SendingsPageModule {
};
SendingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sendings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SendingsPageRoutingModule
        ],
        declarations: [_sendings_page__WEBPACK_IMPORTED_MODULE_1__.SendingsPage]
    })
], SendingsPageModule);



/***/ }),

/***/ 14756:
/*!********************************************************!*\
  !*** ./src/app/distributors/sendings/sendings.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendingsPage": () => (/* binding */ SendingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sendings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendings.page.html?ngResource */ 45913);
/* harmony import */ var _sendings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sendings.page.scss?ngResource */ 17593);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_ion_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ion-loader.service */ 45332);
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/helper.models */ 71220);








let SendingsPage = class SendingsPage {
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
        this.http.get(this.baseUrl + 'api/mobile/distributors/sent?dist=' + this.distributor.number, this.httpOptions).subscribe(list => {
            console.log(list);
            this.pendings = list;
        });
    }
    ngOnInit() {
    }
};
SendingsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: src_app_services_ion_loader_service__WEBPACK_IMPORTED_MODULE_2__.IonLoaderService }
];
SendingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-sendings',
        template: _sendings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sendings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SendingsPage);



/***/ }),

/***/ 17593:
/*!*********************************************************************!*\
  !*** ./src/app/distributors/sendings/sendings.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\nion-list {\n  width: calc(100% - 37px);\n  margin: 0 auto;\n  padding: 0;\n  background: none;\n}\n\nion-list h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.85rem;\n  font-weight: 500;\n  margin-bottom: 25px;\n  margin-top: 20px;\n}\n\nion-list ion-item {\n  padding: 0;\n  border-bottom: 1px solid #ccc !important;\n  padding-bottom: 10px;\n  margin-bottom: 13px;\n  --background: var(--transparent);\n  background: var(--transparent);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --min-height: unset;\n}\n\nion-list ion-item .item_inner {\n  width: 100%;\n}\n\nion-list ion-item .item_inner h3 {\n  font-size: 1rem;\n  font-weight: 500;\n  margin: 0;\n  padding-bottom: 6px;\n}\n\nion-list ion-item .item_inner h4 {\n  color: var(--text-light);\n  font-size: 0.8rem;\n  font-weight: 400;\n  margin: 0;\n}\n\nion-list ion-item .item_inner h4 span.end {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--red_color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbmRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNEOztBQUVBO0VBQ0Msd0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ0Q7O0FBQ0M7RUFDQyxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVDO0VBQ0MsVUFBQTtFQUNBLHdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdFO0VBQ0MsV0FBQTtBQURIOztBQUdHO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUc7RUFDQyx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBRko7O0FBS0s7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFITiIsImZpbGUiOiJzZW5kaW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG5cdHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xuXHRwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcblx0dG9wOiAtM3B4O1xuXHRsZWZ0OiAwO1xuXHR3aWR0aDogMTAwJTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tbGlzdCB7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAzN3B4KTtcblx0bWFyZ2luOiAwIGF1dG87IFxuXHRwYWRkaW5nOiAwO1xuXHRiYWNrZ3JvdW5kOiBub25lO1xuXG5cdGgyIHtcblx0XHRtYXJnaW46IDA7XG5cdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHRcdGZvbnQtc2l6ZTogLjg1cmVtO1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0bWFyZ2luLWJvdHRvbTogMjVweDtcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xuXHR9XG5cblx0aW9uLWl0ZW0ge1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcblx0XHRwYWRkaW5nLWJvdHRvbTogMTBweDtcblx0XHRtYXJnaW4tYm90dG9tOiAxM3B4O1xuXHRcdC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuXHRcdGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcblx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG5cdFx0LS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuXHRcdC0tcGFkZGluZy1zdGFydDogMDtcblx0XHQtLW1pbi1oZWlnaHQ6IHVuc2V0O1xuXG5cblx0XHQuaXRlbV9pbm5lciB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblxuXHRcdFx0aDMge1xuXHRcdFx0XHRmb250LXNpemU6IDFyZW07XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDZweDtcblx0XHRcdH1cblxuXHRcdFx0aDQge1xuXHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdFx0XHRcdGZvbnQtc2l6ZTogLjhyZW07XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdG1hcmdpbjogMDtcblxuXHRcdFx0XHRzcGFuIHtcblx0XHRcdFx0XHQmLmVuZCB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IC45NXJlbTtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0tcmVkX2NvbG9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0fVxufSJdfQ== */";

/***/ }),

/***/ 45913:
/*!*********************************************************************!*\
  !*** ./src/app/distributors/sendings/sendings.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Transferts envoyes | {{ distributor.number }}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<ion-list lines=\"none\">\n\t\t<h2>Transferts envoyes</h2>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" *ngFor=\"let pending of pendings\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h3 class=\"d-flex\"> <h4 class=\"d-flex\">Envoye au : </h4>{{ pending.tonumber }}</h3>\n\t\t\t\t<h4 class=\"d-flex\">{{ pending.datecreated }}<span class=\"end\">{{pending.amount}} Fcfa</span></h4><br>\n\t\t\t\t<h3 class=\"d-flex\">SMS </h3>\n\t\t\t\t<h4 class=\"d-flex\">{{ pending.sms }} </h4>\n\t\t\t</div>\n\t\t</ion-item>\n\n\t</ion-list>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_distributors_sendings_sendings_module_ts.js.map
"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_stats_stats_module_ts"],{

/***/ 14129:
/*!***********************************************!*\
  !*** ./src/app/stats/stats-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatsPageRoutingModule": () => (/* binding */ StatsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _stats_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stats.page */ 59477);




const routes = [
    {
        path: '',
        component: _stats_page__WEBPACK_IMPORTED_MODULE_0__.StatsPage
    },
    {
        path: 'details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_stats_details_details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./details/details.module */ 18869)).then(m => m.DetailsPageModule)
    }
];
let StatsPageRoutingModule = class StatsPageRoutingModule {
};
StatsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StatsPageRoutingModule);



/***/ }),

/***/ 49188:
/*!***************************************!*\
  !*** ./src/app/stats/stats.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatsPageModule": () => (/* binding */ StatsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _stats_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stats-routing.module */ 14129);
/* harmony import */ var _stats_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stats.page */ 59477);









let StatsPageModule = class StatsPageModule {
};
StatsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
            _stats_routing_module__WEBPACK_IMPORTED_MODULE_1__.StatsPageRoutingModule
        ],
        declarations: [_stats_page__WEBPACK_IMPORTED_MODULE_2__.StatsPage]
    })
], StatsPageModule);



/***/ }),

/***/ 59477:
/*!*************************************!*\
  !*** ./src/app/stats/stats.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatsPage": () => (/* binding */ StatsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _stats_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stats.page.html?ngResource */ 95319);
/* harmony import */ var _stats_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stats.page.scss?ngResource */ 16637);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/helper.models */ 71220);
/* harmony import */ var _services_ion_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/ion-loader.service */ 45332);








let StatsPage = class StatsPage {
    constructor(router, http, loadingService) {
        this.router = router;
        this.http = http;
        this.loadingService = loadingService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        this.numbers = [];
        this.numbers_count = 0;
        this.baseUrl = src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__.Helper.getApiHostname();
        this.loadingService.autoLoader(4000);
        this.http.get(this.baseUrl + 'api/mobile/numbers/list/', this.httpOptions).subscribe(list => {
            if (list['count'] > 0) {
                this.numbers = list['items'];
                this.numbers_count = list['items'].length;
            }
        });
    }
    ngOnInit() {
    }
    details(number) {
        let extras = {
            state: {
                number: number
            }
        };
        this.router.navigate(['stats/details'], extras);
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
StatsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _services_ion_loader_service__WEBPACK_IMPORTED_MODULE_3__.IonLoaderService }
];
StatsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-stats',
        template: _stats_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_stats_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StatsPage);



/***/ }),

/***/ 16637:
/*!**************************************************!*\
  !*** ./src/app/stats/stats.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\nion-list {\n  width: calc(100% - 25px);\n  margin: 0 auto;\n  margin-top: 12px;\n  background: none;\n}\n\nion-list h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.75rem;\n  font-weight: 400;\n  padding-bottom: 18px;\n  padding-top: 5px;\n}\n\nion-list ion-item {\n  padding: 9px 12px 5px 12px;\n  box-shadow: 0 2px 5px -4px rgba(0, 0, 0, 0.5);\n  margin-bottom: 13px;\n  border-radius: 10px;\n  --background: var(--transparent);\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --min-height: unset;\n}\n\nion-list ion-item .item_inner {\n  width: 100%;\n}\n\nion-list ion-item ion-row {\n  margin-bottom: 3px;\n}\n\nion-list ion-item ion-row ion-col h4 {\n  font-size: 0.9rem;\n  font-weight: 500;\n  margin: 0;\n}\n\nion-list ion-item ion-row ion-col h3 {\n  color: var(--text-light);\n  font-size: 0.75rem;\n  font-weight: 500;\n  margin: 0;\n  margin-bottom: 5px;\n}\n\nion-list ion-item ion-row ion-col h5 {\n  font-size: 1rem;\n  font-weight: 600;\n}\n\nion-list ion-item ion-row ion-col h5 .envoyer {\n  background-color: var(--primary) !important;\n}\n\nion-list ion-item ion-row ion-col h5 .recevoir {\n  background-color: var(--secondary) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0Msd0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNEOztBQUNDO0VBQ0MsU0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQztFQUNDLDBCQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFFRTtFQUNDLFdBQUE7QUFBSDs7QUFHRTtFQUNDLGtCQUFBO0FBREg7O0FBSUk7RUFDQyxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUZMOztBQU1JO0VBQ0Msd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBSkw7O0FBT0k7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUFMTDs7QUFPSTtFQUNFLDJDQUFBO0FBTE47O0FBUUk7RUFDRSw2Q0FBQTtBQU5OIiwiZmlsZSI6InN0YXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICB0b3A6IC0zcHg7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1saXN0IHtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDI1cHgpO1xuXHRtYXJnaW46IDAgYXV0bztcblx0bWFyZ2luLXRvcDogMTJweDtcblx0YmFja2dyb3VuZDogbm9uZTtcblxuXHRoMiB7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcblx0XHRmb250LXNpemU6IDAuNzVyZW07XG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRwYWRkaW5nLWJvdHRvbTogMThweDtcblx0XHRwYWRkaW5nLXRvcDogNXB4O1xuXHR9XG5cblx0aW9uLWl0ZW0ge1xuXHRcdHBhZGRpbmc6IDlweCAxMnB4IDVweCAxMnB4O1xuXHRcdGJveC1zaGFkb3c6IDAgMnB4IDVweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcblx0XHRtYXJnaW4tYm90dG9tOiAxM3B4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG5cdFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuXHRcdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcblx0XHQtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAwO1xuXHRcdGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcblx0XHQtLW1pbi1oZWlnaHQ6IHVuc2V0O1xuXG5cdFx0Lml0ZW1faW5uZXIge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0fVxuXG5cdFx0aW9uLXJvdyB7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAzcHg7XG5cblx0XHRcdGlvbi1jb2wge1xuXHRcdFx0XHRoNCB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAuOXJlbTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aDMge1xuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcblx0XHRcdFx0XHRmb250LXNpemU6IC43NXJlbTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA1cHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRoNSB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdC5lbnZveWVyIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpIWltcG9ydGFudDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcblx0XHRcdFx0LnJlY2V2b2lyIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSkhaW1wb3J0YW50O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXG5cdH1cbn0iXX0= */";

/***/ }),

/***/ 95319:
/*!**************************************************!*\
  !*** ./src/app/stats/stats.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title> Numéros Agents ({{numbers_count}})</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-content fullscreen class=\"bg_color\">\n    <ion-searchbar placeholder=\"Rechercher...\" mode=\"ios\" [(ngModel)]=\"searchTerm\" animated=\"true\"></ion-searchbar>\n\t<ion-list lines=\"none\">\n\t\t<h2>Numeros Agents</h2>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp deposited\" *ngFor=\"let number of numbers | filter:searchTerm\">\n\t\t\t<div class=\"item_inner\" >\n\t\t\t\t<ion-row (click)=\"details(number)\" >\n\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">Numero</h3>\n\t\t\t\t\t\t<h4>{{number.number}}</h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">Code Agent</h3>\n\t\t\t\t\t\t<h4>{{number.agentcode}}<sub></sub></h4>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n             \t<ion-row>\n\t\t\t\t\t<ion-col size=\"6\">\n           \t\t\t\t <ion-button size=\"large\" shape=\"block animate__animated animate__fadeInUp\" class=\"btn envoyer\" (click)=\"deposit(number)\">Envoyer</ion-button>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"6\">\n            \t\t\t <ion-button size=\"large\" shape=\"block animate__animated animate__fadeInUp\" class=\"btn recevoir\" (click)=\"withdraw(number)\">Recevoir</ion-button>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_stats_stats_module_ts.js.map
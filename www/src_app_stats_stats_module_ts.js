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
        this.loadingService.autoLoader(1500);
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

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\nion-list {\n  width: calc(100% - 25px);\n  margin: 0 auto;\n  margin-top: 12px;\n  background: none;\n}\n\nion-list h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.75rem;\n  font-weight: 400;\n  padding-bottom: 18px;\n  padding-top: 5px;\n}\n\nion-list ion-item {\n  padding: 9px 12px 5px 12px;\n  box-shadow: 0 2px 5px -4px rgba(0, 0, 0, 0.5);\n  margin-bottom: 13px;\n  border-radius: 10px;\n  --background: var(--transparent);\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --min-height: unset;\n}\n\nion-list ion-item .item_inner {\n  width: 100%;\n}\n\nion-list ion-item ion-row {\n  margin-bottom: 3px;\n}\n\nion-list ion-item ion-row ion-col {\n  text-align: center;\n}\n\nion-list ion-item ion-row ion-col h4 {\n  font-size: 0.9rem;\n  font-weight: 500;\n  margin: 0;\n}\n\nion-list ion-item ion-row ion-col h3 {\n  color: var(--text-light);\n  font-size: 0.75rem;\n  font-weight: 500;\n  margin: 0;\n  margin-bottom: 5px;\n}\n\nion-list ion-item ion-row ion-col h5 {\n  font-size: 1rem;\n  font-weight: 600;\n}\n\nion-list ion-item ion-row ion-col h5 .envoyer {\n  background-color: var(--primary) !important;\n}\n\nion-list ion-item ion-row ion-col h5 .recevoir {\n  background-color: var(--secondary) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0Msd0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNEOztBQUNDO0VBQ0MsU0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQztFQUNDLDBCQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFFRTtFQUNDLFdBQUE7QUFBSDs7QUFHRTtFQUNDLGtCQUFBO0FBREg7O0FBSUc7RUFDQyxrQkFBQTtBQUZKOztBQUdJO0VBQ0MsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFETDs7QUFLSTtFQUNDLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUhMOztBQU1JO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0FBSkw7O0FBTUk7RUFDRSwyQ0FBQTtBQUpOOztBQU9JO0VBQ0UsNkNBQUE7QUFMTiIsImZpbGUiOiJzdGF0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gICAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAtM3B4O1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tbGlzdCB7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4KTtcblx0bWFyZ2luOiAwIGF1dG87XG5cdG1hcmdpbi10b3A6IDEycHg7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cblx0aDIge1xuXHRcdG1hcmdpbjogMDtcblx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdFx0Zm9udC1zaXplOiAwLjc1cmVtO1xuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0cGFkZGluZy1ib3R0b206IDE4cHg7XG5cdFx0cGFkZGluZy10b3A6IDVweDtcblx0fVxuXG5cdGlvbi1pdGVtIHtcblx0XHRwYWRkaW5nOiA5cHggMTJweCA1cHggMTJweDtcblx0XHRib3gtc2hhZG93OiAwIDJweCA1cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTNweDtcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuXHRcdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcblx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG5cdFx0LS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuXHRcdC0tcGFkZGluZy1zdGFydDogMDtcblx0XHRib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG5cdFx0LS1taW4taGVpZ2h0OiB1bnNldDtcblxuXHRcdC5pdGVtX2lubmVyIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdH1cblxuXHRcdGlvbi1yb3cge1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogM3B4O1xuXG5cblx0XHRcdGlvbi1jb2wge1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdGg0IHtcblx0XHRcdFx0XHRmb250LXNpemU6IC45cmVtO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogLjc1cmVtO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDVweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGg1IHtcblx0XHRcdFx0XHRmb250LXNpemU6IDFyZW07XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcblx0XHRcdFx0LmVudm95ZXIge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSkhaW1wb3J0YW50O1xuXHRcdFx0XHRcdH1cblx0XHRcdFxuXHRcdFx0XHQucmVjZXZvaXIge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KSFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cblx0fVxufSJdfQ== */";

/***/ }),

/***/ 95319:
/*!**************************************************!*\
  !*** ./src/app/stats/stats.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title> Numéros Agents ({{numbers_count}})</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-content fullscreen class=\"bg_color\">\n    <ion-searchbar placeholder=\"Rechercher...\" mode=\"ios\" [(ngModel)]=\"searchTerm\" animated=\"true\"></ion-searchbar>\n\t<ion-list lines=\"none\">\n\t\t<h2>Numeros Agents</h2>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp deposited\" *ngFor=\"let number of numbers | filter:searchTerm\">\n\t\t\t<div class=\"item_inner\" >\n\t\t\t\t<ion-row  >\n\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t<h3 (click)=\"details(number)\" class=\"animate__animated animate__fadeInUp\">Numero</h3>\n\t\t\t\t\t\t<h4 (click)=\"details(number)\" >{{number.number}}</h4>\n\t\t\t\t\t\t<h5 (click)=\"deposit(number)\" href=\"javascript(0)\">Envoyer</h5>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t<h3 (click)=\"details(number)\" class=\"animate__animated animate__fadeInUp\">Code Agent</h3>\n\t\t\t\t\t\t<h4 (click)=\"details(number)\"> {{number.agentcode}}<sub></sub></h4>\n\t\t\t\t\t\t<h5 (click)=\"withdraw(number)\" href=\"javascript(0)\">Recevoir</h5>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n  \n\t\t\t</div>\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_stats_stats_module_ts.js.map
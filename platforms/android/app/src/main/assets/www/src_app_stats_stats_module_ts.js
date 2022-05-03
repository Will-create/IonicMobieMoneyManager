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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _stats_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stats.page.html?ngResource */ 95319);
/* harmony import */ var _stats_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stats.page.scss?ngResource */ 16637);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/helper.models */ 71220);







let StatsPage = class StatsPage {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        this.numbers = [];
        this.numbers_count = 0;
        this.baseUrl = src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__.Helper.getApiHostname();
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
StatsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
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

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\nion-list {\n  width: calc(100% - 25px);\n  margin: 0 auto;\n  margin-top: 12px;\n  background: none;\n}\n\nion-list h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.75rem;\n  font-weight: 400;\n  padding-bottom: 18px;\n  padding-top: 5px;\n}\n\nion-list ion-item {\n  padding: 9px 12px 5px 12px;\n  box-shadow: 0 2px 5px -4px rgba(0, 0, 0, 0.5);\n  margin-bottom: 13px;\n  border-radius: 10px;\n  --background: var(--transparent);\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --min-height: unset;\n}\n\nion-list ion-item .item_inner {\n  width: 100%;\n}\n\nion-list ion-item ion-row {\n  margin-bottom: 3px;\n}\n\nion-list ion-item ion-row ion-col h4 {\n  font-size: 0.9rem;\n  font-weight: 500;\n  margin: 0;\n}\n\nion-list ion-item ion-row ion-col h3 {\n  color: var(--text-light);\n  font-size: 0.75rem;\n  font-weight: 500;\n  margin: 0;\n  margin-bottom: 5px;\n}\n\nion-list ion-item ion-row ion-col h5 {\n  font-size: 1rem;\n  font-weight: 600;\n}\n\nion-list ion-item ion-row ion-col h5 .envoyer {\n  background-color: var(--primary) !important;\n}\n\nion-list ion-item ion-row ion-col h5 .recevoir {\n  background-color: var(--secondary) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxMb3VpcyUyMEJlcnRzb25cXERlc2t0b3BcXFNwYXNzJTIwVGVsZWNvbVxcTW9iaWxlQ2xpZW50XFxzcmNcXGFwcFxcc3RhdHNcXHN0YXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0Msd0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NEOztBRENDO0VBQ0MsU0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQztFQUNDLDBCQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURFRTtFQUNDLFdBQUE7QUNBSDs7QURHRTtFQUNDLGtCQUFBO0FDREg7O0FESUk7RUFDQyxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ0ZMOztBRE1JO0VBQ0Msd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDSkw7O0FET0k7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUNMTDs7QURPSTtFQUNFLDJDQUFBO0FDTE47O0FEUUk7RUFDRSw2Q0FBQTtBQ05OIiwiZmlsZSI6InN0YXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IC0zcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuXHR3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0bWFyZ2luLXRvcDogMTJweDtcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cclxuXHRoMiB7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcblx0XHRmb250LXNpemU6IDAuNzVyZW07XHJcblx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDE4cHg7XHJcblx0XHRwYWRkaW5nLXRvcDogNXB4O1xyXG5cdH1cclxuXHJcblx0aW9uLWl0ZW0ge1xyXG5cdFx0cGFkZGluZzogOXB4IDEycHggNXB4IDEycHg7XHJcblx0XHRib3gtc2hhZG93OiAwIDJweCA1cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxM3B4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xyXG5cdFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG5cdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG5cdFx0LS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG5cdFx0Ym94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0LS1taW4taGVpZ2h0OiB1bnNldDtcclxuXHJcblx0XHQuaXRlbV9pbm5lciB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlvbi1yb3cge1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiAzcHg7XHJcblxyXG5cdFx0XHRpb24tY29sIHtcclxuXHRcdFx0XHRoNCB7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IC45cmVtO1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRoMyB7XHJcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IC43NXJlbTtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRoNSB7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDFyZW07XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0LmVudm95ZXIge1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KSFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRcdC5yZWNldm9pciB7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSkhaW1wb3J0YW50O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHJcblx0fVxyXG59IiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHRvcDogLTNweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWxpc3Qge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuaW9uLWxpc3QgaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nLWJvdHRvbTogMThweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogOXB4IDEycHggNXB4IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IHVuc2V0O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIGlvbi1yb3cge1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5pb24tbGlzdCBpb24taXRlbSBpb24tcm93IGlvbi1jb2wgaDQge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXJvdyBpb24tY29sIGgzIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXJvdyBpb24tY29sIGg1IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXJvdyBpb24tY29sIGg1IC5lbnZveWVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIGlvbi1yb3cgaW9uLWNvbCBoNSAucmVjZXZvaXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 95319:
/*!**************************************************!*\
  !*** ./src/app/stats/stats.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title> Numéros Agents</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen class=\"bg_color\">\r\n    <ion-searchbar placeholder=\"Rechercher...\" mode=\"ios\" [(ngModel)]=\"searchTerm\" animated=\"true\"></ion-searchbar>\r\n\t<ion-list lines=\"none\">\r\n\t\t<h2>Numeros Agents</h2>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp deposited\" *ngFor=\"let number of numbers | filter:searchTerm\">\r\n\t\t\t<div class=\"item_inner\" >\r\n\t\t\t\t<ion-row (click)=\"details(number)\" >\r\n\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">Numero</h3>\r\n\t\t\t\t\t\t<h4>{{number.number}}</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">Code Agent</h3>\r\n\t\t\t\t\t\t<h4>{{number.agentcode}}<sub></sub></h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n             \t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"6\">\r\n           \t\t\t\t <ion-button size=\"large\" shape=\"block animate__animated animate__fadeInUp\" class=\"btn envoyer\" (click)=\"deposit(number)\">Envoyer</ion-button>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"6\">\r\n            \t\t\t <ion-button size=\"large\" shape=\"block animate__animated animate__fadeInUp\" class=\"btn recevoir\" (click)=\"withdraw(number)\">Recevoir</ion-button>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t</ion-list>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_stats_stats_module_ts.js.map
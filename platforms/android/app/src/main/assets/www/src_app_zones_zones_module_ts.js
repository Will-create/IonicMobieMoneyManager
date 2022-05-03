"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_zones_zones_module_ts"],{

/***/ 31784:
/*!***********************************************!*\
  !*** ./src/app/zones/zones-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZonesPageRoutingModule": () => (/* binding */ ZonesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _zones_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zones.page */ 51578);




const routes = [
    {
        path: '',
        component: _zones_page__WEBPACK_IMPORTED_MODULE_0__.ZonesPage
    },
    {
        path: 'zones/details/:id/',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_zones_details_details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./details/details.module */ 64844)).then(m => m.DetailsPageModule)
    }
];
let ZonesPageRoutingModule = class ZonesPageRoutingModule {
};
ZonesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ZonesPageRoutingModule);



/***/ }),

/***/ 94138:
/*!***************************************!*\
  !*** ./src/app/zones/zones.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZonesPageModule": () => (/* binding */ ZonesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _zones_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zones-routing.module */ 31784);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _zones_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zones.page */ 51578);









let ZonesPageModule = class ZonesPageModule {
};
ZonesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__.Ng2SearchPipeModule,
            _zones_routing_module__WEBPACK_IMPORTED_MODULE_0__.ZonesPageRoutingModule
        ],
        declarations: [_zones_page__WEBPACK_IMPORTED_MODULE_2__.ZonesPage]
    })
], ZonesPageModule);



/***/ }),

/***/ 51578:
/*!*************************************!*\
  !*** ./src/app/zones/zones.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZonesPage": () => (/* binding */ ZonesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _zones_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zones.page.html?ngResource */ 38821);
/* harmony import */ var _zones_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zones.page.scss?ngResource */ 53862);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/helper.models */ 71220);





//import {ZoneCrudService} from '../services/zone-crud.service';


let ZonesPage = class ZonesPage {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.httOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        this.zones = [];
        this.zones_count = 0;
        this.baseUrl = src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__.Helper.getApiHostname();
        this.http.get(this.baseUrl + 'api/mobile/zones/list', this.httOptions).subscribe(list => {
            console.log(list);
            if (list['items']) {
                this.zones_count = list['items'].length;
                this.zones = list['items'];
            }
        });
    }
    ngOnInit() {
    }
    details(zone) {
        let extras = {
            state: {
                localities: zone.localities,
                zone: zone.name
            }
        };
        this.router.navigate(['zones/details'], extras);
    }
};
ZonesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
ZonesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-zones',
        template: _zones_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_zones_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ZonesPage);



/***/ }),

/***/ 53862:
/*!**************************************************!*\
  !*** ./src/app/zones/zones.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\nion-list {\n  width: calc(100% - 37px);\n  margin: 0 auto;\n  margin-top: 20px;\n  padding: 0;\n  background: none;\n}\n\nion-list h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.85rem;\n  font-weight: 500;\n  margin-bottom: 22px;\n}\n\nion-list ion-item {\n  padding: 0;\n  border-bottom: 1px solid #ccc !important;\n  padding-bottom: 10px;\n  margin-bottom: 13px;\n  --background: var(--transparent);\n  background: var(--transparent);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --min-height: unset;\n}\n\nion-list ion-item .item_inner {\n  width: 100%;\n}\n\nion-list ion-item .item_inner h3 {\n  font-size: 1rem;\n  font-weight: 500;\n  margin: 0;\n  padding-bottom: 6px;\n}\n\nion-list ion-item .item_inner h4 {\n  color: var(--text-light);\n  font-size: 0.8rem;\n  font-weight: 400;\n  margin: 0;\n}\n\nion-list ion-item .item_inner h4 span.end {\n  font-size: 0.95rem;\n  font-weight: 700;\n}\n\nion-list ion-item.debited .item_inner h4 span.end {\n  color: var(--red_color);\n}\n\nion-list ion-item.credited .item_inner h4 span.end {\n  color: var(--secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInpvbmVzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxMb3VpcyUyMEJlcnRzb25cXERlc2t0b3BcXFNwYXNzJTIwVGVsZWNvbVxcTW9iaWxlQ2xpZW50XFxzcmNcXGFwcFxcem9uZXNcXHpvbmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0FSOztBRElBO0VBQ0Msd0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNERDs7QURHQztFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElDO0VBQ0MsVUFBQTtFQUNBLHdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0ZGOztBREtFO0VBQ0MsV0FBQTtBQ0hIOztBREtHO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDSEo7O0FETUc7RUFDQyx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDSko7O0FET0s7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0FDTE47O0FEWUc7RUFDQyx1QkFBQTtBQ1ZKOztBRGVHO0VBQ0MsdUJBQUE7QUNiSiIsImZpbGUiOiJ6b25lcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG9wOiAtM3B4O1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDM3cHgpO1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0cGFkZGluZzogMDtcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cclxuXHRoMiB7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcblx0XHRmb250LXNpemU6IC44NXJlbTtcclxuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyMnB4O1xyXG5cdH1cclxuXHJcblx0aW9uLWl0ZW0ge1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEzcHg7XHJcblx0XHQtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcclxuXHRcdGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcclxuXHRcdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuXHRcdC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuXHRcdC0tcGFkZGluZy1zdGFydDogMDtcclxuXHRcdC0tbWluLWhlaWdodDogdW5zZXQ7XHJcblxyXG5cclxuXHRcdC5pdGVtX2lubmVyIHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblxyXG5cdFx0XHRoMyB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiA2cHg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGg0IHtcclxuXHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAuOHJlbTtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0XHRcdG1hcmdpbjogMDtcclxuXHJcblx0XHRcdFx0c3BhbiB7XHJcblx0XHRcdFx0XHQmLmVuZCB7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogLjk1cmVtO1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdCYuZGViaXRlZCB7XHJcblx0XHRcdC5pdGVtX2lubmVyIGg0IHNwYW4uZW5kIHtcclxuXHRcdFx0XHRjb2xvcjogdmFyKC0tcmVkX2NvbG9yKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdCYuY3JlZGl0ZWQge1xyXG5cdFx0XHQuaXRlbV9pbm5lciBoNCBzcGFuLmVuZCB7XHJcblx0XHRcdFx0Y29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHRvcDogLTNweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWxpc3Qge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzdweCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuaW9uLWxpc3QgaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1taW4taGVpZ2h0OiB1bnNldDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoMyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDQge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDA7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoNCBzcGFuLmVuZCB7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtLmRlYml0ZWQgLml0ZW1faW5uZXIgaDQgc3Bhbi5lbmQge1xuICBjb2xvcjogdmFyKC0tcmVkX2NvbG9yKTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtLmNyZWRpdGVkIC5pdGVtX2lubmVyIGg0IHNwYW4uZW5kIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG59Il19 */";

/***/ }),

/***/ 38821:
/*!**************************************************!*\
  !*** ./src/app/zones/zones.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>{{'zones' | translate}} ({{zones_count}})</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>   \r\n\t<ion-searchbar placeholder=\"Rechercher...\" mode=\"ios\" [(ngModel)]=\"searchTerm\" animated=\"true\"></ion-searchbar>\r\n    \r\n    <ion-list lines=\"none\">\r\n        <ion-item class=\"animate__animated animate__fadeInUp debited\" *ngFor=\"let zone of zones | filter:searchTerm\" (click)=\"details(zone)\">\r\n            <div class=\"item_inner\">\r\n                <h3>{{zone.name}}</h3>\r\n                <h4 class=\"d-flex\">{{zone.countries == 'bf' ? 'Burkina Faso' : 'Cote d\\'Ivoire'}}<span class=\"end\">{{zone.localitecount}}</span></h4>\r\n            </div>\r\n        </ion-item>\r\n    </ion-list>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_zones_zones_module_ts.js.map
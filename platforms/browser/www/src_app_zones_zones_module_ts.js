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
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./details/details.module */ 64844)).then(m => m.DetailsPageModule)
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

/***/ 71220:
/*!*************************************!*\
  !*** ./src/models/helper.models.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Helper": () => (/* binding */ Helper)
/* harmony export */ });
/* harmony import */ var _contants_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contants.models */ 64879);

class Helper {
    static seThemeMode(status) {
        window.localStorage.setItem(_contants_models__WEBPACK_IMPORTED_MODULE_0__.Constants.KEY_DARK_MODE, status);
    }
    static getThemeMode(defaultTheme) {
        let toReturn = window.localStorage.getItem(_contants_models__WEBPACK_IMPORTED_MODULE_0__.Constants.KEY_DARK_MODE);
        if (!toReturn)
            toReturn = defaultTheme;
        return toReturn;
    }
    // SET API BASE URL OR HOSTNAME
    static setApiHostname(hostname) {
        window.localStorage.setItem(_contants_models__WEBPACK_IMPORTED_MODULE_0__.Constants.API_HOSTNAME_KEY, hostname);
    }
    // GET API BASE URL OR HOSTNAME
    static getApiHostname() {
        var hostname = window.localStorage.getItem(_contants_models__WEBPACK_IMPORTED_MODULE_0__.Constants.API_HOSTNAME_KEY);
        if (!hostname)
            hostname = _contants_models__WEBPACK_IMPORTED_MODULE_0__.Constants.DEFAULT_API_HOSTNAME;
        return hostname;
    }
    // USSD USSD SHORT CODE
    static setUssdShortcode(shortcode) {
        window.localStorage.setItem(_contants_models__WEBPACK_IMPORTED_MODULE_0__.Constants.USSD_SHORTCODE_KEY, shortcode);
    }
    // GET USSD SHORT CODE
    static getUssdShortcode() {
        var shortcode = window.localStorage.getItem(_contants_models__WEBPACK_IMPORTED_MODULE_0__.Constants.USSD_SHORTCODE_KEY);
        if (!shortcode)
            shortcode = _contants_models__WEBPACK_IMPORTED_MODULE_0__.Constants.DEFAULT_USSD_SHORTCODE;
        return shortcode;
    }
}


/***/ }),

/***/ 53862:
/*!**************************************************!*\
  !*** ./src/app/zones/zones.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\nion-list {\n  width: calc(100% - 37px);\n  margin: 0 auto;\n  margin-top: 20px;\n  padding: 0;\n  background: none;\n}\n\nion-list h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.85rem;\n  font-weight: 500;\n  margin-bottom: 22px;\n}\n\nion-list ion-item {\n  padding: 0;\n  border-bottom: 1px solid #ccc !important;\n  padding-bottom: 10px;\n  margin-bottom: 13px;\n  --background: var(--transparent);\n  background: var(--transparent);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --min-height: unset;\n}\n\nion-list ion-item .item_inner {\n  width: 100%;\n}\n\nion-list ion-item .item_inner h3 {\n  font-size: 1rem;\n  font-weight: 500;\n  margin: 0;\n  padding-bottom: 6px;\n}\n\nion-list ion-item .item_inner h4 {\n  color: var(--text-light);\n  font-size: 0.8rem;\n  font-weight: 400;\n  margin: 0;\n}\n\nion-list ion-item .item_inner h4 span.end {\n  font-size: 0.95rem;\n  font-weight: 700;\n}\n\nion-list ion-item.debited .item_inner h4 span.end {\n  color: var(--red_color);\n}\n\nion-list ion-item.credited .item_inner h4 span.end {\n  color: var(--secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInpvbmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUFSOztBQUlBO0VBQ0Msd0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFERDs7QUFHQztFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlDO0VBQ0MsVUFBQTtFQUNBLHdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtFO0VBQ0MsV0FBQTtBQUhIOztBQUtHO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUc7RUFDQyx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBSko7O0FBT0s7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0FBTE47O0FBWUc7RUFDQyx1QkFBQTtBQVZKOztBQWVHO0VBQ0MsdUJBQUE7QUFiSiIsImZpbGUiOiJ6b25lcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICAgICAgICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIHRvcDogLTNweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbmlvbi1saXN0IHtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDM3cHgpO1xuXHRtYXJnaW46IDAgYXV0bztcblx0bWFyZ2luLXRvcDogMjBweDtcblx0cGFkZGluZzogMDtcblx0YmFja2dyb3VuZDogbm9uZTtcblxuXHRoMiB7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcblx0XHRmb250LXNpemU6IC44NXJlbTtcblx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdG1hcmdpbi1ib3R0b206IDIycHg7XG5cdH1cblxuXHRpb24taXRlbSB7XG5cdFx0cGFkZGluZzogMDtcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuXHRcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXHRcdG1hcmdpbi1ib3R0b206IDEzcHg7XG5cdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG5cdFx0YmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuXHRcdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcblx0XHQtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAwO1xuXHRcdC0tbWluLWhlaWdodDogdW5zZXQ7XG5cblxuXHRcdC5pdGVtX2lubmVyIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXG5cdFx0XHRoMyB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogNnB4O1xuXHRcdFx0fVxuXG5cdFx0XHRoNCB7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcblx0XHRcdFx0Zm9udC1zaXplOiAuOHJlbTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXG5cdFx0XHRcdHNwYW4ge1xuXHRcdFx0XHRcdCYuZW5kIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogLjk1cmVtO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQmLmRlYml0ZWQge1xuXHRcdFx0Lml0ZW1faW5uZXIgaDQgc3Bhbi5lbmQge1xuXHRcdFx0XHRjb2xvcjogdmFyKC0tcmVkX2NvbG9yKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQmLmNyZWRpdGVkIHtcblx0XHRcdC5pdGVtX2lubmVyIGg0IHNwYW4uZW5kIHtcblx0XHRcdFx0Y29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXX0= */";

/***/ }),

/***/ 38821:
/*!**************************************************!*\
  !*** ./src/app/zones/zones.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{'zones' | translate}} ({{zones_count}})</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>   \n\t<ion-searchbar placeholder=\"Rechercher...\" mode=\"ios\" [(ngModel)]=\"searchTerm\" animated=\"true\"></ion-searchbar>\n    \n    <ion-list lines=\"none\">\n        <ion-item class=\"animate__animated animate__fadeInUp debited\" *ngFor=\"let zone of zones | filter:searchTerm\" (click)=\"details(zone)\">\n            <div class=\"item_inner\">\n                <h3>{{zone.name}}</h3>\n                <h4 class=\"d-flex\">{{zone.countries == 'bf' ? 'Burkina Faso' : 'Cote d\\'Ivoire'}}<span class=\"end\">{{zone.localitecount}}</span></h4>\n            </div>\n        </ion-item>\n    </ion-list>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_zones_zones_module_ts.js.map
"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_distributors_listing_listing_module_ts"],{

/***/ 42860:
/*!****************************************************************!*\
  !*** ./src/app/distributors/listing/listing-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListingPageRoutingModule": () => (/* binding */ ListingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _listing_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listing.page */ 13478);




const routes = [
    {
        path: '',
        component: _listing_page__WEBPACK_IMPORTED_MODULE_0__.ListingPage
    }
];
let ListingPageRoutingModule = class ListingPageRoutingModule {
};
ListingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListingPageRoutingModule);



/***/ }),

/***/ 18574:
/*!********************************************************!*\
  !*** ./src/app/distributors/listing/listing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListingPageModule": () => (/* binding */ ListingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _listing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listing-routing.module */ 42860);
/* harmony import */ var _listing_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listing.page */ 13478);







let ListingPageModule = class ListingPageModule {
};
ListingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _listing_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListingPageRoutingModule
        ],
        declarations: [_listing_page__WEBPACK_IMPORTED_MODULE_1__.ListingPage]
    })
], ListingPageModule);



/***/ }),

/***/ 13478:
/*!******************************************************!*\
  !*** ./src/app/distributors/listing/listing.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListingPage": () => (/* binding */ ListingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _listing_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listing.page.html?ngResource */ 74508);
/* harmony import */ var _listing_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listing.page.scss?ngResource */ 3018);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_ion_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ion-loader.service */ 45332);
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/helper.models */ 71220);








let ListingPage = class ListingPage {
    constructor(route, http, loadingService) {
        this.route = route;
        this.http = http;
        this.loadingService = loadingService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({ 'Content-Type': 'application' })
        };
        this.baseUrl = src_models_helper_models__WEBPACK_IMPORTED_MODULE_3__.Helper.getApiHostname();
        // this.loadingService.autoLoader(500);
        this.http.get(this.baseUrl + 'api/mobile/distributors/list/', this.httpOptions).subscribe(list => {
            if (list['count'] > 0)
                this.distributors = list['items'];
        });
    }
    ngOnInit() {
    }
    dist(dist) {
        let extras = {
            state: dist
        };
        this.route.navigate(['distributors'], extras);
    }
};
ListingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: src_app_services_ion_loader_service__WEBPACK_IMPORTED_MODULE_2__.IonLoaderService }
];
ListingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-listing',
        template: _listing_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_listing_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListingPage);



/***/ }),

/***/ 3018:
/*!*******************************************************************!*\
  !*** ./src/app/distributors/listing/listing.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\nion-list {\n  margin: 0;\n  margin-top: 13px;\n  padding: 0;\n  background: none;\n}\n\nion-list ion-item {\n  width: calc(100% - 20px);\n  margin: 0 auto;\n  border-radius: 8px;\n  margin-bottom: 13px;\n  padding: 15px;\n  box-shadow: 0 5px 4px -6px rgba(0, 0, 0, 0.4);\n  --background: var(--transparent);\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --min-height: unset;\n}\n\nion-list ion-item .icon_box {\n  margin: 0;\n  width: 45px;\n  margin-right: 20px;\n}\n\nion-list ion-item .icon_box ion-icon {\n  font-size: 35px;\n}\n\nion-list ion-item .text_box {\n  width: 100%;\n}\n\nion-list ion-item .text_box h2 {\n  margin: 0;\n  margin-bottom: 5px;\n  font-weight: 700;\n  font-size: 1rem;\n}\n\nion-list ion-item .text_box h3 {\n  color: var(--text-light);\n  font-size: 0.9rem;\n  font-weight: 400;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBSTtFQUNJLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFFUjs7QUFBUTtFQUNJLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFFWjs7QUFBWTtFQUNJLGVBQUE7QUFFaEI7O0FBRVE7RUFDSSxXQUFBO0FBQVo7O0FBRVk7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBaEI7O0FBR1k7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBRGhCIiwiZmlsZSI6Imxpc3RpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICAgIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIHRvcDogLTNweDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1saXN0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTNweDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCA1cHggNHB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAtLW1pbi1oZWlnaHQ6IHVuc2V0O1xuXG4gICAgICAgIC5pY29uX2JveCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcblxuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZSA6IDM1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dF9ib3gge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";

/***/ }),

/***/ 74508:
/*!*******************************************************************!*\
  !*** ./src/app/distributors/listing/listing.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Numeros distributeurs</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg_color\">\n\t<ion-list lines=\"none\">\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" *ngFor=\"let distributor of distributors\" (click)=\"dist(distributor)\">\n\t\t\t<div class=\"icon_box\" slot=\"start\">\n\t\t\t\t<ion-icon name=\"call-outline\"></ion-icon>\n\t\t\t</div>\n\t\t\t<div class=\"text_box\">\n\t\t\t\t<h2>{{distributor.number}} ({{distributor.balance}}F)</h2>\n\t\t\t</div>\n\t\t</ion-item>\n  \n\t\t\n\t</ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_distributors_listing_listing_module_ts.js.map
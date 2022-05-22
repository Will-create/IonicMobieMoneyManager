"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_contacts_contacts_module_ts"],{

/***/ 74773:
/*!*****************************************************!*\
  !*** ./src/app/contacts/contacts-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsPageRoutingModule": () => (/* binding */ ContactsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts.page */ 48186);




const routes = [
    {
        path: '',
        component: _contacts_page__WEBPACK_IMPORTED_MODULE_0__.ContactsPage
    },
    {
        path: 'details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_contacts_details_details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./details/details.module */ 19088)).then(m => m.DetailsPageModule)
    }
];
let ContactsPageRoutingModule = class ContactsPageRoutingModule {
};
ContactsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactsPageRoutingModule);



/***/ }),

/***/ 6808:
/*!*********************************************!*\
  !*** ./src/app/contacts/contacts.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsPageModule": () => (/* binding */ ContactsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts-routing.module */ 74773);
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts.page */ 48186);









let ContactsPageModule = class ContactsPageModule {
};
ContactsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
            _contacts_routing_module__WEBPACK_IMPORTED_MODULE_1__.ContactsPageRoutingModule
        ],
        declarations: [_contacts_page__WEBPACK_IMPORTED_MODULE_2__.ContactsPage]
    })
], ContactsPageModule);



/***/ }),

/***/ 48186:
/*!*******************************************!*\
  !*** ./src/app/contacts/contacts.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsPage": () => (/* binding */ ContactsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _contacts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts.page.html?ngResource */ 20033);
/* harmony import */ var _contacts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts.page.scss?ngResource */ 34300);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/helper.models */ 71220);
/* harmony import */ var _services_ion_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/ion-loader.service */ 45332);








let ContactsPage = class ContactsPage {
    constructor(http, router, loadingService) {
        this.http = http;
        this.router = router;
        this.loadingService = loadingService;
        this.contacts = [];
        this.contacts_count = 0;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        this.baseUrl = src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__.Helper.getApiHostname();
        this.loadingService.autoLoader();
        this.http.get(this.baseUrl + 'api/mobile/contacts/list/', this.httpOptions).subscribe(list => {
            if (list['count'] > 0) {
                this.contacts = list['items'];
                this.contacts_count = list['items'].length;
            }
        });
    }
    ngOnInit() {
    }
    details(contact) {
        let extras = {
            state: {
                numbers: contact.numbers,
                contact: contact
            }
        };
        this.router.navigate(['contacts/details'], extras);
    }
};
ContactsPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_ion_loader_service__WEBPACK_IMPORTED_MODULE_3__.IonLoaderService }
];
ContactsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-contacts',
        template: _contacts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_contacts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ContactsPage);



/***/ }),

/***/ 34300:
/*!********************************************************!*\
  !*** ./src/app/contacts/contacts.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\nion-list {\n  width: calc(100% - 37px);\n  margin: 0 auto;\n  margin-top: 20px;\n  padding: 0;\n  background: none;\n}\n\nion-list h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.85rem;\n  font-weight: 500;\n  margin-bottom: 22px;\n}\n\nion-list ion-item {\n  padding: 0;\n  border-bottom: 1px solid #ccc !important;\n  padding-bottom: 10px;\n  margin-bottom: 13px;\n  --background: var(--transparent);\n  background: var(--transparent);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --min-height: unset;\n}\n\nion-list ion-item .item_inner {\n  width: 100%;\n}\n\nion-list ion-item .item_inner h3 {\n  font-size: 1rem;\n  font-weight: 500;\n  margin: 0;\n  padding-bottom: 6px;\n}\n\nion-list ion-item .item_inner h4 {\n  color: var(--text-light);\n  font-size: 0.8rem;\n  font-weight: 400;\n  margin: 0;\n}\n\nion-list ion-item .item_inner h4 span.end {\n  font-size: 0.95rem;\n  font-weight: 700;\n}\n\nion-list ion-item.debited .item_inner h4 span.end {\n  color: var(--red_color);\n}\n\nion-list ion-item.credited .item_inner h4 span.end {\n  color: var(--secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUFSOztBQUdBO0VBQ0Msd0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFBRDs7QUFDQztFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVDO0VBQ0MsVUFBQTtFQUNBLHdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdFO0VBQ0MsV0FBQTtBQURIOztBQUdHO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUc7RUFDQyx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBRko7O0FBS0s7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0FBSE47O0FBVUc7RUFDQyx1QkFBQTtBQVJKOztBQWFHO0VBQ0MsdUJBQUE7QUFYSiIsImZpbGUiOiJjb250YWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICAgICAgICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIHRvcDogLTNweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5pb24tbGlzdCB7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAzN3B4KTtcblx0bWFyZ2luOiAwIGF1dG87XG5cdG1hcmdpbi10b3A6IDIwcHg7XG5cdHBhZGRpbmc6IDA7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdGgyIHtcblx0XHRtYXJnaW46IDA7XG5cdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHRcdGZvbnQtc2l6ZTogLjg1cmVtO1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0bWFyZ2luLWJvdHRvbTogMjJweDtcblx0fVxuXG5cdGlvbi1pdGVtIHtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG5cdFx0cGFkZGluZy1ib3R0b206IDEwcHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTNweDtcblx0XHQtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG5cdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXHRcdC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDA7XG5cdFx0LS1taW4taGVpZ2h0OiB1bnNldDtcblxuXG5cdFx0Lml0ZW1faW5uZXIge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cblx0XHRcdGgzIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiA2cHg7XG5cdFx0XHR9XG5cblx0XHRcdGg0IHtcblx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHRcdFx0XHRmb250LXNpemU6IC44cmVtO1xuXHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cblx0XHRcdFx0c3BhbiB7XG5cdFx0XHRcdFx0Ji5lbmQge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAuOTVyZW07XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCYuZGViaXRlZCB7XG5cdFx0XHQuaXRlbV9pbm5lciBoNCBzcGFuLmVuZCB7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS1yZWRfY29sb3IpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCYuY3JlZGl0ZWQge1xuXHRcdFx0Lml0ZW1faW5uZXIgaDQgc3Bhbi5lbmQge1xuXHRcdFx0XHRjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuIl19 */";

/***/ }),

/***/ 20033:
/*!********************************************************!*\
  !*** ./src/app/contacts/contacts.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Contacts ({{contacts_count}})</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen class=\"bg_color\">\n  <ion-searchbar placeholder=\"Rechercher...\" mode=\"ios\" [(ngModel)]=\"searchTerm\" animated=\"true\"></ion-searchbar>\n  <ion-list lines=\"none\">\n\t\t<h2>{{'contacts' | translate}}</h2>\n\t\t<ion-item *ngFor=\"let contact of contacts | filter:searchTerm\" (click)=\"details(contact)\" class=\"animate__animated animate__fadeInUp deposited\">\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<ion-row >\n\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t<h4>{{'name' | translate}}</h4>\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{contact.name}}</h3>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t<h4>{{'phone' | translate}}<sub></sub></h4>\n\t\t\t\t\t\t<h3 class=\"animate__animated animate__fadeInUp\">{{contact.phone}}</h3>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_contacts_contacts_module_ts.js.map
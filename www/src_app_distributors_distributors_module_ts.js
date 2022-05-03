"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_distributors_distributors_module_ts"],{

/***/ 57573:
/*!*************************************************************!*\
  !*** ./src/app/distributors/distributors-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DistributorsPageRoutingModule": () => (/* binding */ DistributorsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _distributors_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distributors.page */ 98364);




const routes = [
    {
        path: '',
        component: _distributors_page__WEBPACK_IMPORTED_MODULE_0__.DistributorsPage
    },
    {
        path: 'sendings',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_distributors_sendings_sendings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sendings/sendings.module */ 78578)).then(m => m.SendingsPageModule)
    },
    {
        path: 'receivings',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_distributors_receivings_receivings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./receivings/receivings.module */ 82522)).then(m => m.ReceivingsPageModule)
    },
    {
        path: 'pending',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_distributors_pending_pending_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pending/pending.module */ 18851)).then(m => m.PendingPageModule)
    }
];
let DistributorsPageRoutingModule = class DistributorsPageRoutingModule {
};
DistributorsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DistributorsPageRoutingModule);



/***/ }),

/***/ 67288:
/*!*****************************************************!*\
  !*** ./src/app/distributors/distributors.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DistributorsPageModule": () => (/* binding */ DistributorsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _distributors_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distributors-routing.module */ 57573);
/* harmony import */ var _distributors_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./distributors.page */ 98364);







let DistributorsPageModule = class DistributorsPageModule {
};
DistributorsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _distributors_routing_module__WEBPACK_IMPORTED_MODULE_0__.DistributorsPageRoutingModule
        ],
        declarations: [_distributors_page__WEBPACK_IMPORTED_MODULE_1__.DistributorsPage]
    })
], DistributorsPageModule);



/***/ }),

/***/ 98364:
/*!***************************************************!*\
  !*** ./src/app/distributors/distributors.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DistributorsPage": () => (/* binding */ DistributorsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _distributors_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distributors.page.html?ngResource */ 61233);
/* harmony import */ var _distributors_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./distributors.page.scss?ngResource */ 37159);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let DistributorsPage = class DistributorsPage {
    constructor(router) {
        this.router = router;
        if (this.router.getCurrentNavigation().extras.state) {
            this.distributor = this.router.getCurrentNavigation().extras.state;
        }
        ;
        this.extras = {
            state: this.distributor
        };
    }
    ngOnInit() {
    }
    pending() {
        this.router.navigate(['distributors/pending'], this.extras);
    }
    sent() {
        this.router.navigate(['distributors/sendings'], this.extras);
    }
    received() {
        this.router.navigate(['distributors/receivings'], this.extras);
    }
};
DistributorsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
DistributorsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-distributors',
        template: _distributors_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_distributors_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DistributorsPage);



/***/ }),

/***/ 37159:
/*!****************************************************************!*\
  !*** ./src/app/distributors/distributors.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\nion-list {\n  margin: 0;\n  margin-top: 13px;\n  padding: 0;\n  background: none;\n}\n\nion-list ion-item {\n  width: calc(100% - 20px);\n  margin: 0 auto;\n  border-radius: 8px;\n  margin-bottom: 13px;\n  padding: 15px;\n  box-shadow: 0 5px 4px -6px rgba(0, 0, 0, 0.4);\n  --background: var(--transparent);\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --min-height: unset;\n}\n\nion-list ion-item .icon_box {\n  margin: 0;\n  width: 45px;\n  margin-right: 20px;\n}\n\nion-list ion-item .icon_box ion-icon {\n  font-size: 35px;\n}\n\nion-list ion-item .text_box {\n  width: 100%;\n}\n\nion-list ion-item .text_box h2 {\n  margin: 0;\n  margin-bottom: 5px;\n  font-weight: 700;\n  font-size: 1rem;\n}\n\nion-list ion-item .text_box h3 {\n  color: var(--text-light);\n  font-size: 0.9rem;\n  font-weight: 400;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3RyaWJ1dG9ycy5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTG91aXMlMjBCZXJ0c29uXFxEZXNrdG9wXFxTcGFzcyUyMFRlbGVjb21cXE1vYmlsZUNsaWVudFxcc3JjXFxhcHBcXGRpc3RyaWJ1dG9yc1xcZGlzdHJpYnV0b3JzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUk7RUFDSSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDZDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDRVI7O0FEQVE7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRVo7O0FEQVk7RUFDSSxlQUFBO0FDRWhCOztBREVRO0VBQ0ksV0FBQTtBQ0FaOztBREVZO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQWhCOztBREdZO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ0RoQiIsImZpbGUiOiJkaXN0cmlidXRvcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xyXG4gICAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIHRvcDogLTNweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24tbGlzdCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDRweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgLS1taW4taGVpZ2h0OiB1bnNldDtcclxuXHJcbiAgICAgICAgLmljb25fYm94IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplIDogMzVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRleHRfYm94IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgdG9wOiAtM3B4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tbGlzdCB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDVweCA0cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tbWluLWhlaWdodDogdW5zZXQ7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaWNvbl9ib3gge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiA0NXB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaWNvbl9ib3ggaW9uLWljb24ge1xuICBmb250LXNpemU6IDM1cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAudGV4dF9ib3gge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC50ZXh0X2JveCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5pb24tbGlzdCBpb24taXRlbSAudGV4dF9ib3ggaDMge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDA7XG59Il19 */";

/***/ }),

/***/ 61233:
/*!****************************************************************!*\
  !*** ./src/app/distributors/distributors.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>Transferts Aujourd'hui | {{distributor.number}}</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\">\r\n\t<ion-list lines=\"none\">\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"pending()\">\r\n\t\t\t<div class=\"icon_box\" slot=\"start\">\r\n\t\t\t\t<ion-icon name=\"refresh-circle-outline\"></ion-icon>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"text_box\">\r\n\t\t\t\t<h2>Transferts en attente</h2>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"sent()\">\r\n\t\t\t<div class=\"icon_box\" slot=\"start\">\r\n\t\t\t\t<ion-icon name=\"cloud-upload-outline\"></ion-icon>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"text_box\">\r\n\t\t\t\t<h2>Transferts Envoyes </h2>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"received()\">\r\n\t\t\t<div class=\"icon_box\" slot=\"start\">\r\n\t\t\t\t<ion-icon name=\"cloud-download-outline\"></ion-icon>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"text_box\">\r\n\t\t\t\t<h2>Transfert recus</h2>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t\r\n\t</ion-list>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_distributors_distributors_module_ts.js.map
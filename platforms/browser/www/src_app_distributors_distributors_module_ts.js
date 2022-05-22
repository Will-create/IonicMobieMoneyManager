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

module.exports = "ion-header ion-toolbar ion-title {\n  padding: 0 15px !important;\n  position: absolute !important;\n  top: -3px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\nion-list {\n  margin: 0;\n  margin-top: 13px;\n  padding: 0;\n  background: none;\n}\n\nion-list ion-item {\n  width: calc(100% - 20px);\n  margin: 0 auto;\n  border-radius: 8px;\n  margin-bottom: 13px;\n  padding: 15px;\n  box-shadow: 0 5px 4px -6px rgba(0, 0, 0, 0.4);\n  --background: var(--transparent);\n  background: var(--white);\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --min-height: unset;\n}\n\nion-list ion-item .icon_box {\n  margin: 0;\n  width: 45px;\n  margin-right: 20px;\n}\n\nion-list ion-item .icon_box ion-icon {\n  font-size: 35px;\n}\n\nion-list ion-item .text_box {\n  width: 100%;\n}\n\nion-list ion-item .text_box h2 {\n  margin: 0;\n  margin-bottom: 5px;\n  font-weight: 700;\n  font-size: 1rem;\n}\n\nion-list ion-item .text_box h3 {\n  color: var(--text-light);\n  font-size: 0.9rem;\n  font-weight: 400;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3RyaWJ1dG9ycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFJO0VBQ0ksd0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw2Q0FBQTtFQUNBLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUVSOztBQUFRO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUVaOztBQUFZO0VBQ0ksZUFBQTtBQUVoQjs7QUFFUTtFQUNJLFdBQUE7QUFBWjs7QUFFWTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFoQjs7QUFHWTtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFEaEIiLCJmaWxlIjoiZGlzdHJpYnV0b3JzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICB0b3A6IC0zcHg7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tbGlzdCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEzcHg7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDRweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgLS1taW4taGVpZ2h0OiB1bnNldDtcblxuICAgICAgICAuaWNvbl9ib3gge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG5cbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemUgOiAzNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnRleHRfYm94IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */";

/***/ }),

/***/ 61233:
/*!****************************************************************!*\
  !*** ./src/app/distributors/distributors.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Transferts Aujourd'hui | {{distributor.number}}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg_color\">\n\t<ion-list lines=\"none\">\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"pending()\">\n\t\t\t<div class=\"icon_box\" slot=\"start\">\n\t\t\t\t<ion-icon name=\"refresh-circle-outline\"></ion-icon>\n\t\t\t</div>\n\t\t\t<div class=\"text_box\">\n\t\t\t\t<h2>Transferts en attente</h2>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"sent()\">\n\t\t\t<div class=\"icon_box\" slot=\"start\">\n\t\t\t\t<ion-icon name=\"cloud-upload-outline\"></ion-icon>\n\t\t\t</div>\n\t\t\t<div class=\"text_box\">\n\t\t\t\t<h2>Transferts Envoyes </h2>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t<ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"received()\">\n\t\t\t<div class=\"icon_box\" slot=\"start\">\n\t\t\t\t<ion-icon name=\"cloud-download-outline\"></ion-icon>\n\t\t\t</div>\n\t\t\t<div class=\"text_box\">\n\t\t\t\t<h2>Transfert recus</h2>\n\t\t\t</div>\n\t\t</ion-item>\n\t\t\n\t</ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_distributors_distributors_module_ts.js.map
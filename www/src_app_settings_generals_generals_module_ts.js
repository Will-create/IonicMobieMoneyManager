"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_settings_generals_generals_module_ts"],{

/***/ 1242:
/*!**************************************************************!*\
  !*** ./src/app/settings/generals/generals-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralsPageRoutingModule": () => (/* binding */ GeneralsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _generals_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generals.page */ 4941);




const routes = [
    {
        path: '',
        component: _generals_page__WEBPACK_IMPORTED_MODULE_0__.GeneralsPage
    }
];
let GeneralsPageRoutingModule = class GeneralsPageRoutingModule {
};
GeneralsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GeneralsPageRoutingModule);



/***/ }),

/***/ 29634:
/*!******************************************************!*\
  !*** ./src/app/settings/generals/generals.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralsPageModule": () => (/* binding */ GeneralsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _generals_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generals-routing.module */ 1242);
/* harmony import */ var _generals_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generals.page */ 4941);








let GeneralsPageModule = class GeneralsPageModule {
};
GeneralsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _generals_routing_module__WEBPACK_IMPORTED_MODULE_0__.GeneralsPageRoutingModule
        ],
        declarations: [_generals_page__WEBPACK_IMPORTED_MODULE_1__.GeneralsPage]
    })
], GeneralsPageModule);



/***/ }),

/***/ 4941:
/*!****************************************************!*\
  !*** ./src/app/settings/generals/generals.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralsPage": () => (/* binding */ GeneralsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _generals_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generals.page.html?ngResource */ 45590);
/* harmony import */ var _generals_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generals.page.scss?ngResource */ 14316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/helper.models */ 71220);









let GeneralsPage = class GeneralsPage {
    constructor(formBuilder, toastCtrl, router, http) {
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    ngOnInit() {
        this.baseUrl = src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__.Helper.getApiHostname();
        this.http.get(this.baseUrl + 'api/mobile/distributors/list/', this.httpOptions).subscribe(list => {
            if (list['count'] > 0) {
                this.distributors = list['items'];
            }
        });
        this.generalForm = this.formBuilder.group({
            shortcode: src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__.Helper.getUssdShortcode(),
            current_sim: src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__.Helper.getCurrentSim()
        });
    }
    save() {
        src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__.Helper.setUssdShortcode(this.generalForm.get('shortcode').value);
        src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__.Helper.setCurrentSim(this.generalForm.get('current_sim').value);
        this.presentToast();
    }
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Enregistre avec succes',
                duration: 2500,
                position: 'bottom',
            });
            setTimeout(() => {
                this.router.navigate(['/tabs/home']);
            }, 600);
            toast.present();
        });
    }
};
GeneralsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
GeneralsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-generals',
        template: _generals_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_generals_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GeneralsPage);



/***/ }),

/***/ 14316:
/*!*****************************************************************!*\
  !*** ./src/app/settings/generals/generals.page.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title h2 {\n  font-size: 1.1rem;\n  font-weight: 500;\n  margin: 0;\n  padding: 17px 0;\n}\nion-header ion-toolbar ion-title h2 small {\n  display: block;\n  margin-top: 4px;\n  font-weight: 400;\n  font-size: 0.85rem;\n}\n.form {\n  width: calc(100% - 32px);\n  margin-top: 30px;\n}\n.form ion-list h2 {\n  color: var(--text-black) !important;\n  font-size: 1.1rem !important;\n  letter-spacing: 0px;\n  font-weight: 600 !important;\n  margin: 0;\n  margin-bottom: 7px;\n}\n.form ion-list h2 span {\n  color: var(--primary);\n  font-size: 0.9rem;\n}\n.form ion-list ion-item {\n  background: var(--white);\n  border-radius: 0px;\n  padding: 0;\n  margin-bottom: 35px;\n}\n.form ion-list ion-item.item-select ion-select {\n  --placeholder-color: var(--text-light) !important;\n  --placeholder-opacity: 1;\n  color: var(--text-light);\n  font-size: 0.8rem !important;\n  font-weight: 500 !important;\n  letter-spacing: 0px;\n  padding: 0 18px !important;\n  min-height: 40px;\n  border-radius: 7px;\n  border: 1px solid #ccc !important;\n}\n.form ion-list ion-item.item-input ion-input {\n  color: var(--text-light) !important;\n  font-size: 0.8rem !important;\n  font-weight: 500 !important;\n  letter-spacing: 0px;\n  padding: 0 18px !important;\n  min-height: 40px;\n  border-radius: 7px;\n  border: 1px solid #ccc !important;\n}\n.form ion-list ion-item .item_inner {\n  width: 100%;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.form ion-list ion-item .item_inner ion-radio {\n  --color-checked: var(--secondary);\n}\n.form ion-list ion-item .item_inner h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQUFSO0FBQ1E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDWjtBQUlBO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtBQURKO0FBR1E7RUFDSSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQURaO0FBRVk7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0FBQWhCO0FBR1E7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBRFo7QUFHZ0I7RUFDSSxpREFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQURwQjtBQUtnQjtFQUNJLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUFIcEI7QUFPWTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFMaEI7QUFPZ0I7RUFDSSxpQ0FBQTtBQUxwQjtBQVFnQjtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBTnBCIiwiZmlsZSI6ImdlbmVyYWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDE3cHggMDtcbiAgICAgICAgc21hbGwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAuODVyZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5mb3JtIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBpb24tbGlzdCB7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgICAgICAgICAgICYuaXRlbS1zZWxlY3Qge1xuICAgICAgICAgICAgICAgIGlvbi1zZWxlY3Qge1xuICAgICAgICAgICAgICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE4cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5pdGVtLWlucHV0IHtcbiAgICAgICAgICAgICAgICBpb24taW5wdXQge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLml0ZW1faW5uZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBcbiAgICAgICAgICAgICAgICBpb24tcmFkaW8ge1xuICAgICAgICAgICAgICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLXNlY29uZGFyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufSJdfQ== */";

/***/ }),

/***/ 45590:
/*!*****************************************************************!*\
  !*** ./src/app/settings/generals/generals.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Parametres Généraux</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-content fullscreen class=\"bg_color\">\n\t<form [formGroup]=\"generalForm\" (ngSubmit)=\"save()\" class=\"form\">\n\t\t<ion-list lines=\"none\">\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n\t\t\t\t<ion-input type=\"text\" formControlName=\"shortcode\" placeholder=\"Code de transfert USSD\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n\t\t\t\t<ion-select mode=\"md\" formControlName=\"current_sim\" interface=\"action-sheet\">\n\t\t\t\t\t\t<ion-select-option disabled value=\"\">Numero distributeur</ion-select-option>\n\t\t\t\t\t<ion-select-option *ngFor=\"let distributor of distributors\" value=\"{{distributor.number}}\">\n           {{distributor.number}} | Solde : {{distributor.balance}} FCFA\n          \t</ion-select-option>\n\t\t\t\t</ion-select>\n\t\t\t</ion-item>\n\t\t\n\t\t</ion-list>\n\t</form>\n\t<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\n\t\t<ion-button size=\"small\" shape=\"block\" class=\"btn\" (click)=\"save()\">Sauvegarder</ion-button>\n\t</ion-footer>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_settings_generals_generals_module_ts.js.map
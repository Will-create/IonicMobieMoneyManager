"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 86829:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 72919);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 84523:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 86829);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 72919);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 72919:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 8907);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 36611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/helper.models */ 71220);








let ProfilePage = class ProfilePage {
    constructor(formBuilder, router, toastCtrl) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.profile = JSON.parse(src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__.Helper.getUserProfile());
        console.log(this.profile);
        this.profileForm = this.formBuilder.group(this.profile);
    }
    ngOnInit() {
    }
    save() {
        let form = {};
        form['name'] = this.profileForm.get('name').value;
        form['picture'] = this.profileForm.get('picture').value;
        form['login'] = this.profileForm.get('login').value;
        form['password'] = this.profileForm.get('password').value;
        form['phone'] = this.profileForm.get('phone').value;
        src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__.Helper.setUserProfile(JSON.stringify(form));
        this.presentToast("Enregistre avec succes", "bottom", 600);
        this.router.navigate(['/tabs/settings']);
    }
    presentToast(message, position, duration) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                position: position,
                duration: duration
            });
            toast.present();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-profile',
        template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 36611:
/*!******************************************************!*\
  !*** ./src/app/profile/profile.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".bg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 158px;\n  background: var(--primary);\n}\n\n.profile_img_box {\n  margin: 0 auto;\n  width: 105px;\n  height: 105px;\n  position: relative;\n  overflow: hidden;\n  z-index: 99;\n  margin-top: 38px;\n}\n\n.profile_img_box .profile_img {\n  width: 105px;\n  height: 105px;\n  margin: 0 auto;\n  border-radius: 50%;\n}\n\n.profile_img_box ion-icon {\n  position: absolute;\n  top: 0;\n  right: 1px;\n  font-size: 1rem;\n  background: var(--secondary);\n  width: 25px;\n  display: block;\n  height: 25px;\n  line-height: 25px;\n  border-radius: 50%;\n  text-align: center;\n  color: var(--white);\n}\n\n.form {\n  width: calc(100% - 34px);\n  margin-top: 32px;\n}\n\n.form ion-list ion-item {\n  background: none;\n  border-bottom: 1px solid #ccc !important;\n  padding: 0;\n  padding-bottom: 5px !important;\n  border-radius: 0;\n  margin-bottom: 15px;\n}\n\n.form ion-list ion-item ion-label {\n  padding: 0;\n  color: var(--text-light) !important;\n  padding-bottom: 17px;\n  font-weight: 500 !important;\n  font-size: 1rem !important;\n  letter-spacing: 0.6px;\n}\n\n.form ion-list ion-item ion-input {\n  font-size: 1.2rem !important;\n  font-weight: 500 !important;\n  padding: 0 !important;\n}\n\nion-footer {\n  --animate-duration: .4s !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtBQUNMOztBQUVDO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUNMOztBQUFLO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFFVDs7QUFBSztFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUVUOztBQUVDO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtBQUNMOztBQUNTO0VBQ0ksZ0JBQUE7RUFDQSx3Q0FBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDYjs7QUFBYTtFQUNJLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0FBRWpCOztBQUFhO0VBQ0ksNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FBRWpCOztBQUlDO0VBQ0ksa0NBQUE7QUFETCIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAuYmcge1xuICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgIHRvcDogMDtcbiAgICAgbGVmdDogMDtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIGhlaWdodDogMTU4cHg7XG4gICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuIH1cbiBcbiAucHJvZmlsZV9pbWdfYm94IHtcbiAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgIHdpZHRoOiAxMDVweDtcbiAgICAgaGVpZ2h0OiAxMDVweDtcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICB6LWluZGV4OiA5OTtcbiAgICAgbWFyZ2luLXRvcDogMzhweDtcbiAgICAgLnByb2ZpbGVfaW1nIHtcbiAgICAgICAgIHdpZHRoOiAxMDVweDtcbiAgICAgICAgIGhlaWdodDogMTA1cHg7XG4gICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgfVxuICAgICBpb24taWNvbiB7XG4gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICB0b3A6IDA7XG4gICAgICAgICByaWdodDogMXB4O1xuICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgIH1cbiB9XG4gXG4gLmZvcm0ge1xuICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzRweCk7XG4gICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgIGlvbi1saXN0IHtcbiAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTdweDtcbiAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC42cHg7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgfVxuIH1cbiBcbiBpb24tZm9vdGVyIHtcbiAgICAgLS1hbmltYXRlLWR1cmF0aW9uOiAuNHMgIWltcG9ydGFudDtcbiB9Il19 */";

/***/ }),

/***/ 8907:
/*!******************************************************!*\
  !*** ./src/app/profile/profile.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Profile</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen class=\"bg_color\">\n    <div class=\"bg\"></div>\n    <div class=\"profile_img_box animate__animated animate__zoomIn\">\n        <div class=\"profile_img center_img\">\n            <img src=\"{{profile.picture}}\" class=\"crop_img\">\n        </div>\n        <ion-icon class=\"zmdi zmdi-camera\"></ion-icon>\n    </div>\n    <form class=\"form\" [formGroup]=\"profileForm\">\n        <ion-list lines=\"none\">\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                <ion-label position=\"floating\">Nom Complet</ion-label>\n                <ion-input type=\"text\" formControlName=\"name\" ></ion-input>\n            </ion-item>\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                <ion-label position=\"floating\">Numero de telephone</ion-label>\n                <ion-input type=\"text\"  formControlName=\"phone\"></ion-input>\n            </ion-item>\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                <ion-label position=\"floating\">Numero de connexion</ion-label>\n                <ion-input type=\"text\" formControlName=\"login\" ></ion-input>\n            </ion-item>\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\n                <ion-label position=\"floating\">Mot de passe</ion-label>\n                <ion-input type=\"text\" formControlName=\"password\"  ></ion-input>\n            </ion-item>\n        </ion-list>\n    </form>\n   \n    <ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\n        <ion-button size=\"large\" shape=\"full\" (click)=\"save()\" class=\"btn\">Sauvegarder</ion-button>\n    </ion-footer>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map
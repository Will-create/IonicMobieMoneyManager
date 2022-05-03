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
        this.profile = src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__.Helper.getUserProfile();
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

module.exports = ".bg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 158px;\n  background: var(--primary);\n}\n\n.profile_img_box {\n  margin: 0 auto;\n  width: 105px;\n  height: 105px;\n  position: relative;\n  overflow: hidden;\n  z-index: 99;\n  margin-top: 38px;\n}\n\n.profile_img_box .profile_img {\n  width: 105px;\n  height: 105px;\n  margin: 0 auto;\n  border-radius: 50%;\n}\n\n.profile_img_box ion-icon {\n  position: absolute;\n  top: 0;\n  right: 1px;\n  font-size: 1rem;\n  background: var(--secondary);\n  width: 25px;\n  display: block;\n  height: 25px;\n  line-height: 25px;\n  border-radius: 50%;\n  text-align: center;\n  color: var(--white);\n}\n\n.form {\n  width: calc(100% - 34px);\n  margin-top: 32px;\n}\n\n.form ion-list ion-item {\n  background: none;\n  border-bottom: 1px solid #ccc !important;\n  padding: 0;\n  padding-bottom: 5px !important;\n  border-radius: 0;\n  margin-bottom: 15px;\n}\n\n.form ion-list ion-item ion-label {\n  padding: 0;\n  color: var(--text-light) !important;\n  padding-bottom: 17px;\n  font-weight: 500 !important;\n  font-size: 1rem !important;\n  letter-spacing: 0.6px;\n}\n\n.form ion-list ion-item ion-input {\n  font-size: 1.2rem !important;\n  font-weight: 500 !important;\n  padding: 0 !important;\n}\n\nion-footer {\n  --animate-duration: .4s !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXExvdWlzJTIwQmVydHNvblxcRGVza3RvcFxcU3Bhc3MlMjBUZWxlY29tXFxNb2JpbGVDbGllbnRcXHNyY1xcYXBwXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7QUNDTDs7QURFQztFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDTDs7QURBSztFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDRVQ7O0FEQUs7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNFVDs7QURFQztFQUNJLHdCQUFBO0VBQ0EsZ0JBQUE7QUNDTDs7QURDUztFQUNJLGdCQUFBO0VBQ0Esd0NBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ2I7O0FEQWE7RUFDSSxVQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQ0VqQjs7QURBYTtFQUNJLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtBQ0VqQjs7QURJQztFQUNJLGtDQUFBO0FDREwiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLmJnIHtcclxuICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgdG9wOiAwO1xyXG4gICAgIGxlZnQ6IDA7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgaGVpZ2h0OiAxNThweDtcclxuICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcclxuIH1cclxuIFxyXG4gLnByb2ZpbGVfaW1nX2JveCB7XHJcbiAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgd2lkdGg6IDEwNXB4O1xyXG4gICAgIGhlaWdodDogMTA1cHg7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgei1pbmRleDogOTk7XHJcbiAgICAgbWFyZ2luLXRvcDogMzhweDtcclxuICAgICAucHJvZmlsZV9pbWcge1xyXG4gICAgICAgICB3aWR0aDogMTA1cHg7XHJcbiAgICAgICAgIGhlaWdodDogMTA1cHg7XHJcbiAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgfVxyXG4gICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgIHJpZ2h0OiAxcHg7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICB9XHJcbiB9XHJcbiBcclxuIC5mb3JtIHtcclxuICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzRweCk7XHJcbiAgICAgbWFyZ2luLXRvcDogMzJweDtcclxuICAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjZweDtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG4gfVxyXG4gXHJcbiBpb24tZm9vdGVyIHtcclxuICAgICAtLWFuaW1hdGUtZHVyYXRpb246IC40cyAhaW1wb3J0YW50O1xyXG4gfSIsIi5iZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNThweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5wcm9maWxlX2ltZ19ib3gge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwNXB4O1xuICBoZWlnaHQ6IDEwNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDk5O1xuICBtYXJnaW4tdG9wOiAzOHB4O1xufVxuLnByb2ZpbGVfaW1nX2JveCAucHJvZmlsZV9pbWcge1xuICB3aWR0aDogMTA1cHg7XG4gIGhlaWdodDogMTA1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ucHJvZmlsZV9pbWdfYm94IGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAxcHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgd2lkdGg6IDI1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxuLmZvcm0ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzRweCk7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG4uZm9ybSBpb24tbGlzdCBpb24taXRlbSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctYm90dG9tOiA1cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1mb290ZXIge1xuICAtLWFuaW1hdGUtZHVyYXRpb246IC40cyAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 8907:
/*!******************************************************!*\
  !*** ./src/app/profile/profile.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Profile</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen class=\"bg_color\">\r\n    <div class=\"bg\"></div>\r\n    <div class=\"profile_img_box animate__animated animate__zoomIn\">\r\n        <div class=\"profile_img center_img\">\r\n            <img src=\"{{profile.picture}}\" class=\"crop_img\">\r\n        </div>\r\n        <ion-icon class=\"zmdi zmdi-camera\"></ion-icon>\r\n    </div>\r\n    <form class=\"form\" [formGroup]=\"profileForm\">\r\n        <ion-list lines=\"none\">\r\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\r\n                <ion-label position=\"floating\">Nom Complet</ion-label>\r\n                <ion-input type=\"text\" formControlName=\"name\" ></ion-input>\r\n            </ion-item>\r\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\r\n                <ion-label position=\"floating\">Numero de telephone</ion-label>\r\n                <ion-input type=\"text\"  formControlName=\"phone\"></ion-input>\r\n            </ion-item>\r\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\r\n                <ion-label position=\"floating\">Numero de connexion</ion-label>\r\n                <ion-input type=\"text\" formControlName=\"login\" ></ion-input>\r\n            </ion-item>\r\n            <ion-item class=\"animate__animated animate__fadeInUp\" lines=\"none\">\r\n                <ion-label position=\"floating\">Mot de passe</ion-label>\r\n                <ion-input type=\"text\" formControlName=\"password\"  ></ion-input>\r\n            </ion-item>\r\n        </ion-list>\r\n    </form>\r\n   \r\n    <ion-footer class=\"ion-no-border animate__animated animate__fadeInUp\">\r\n        <ion-button size=\"large\" shape=\"full\" (click)=\"save()\" class=\"btn\">Sauvegarder</ion-button>\r\n    </ion-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map
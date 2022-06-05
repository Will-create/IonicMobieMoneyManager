"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sing-in_sing-in_module_ts"],{

/***/ 40914:
/*!***************************************************!*\
  !*** ./src/app/sing-in/sing-in-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingInPageRoutingModule": () => (/* binding */ SingInPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _sing_in_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sing-in.page */ 26852);




const routes = [
    {
        path: '',
        component: _sing_in_page__WEBPACK_IMPORTED_MODULE_0__.SingInPage
    }
];
let SingInPageRoutingModule = class SingInPageRoutingModule {
};
SingInPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SingInPageRoutingModule);



/***/ }),

/***/ 21553:
/*!*******************************************!*\
  !*** ./src/app/sing-in/sing-in.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingInPageModule": () => (/* binding */ SingInPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _sing_in_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sing-in-routing.module */ 40914);
/* harmony import */ var _sing_in_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sing-in.page */ 26852);








let SingInPageModule = class SingInPageModule {
};
SingInPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _sing_in_routing_module__WEBPACK_IMPORTED_MODULE_0__.SingInPageRoutingModule
        ],
        declarations: [_sing_in_page__WEBPACK_IMPORTED_MODULE_1__.SingInPage]
    })
], SingInPageModule);



/***/ }),

/***/ 26852:
/*!*****************************************!*\
  !*** ./src/app/sing-in/sing-in.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingInPage": () => (/* binding */ SingInPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sing_in_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sing-in.page.html?ngResource */ 657);
/* harmony import */ var _sing_in_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sing-in.page.scss?ngResource */ 36313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/helper.models */ 71220);








let SingInPage = class SingInPage {
    constructor(navCtrl, route, formBuilder, toastCtrl) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.currentUser = src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__.Helper.getUserProfile();
        this.isDefaultUser = src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__.Helper.isDefaultUser();
        this.saved_login = src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__.Helper.getSavedProfileLogin();
        this.loginForm = this.formBuilder.group({
            login: this.saved_login,
            password: ''
        });
    }
    ngOnInit() {
    }
    tabs() {
        let form = {};
        form['login'] = this.loginForm.get('login').value;
        form['password'] = this.loginForm.get('password').value;
        if (!form['login']) {
            this.presentToast("Le nom d'utilisateur ou numero de telephone est obligatoire");
            return;
        }
        if (!form['password']) {
            this.presentToast('Le mot de passe est obligatoire');
        }
        if (this.isDefaultUser) {
            if (form['login'] == 'spass' && form['password'] == '0000') {
                this.presentToast('Bienvenue');
                this.navCtrl.navigateRoot(['./tabs']);
            }
            else {
                this.presentToast('Nom d\'utilisateur ou numero de telephone incorrect ');
            }
        }
        else {
            if (form['login'] == this.currentUser.login && form['password'] == this.currentUser.password) {
                this.presentToast('Bienvenue');
                src_models_helper_models__WEBPACK_IMPORTED_MODULE_2__.Helper.setSavedProfileLogin(form['login']);
                this.navCtrl.navigateRoot(['./tabs']);
            }
            else {
                this.presentToast('Nom d\'utilisateur ou numero de telephone incorrect');
            }
        }
    }
    sign_up() {
        this.route.navigate(['./sign-up']);
    }
    presentToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                duration: 600,
            });
            toast.present();
        });
    }
};
SingInPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController }
];
SingInPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-sing-in',
        template: _sing_in_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sing_in_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SingInPage);



/***/ }),

/***/ 36313:
/*!******************************************************!*\
  !*** ./src/app/sing-in/sing-in.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  font-size: 1.15rem;\n  font-weight: 400;\n}\n\n.banner {\n  background: var(--primary);\n  height: 160px;\n  display: flex;\n  align-items: flex-start;\n}\n\n.banner h2 {\n  margin: 0;\n  color: var(--white);\n  align-self: center;\n  width: 100%;\n  font-size: 1.6rem;\n  font-weight: 500;\n}\n\n.banner h2 span {\n  font-weight: 400;\n}\n\n.form {\n  margin-top: 200px;\n}\n\n.form ion-list {\n  padding-bottom: 8px;\n}\n\n.form ion-list ion-item:last-of-type {\n  margin-bottom: 16px !important;\n}\n\n.form h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.95rem;\n  margin-bottom: 30px;\n}\n\n.thumb_impression {\n  padding-top: 40px;\n  width: calc(100% - 64px);\n  margin: 0 auto;\n}\n\n.thumb_impression h2 {\n  color: var(--text-dark);\n  margin: 0;\n  font-size: 0.95rem;\n  margin-bottom: 30px;\n}\n\n.thumb_impression .fingerprint {\n  width: 47px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmctaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtBQUNEOztBQUVBO0VBQ0MsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0Q7O0FBQ0M7RUFDQyxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0U7RUFDQyxnQkFBQTtBQUNIOztBQUlBO0VBQ0MsaUJBQUE7QUFERDs7QUFHQztFQUNDLG1CQUFBO0FBREY7O0FBR1k7RUFDSSw4QkFBQTtBQURoQjs7QUFNQztFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFTQTtFQUNDLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FBTkQ7O0FBUUM7RUFDQyx1QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBTkY7O0FBU0M7RUFDQyxXQUFBO0VBQ0EsY0FBQTtBQVBGIiwiZmlsZSI6InNpbmctaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuXHRmb250LXNpemU6IDEuMTVyZW07XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5iYW5uZXIge1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcblx0aGVpZ2h0OiAxNjBweDtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cblx0aDIge1xuXHRcdG1hcmdpbjogMDtcblx0XHRjb2xvcjogdmFyKC0td2hpdGUpO1xuXHRcdGFsaWduLXNlbGY6IGNlbnRlcjtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRmb250LXNpemU6IDEuNnJlbTtcblx0XHRmb250LXdlaWdodDogNTAwO1xuXG5cdFx0c3BhbiB7XG5cdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdH1cblx0fVxufVxuXG4uZm9ybSB7XG5cdG1hcmdpbi10b3A6IDIwMHB4O1xuXG5cdGlvbi1saXN0IHtcblx0XHRwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICBpb24taXRlbXtcbiAgICAgICAgICAgICY6bGFzdC1vZi10eXBle1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXHR9XG5cblx0aDIge1xuXHRcdG1hcmdpbjogMDtcblx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdFx0Zm9udC1zaXplOiAuOTVyZW07XG5cdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcblx0fVxuXG59XG5cbi50aHVtYl9pbXByZXNzaW9uIHtcblx0cGFkZGluZy10b3A6IDQwcHg7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSA2NHB4KTtcblx0bWFyZ2luOiAwIGF1dG87XG5cblx0aDIge1xuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuXHRcdG1hcmdpbjogMDtcblx0XHRmb250LXNpemU6IC45NXJlbTtcblx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xuXHR9XG5cblx0LmZpbmdlcnByaW50IHtcblx0XHR3aWR0aDogNDdweDtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0fVxuXG59Il19 */";

/***/ }),

/***/ 657:
/*!******************************************************!*\
  !*** ./src/app/sing-in/sing-in.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content fullscreen>\n    <div style=\"background-color: #fff;\" class=\"banner\">\n       <div style=\"width: 100%;height:320px;padding:0 20px 0 20px;\">\n           <img style=\"width: 100%;height:100%\" src=\"assets/imgs/logo.png\">\n       </div>\n    </div>\n    <form [formGroup]=\"loginForm\" class=\"form\">\n        <ion-list lines=\"none\">\n            <ion-item class=\"animate__animated animate__fadeInUp\">\n                <ion-input formControlName=\"login\"  type=\"text\" placeholder=\"Nom d'utilisateur ou Numero\"></ion-input>\n            </ion-item>\n            <ion-item class=\"animate__animated animate__fadeInUp\">\n                <ion-input autofocus=\"true\" formControlName=\"password\" type=\"text\" placeholder=\"Mot de passe\"></ion-input>\n            </ion-item>\n            <ion-button size=\"large\" shape=\"block animate__animated animate__fadeInUp\" class=\"btn\" (click)=\"tabs()\">Connexion</ion-button>\n        </ion-list>\n    </form>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_sing-in_sing-in_module_ts.js.map
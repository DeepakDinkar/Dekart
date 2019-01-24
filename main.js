(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _card_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./card.directive */ "./src/app/card.directive.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _customPaginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./customPaginator */ "./src/app/customPaginator.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./social/social.component */ "./src/app/social/social.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/user-login/user-login.component.ts");
/* harmony import */ var _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./user-register/user-register.component */ "./src/app/user-register/user-register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































var appRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_32__["LoginComponent"] },
    {
        path: 'home',
        component: _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_34__["SidebarComponent"],
        children: [
            { path: '', redirectTo: 'main', pathMatch: 'full' },
            { path: 'main', component: _home_home_component__WEBPACK_IMPORTED_MODULE_31__["HomeComponent"], data: { page: 'main' } },
            { path: 'social', component: _social_social_component__WEBPACK_IMPORTED_MODULE_35__["SocialComponent"], data: { page: 'social' } },
            { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_28__["ChatComponent"], data: { page: 'chat' } }
        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_25__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_33__["MainComponent"],
                _card_directive__WEBPACK_IMPORTED_MODULE_26__["CardDirective"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_27__["CardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_32__["LoginComponent"],
                _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_37__["UserLoginComponent"],
                _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_38__["UserRegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_31__["HomeComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_34__["SidebarComponent"],
                _table_table_component__WEBPACK_IMPORTED_MODULE_36__["TableComponent"],
                _social_social_component__WEBPACK_IMPORTED_MODULE_35__["SocialComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_28__["ChatComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_21__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_24__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_23__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_22__["AngularFireAuthModule"]
            ],
            exports: [
                _main_main_component__WEBPACK_IMPORTED_MODULE_33__["MainComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_27__["CardComponent"],
                _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_37__["UserLoginComponent"],
                _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_38__["UserRegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_31__["HomeComponent"]
            ],
            entryComponents: [_card_card_component__WEBPACK_IMPORTED_MODULE_27__["CardComponent"]],
            providers: [
                _data_service__WEBPACK_IMPORTED_MODULE_30__["DataService"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["NativeDateAdapter"],
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorIntl"], useClass: _customPaginator__WEBPACK_IMPORTED_MODULE_29__["CustomMatPaginatorIntl"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_25__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var AuthService = /** @class */ (function () {
    function AuthService(fireBaseAuth) {
        this.fireBaseAuth = fireBaseAuth;
    }
    AuthService.prototype.signInWithFacebook = function () { };
    AuthService.prototype.signInWithTwitter = function () { };
    AuthService.prototype.signInWithInstagram = function () { };
    AuthService.prototype.signIn = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fireBaseAuth.auth
                            .signInWithEmailAndPassword(email, password)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        return [2 /*return*/, result];
                }
            });
        });
    };
    AuthService.prototype.signInWithGoogle = function () {
        this.fireBaseAuth.auth
            .signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider())
            .then(function (result) {
            console.log(result);
        });
    };
    AuthService.prototype.signUp = function (email, password) {
        this.fireBaseAuth.auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (result) {
            console.log(result);
        });
    };
    AuthService.prototype.signOut = function () {
        this.fireBaseAuth.auth.signOut();
    };
    AuthService.prototype.resetPassword = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fireBaseAuth.auth.sendPasswordResetEmail(email)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    AuthService.prototype.getLoggedUserDetails = function () {
        this.fireBaseAuth.auth.onAuthStateChanged(function (user) {
            console.log(user);
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/card.directive.ts":
/*!***********************************!*\
  !*** ./src/app/card.directive.ts ***!
  \***********************************/
/*! exports provided: CardDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDirective", function() { return CardDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardDirective = /** @class */ (function () {
    function CardDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    CardDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appCard]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], CardDirective);
    return CardDirective;
}());



/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list [gutterSize]=\"10\" [cols]=\"breakPoint\" rowHeight=\"250px\">\r\n    <mat-grid-tile colspan=\"3\" rowspan=\"1\">\r\n        <mat-card *ngFor=\"let card of data\" class=\"dashboard-card\" style=\"background: yellowgreen\">\r\n            <mat-card-header>\r\n                <mat-card-title>\r\n                    card.title\r\n                    <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\r\n                        <mat-icon class=\"more\"></mat-icon>\r\n                    </button>\r\n                    <mat-menu #menu=\"matMenu\" xPosition=\"before\">\r\n                        <button mat-menu-item class=\"nounderline font h6\">Expand</button>\r\n                        <button mat-menu-item class=\"nounderline font h6\">Remove</button>\r\n                    </mat-menu>\r\n                </mat-card-title>\r\n            </mat-card-header>\r\n            <mat-card-content class=\"dashboard-card-content\">\r\n                <div>Card Content Here Showcks</div>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </mat-grid-tile>\r\n</mat-grid-list>\r\n"

/***/ }),

/***/ "./src/app/card/card.component.scss":
/*!******************************************!*\
  !*** ./src/app/card/card.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".material-card {\n  width: inherit;\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);\n  margin: 4px; }\n\n.dashboard-card {\n  position: relative;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  padding: 0px; }\n"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../color */ "./src/app/color.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardComponent = /** @class */ (function () {
    function CardComponent(dataService) {
        this.dataService = dataService;
        this.gridByBreakpoint = {
            xl: 8,
            lg: 6,
            md: 4,
            sm: 2,
            xs: 1
        };
        this.color = new _color__WEBPACK_IMPORTED_MODULE_1__["Color"]().getRandomColor("Violet");
    }
    CardComponent.prototype.ngOnInit = function () {
        this.data = this.dataService.getData();
    };
    CardComponent.prototype.ngAfterContentInit = function () {
    };
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-card",
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/card/card.ts":
/*!******************************!*\
  !*** ./src/app/card/card.ts ***!
  \******************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
var Card = /** @class */ (function () {
    function Card(src, title, index) {
        this.src = src;
        this.title = title;
        this.index = index;
    }
    return Card;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n            <div class=\"col-lg-9 col-md-9 my-4\">\r\n                  <h1 class=\"mat-h1\">Dashboard</h1>\r\n                  <mat-grid-list class=\"mx-4\" [cols]=\"cols\" rowHeight=\"450px\" style=\"overflow: auto;\">\r\n                        <mat-grid-tile *ngFor=\"let card of cards\" [colspan]=\"1\" [rowspan]=\"1\">\r\n                              <mat-card class=\"dashboard-card\">\r\n                                    <mat-card-header class=\"accent-bg\" style=\"height:50px\">\r\n                                          <mat-card-title class=\"m-3 px-2\">\r\n                                                <h5>{{card.title}}</h5>\r\n                                          </mat-card-title>\r\n                                    </mat-card-header>\r\n                                    <mat-card-content class=\"dashboard-card-content\" style=\"height:270px;overflow: auto;background: whitesmoke\">\r\n                                          <div class=\"w-75 mx-4 my-2 p-2 rounded float-left accent-bg\">\r\n                                                <div class=\"r-cut\"></div>\r\n                                                <span>chat</span>\r\n                                          </div>\r\n                                          <div class=\"w-75 mx-4 my-2 p-2 rounded float-right\" style=\"background:white\">\r\n                                                <span>chat</span>\r\n                                                <div class=\"s-cut\"></div>\r\n                                          </div>\r\n                                          <div class=\"w-75 mx-4 my-2 p-2 rounded float-left accent-bg\">\r\n                                                <div class=\"r-cut\"></div>\r\n                                                <span>There is no Internet connection There is something wrong with the proxy server,\r\n                                                      or the address is incorrect. Try: Contacting the system admin Checking\r\n                                                      the proxy address Running Windows Network Diagnostics ERR_PROXY_CONNECTION_FAILED\r\n                                                </span>\r\n                                          </div>\r\n                                          <div class=\"w-75 mx-4 my-2 p-2 rounded float-right\" style=\"background:white\">\r\n\r\n                                                <span>\r\n                                                      DEVELOP ACROSS ALL PLATFORMS Learn one way to build applications with Angular and reuse your code and abilities to build\r\n                                                      apps for any deployment target.</span>\r\n                                                <div class=\"s-cut\"></div>\r\n                                          </div>\r\n                                          <div class=\"w-75 mx-4 my-2 p-2 rounded float-right\" style=\"background:white\">\r\n\r\n                                                <span>chat</span>\r\n                                                <div class=\"s-cut\"></div>\r\n                                          </div>\r\n                                    </mat-card-content>\r\n                                    <mat-card-footer class=\"mx-0\">\r\n                                          <mat-form-field class=\"w-75 mx-3\">\r\n                                                <mat-label>\r\n                                                      <b class=\"font text-monospace my-4\">Say something!</b>\r\n                                                </mat-label>\r\n                                                <input matInput type=\"text\">\r\n                                          </mat-form-field>\r\n                                          <button mat-mini-fab color=\"primary\">M</button>\r\n                                    </mat-card-footer>\r\n                              </mat-card>\r\n                        </mat-grid-tile>\r\n                  </mat-grid-list>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3 primary-bg d-none d-md-block\" style=\"overflow: auto;\">\r\n                  <h1 class=\"mat-h1\">Dashboard</h1>\r\n                  <mat-toolbar class=\"primary-bg\">\r\n                        <div class=\"w-100 mt-4\" style=\"text-align: center;\">Contacts</div>\r\n                  </mat-toolbar>\r\n                  <mat-nav-list>\r\n                        <a mat-list-item href=\"#\">\r\n                              <span class=\"font-white mx-4\">Contact 1</span>\r\n                              <span matBadge=\"4\" matBadgeOverlap=\"false\" matBadgeColor=\"accent\"></span>\r\n\r\n                        </a>\r\n                        <a mat-list-item href=\"#\">\r\n                              <span class=\"font-white mx-4\">Contact 2</span>\r\n                        </a>\r\n                        <a mat-list-item href=\"#\">\r\n                              <span class=\"font-white mx-4\">Contact 3</span>\r\n                              <span matBadge=\"8\" matBadgeOverlap=\"false\" matBadgeColor=\"accent\"></span>\r\n                        </a>\r\n                        <a mat-list-item href=\"#\">\r\n                              <span class=\"font-white mx-4\">Contact 4</span>\r\n                        </a>\r\n                  </mat-nav-list>\r\n            </div>\r\n      </div>\r\n</div>"

/***/ }),

/***/ "./src/app/chat/chat.component.scss":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  height: 200px; }\n\n.dashboard-card {\n  position: absolute;\n  top: 25px;\n  left: 25px;\n  right: 25px;\n  bottom: 25px;\n  padding: 0px; }\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px; }\n\n.dashboard-card-content {\n  text-align: center; }\n\n.s-cut {\n  position: relative;\n  width: 0px;\n  height: 0px;\n  float: right;\n  left: 17px;\n  top: 8px;\n  border-bottom: 4px solid white;\n  border-top: 26px solid transparent;\n  border-left: 30px solid white; }\n\n.r-cut {\n  position: relative;\n  width: 20px;\n  height: 30px;\n  float: left;\n  right: 15px;\n  bottom: 8px;\n  border-top: 4px solid #ff4081;\n  border-bottom: 25px solid transparent;\n  border-right: 19px solid #ff4081; }\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatComponent = /** @class */ (function () {
    function ChatComponent(dataService, breakpointObserver) {
        var _this = this;
        this.dataService = dataService;
        this.breakpointObserver = breakpointObserver;
        this.breakpointObserver.observe(['(min-width:550px)']).subscribe(function (result) {
            _this.cols = result.matches ? 2 : 1;
        });
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.cards = this.dataService.getData();
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/chat/chat.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/color.ts":
/*!**************************!*\
  !*** ./src/app/color.ts ***!
  \**************************/
/*! exports provided: Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
var Purple = [
    '#CE93D8',
    '#AB47BC',
    '#8E24AA',
    '#E040FB',
    '#4A148C',
    '#7B1FA2'
];
var Violet = [
    '#B39DDB',
    '#6200EA',
    '#4A148C',
    '#7C4DFF',
    '#512DA8',
    '#4527A0'
];
var Amber = [
    '#FFA000',
    '#FFAB00',
    '#FFD740',
    '#FFD54F',
    '#FFCA28',
    '#FF8F00'
];
var Color = /** @class */ (function () {
    function Color() {
        this.colorMap = new Map();
        this.colorMap
            .set('Violet', Violet)
            .set('Amber', Amber)
            .set('Purple', Purple);
    }
    Color.prototype.getRandomColor = function (color) {
        var colorArray = this.colorMap.get(color);
        return colorArray[Math.floor(colorArray.length * Math.random())];
    };
    return Color;
}());



/***/ }),

/***/ "./src/app/customPaginator.ts":
/*!************************************!*\
  !*** ./src/app/customPaginator.ts ***!
  \************************************/
/*! exports provided: CustomMatPaginatorIntl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMatPaginatorIntl", function() { return CustomMatPaginatorIntl; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CustomMatPaginatorIntl = /** @class */ (function (_super) {
    __extends(CustomMatPaginatorIntl, _super);
    function CustomMatPaginatorIntl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemsPerPageLabel = 'number of page';
        _this.nextPageLabel = 'next';
        _this.previousPageLabel = 'previous';
        _this.getRangeLabel = function (page, pageSize, length) {
            if (length === 0 || pageSize === 0) {
                return '0 od ' + length;
            }
            length = Math.max(length, 0);
            var startIndex = page * pageSize;
            // If the start index exceeds the list length, do not try and fix the end index to the end.
            var endIndex = startIndex < length
                ? Math.min(startIndex + pageSize, length)
                : startIndex + pageSize;
            return startIndex + 1 + ' - ' + endIndex + ' / ' + length;
        };
        return _this;
    }
    return CustomMatPaginatorIntl;
}(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatPaginatorIntl"]));



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card/card */ "./src/app/card/card.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService() {
        this.gridObject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.gridSize = this.gridObject.asObservable();
        this.gridObject.next(6);
    }
    DataService.prototype.getData = function () {
        return [
            new _card_card__WEBPACK_IMPORTED_MODULE_1__["Card"]('assets/images/Chrysanthemum.jpg', 'Chrysanthemum', 1),
            new _card_card__WEBPACK_IMPORTED_MODULE_1__["Card"]('assets/images/Desert.jpg', 'Desert', 2),
            new _card_card__WEBPACK_IMPORTED_MODULE_1__["Card"]('assets/images/Hydrangeas.jpg', 'Hydrangeas', 3),
            new _card_card__WEBPACK_IMPORTED_MODULE_1__["Card"]('assets/images/Jellyfish.jpg', 'Jellyfish', 4),
            new _card_card__WEBPACK_IMPORTED_MODULE_1__["Card"]('assets/images/Penguins.jpg', 'Penguins', 5)
        ];
    };
    DataService.showLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    DataService.themeEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12 my-4\">\r\n    <mat-grid-list [cols]=\"gridSize\" rowHeight=\"100px\">\r\n        <mat-grid-tile *ngFor=\"let card of cards\">\r\n            <mat-card class=\"dashboard-card\">\r\n                    <mat-card-header>\r\n                        <mat-card-title>\r\n                            {{card.title}}\r\n                            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\r\n                                <mat-icon class=\"more\"></mat-icon>\r\n                            </button>\r\n                            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\r\n                                <button mat-mini-fab class=\"expand m-1\" (click)=\"expandCard(card.id,'row')\" color=\"accent\"></button>\r\n                                <button mat-mini-fab class=\"shrink m-1\" (click)=\"shrinkCard(card.id,'row')\"></button>\r\n                                <span class=\"m-1 p-2 resize\">|</span>\r\n                                <button mat-mini-fab class=\"expand m-1\" (click)=\"expandCard(card.id,'col')\"></button>\r\n                                <button mat-mini-fab class=\"shrink m-1\" (click)=\"shrinkCard(card.id,'col')\"></button>\r\n                            </mat-menu>\r\n                        </mat-card-title>\r\n                    </mat-card-header>\r\n                <mat-card-content class=\"dashboard-card-content\">\r\n                    <div>{{ isHandset }}Card Content Here\r\n                        <!-- <img mat-card-image [src]=\"card.src\" [matTooltip]=\"card.title\"> -->\r\n                    </div>\r\n                </mat-card-content>\r\n            </mat-card>\r\n        </mat-grid-tile>\r\n    </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  background-color: #3f51b5;\n  height: 200px; }\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  padding: 0px; }\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px; }\n\n.dashboard-card-content {\n  text-align: center; }\n\n.more {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAJklEQVR4AWMYkiALjCkEoUD8H4rDBtggBMgE4dHAHg3s0cAeHAAAkrYU6TkiQdsAAAAASUVORK5CYII=\") no-repeat center; }\n\n.expand {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiBhwNKwELeFMCAAABOUlEQVQ4y53UQUpjQRAG4M8YXcxW8BpJSB4MzEL3kgu4cu0ZhJfcxJUX8AIu3L03SbyEiwGXGmiUcpGYvLTK8PwbmqaqqP7/6uras4tjhZGhEWp/1Sr/fIMDE0lkKykdbIP2Nqe+az28mKtUKBQGfuHBhcVu9ktJSKYOd+yHpmvPZdPcl4SZ3pdUe2ZC0t9yXwizJtNP6mbC4iNiIqQs+5Gj7JYklKtCJmGauZeWWYqpkBxzJjxnUq+EcJXJfxbOOkaYSzvObmP/QDLHqGuIqkFmbN8JOFF6c+th7av8MeRRON9IXX566eVG/rnw2NESXbWxwg148tvYvlOnuHPnza2ndWyBmlK4z9JMhDDJrPdC2VFjkJX1tbFvyzpY3dD64Vq3xg+ar3V70+ID/fiLrpi2GgIr/HfMvAPB0KNKOplVcQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yOFQxMzo0MzowMSswMjowMI6c+1IAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjhUMTM6NDM6MDErMDI6MDD/wUPuAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==\") no-repeat center;\n  height: 20px;\n  width: 20px;\n  background-size: 20px; }\n\n.shrink {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiBhwNKzEtoWOuAAABEElEQVQ4y53Uu20CQRAG4A8MBE6RaAMsOMmSS0A0QOSYJuA6ceQG3IKzwzyaILBEiJFWstYBZ/PW+fg3Gc3Mzv7z2Kk4Rkuip6uHqQ9TmU9XUDcRxJMTjNX3TpU/qeNFG1/mMhkSiQf3WHq2OI4+EkRBqnGkb0hzy+hQ3RFEM+2LVNtmoqCz574QzQ6ZnmU3Ey1+PSaicCX6/pUgGu8KGUSpIqSioEVftDlJ9RIaNqJ+VQ9zofBCMEevpovsgOvA3YHbtzfLXM486bISDXNV0/as01vN3DoUraqFVE5QMzWQeAVrjxcorXM5wZSx6P1fwd93nShZ1hsaV3o0bhi+0uNNiQ908xfdMS21BHYoXDM/kCGV974GqYsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDYtMjhUMTM6NDM6NDkrMDI6MDA5ObvPAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA2LTI4VDEzOjQzOjQ5KzAyOjAwSGQDcwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=\") no-repeat center;\n  height: 20px;\n  width: 20px;\n  background-size: 20px; }\n\n.resize {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiBhwNMDtkQkEqAAAAgklEQVQ4y+3UsQ6CMBAG4C/GhIGhjn0D+v47EwuP4CMwurCR1IGYoCi2s97a/7smzV15V0GvFxRWMMqysYw84oWk2cRX0hyDzvIEFt23O6JkkGWDJL4en3dgMpnB7Lrvdyp9uj/4NbCfpeiiBa3kZjpuUD3e1QtUvaJbUhhfycdv5g4Lj0B/GVuYiQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yOFQxMzo0ODo1OSswMjowMA1zQKYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjhUMTM6NDg6NTkrMDI6MDB8LvgaAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==\") no-repeat center;\n  height: 20px;\n  width: 20px;\n  background-size: 20px; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card.directive */ "./src/app/card.directive.ts");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color */ "./src/app/color.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(componentFactoryResolver, dataService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.dataService = dataService;
        this.color = new _color__WEBPACK_IMPORTED_MODULE_2__["Color"]();
        this.width = window.innerWidth;
        this.gridSize = 6;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.dataService.gridObject.subscribe(this.getGridSize.bind(this));
        // this.getData();
    };
    HomeComponent.prototype.ngAfterContentInit = function () {
        this.cards = [
            {
                id: 1,
                title: "Card 1",
                cols: this.getSize(),
                rows: this.getSize(),
                src: "assets/images/Chrysanthemum.jpg"
            },
            {
                id: 2,
                title: "Card 2",
                cols: this.getSize(),
                rows: this.getSize(),
                src: "assets/images/Chrysanthemum.jpg"
            },
            {
                id: 3,
                title: "Card 3",
                cols: this.getSize(),
                rows: this.getSize(),
                src: "assets/images/Chrysanthemum.jpg"
            },
            {
                id: 4,
                title: "Card 4",
                cols: this.getSize(),
                rows: this.getSize(),
                src: "assets/images/Chrysanthemum.jpg"
            },
            {
                id: 5,
                title: "Card 2",
                cols: this.getSize(),
                rows: this.getSize(),
                src: "assets/images/Chrysanthemum.jpg"
            },
            {
                id: 6,
                title: "Card 3",
                cols: this.getSize(),
                rows: this.getSize(),
                src: "assets/images/Chrysanthemum.jpg"
            },
            {
                id: 7,
                title: "Card 4",
                cols: this.getSize(),
                rows: this.getSize(),
                src: "assets/images/Chrysanthemum.jpg"
            }
        ];
    };
    HomeComponent.prototype.getGridSize = function (size) {
        this.gridSize = size;
    };
    HomeComponent.prototype.getSize = function () {
        return Math.floor(Math.random() * (this.gridSize - 1) + 1);
    };
    HomeComponent.prototype.getData = function () {
        this.addCard = this.dataService.getData();
        this.loadComponent();
    };
    HomeComponent.prototype.loadComponent = function () {
        // for (const card of this.addCard) {
        //   const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        //     card.component
        //   );
        //   const viewContainerRef = this.card.viewContainerRef;
        //   // viewContainerRef.clear(); [loads only one component]
        //   const componentRef = viewContainerRef.createComponent(componentFactory);
        //   // (<CardComponent>componentRef.instance).data = card;
        // }
    };
    HomeComponent.prototype.expandCard = function (id, value) {
        var index = this.cards.findIndex(function (card) { return card.id === id; });
        if (value === "col") {
            if (this.cards[index].cols < this.gridSize) {
                this.cards[index].cols = this.cards[index].cols + 1;
            }
        }
        else {
            if (this.cards[index].rows < this.gridSize) {
                this.cards[index].rows = this.cards[index].rows + 1;
            }
        }
    };
    HomeComponent.prototype.shrinkCard = function (id, value) {
        var index = this.cards.findIndex(function (card) { return card.id === id; });
        if (value === "col") {
            if (this.cards[index].cols > 1) {
                this.cards[index].cols = this.cards[index].cols - 1;
            }
        }
        else {
            if (this.cards[index].rows > 1) {
                this.cards[index].rows = this.cards[index].rows - 1;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_card_directive__WEBPACK_IMPORTED_MODULE_1__["CardDirective"]),
        __metadata("design:type", _card_directive__WEBPACK_IMPORTED_MODULE_1__["CardDirective"])
    ], HomeComponent.prototype, "card", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class]=\"theme\">\r\n    <mat-progress-bar mode=\"buffer\"></mat-progress-bar>\r\n    <div class=\"login-background\">\r\n        <div class=\"container-fluid\" [@flyInOut]=\"'enter'\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xl-8 col-lg-7 d-md-none d-lg-block d-sm-none\">\r\n                    <div class=\"m-2\">\r\n                        <span class=\"brand-text\">Dekart<i class=\"fab fa-phoenix-framework\"></i><br></span>\r\n                        <span class=\"quote-text\">STAY HOME AND SHOP ONLINE.<br></span>\r\n                        <span>YOU'RE TOO PRETTY TO HAVE TO LOOK FOR A PARKING SPOT</span>\r\n                        <div class=\"row brand-highlight\">\r\n                            <div class=\"col-sm\">\r\n                                <i class=\"fas fa-tshirt\"></i>\r\n                                <br><span class=\"brand-font\">Fashion</span>\r\n                              </div>\r\n                              <div class=\"col-sm\">\r\n                                <i class=\"fas fa-desktop\"></i>\r\n                                <br><span class=\"brand-font\">Electronics</span>\r\n                              </div>\r\n                              <div class=\"col-sm\">\r\n                                <i class=\"fas fa-shoe-prints\"></i>\r\n                                <br><span class=\"brand-font\">Footwear</span>\r\n                              </div>\r\n                              <div class=\"col-sm\">\r\n                                <i class=\"fas fa-shopping-basket\"></i>\r\n                                <br><span class=\"brand-font\">Grocery</span>\r\n                              </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col d-lg-none d-xl-none d-md-block brand-text\">\r\n                        <i class=\"fab fa-phoenix-framework\"></i>\r\n                </div>\r\n                <div class=\"col-xl-4 col-lg-4 offset-xl-0 offset-lg-0 offset-md-3 col-md-7 offset-sm-2 col-sm-8 loginwrap\">\r\n                    <div class=\"row\">\r\n                        <div>&nbsp;</div>\r\n                        <app-user-login *ngIf=\"showLogin\"></app-user-login>\r\n                        <app-user-register\r\n                            *ngIf=\"!showLogin\"\r\n                        ></app-user-register>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-background {\n  overflow: auto;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: url('background.jpg') no-repeat center;\n  color: white; }\n\n.login-content {\n  color: #f8f9fa; }\n\n.loginwrap {\n  min-width: 350px; }\n\n.brand-text {\n  font-size: 130px; }\n\n.quote-text {\n  font-size: 40px; }\n\n.fa-phoenix-framework {\n  position: relative;\n  top: 20px; }\n\n.brand-highlight {\n  font-size: 50px;\n  margin: 40px 0; }\n\n.brand-font {\n  font-size: 17px;\n  position: relative;\n  bottom: 40px; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.theme = 'indigo';
        this.loadProgress = false;
        this.showLogin = true;
        _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"].showLogin.subscribe(this.show.bind(this));
        _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"].themeEmitter.subscribe(this.changeTheme.bind(this));
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.show = function (showLogin) {
        this.showLogin = showLogin;
    };
    LoginComponent.prototype.changeTheme = function (theme) {
        this.theme = theme;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1000)])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-xl bg-light fixed-top shadow-lg\">\r\n    <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n    <div class=\"float-right\">\r\n        <a mat-button class=\"font nounderline\" color=\"primary\">Home</a>\r\n        <a mat-button class=\"font nounderline\" color=\"accent\">Chats</a>\r\n        <a mat-button class=\"font nounderline\" color=\"warn\">Social</a>\r\n        <a mat-button class=\"font nounderline\" color=\"foreground\">About</a>\r\n    </div>\r\n</nav>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6 col-mat-6 col-sm-1 offset-lg-3\">\r\n            <div class=\"row\">\r\n                <mat-grid-list cols=\"2\">\r\n                </mat-grid-list>\r\n            </div>\r\n            <div class=\"row\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-main",
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        })
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class]=\"theme\">\r\n    <div class=\"container-fluid p-0 box-shadow\">\r\n        <div class=\"row\">\r\n            <mat-toolbar color=\"primary\">\r\n                <button\r\n                    class=\"mx-3 menu-bar\"\r\n                    type=\"button\"\r\n                    aria-label=\"Toggle sidenav\"\r\n                    mat-icon-button\r\n                    (click)=\"drawer.toggle()\"\r\n                ></button>\r\n                <div class=\"w-100 mx-4\">\r\n                    <div\r\n                        class=\"float-right font h2 mx-3 main-logo\"\r\n                        matTooltip=\"Coming Soon\"\r\n                    ></div>\r\n                    <div class=\"h3 font float-right d-none d-sm-block\">\r\n                        <button\r\n                            mat-button\r\n                            class=\"font font-weight-bold\"\r\n                            [ngClass]=\"{ 'accent-bg': 'main' === active }\"\r\n                            (click)=\"route('main')\"\r\n                        >\r\n                            Home\r\n                        </button>\r\n                        <button\r\n                            mat-button\r\n                            class=\"font font-weight-bold\"\r\n                            [ngClass]=\"{ 'accent-bg': 'chat' === active }\"\r\n                            (click)=\"route('chat')\"\r\n                        >\r\n                            Chats\r\n                        </button>\r\n                        <button\r\n                            mat-button\r\n                            class=\"font font-weight-bold\"\r\n                            [ngClass]=\"{ 'accent-bg': 'social' === active }\"\r\n                            (click)=\"route('social')\"\r\n                        >\r\n                            Social\r\n                        </button>\r\n                        <button mat-button class=\"font font-weight-bold\">\r\n                            About\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </mat-toolbar>\r\n        </div>\r\n    </div>\r\n    <div>\r\n        <mat-sidenav-container class=\"sidenav-container\">\r\n            <mat-sidenav\r\n                #drawer\r\n                class=\"sidenav primary\"\r\n                fixedInViewport=\"true\"\r\n                [mode]=\"'side'\"\r\n            >\r\n                <mat-toolbar\r\n                    color=\"accent\"\r\n                    class=\"menu\"\r\n                    style=\"align-items: baseline !important;height:230px\"\r\n                >\r\n                    <div\r\n                        class=\"w-50 rounded-circle bg-light pull-left my-3\"\r\n                        style=\"height:60% !important;margin-left: 25%\"\r\n                    >\r\n                        <img\r\n                            class=\"img-fluid rounded-circle w-100 h-100\"\r\n                            src=\"../../assets/hints/profile.jpg\"\r\n                        />\r\n                        <div class=\"pull-right m-2\">\r\n                            Scarelett Johnson <br />\r\n                            <span\r\n                                style=\"font-size:13px; bottom: 12px\"\r\n                                class=\"position-relative b-4\"\r\n                                >scarelett.john90@gmail.com</span\r\n                            >\r\n                        </div>\r\n                    </div>\r\n                </mat-toolbar>\r\n                <mat-expansion-panel>\r\n                    <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                            <img\r\n                                src=\"../../assets/icons/dashboard_black_medium.png\"\r\n                            />\r\n                        </mat-panel-title>\r\n                        <mat-panel-description>\r\n                            Dashboard\r\n                        </mat-panel-description>\r\n                    </mat-expansion-panel-header>\r\n                    <mat-slider\r\n                        color=\"primary\"\r\n                        thumbLabel=\"true\"\r\n                        min=\"4\"\r\n                        max=\"10\"\r\n                        [value]=\"gridSize\"\r\n                        (input)=\"changeGridSize($event)\"\r\n                    >\r\n                    </mat-slider>\r\n                    <span class=\"float-right m-3 font-weight-bold rounded\"\r\n                        >Grid Size</span\r\n                    >\r\n                    <mat-toolbar>\r\n                        <button\r\n                            mat-mini-fab\r\n                            class=\"mx-1\"\r\n                            style=\"background: #0277BD;\"\r\n                            (click)=\"changeTheme('indigo')\"\r\n                        ></button>\r\n                        <button\r\n                            mat-mini-fab\r\n                            class=\"mx-2\"\r\n                            style=\"background: #43A047;\"\r\n                            (click)=\"changeTheme('green')\"\r\n                        ></button>\r\n                        <button\r\n                            mat-mini-fab\r\n                            class=\"mx-2\"\r\n                            style=\"background: #F44336;\"\r\n                            (click)=\"changeTheme('red')\"\r\n                        ></button>\r\n                        <button\r\n                            mat-mini-fab\r\n                            class=\"mx-1\"\r\n                            style=\"background: #FFA726;\"\r\n                            (click)=\"changeTheme('orange')\"\r\n                        ></button>\r\n                    </mat-toolbar>\r\n                </mat-expansion-panel>\r\n                <mat-nav-list>\r\n                    <a mat-list-item href=\"#\">\r\n                        <span class=\"font-white mx-4\"\r\n                            >Link 1{{ isHandset | async }}</span\r\n                        >\r\n                    </a>\r\n                    <a mat-list-item href=\"#\">\r\n                        <span class=\"font-white mx-4\">Link 2</span>\r\n                    </a>\r\n                    <a mat-list-item href=\"#\">\r\n                        <span class=\"font-white mx-4\">Link 3</span>\r\n                    </a>\r\n                    <a mat-list-item href=\"#\">\r\n                        <span class=\"font-white mx-4\">Link 4</span>\r\n                    </a>\r\n                </mat-nav-list>\r\n                <mat-list style=\"position: relative;top:20%;\">\r\n                    <div\r\n                        class=\"mx-4\"\r\n                        style=\"background: whitesmoke;box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);\"\r\n                    >\r\n                        <mat-list-item>\r\n                            <div class=\"w-100\">\r\n                                <img\r\n                                    src=\"../../assets/icons/facebook-logo.png\"\r\n                                />\r\n                                <span\r\n                                    class=\"font-weight-bold mx-3\"\r\n                                    style=\"font-size: 13px\"\r\n                                    >Facebook</span\r\n                                >\r\n                                <img\r\n                                    src=\"../../assets/icons/twitter-logo.png\"\r\n                                />\r\n                                <span\r\n                                    class=\" font-weight-bold mx-3\"\r\n                                    style=\"font-size: 13px\"\r\n                                    >Twitter</span\r\n                                >\r\n                            </div>\r\n                        </mat-list-item>\r\n                        <mat-list-item>\r\n                            <div class=\"w-100 \">\r\n                                <img\r\n                                    src=\"../../assets/icons/linkedin-logo.png\"\r\n                                />\r\n                                <span\r\n                                    class=\"font-weight-bold mx-3\"\r\n                                    style=\"font-size: 13px\"\r\n                                    >LinkedIn</span\r\n                                >\r\n                                <img\r\n                                    src=\"../../assets/icons/google-plus-logo.png\"\r\n                                />\r\n                                <span\r\n                                    class=\"font-weight-bold mx-3\"\r\n                                    style=\"font-size: 13px\"\r\n                                    >Google+</span\r\n                                >\r\n                            </div>\r\n                        </mat-list-item>\r\n                        <mat-list-item>\r\n                            <div class=\"w-100 \">\r\n                                <img\r\n                                    src=\"../../assets/icons/instagram-logo.png\"\r\n                                />\r\n                                <span\r\n                                    class=\"font-weight-bold mx-3\"\r\n                                    style=\"font-size: 13px\"\r\n                                    >Instagram</span\r\n                                >\r\n                            </div>\r\n                        </mat-list-item>\r\n                    </div>\r\n                </mat-list>\r\n            </mat-sidenav>\r\n            <mat-sidenav-content>\r\n                <div class=\"main\" [@flyInOut]=\"getPage(appOutlet)\">\r\n                    <router-outlet #appOutlet=\"outlet\"></router-outlet>\r\n                </div>\r\n                <div>\r\n                    <mat-select>\r\n                        <mat-form-field>\r\n                            <input matInput type=\"text\" />\r\n                        </mat-form-field>\r\n                        <mat-option value=\"1\">1</mat-option>\r\n                        <mat-option value=\"2\">2</mat-option>\r\n                        <mat-option value=\"3\">3</mat-option>\r\n                        <mat-option value=\"4\">4</mat-option>\r\n                    </mat-select>\r\n                </div>\r\n            </mat-sidenav-content>\r\n        </mat-sidenav-container>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  width: 300px;\n  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24); }\n\n.box-shadow {\n  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);\n  z-index: 1; }\n\n.menu-bar {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAPFBMVEUAAAD////9+fn9+fn7+fn8+Pj8+fn8+vr////9+fn8+fn9+fn////8+Pj8+fn8+Pj8+fn8+fn8+fkAAACexR9KAAAAEnRSTlMAE3/S15flkhB3ys8JSlBM7snWkeyDAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB+IGGwowF84CA/UAAABVSURBVCjPrdJLEsAgCAPQqPVbrZ/7H7YHINn5tpkBBgAU58NjBO8QDxWReJCQeZBRanuNVgtu6uMzRgfmYkOtic3H3TqQpWTzi+QS5drloeRp5TMoP9ywFTWhj4cxAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA2LTI3VDEwOjQ4OjIzKzAyOjAwkOYdBQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNi0yN1QxMDo0ODoyMyswMjowMOG7pbkAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC\") no-repeat center;\n  background-size: 17px; }\n\n.main-logo {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACRlBMVEUAAAD////8/Pz9/Pz+/Pz9/f39/Pz9/Pz////9/f3+/Pz9/Pz////8/Pz9/Pz/+vr9/f39/f38/Pz9/Pz8/Pz9/Pz9/Pz+/Pz9/Pz////9/Pz////9+/v9/Pz9/f3////9/Pz9/f39/Pz9/Pz9/f3////9/Pz9/Pz////////////8/Pz/+/v9/Pz9+/v////////9/Pz////9/f3////////9/f38/Pz9/f3+/Pz9/Pz8/Pz9/Pz8/Pz////////9+/v9/f37+/v/+/v+/Pz9+/v8/Pz9/f3/+fn/+fn9/Pz9/Pz9+/v+/Pz/+vr9+/v9/Pz////9+/v9/Pz9+/v9/f3////9/Pz9+/v9/f37+/v8/Pz9/Pz9/f37+/v8/Pz9+/v+/Pz/+vr8/Pz9/f38/Pz9/Pz////////9/Pz9/f39/Pz////8/Pz8/Pz9/f3////8/Pz////9/f39/Pz9+/v9/Pz9/Pz/+vr/+vr9/f39/Pz////7+/v/+/v9/f3+/Pz7+/v/////////+vr+/Pz9+/v8/Pz8/Pz9/Pz////////9+/v8/Pz8/Pz8/Pz9/f3/+vr9/Pz8/Pz/+fn9/Pz////8/Pz9/f39/Pz8/Pz9/Pz9/Pz7+/v9/Pz8/Pz8/Pz9/Pz8/Pz9/Pz9/Pz9/Pz////8/Pz+/Pz9/Pz+/Pz9/Pz9+/v8/Pz9/Pz9/Pz////+/Pz////9+/v/+vr/+vr9+/v+/Pz9/f3/+/v9+/v+/Pz+/Pz////8/Pz8/Pz9/PwAAAB+ZkkMAAAAwHRSTlMAEV2duNHq/gZmu/sBWt8yzdPA+Fn27r/sDuACh+d1DZpyk+hoB+XzCCMQyz/62BwpowrPFShtynys3FbyXCISjtBIOb6KWNIuLfH82a82j90DgOOCbBf32nFGVfB3QE2FvTfGfsj9HQ/teqATYEtzGmMq1OGDnvQ0M26mCUI+f7BECwU4rotMT+YmHtdOxFLMNfVKK+QbZXioU9veReJUx+lb+aehFMmz77Sb1WKikhi3DIQvMIy8dDyBtbkkXl8cgfhXAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB+IGGwsCJwRpDR8AAASySURBVFjDzVf5V1NXEB5QwMguBAj7ThJD1BDFRAQENMoiiaAgEhRZBAmohEWh1ZpK69rW1tparW1paze72U273j+tM/dtWUke5/Sczg95882bb7jvzty5A8D/UOLiN2xMSExiAZKUmLBxQ3xcdPYmzeZkFlGSN2s2rUlPSU1jUSQtNSUyPz1DcczcQpLFWBZXMpU3GemR+Nla7pCTiz95Om7KZyyfK7o8NObmcAdtdlh6QSF/W1RcUoqPMggMAGVoLC0pLuJOhQVhApTTm4rKKoBqxmr0wQH0NYxVA1RVVpBfeShfQ/Z8A2pGVLZCcADYimYjPg355KkJ5ptq0WreRup21HaEBtiB5u2kbDOjVmsK5Ftw2azOyvWdqO4S7fWM1YvqLjTv5Jq1DtVqS0CA3ZRhowhszC6pe7TaPaJqtDObpFK17PbnWxvQsleGjcomNzUpaWqU1b3o3mD1C9CMhn3hUhNBCvYhoVnBKZTdltj5AC1UMUpNtyJsU8MHaENKq4z2IzqgLsABpOyXkQPRQXUBDiHFIaN2xjqq1AWo6mCsXQIWjNapjg/QiSSplgyod6kN0IUkg6gfRr1bbYBuJB0W9RL8HqdLHd/lxH0rkRAeGeYsPKJCCpEvHzMw9UTrpOGlRzzSvUnr4+Nl0Uv8o+ulkxwFONaHz/7jAycGKaR7SJGTRZJb0Uk/s5sWPHhi4Hg/PvuOwSl8DFNFnKYIg6flfdaNEHd0lH5HdLJZcbMMo3YKxhgbPxP0imRijAlth5oVG5sI4QOcGccXMIm9NMxLI6WWnSX1LGn1xjB/BLvrJPVdc+jymjKI5RbMbtIzmkI/00w9e0r+BD8HD/VdViyZiwnVeYL59AlTMC1tol+EmQRinFMK9xzhhJlAPt/EaTjfLqTRJIhbriqbX+qGbHLtuEVHIY3t5wEG1hgooknyAC3lwvoDXODfMpu1Xn7WLN8LL+lztnk1x3neNkcsL+3+AiqLlWobEkDlIhIXAC7io/aSej7AJZoILsISC7poYxc6JUuwjL8eeOnl3q7Ry/LdoB+68sr8VZ8EX73mXnntdenKh4L0spXy6zrwIHUZnFTPB2/wXU27KXiIMO+aAG/d5lB7R4BxbwgpeBNwTHACTgZvmQbFvCTeJQ8Zvv0OwXvvirCDp/2+V4Lv4djUAHjTL2rlzNZcBbiu1EUyDh2tOUri3we4OadA3MU6eCAyP/C18Bb28BEviw8nTHR5sce36XDkfBR392OCnzjwDmF909bVTwXeZ3xUQPkcF9f4UArtuI/wyRcSfHyPCu5LCX51GaH4h1sgRdihKfo8q0jJFRqY5WsBZvLpD1zfCLCHwlEfQenEKWU2lwaep9zH9+13c48W4qV0urJL+6uXNVI/hDvfOxJXln7g+lMkjfwozH1gx670TF0RPRv3a4W8tc+oCzCDlJ9k9DMiu0UN34KLZr8omKbfcjUBaLS3+2GauZJWY+evUnGk+lt+pZw88MRG9/AaaA6wuX4jW8XzF75obN+L5/xfjuGgkcZjFk+Id8ua4u0Q/MxPgiPrf+9T0U2P6MMszvBHrPw//4rwfYf+bm6bXJs72db9j8qp+L+WfwHr0FeQcVBKUwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yN1QxMTowMjozOSswMjowMIJReBsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjdUMTE6MDI6MzkrMDI6MDDzDMCnAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==\") no-repeat center;\n  background-size: 35px;\n  height: 40px;\n  width: 35px; }\n\n.facebook {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUVBMVEUAAABAdttDct9Cct9Cct9Dcd9Ccd5Ccd9Cct9Bct9JbdtBct9CcuBJbdtDcuBDcOBAgL9Cct9AcN9DdN5Cc99Cct9Cct9Bb95Cct5Cct8AAABPysqvAAAAGXRSTlMAHJ335JlsaMKoDpjTB2s5BMkwLuzV0CeEy+DJywAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiBhoTKRf+SVV3AAAAc0lEQVQoz83S3QqAIAwF4KNWVus/m/n+L5pQXawSgm46V8NvA8VBaRNuMVpBh8doXPqzvLC2jDOQ51WNGIqVhKbFM3RIQA8M415KmIA5JGC6gyNSgCKiRQLjDH0Fw+wBz8zu5a3+BOJrV2vX41HpZUitzwY1lS2L+xDLNgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNlQxOTo0MToyMyswMjowMEUOrbYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjZUMTk6NDE6MjMrMDI6MDA0UxUKAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==\") no-repeat center; }\n\n.mat-sidenav-fixed {\n  position: absolute !important; }\n\n.main {\n  height: 100vh;\n  overflow: auto; }\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(dataService, router, breakpointObserver, authService) {
        this.dataService = dataService;
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.theme = "indigo";
        this.active = "main";
        this.gridSize = 6;
    }
    SidebarComponent.prototype.changeGridSize = function (event) {
        this.gridSize = event.value;
        this.dataService.gridObject.next(this.gridSize);
    };
    SidebarComponent.prototype.changeTheme = function (theme) {
        this.theme = theme;
        _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"].themeEmitter.emit(theme);
    };
    SidebarComponent.prototype.route = function (routeTo) {
        this.active = routeTo;
        this.router.navigate(["/home/" + routeTo]);
    };
    SidebarComponent.prototype.getPage = function (outlet) { };
    SidebarComponent.prototype.ngOnInit = function () {
        this.authService.getLoggedUserDetails();
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "sidebar",
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("flyInOut", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1000)])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"],
            _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/social/social.component.html":
/*!**********************************************!*\
  !*** ./src/app/social/social.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  social works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/social/social.component.scss":
/*!**********************************************!*\
  !*** ./src/app/social/social.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/social/social.component.ts":
/*!********************************************!*\
  !*** ./src/app/social/social.component.ts ***!
  \********************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialComponent = /** @class */ (function () {
    function SocialComponent() {
    }
    SocialComponent.prototype.ngOnInit = function () {
    };
    SocialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social',
            template: __webpack_require__(/*! ./social.component.html */ "./src/app/social/social.component.html"),
            styles: [__webpack_require__(/*! ./social.component.scss */ "./src/app/social/social.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "./src/app/table/table-datasource.ts":
/*!*******************************************!*\
  !*** ./src/app/table/table-datasource.ts ***!
  \*******************************************/
/*! exports provided: TableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDataSource", function() { return TableDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



// TODO: replace this with real data from your application
var EXAMPLE_DATA = [
    {
        id: 1,
        status: 'active',
        name: 'Hydrogen',
        seats: 15,
        trunks: 20,
        DID: 2738907,
        location: 'newyork',
        edit: 'edit customer',
        delete: 'delete'
    },
    {
        id: 2,
        status: 'active',
        name: '',
        seats: null,
        trunks: 20,
        DID: 2738907,
        location: '',
        edit: 'edit customer',
        delete: 'delete'
    },
    {
        id: 3,
        status: 'active',
        name: 'Lithium',
        seats: 15,
        trunks: null,
        DID: 2738907,
        location: 'newyork',
        edit: 'edit customer',
        delete: 'delete'
    },
    {
        id: 4,
        status: '',
        name: 'Beryllium',
        seats: 15,
        trunks: 20,
        DID: 2738907,
        location: 'newyork',
        edit: 'edit customer',
        delete: 'delete'
    },
    {
        id: 5,
        status: '',
        name: 'Boron',
        seats: 15,
        trunks: 20,
        DID: 2738907,
        location: 'newyork',
        edit: 'edit customer',
        delete: 'delete'
    },
    {
        id: 6,
        status: 'active',
        name: 'Carbon',
        seats: 15,
        trunks: 20,
        DID: 2738907,
        location: 'newyork',
        edit: 'edit customer',
        delete: 'delete'
    },
    {
        id: 7,
        status: 'active',
        name: 'Nitrogen',
        seats: 15,
        trunks: 20,
        DID: 2738907,
        location: 'newyork',
        edit: 'edit customer',
        delete: 'delete'
    },
    {
        id: 8,
        status: '',
        name: '',
        seats: 15,
        trunks: 20,
        DID: 2738907,
        location: 'newyork',
        edit: 'edit customer',
        delete: 'delete'
    },
    {
        id: 9,
        status: 'active',
        name: 'Fluorine',
        seats: 15,
        trunks: 20,
        DID: 2738907,
        location: '',
        edit: 'edit customer',
        delete: 'delete'
    },
    {
        id: 10,
        status: 'active',
        name: 'Neon',
        seats: 15,
        trunks: 20,
        DID: null,
        location: 'newyork',
        edit: 'edit customer',
        delete: 'delete'
    },
    {
        id: 11,
        status: 'active',
        name: 'Sodium',
        seats: 15,
        trunks: 20,
        DID: 2738907,
        location: 'newyork',
        edit: 'edit customer',
        delete: 'delete'
    },
    {
        id: 12,
        status: 'active',
        name: 'Magnesium',
        seats: 15,
        trunks: 20,
        DID: 2738907,
        location: 'newyork',
        edit: 'edit customer',
        delete: 'delete'
    },
    {
        id: 13,
        status: 'active',
        name: 'Aluminum',
        seats: 15,
        trunks: 20,
        DID: 2738907,
        location: 'newyork',
        edit: 'edit customer',
        delete: 'delete'
    },
    {
        id: 14,
        status: 'active',
        name: 'Silicon',
        seats: 15,
        trunks: 20,
        DID: 2738907,
        location: 'newyork',
        edit: 'edit customer',
        delete: 'delete'
    },
    {
        id: 15,
        status: 'active',
        name: 'Phosphorus',
        seats: 15,
        trunks: 20,
        DID: 2738907,
        location: 'newyork',
        edit: 'edit customer',
        delete: 'delete'
    },
    {
        id: 16,
        status: 'active',
        name: 'Sulfur',
        seats: 15,
        trunks: 20,
        DID: 2738907,
        location: 'newyork',
        edit: 'edit customer',
        delete: 'delete'
    },
    {
        id: 17,
        status: 'active',
        name: 'Chlorine',
        seats: 15,
        trunks: 20,
        DID: 2738907,
        location: 'newyork',
        edit: 'edit customer',
        delete: 'delete'
    },
    {
        id: 18,
        status: 'active',
        name: 'Argon',
        seats: 15,
        trunks: 20,
        DID: 2738907,
        location: 'newyork',
        edit: 'edit customer',
        delete: 'delete'
    },
    {
        id: 19,
        status: 'active',
        name: 'Potassium',
        seats: 15,
        trunks: 20,
        DID: 2738907,
        location: 'newyork',
        edit: 'edit customer',
        delete: 'delete'
    },
    {
        id: 20,
        status: 'active',
        name: 'Calcium',
        seats: 15,
        trunks: 20,
        DID: 239823,
        location: 'japan',
        edit: 'edit customer',
        delete: 'delete'
    }
];
/**
 * Data source for the Table view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var TableDataSource = /** @class */ (function (_super) {
    __extends(TableDataSource, _super);
    function TableDataSource(paginator, sort) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this.sort = sort;
        _this.data = EXAMPLE_DATA;
        return _this;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    TableDataSource.prototype.connect = function () {
        var _this = this;
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        // Set the paginators length
        this.paginator.length = this.data.length;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(_this.data.slice()));
        }));
    };
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    TableDataSource.prototype.disconnect = function () { };
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    TableDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    TableDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'id':
                    return compare(+a.id, +b.id, isAsc);
                case 'status':
                    return compare(a.status, b.status, isAsc);
                case 'name':
                    return compare(a.name, b.name, isAsc);
                case 'seats':
                    return compare(+a.seats, +b.seats, isAsc);
                case 'trunks':
                    return compare(+a.trunks, +b.trunks, isAsc);
                case 'DID':
                    return compare(+a.DID, +b.DID, isAsc);
                case 'location':
                    return compare(a.location, b.location, isAsc);
                case 'edit':
                    return compare(a.edit, b.edit, isAsc);
                case 'delete':
                    return compare(a.delete, b.delete, isAsc);
                default:
                    return 0;
            }
        });
    };
    return TableDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"]));

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/table/table.component.html":
/*!********************************************!*\
  !*** ./src/app/table/table.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\r\n    <mat-paginator #paginator [length]=\"dataSource.data.length\" [pageIndex]=\"0\" [pageSize]=\"10\" [showFirstLastButtons]=\"true\">\r\n    </mat-paginator>\r\n    <mat-table #table [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\r\n\r\n        <!-- Id Column -->\r\n        <ng-container matColumnDef=\"id\">\r\n            <mat-header-cell *matHeaderCellDef>\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Id\">\r\n                        <mat-option value=\"1\">1</mat-option>\r\n                        <mat-option value=\"2\">2</mat-option>\r\n                        <mat-option value=\"3\">3</mat-option>\r\n                        <mat-option value=\"4\">4</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\">{{row.id}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"status\">\r\n            <mat-header-cell *matHeaderCellDef>Status\r\n            </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\">{{row.status}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"name\">\r\n            <mat-header-cell *matHeaderCellDef>Name\r\n            </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\">\r\n                <a href=\"#\">\r\n                    <u>{{row.name}}</u>\r\n                </a>\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"seats\">\r\n            <mat-header-cell *matHeaderCellDef>Seats</mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\">{{row.seats}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"trunks\">\r\n            <mat-header-cell *matHeaderCellDef>Trunks</mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\">{{row.trunks}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"DID\">\r\n            <mat-header-cell *matHeaderCellDef>DID</mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\">{{row.DID}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"location\">\r\n            <mat-header-cell *matHeaderCellDef>Location</mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\">{{row.location}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"edit\">\r\n            <mat-header-cell *matHeaderCellDef>Edit</mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\">\r\n                <a href=\"\">\r\n                    <u>{{row.edit}}</u>\r\n                </a>\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"delete\">\r\n            <mat-header-cell *matHeaderCellDef>Delete</mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\">\r\n                <button type=\"button\" class=\"close mx-4\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n    </mat-table>\r\n</div>"

/***/ }),

/***/ "./src/app/table/table.component.scss":
/*!********************************************!*\
  !*** ./src/app/table/table.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/table/table.component.ts":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _table_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-datasource */ "./src/app/table/table-datasource.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableComponent = /** @class */ (function () {
    function TableComponent() {
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'status', 'name', 'seats', 'trunks', 'DID', 'location', 'edit', 'delete'];
    }
    TableComponent.prototype.ngOnInit = function () {
        this.dataSource = new _table_datasource__WEBPACK_IMPORTED_MODULE_2__["TableDataSource"](this.paginator, this.sort);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], TableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], TableComponent.prototype, "sort", void 0);
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/table/table.component.scss")]
        })
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/user-login/user-login.component.html":
/*!******************************************************!*\
  !*** ./src/app/user-login/user-login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login w-75 bg-light pull-right d-flex mx-4\" [formGroup]=\"loginGroup\">\r\n    <div class=\"login-header pb-2\">\r\n        <span class=\"float-right forget-pwd accent\" (click)=\"register()\">Register</span>\r\n        <h3><b style=\"color:#fbc02d\">Login</b></h3>\r\n    </div>\r\n    <mat-form-field appearance=\"outline\">\r\n        <mat-label>\r\n            <b class=\"font text-monospace my-4\">EMAIL</b>\r\n        </mat-label>\r\n        <input matInput type=\"text\" required formControlName=\"email\"/>\r\n        <mat-error *ngIf=\"loginGroup.get('email').hasError('required')\">\r\n            * Email is <strong>required</strong>\r\n        </mat-error>\r\n        <mat-error *ngIf=\"loginGroup.get('email').hasError('email') \">\r\n            * Invalid email\r\n        </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field appearance=\"outline\">\r\n        <mat-label>\r\n            <b class=\"font text-monospace my-4\">PASSWORD</b>\r\n        </mat-label>\r\n        <input matInput type=\"password\" formControlName=\"passWord\" required />\r\n        <mat-error *ngIf=\"loginGroup.get('passWord').hasError('required')\">\r\n            * Password is <strong>required</strong>\r\n        </mat-error>\r\n    </mat-form-field>\r\n    <div class=\"mt-2 position-relative\">\r\n        <button [disabled]=\"loginGroup.invalid && loginGroup.dirty\" mat-raised-button color=\"primary\"\r\n            class=\"d-inline-block font submit\" (click)=\"submit()\"> Login\r\n        </button>\r\n        <span>\r\n            <a class=\"float-right ml-3 forget-pwd\" (click)=\"forgetPassword()\"> Lost your password?</a>\r\n            <div class=\"other-login-text float-right\">or Login with</div>\r\n        </span>\r\n    </div>\r\n    <div class=\"other-login\">\r\n        <button mat-mini-fab class=\"fa fa-facebook mx-1 facebook\" (click)=\"loginWithFacebook()\"></button>\r\n        <button mat-mini-fab class=\"fa fa-google mx-1 google\" (click)=\"loginWithGoogle()\"></button>\r\n        <button mat-mini-fab class=\"fa fa-twitter mx-1 twitter\" (click)=\"loginWithTwitter()\"></button>\r\n        <button mat-mini-fab class=\"fa fa-instagram mx-1 instagram\" (click)=\"loginWithInstagram()\"></button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-login/user-login.component.scss":
/*!******************************************************!*\
  !*** ./src/app/user-login/user-login.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forget-pwd {\n  font-size: 14px;\n  font-weight: bold;\n  cursor: pointer;\n  color: #616161 !important; }\n\n.login {\n  border: 30px solid #f8f9fa;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);\n  margin: 4px;\n  height: auto;\n  margin: 215px 0px 0px 0px;\n  flex-direction: column;\n  min-width: 380px;\n  border-radius: 5px; }\n\n.other-login-text {\n  display: inline-block;\n  position: absolute;\n  font-size: 11px;\n  right: 0px;\n  padding-top: 18px;\n  color: #616161; }\n\n.submit {\n  font-size: 16px;\n  font-weight: bold;\n  border-radius: 4px;\n  padding: 4px 0; }\n\n.other-login {\n  display: inline-block;\n  margin: 7% auto 0; }\n\n.facebook {\n  background: #3c5a99 !important; }\n\n.twitter {\n  background: #1da1f2 !important; }\n\n.google {\n  background: #4285f4 !important; }\n\n.instagram {\n  background: #e1306c !important; }\n\ninput {\n  color: #616161; }\n"

/***/ }),

/***/ "./src/app/user-login/user-login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/user-login/user-login.component.ts ***!
  \****************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(router, formBuilder, authService, matSnackBar) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.matSnackBar = matSnackBar;
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        this.loginGroup = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            passWord: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    };
    UserLoginComponent.prototype.submit = function () {
        var _this = this;
        var value = this.loginGroup.value;
        this.authService.signIn(value.email, value.passWord).then(function (result) {
            _this.router.navigate(['/home']);
        });
    };
    UserLoginComponent.prototype.loginWithGoogle = function () {
        this.authService.signInWithGoogle();
    };
    UserLoginComponent.prototype.loginWithFacebook = function () { };
    UserLoginComponent.prototype.loginWithInstagram = function () { };
    UserLoginComponent.prototype.loginWithTwitter = function () { };
    UserLoginComponent.prototype.register = function () {
        _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"].showLogin.emit(false);
    };
    UserLoginComponent.prototype.forgetPassword = function () {
        var _this = this;
        if (this.loginGroup.value.email) {
            this.authService.resetPassword(this.loginGroup.value.email).then(function (result) {
                _this.matSnackBar.open('', 'Reset Password link has been sent.', { duration: 3000 });
            });
        }
    };
    UserLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-login',
            template: __webpack_require__(/*! ./user-login.component.html */ "./src/app/user-login/user-login.component.html"),
            styles: [__webpack_require__(/*! ./user-login.component.scss */ "./src/app/user-login/user-login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "./src/app/user-register/user-register.component.html":
/*!************************************************************!*\
  !*** ./src/app/user-register/user-register.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login w-75 bg-light pull-right d-flex mx-4\" [formGroup]=\"registerGroup\">\r\n    <div class=\"login-header pb-2\">\r\n        <span class=\"float-right forget-pwd accent\" (click)=\"login()\">Login</span>\r\n        <h3>\r\n            <b style=\"color:#fbc02d\">Register</b>\r\n        </h3>\r\n    </div>\r\n    <mat-form-field appearance=\"outline\">\r\n        <mat-label>\r\n            <b class=\"font text-monospace my-4\">USER NAME</b>\r\n        </mat-label>\r\n        <input matInput type=\"text\" formControlName=\"userName\" required>\r\n        <mat-error *ngIf=\"registerGroup.get('userName').hasError('required')\">\r\n            * User Name is <strong>required</strong>\r\n        </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field appearance=\"outline\">\r\n        <mat-label>\r\n            <b class=\"font text-monospace my-4\">EMAIL</b>\r\n        </mat-label>\r\n        <input matInput type=\"email\" formControlName=\"email\" required>\r\n        <mat-error *ngIf=\"registerGroup.get('email').hasError('required')\">\r\n            * Email is <strong>required</strong>\r\n        </mat-error>\r\n        <mat-error *ngIf=\"registerGroup.get('email').hasError('email') \">\r\n            * Invalid email\r\n        </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field appearance=\"outline\">\r\n        <mat-label>\r\n            <b class=\"font text-monospace my-4\">PASSWORD</b>\r\n        </mat-label>\r\n        <input matInput type=\"password\" formControlName=\"passWord\" required>\r\n        <mat-error *ngIf=\"registerGroup.get('passWord').hasError('required')\">\r\n            * Password is <strong>required</strong>\r\n        </mat-error>\r\n        <mat-error *ngIf=\"registerGroup.get('passWord').hasError('pattern')\">\r\n            * Does not match password pattern\r\n        </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field appearance=\"outline\">\r\n        <mat-label>\r\n            <b class=\"font text-monospace my-4\">RE-ENTER PASSWORD</b>\r\n        </mat-label>\r\n        <input matInput type=\"password\" formControlName=\"re_enterPassword\" required>\r\n        <mat-error *ngIf=\"registerGroup.get('re_enterPassword').hasError('required')\">\r\n            * Re enter password is <strong>required</strong>\r\n        </mat-error>\r\n        <mat-error *ngIf=\"registerGroup.get('re_enterPassword').hasError('validate')\">\r\n            * Password Mismatch\r\n        </mat-error>\r\n    </mat-form-field>\r\n    <div>\r\n        <button [disabled]=\"registerGroup.invalid && registerGroup.dirty\" mat-raised-button color=\"primary\" class=\"d-inline-block register font\" (click)=\"register()\">Register</button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-register/user-register.component.scss":
/*!************************************************************!*\
  !*** ./src/app/user-register/user-register.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forget-pwd {\n  font-size: 14px;\n  font-weight: bold;\n  cursor: pointer; }\n\n.login {\n  border: 30px solid #f8f9fa;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);\n  margin: 4px;\n  height: auto;\n  margin: 200px 0px 0px 0px;\n  flex-direction: column;\n  min-width: 380px;\n  border-radius: 5px; }\n\n.register {\n  margin-left: 35%;\n  font-size: 16px;\n  font-weight: bold;\n  border-radius: 4px;\n  padding: 4px 0; }\n\ninput {\n  color: #616161; }\n"

/***/ }),

/***/ "./src/app/user-register/user-register.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/user-register/user-register.component.ts ***!
  \**********************************************************/
/*! exports provided: UserRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterComponent", function() { return UserRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserRegisterComponent = /** @class */ (function () {
    function UserRegisterComponent(formBuilder, authService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
    }
    UserRegisterComponent.prototype.ngOnInit = function () {
        this.registerGroup = this.formBuilder.group({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            passWord: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            re_enterPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                this.validateReEnterPassword
            ])
        });
    };
    UserRegisterComponent.prototype.login = function () {
        _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"].showLogin.emit(true);
    };
    UserRegisterComponent.prototype.validateReEnterPassword = function (control) {
        if (control.dirty) {
            var passWord = control.parent.get('passWord');
            if (passWord.value !== control.value) {
                return { validate: true };
            }
        }
        return null;
    };
    UserRegisterComponent.prototype.register = function () {
        var register = this.registerGroup.value;
        this.authService.signUp(register.email, register.passWord);
    };
    UserRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-register',
            template: __webpack_require__(/*! ./user-register.component.html */ "./src/app/user-register/user-register.component.html"),
            styles: [__webpack_require__(/*! ./user-register.component.scss */ "./src/app/user-register/user-register.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], UserRegisterComponent);
    return UserRegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBa4lgfzs5EVRS_hyLyWjqWCoeuJH543hs',
        authDomain: 'friendlychat-8c194.firebaseapp.com',
        databaseURL: 'https://friendlychat-8c194.firebaseio.com',
        projectId: 'friendlychat-8c194',
        storageBucket: 'friendlychat-8c194.appspot.com',
        messagingSenderId: '7974372594'
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lenovo\Documents\GitHub\Dekart\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
webpackJsonp([1],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Environment; });
// https://elo-api.azurewebsites.net/swagger
// https://elo-api.azurewebsites.net/v1/questions
var API = {
    dev: "http://localhost:8100/assets/json",
    baseDev: "/elo-api",
    prod: "https://elo-api.azurewebsites.net/v1",
    base: "https://elo-api.azurewebsites.net/v1",
    proxyUrl: "https://elo-api.azurewebsites.net/v1",
};
var Environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAYdhtGQER6QoNs6txa-UwAy1l526S7V5I",
        authDomain: "elo-eventos.firebaseapp.com",
        databaseURL: "https://elo-eventos.firebaseio.com",
        projectId: "elo-eventos",
        storageBucket: "elo-eventos.appspot.com",
        messagingSenderId: "36831031378"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment_environment__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpeakerService = /** @class */ (function () {
    function SpeakerService(http, _platform) {
        this.http = http;
        this._platform = _platform;
    }
    SpeakerService.prototype.getSpeakers = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/speakers");
    };
    SpeakerService.prototype.getSpeakerById = function (id) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/speakers/" + id);
    };
    SpeakerService.prototype.addSpeaker = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/speakers/", data);
    };
    SpeakerService.prototype.getSpeakersHardCode = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].dev + "/speakers.json");
    };
    SpeakerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Platform */]])
    ], SpeakerService);
    return SpeakerService;
}());

//# sourceMappingURL=event-speaker.service.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventRegisterQuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_register_questions_event_register_questions_service__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventRegisterQuestionsPage = /** @class */ (function () {
    function EventRegisterQuestionsPage(navCtrl, navParams, 
        // private speakerService: SpeakerService,
        questionsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.questionsService = questionsService;
        this.initialLoading = true;
        this.event = this.navParams.get('event');
        this.speaker = this.navParams.get('speaker');
        console.log('this.speaker', this.speaker);
        // this.getSpeakerById();
        this.getAllQuestionsBySpeaker();
    }
    // getSpeakerById() {
    //   this.speakerService.getSpeakerById(this.speakerId)
    //     .subscribe( response => {
    //       this.speaker = response;
    //       console.log(this.speaker);
    //     });
    //   }
    EventRegisterQuestionsPage.prototype.getAllQuestionsBySpeaker = function () {
        // this.questionsService.getQuestionsBySpeakerId(this.speakerId)
        //   .subscribe( response => {
        //     this.initialLoading = false;
        //     this.allQuestions = response;
        //     console.log(this.allQuestions);
        //   }, error {
        //     Ocorreu um erro ao buscar as perguntas deste palestrante. Tentar novamente?
        // });
    };
    EventRegisterQuestionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventRegisterQuestionsPage');
    };
    EventRegisterQuestionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-register-questions',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-register-questions\event-register-questions.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>{{ event?.name }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-item-divider color="info" text-center>\n      Perguntas de <strong>{{ speaker?.name }}</strong>\n  </ion-item-divider>\n  <div padding>\n    <ion-row padding *ngIf="initialLoading" text-center>\n      <i class="fa fa-spinner fa-pulse fa-3x fa-fw m-auto"></i>\n    </ion-row>\n    <ion-row padding *ngIf="!allQuestions && !initialLoading" text-center>\n      <span>Nenhuma pergunta cadastrada para este palestrante.</span>\n    </ion-row>\n    <ion-grid *ngIf="allQuestions && initialLoading" class="mb-1">\n      <ion-row>\n        <ion-col>\n          <strong>Ordem (nº)</strong>\n        </ion-col>\n        <ion-col>\n          <strong>Pergunta</strong>\n        </ion-col>\n      </ion-row>\n      <hr />\n      <ion-row class="table-striped" *ngFor="let question of allQuestions" (click)="goToQuestionsSection()">\n        <ion-col class="ellipsis">\n          {{ question.name }}\n        </ion-col>\n        <ion-col class="ellipsis">\n          {{ question.detail }}\n        </ion-col>\n      </ion-row>\n      <hr />\n    </ion-grid>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-register-questions\event-register-questions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__event_register_questions_event_register_questions_service__["a" /* QuestionsService */]])
    ], EventRegisterQuestionsPage);
    return EventRegisterQuestionsPage;
}());

//# sourceMappingURL=event-register-questions.js.map

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 197;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/event-register-questions/event-register-questions.module": [
		511,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 239;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment_environment__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionsService = /** @class */ (function () {
    function QuestionsService(http, _platform) {
        this.http = http;
        this._platform = _platform;
    }
    QuestionsService.prototype.getQuestions = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/questions");
    };
    QuestionsService.prototype.getQuestionById = function (id) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/questions/" + id);
    };
    QuestionsService.prototype.addQuestion = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/questions/", data);
    };
    QuestionsService.prototype.getQuestionsHardCode = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].dev + "/questions.json");
    };
    QuestionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Platform */]])
    ], QuestionsService);
    return QuestionsService;
}());

//# sourceMappingURL=event-register-questions.service.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\login\login.html"*/'<ion-content padding>\n\n  <ion-grid fixed>\n\n    <ion-row align-items-center justify-content-center>\n\n      <img src="../../assets/imgs/logomarca.png" width="250" height="250">\n\n    </ion-row>\n\n    <ion-row align-items-center justify-content-center>\n\n      <ion-col col-12 col-sm-12 col-md-8>\n\n        <ion-card>\n\n          <ion-item-divider text-center>Autentique-se</ion-item-divider>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-label stacked>E-mail</ion-label>\n\n              <ion-input type="text"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>Senha</ion-label>\n\n              <ion-input type="password"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-card>\n\n        <ion-card>\n\n          <button class="btn-entrar" ion-button block (click)="login()">ENTRAR</button>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar text-center>\n\n    <p ion-text color="dark">Elo Eventos 2018 - Todos os direitos reservados</p>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_contact__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angularfire2_firestore__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_menu_event_menu__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, DB) {
        this.navCtrl = navCtrl;
        this.DB = DB;
        this.eventsCollection = DB.collection('events');
        this.events = this.eventsCollection.valueChanges();
    }
    HomePage.prototype.goToEvent = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__event_menu_event_menu__["a" /* EventMenuPage */], { event: event });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center>Eventos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12 col-md-6 col-lg-3 *ngFor="let event of events | async" (click)="goToEvent(event)">\n\n        <ion-card>\n\n          <ion-card-header class="bold">\n\n            {{ event.name }}\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            {{ event.date }}\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angularfire2_firestore__["AngularFirestore"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_info_event_info__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_sponsor_event_sponsor__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_speaker_event_speaker__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_schedule_event_schedule__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_interactive_section_event_interactive_section__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EventMenuPage = /** @class */ (function () {
    function EventMenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = this.navParams.get('event');
    }
    EventMenuPage.prototype.info = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__event_info_event_info__["a" /* EventInfoPage */], { event: this.event });
    };
    EventMenuPage.prototype.sponsors = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__event_sponsor_event_sponsor__["a" /* EventSponsorPage */], { event: this.event });
    };
    EventMenuPage.prototype.speakers = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__event_speaker_event_speaker__["a" /* EventSpeakerPage */], { event: this.event });
    };
    EventMenuPage.prototype.schedule = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__event_schedule_event_schedule__["a" /* EventSchedulePage */], { event: this.event });
    };
    EventMenuPage.prototype.interactiveSection = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__event_interactive_section_event_interactive_section__["a" /* EventInteractiveSectionPage */], { event: this.event });
    };
    EventMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-menu',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-menu\event-menu.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center>{{ event?.name }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12 col-md-6 col-lg-3>\n\n        <ion-card (click)="info()">\n\n          <ion-card-header class="bold">\n\n            Informações\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            Informações gerais do evento\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6 col-lg-3>\n\n        <ion-card (click)="sponsors()">\n\n          <ion-card-header class="bold">\n\n            Patrocinadores\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            Patrocinadores do evento\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6 col-lg-3>\n\n        <ion-card (click)="speakers()">\n\n          <ion-card-header class="bold">\n\n            Palestrantes\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            Palestrantes do evento\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6 col-lg-3>\n\n        <ion-card (click)="schedule()">\n\n          <ion-card-header class="bold">\n\n            Programação\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            Programação do evento\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 col-md-6 col-lg-3>\n\n        <ion-card (click)="interactiveSection()">\n\n          <ion-card-header class="bold">\n\n            Sessão Interativa\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            Perguntas e respostas para a Sessão Interativa\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-menu\event-menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EventMenuPage);
    return EventMenuPage;
}());

//# sourceMappingURL=event-menu.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angularfire2_firestore__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__node_modules_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventInfoPage = /** @class */ (function () {
    function EventInfoPage(navCtrl, navParams, formBuilder, alertCtrl, DB) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.DB = DB;
        this.event = this.navParams.get('event');
        this.form = this.formBuilder.group({
            city: [this.event.city],
            date: [this.event.date, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["f" /* Validators */].required],
            description: [this.event.description],
            image: [''],
            name: [this.event.name, __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["f" /* Validators */].required],
            place: [this.event.place],
            state: [this.event.state]
        });
    }
    EventInfoPage.prototype.save = function () {
        var _this = this;
        this.DB.doc('events/' + this.event.UID).update({
            city: this.form.controls['city'].value,
            date: this.form.controls['date'].value,
            description: this.form.controls['description'].value,
            image: this.form.controls['image'].value,
            name: this.form.controls['name'].value,
            place: this.form.controls['place'].value,
            state: this.form.controls['state'].value
        }).then(function () {
            var alert = _this.alertCtrl.create({
                title: 'Tudo certo!',
                subTitle: 'As informações gerais da evento foram atualizadas com sucesso.',
                buttons: ['OK']
            });
            alert.present();
        }).catch(function () {
            var alert = _this.alertCtrl.create({
                title: 'Erro!',
                subTitle: 'Erro ao atualizar informações gerais do evento.',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    EventInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-info',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-info\event-info.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center>{{ event?.name }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <form [formGroup]="form">\n\n    <ion-grid fixed>\n\n      <ion-row align-items-center justify-content-center>\n\n        <ion-col col-12 col-sm-12 col-md-12>\n\n          <ion-card>\n\n            <ion-item-divider color="info" text-center>Informações Gerais do Evento</ion-item-divider>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-label stacked>Nome</ion-label>\n\n                <ion-input type="text" value="{{ event.name }}" formControlName="name"></ion-input>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-label stacked>Resumo</ion-label>\n\n                <ion-input type="text" value="{{ event.description }}" formControlName="description"></ion-input>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-label stacked>Data</ion-label>\n\n                <ion-input type="text" value="{{ event.date }}" formControlName="date"></ion-input>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-label stacked>Estado</ion-label>\n\n                <ion-select formControlName="state">\n\n                  <ion-option value="AC">Acre</ion-option>\n\n                  <ion-option value="AL">Alagoas</ion-option>\n\n                  <ion-option value="AP">Amapá</ion-option>\n\n                  <ion-option value="AM">Amazonas</ion-option>\n\n                  <ion-option value="BA">Bahia</ion-option>\n\n                  <ion-option value="CE">Ceará</ion-option>\n\n                  <ion-option value="DF">Distrito Federal</ion-option>\n\n                  <ion-option value="ES">Espírito Santo</ion-option>\n\n                  <ion-option value="GO">Goiás</ion-option>\n\n                  <ion-option value="MA">Maranhão</ion-option>\n\n                  <ion-option value="MT">Mato Grosso</ion-option>\n\n                  <ion-option value="MS">Mato Grosso do Sul</ion-option>\n\n                  <ion-option value="MG">Minas Gerais</ion-option>\n\n                  <ion-option value="PA">Pará</ion-option>\n\n                  <ion-option value="PB">Paraíba</ion-option>\n\n                  <ion-option value="PR">Paraná</ion-option>\n\n                  <ion-option value="PE">Pernambuco</ion-option>\n\n                  <ion-option value="PI">Piauí</ion-option>\n\n                  <ion-option value="RJ">Rio de Janeiro</ion-option>\n\n                  <ion-option value="RN">Rio Grande do Norte</ion-option>\n\n                  <ion-option value="RS">Rio Grande do Sul</ion-option>\n\n                  <ion-option value="RO">Rondônia</ion-option>\n\n                  <ion-option value="RR">Roraima</ion-option>\n\n                  <ion-option value="SC">Santa Catarina</ion-option>\n\n                  <ion-option value="SP">São Paulo</ion-option>\n\n                  <ion-option value="SE">Sergipe</ion-option>\n\n                  <ion-option value="TO">Tocantins</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-label stacked>Cidade</ion-label>\n\n                <ion-input type="text" value="{{ event.city }}" formControlName="city"></ion-input>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-label stacked>Local</ion-label>\n\n                <ion-input type="text" value="{{ event.place }}" formControlName="place"></ion-input>\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12 col-sm-12 col-md-12>\n\n          <button ion-button block (click)="save()" [disabled]="!form.valid">SALVAR INFORMAÇÕES</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-info\event-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__node_modules_angularfire2_firestore__["AngularFirestore"]])
    ], EventInfoPage);
    return EventInfoPage;
}());

//# sourceMappingURL=event-info.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventSponsorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventSponsorPage = /** @class */ (function () {
    function EventSponsorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = this.navParams.get('event');
    }
    EventSponsorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-sponsor',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-sponsor\event-sponsor.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center>{{ event?.name }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-sponsor\event-sponsor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EventSponsorPage);
    return EventSponsorPage;
}());

//# sourceMappingURL=event-sponsor.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventSpeakerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_speaker_service__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventSpeakerPage = /** @class */ (function () {
    function EventSpeakerPage(camera, navCtrl, navParams, formBuilder, speakerService) {
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.speakerService = speakerService;
        this.initialLoading = true;
        this.isDesktop = (!document.URL.startsWith('http') || document.URL.startsWith('http://localhost:8100'));
        this.event = this.navParams.get('event');
        // console.log('event', this.event);
        this.setClearFormAndImg();
    }
    EventSpeakerPage.prototype.ionViewDidLoad = function () {
        this.froalaInit();
        this.getAllSpeakers();
    };
    EventSpeakerPage.prototype.froalaInit = function () {
        // $('div#froala-editor').froalaEditor({
        //   // Add the custom buttons in the toolbarButtons list, after the separator.
        //   toolbarButtons: ['undo', 'redo' , 'bold', 'underline', '|', 'alert', 'clear', 'insert']
        // })
    };
    EventSpeakerPage.prototype.getAllSpeakers = function () {
        var _this = this;
        this.speakerService.getSpeakers()
            .subscribe(function (speakers) {
            _this.allSpeakers = speakers;
            _this.initialLoading = false;
            // console.log(this.allSpeakers);
        });
    };
    EventSpeakerPage.prototype.getAllSpeakersHardCode = function () {
        var _this = this;
        this.speakerService.getSpeakersHardCode()
            .subscribe(function (speakers) {
            _this.allSpeakers = speakers;
            _this.initialLoading = false;
            // console.log(this.allSpeakers);
        });
    };
    EventSpeakerPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.myphoto = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    EventSpeakerPage.prototype.uploadImageMobile = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.myphoto = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    EventSpeakerPage.prototype.readImg = function ($event) {
        var _this = this;
        if (event.target && event.target['files'] && event.target['files'][0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.myphoto = event.target.result;
            };
            reader.readAsDataURL(event.target['files'][0]);
        }
    };
    EventSpeakerPage.prototype.setClearFormAndImg = function () {
        this.form = this.formBuilder.group({
            // eventId: [this.event.UID],
            eventId: ['792863ff-0393-4c1c-93d1-650e1f3bd298'],
            name: ['', __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["f" /* Validators */].required],
            detail: ['', __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["f" /* Validators */].required],
            resume: [''],
            image: [''],
        });
        this.myphoto = null;
    };
    EventSpeakerPage.prototype.uploadImageBrowser = function () {
        console.log('here ai em');
    };
    EventSpeakerPage.prototype.save = function () {
        var _this = this;
        this.form.controls.image.setValue(this.myphoto);
        console.log('Data', this.form);
        this.speakerService.addSpeaker(this.form.value)
            .subscribe(function (response) {
            _this.getAllSpeakers();
            _this.setClearFormAndImg();
            console.log('deu certo');
        }, function (error) {
            _this.setClearFormAndImg();
            console.error('deu ruim', error);
        });
    };
    EventSpeakerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-speaker',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-speaker\event-speaker.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center>{{ event?.name }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <!-- PALESTRANTES CADASTRADOS -->\n\n  <ion-item-divider color="info" text-center>\n\n    <strong>Palestrantes cadastrados</strong>\n\n  </ion-item-divider>\n\n  <div padding>\n\n    <ion-row padding *ngIf="initialLoading" text-center>\n\n      <i class="fa fa-spinner fa-pulse fa-3x fa-fw m-auto"></i>\n\n    </ion-row>\n\n    <ion-row padding *ngIf="!allSpeakers && !initialLoading" text-center>\n\n      <span>Nenhum palestrante cadastrado para este evento ainda.</span>\n\n    </ion-row>\n\n    <ion-grid *ngIf="allSpeakers && !initialLoading" class="mb-1">\n\n      <ion-row>\n\n        <ion-col>\n\n          <strong>Palestrante</strong>\n\n        </ion-col>\n\n        <ion-col>\n\n          <strong>Tema</strong>\n\n        </ion-col>\n\n        <ion-col class="text-right">\n\n          <strong>Deletar</strong>\n\n        </ion-col>\n\n      </ion-row>\n\n      <hr />\n\n      <ion-row class="table-striped" *ngFor="let speaker of allSpeakers">\n\n        <ion-col class="ellipsis">\n\n          {{ speaker.name }}\n\n        </ion-col>\n\n        <ion-col class="ellipsis">\n\n          {{ speaker.detail }}\n\n        </ion-col>\n\n        <ion-col class="text-right">\n\n          <i class="fa fa-trash-o fa-lg danger"></i>\n\n        </ion-col>\n\n      </ion-row>\n\n      <hr />\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <!-- CADASTRO -->\n\n  <ion-item-divider color="info" text-center>\n\n    <strong>Cadastrar novo palestrante</strong>\n\n  </ion-item-divider>\n\n  <form [formGroup]="form" padding>\n\n    <ion-grid fixed>\n\n      <ion-row align-items-center justify-content-center>\n\n        <!-- <ion-col col-12 col-sm-12 col-md-12>\n\n          <ion-item-divider color="info" (click)="newSpeaker()" text-center>Cadastrar Novo Palestrante</ion-item-divider>\n\n        </ion-col> -->\n\n        <ion-col col-12 col-sm-12 col-md-12>\n\n          <ion-label stacked>Foto</ion-label>\n\n          <div *ngIf="isDesktop">\n\n            <div class="m-16">\n\n              <label for=\'speakers-photo\'>Selecione uma foto...</label>\n\n            </div>\n\n            <input type="file" id="speakers-photo" name="speakers-photo" (change)="readImg($event)">\n\n          </div>\n\n          <div *ngIf="!isDesktop" class="mh-16">\n\n            <button type="file" ion-button color="primary" (click)="uploadImageMobile()">Selecionar foto</button>\n\n          </div>\n\n          <!-- <ion-input type="text" value="{{ newSpeaker.image }}" formControlName="image"></ion-input> -->\n\n          <div class="mt-32" *ngIf="myphoto">\n\n            <img class="speakers-photo"src="{{ myphoto }}">\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12 col-sm-12 col-md-12>\n\n          <ion-label stacked>Nome</ion-label>\n\n          <div class="mh-16">\n\n            <ion-input type="text" value="{{ newSpeaker?.name }}" formControlName="name"></ion-input>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12 col-sm-12 col-md-12>\n\n          <ion-label stacked>Tema da Palestra</ion-label>\n\n          <div class="mh-16">\n\n            <ion-input type="text" value="{{ newSpeaker?.detail }}" formControlName="detail"></ion-input>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12 col-sm-12 col-md-12>\n\n          <ion-label stacked>Currículo</ion-label>\n\n          <!-- <ion-input type="text" value="{{ newSpeaker?.resume }}" formControlName="resume"></ion-input> -->\n\n          <div class="m-16">\n\n            <div id="froala-editor" [froalaEditor] formControlName="resume"></div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row padding>\n\n        <ion-col col-12 col-sm-12 col-md-12>\n\n          <button ion-button block (click)="save()" [disabled]="!form.valid">SALVAR INFORMAÇÕES</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-speaker\event-speaker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__event_speaker_service__["a" /* SpeakerService */]])
    ], EventSpeakerPage);
    return EventSpeakerPage;
}());

//# sourceMappingURL=event-speaker.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventSchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventSchedulePage = /** @class */ (function () {
    function EventSchedulePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = this.navParams.get('event');
    }
    EventSchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-schedule',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-schedule\event-schedule.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center>{{ event?.name }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-schedule\event-schedule.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EventSchedulePage);
    return EventSchedulePage;
}());

//# sourceMappingURL=event-schedule.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventInteractiveSectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_speaker_event_speaker_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_register_questions_event_register_questions__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventInteractiveSectionPage = /** @class */ (function () {
    function EventInteractiveSectionPage(navCtrl, navParams, speakerService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.speakerService = speakerService;
        this.initialLoading = true;
        this.event = this.navParams.get('event');
        this.getAllSpeakers();
    }
    EventInteractiveSectionPage.prototype.getAllSpeakers = function () {
        var _this = this;
        this.speakerService.getSpeakers()
            .subscribe(function (speakers) {
            _this.allSpeakers = speakers;
            _this.initialLoading = false;
            // console.log(this.allSpeakers);
        });
    };
    EventInteractiveSectionPage.prototype.goToQuestionsSection = function (speaker) {
        // this.event['speakerId'] = speakerId;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__event_register_questions_event_register_questions__["a" /* EventRegisterQuestionsPage */], { event: this.event, speaker: speaker });
    };
    EventInteractiveSectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-interactive-section',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-interactive-section\event-interactive-section.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center>{{ event?.name }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!-- PALESTRANTES CADASTRADOS -->\n\n  <ion-item-divider color="info" text-center>\n\n    <strong>Sessão Interativa</strong>\n\n  </ion-item-divider>\n\n  <div padding>\n\n    <ion-row padding *ngIf="initialLoading" text-center>\n\n      <i class="fa fa-spinner fa-pulse fa-3x fa-fw m-auto"></i>\n\n    </ion-row>\n\n    <ion-row padding *ngIf="!allSpeakers && !initialLoading" text-center>\n\n      <span>Nenhum palestrante cadastrado para este evento ainda.</span>\n\n    </ion-row>\n\n    <ion-grid *ngIf="allSpeakers && !initialLoading" class="mb-1">\n\n      <ion-row>\n\n        <ion-col>\n\n          <strong>Palestrante</strong>\n\n        </ion-col>\n\n        <ion-col>\n\n          <strong>Tema</strong>\n\n        </ion-col>\n\n      </ion-row>\n\n      <hr />\n\n      <div>\n\n        <ion-row class="table-striped" *ngFor="let speaker of allSpeakers" (click)="goToQuestionsSection(speaker)">\n\n          <ion-col class="ellipsis">\n\n            {{ speaker.name }}\n\n          </ion-col>\n\n          <ion-col class="ellipsis">\n\n            {{ speaker.detail }}\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n      <hr />\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-interactive-section\event-interactive-section.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__event_speaker_event_speaker_service__["a" /* SpeakerService */]])
    ], EventInteractiveSectionPage);
    return EventInteractiveSectionPage;
}());

//# sourceMappingURL=event-interactive-section.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(434);

window["$"] = __WEBPACK_IMPORTED_MODULE_0_jquery__;
window["jQuery"] = __WEBPACK_IMPORTED_MODULE_0_jquery__;


Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environment_environment__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_event_menu_event_menu__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_event_info_event_info__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_event_interactive_section_event_interactive_section__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_event_schedule_event_schedule__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_event_speaker_event_speaker__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_event_sponsor_event_sponsor__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_event_register_questions_event_register_questions__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_event_speaker_event_speaker_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_event_register_questions_event_register_questions_service__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_froala_editor_js_froala_editor_pkgd_min_js__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_froala_editor_js_froala_editor_pkgd_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_froala_editor_js_froala_editor_pkgd_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angular_froala_wysiwyg__ = __webpack_require__(508);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























// Import Froala Editor // and // Import Angular2 plugin.


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_event_menu_event_menu__["a" /* EventMenuPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_event_info_event_info__["a" /* EventInfoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_event_interactive_section_event_interactive_section__["a" /* EventInteractiveSectionPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_event_register_questions_event_register_questions__["a" /* EventRegisterQuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_event_schedule_event_schedule__["a" /* EventSchedulePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_event_speaker_event_speaker__["a" /* EventSpeakerPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_event_sponsor_event_sponsor__["a" /* EventSponsorPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/event-register-questions/event-register-questions.module#EventRegisterQuestionsPageModule', name: 'EventRegisterQuestionsPage', segment: 'event-register-questions', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_8__environment_environment__["b" /* Environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_25_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_25_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__["AngularFirestoreModule"].enablePersistence(),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_event_menu_event_menu__["a" /* EventMenuPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_event_info_event_info__["a" /* EventInfoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_event_interactive_section_event_interactive_section__["a" /* EventInteractiveSectionPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_event_register_questions_event_register_questions__["a" /* EventRegisterQuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_event_schedule_event_schedule__["a" /* EventSchedulePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_event_speaker_event_speaker__["a" /* EventSpeakerPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_event_sponsor_event_sponsor__["a" /* EventSponsorPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_22__pages_event_speaker_event_speaker_service__["a" /* SpeakerService */],
                __WEBPACK_IMPORTED_MODULE_23__pages_event_register_questions_event_register_questions_service__["a" /* QuestionsService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[301]);
//# sourceMappingURL=main.js.map
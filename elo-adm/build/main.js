webpackJsonp([5],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractiveSectionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment_environment__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InteractiveSectionsService = /** @class */ (function () {
    function InteractiveSectionsService(http) {
        this.http = http;
    }
    InteractiveSectionsService.prototype.getSections = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/sections");
    };
    InteractiveSectionsService.prototype.getSectionById = function (id) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/sections/" + id);
    };
    InteractiveSectionsService.prototype.getRankingBySectionId = function (id) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/sections/" + id + "/ranking");
    };
    InteractiveSectionsService.prototype.addSection = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/sections/", data);
    };
    InteractiveSectionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], InteractiveSectionsService);
    return InteractiveSectionsService;
}());

//# sourceMappingURL=event-interactive-section.service.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment_environment__ = __webpack_require__(68);
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
    function SpeakerService(http) {
        this.http = http;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SpeakerService);
    return SpeakerService;
}());

//# sourceMappingURL=event-speaker.service.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventRankingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_interactive_section_event_interactive_section_service__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventRankingPage = /** @class */ (function () {
    function EventRankingPage(navCtrl, navParams, interactiveSectionsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.interactiveSectionsService = interactiveSectionsService;
        this.initialLoading = true;
        this.allListeners = null;
        this.listeners = null;
        this.showing = 0;
        this.visible = true;
        this.event = this.navParams.get('event');
        this.numberOfQuestions = this.navParams.get('questions').length;
    }
    EventRankingPage.prototype.ionViewDidLoad = function () {
        this.hideFooter(true);
        this.getAllListenersByRanking();
    };
    EventRankingPage.prototype.ionViewDidLeave = function () {
        this.hideFooter(false);
    };
    EventRankingPage.prototype.hideFooter = function (flag) {
        if (flag) {
            document.getElementsByClassName('show-tabbar')[0]['style'].display = 'none';
        }
        else {
            document.getElementsByClassName('show-tabbar')[0]['style'].display = 'flex';
        }
    };
    EventRankingPage.prototype.getAllListenersByRanking = function () {
        var _this = this;
        this.interactiveSectionsService.getRankingBySectionId(this.session)
            .subscribe(function (response) {
            _this.allListeners = response;
            _this.getNextTen();
            _this.initialLoading = false;
        });
    };
    EventRankingPage.prototype.getNextTen = function () {
        var _this = this;
        this.showing += 10;
        this.listeners = [];
        this.allListeners.forEach(function (element, index) {
            if (index < _this.showing) {
                _this.listeners.push(element);
            }
        });
    };
    EventRankingPage.prototype.isShowingAll = function () {
        return this.allListeners && this.showing >= this.allListeners.length;
    };
    EventRankingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-ranking',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-ranking\event-ranking.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center>Ranking da Sessão Interativa - {{ event?.name }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div padding>\n\n    <ion-row padding *ngIf="initialLoading" text-center>\n\n      <i class="fa fa-spinner fa-pulse fa-3x fa-fw m-auto"></i>\n\n    </ion-row>\n\n    <ion-grid *ngIf="!initialLoading" class="mb-1">\n\n      <ion-row>\n\n        <ion-col col-6 col-md-1 padding>\n\n          <strong>#</strong>\n\n        </ion-col>\n\n        <ion-col col-6 col-md-6 padding>\n\n          <strong>Nome</strong>\n\n        </ion-col>\n\n        <ion-col col-6 col-md-3 padding>\n\n          <strong>CPF</strong>\n\n        </ion-col>\n\n        <ion-col col-6 col-md-2 text-center padding>\n\n          <strong>Acertos</strong>\n\n        </ion-col>\n\n      </ion-row>\n\n      <hr />\n\n      <ion-row class="table-striped" *ngFor="let listener of listeners; let index = index">\n\n        <ion-col col-6 col-md-1 padding class="ellipsis question-title">\n\n          {{ 1 + index }}\n\n        </ion-col>\n\n        <ion-col col-6 col-md-6 padding class="ellipsis question-title">\n\n          {{ listener?.name }}\n\n        </ion-col>\n\n        <ion-col col-6 col-md-3 padding class="ellipsis question-title">\n\n          {{ listener?.document | slice : 0 : 3 }}.***.***-{{ listener?.document | slice : 9 }}\n\n        </ion-col>\n\n        <ion-col col-6 col-md-2 text-center class="ellipsis question-title">\n\n          <strong class="font-lg">{{ listener?.quantity }}</strong>\n\n          <!-- /{{ numberOfQuestions }} -->\n\n        </ion-col>\n\n      </ion-row>\n\n      <hr />\n\n    </ion-grid>\n\n    <ion-row>\n\n      <button block-size ion-button class="btn-top-10" (click)="getNextTen()"\n\n        *ngIf="!isShowingAll()">\n\n        <i class="fa fa-arrow-down"></i>&nbsp;Listar próximos 10\n\n      </button>\n\n    </ion-row>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-ranking\event-ranking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__event_interactive_section_event_interactive_section_service__["a" /* InteractiveSectionsService */]])
    ], EventRankingPage);
    return EventRankingPage;
}());

//# sourceMappingURL=event-ranking.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventRegisterQuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_register_questions_event_register_questions_service__ = __webpack_require__(84);
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
    function EventRegisterQuestionsPage(navCtrl, navParams, formBuilder, questionsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.questionsService = questionsService;
        this.initialLoading = true;
        this.allQuestions = null;
        this.optionLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        this.optionStructure = {
            questionId: '',
            letter: '',
            description: '',
            correct: false
        };
        this.optionsArray = [];
        this.correctOptionNumber = 0;
        this.event = this.navParams.get('event');
        this.session = this.navParams.get('session');
        this.setClearForm();
        this.getAllQuestions();
    }
    EventRegisterQuestionsPage.prototype.setClearForm = function () {
        this.form = this.formBuilder.group({
            eventId: [this.event.eventId],
            sectionId: [this.session.id],
            speakerId: [this.session.speakerId],
            title: ['', __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["f" /* Validators */].required],
            subtitle: ['', __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["f" /* Validators */].required],
            description: [''],
            sequence: ['', __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["f" /* Validators */].required],
        });
        this.optionsArray = [];
        this.addOption();
    };
    EventRegisterQuestionsPage.prototype.getQuestionById = function (questionId) {
        this.questionsService.getQuestionById(questionId)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    EventRegisterQuestionsPage.prototype.getAllQuestions = function () {
        var _this = this;
        this.questionsService.getQuestions()
            .subscribe(function (response) {
            _this.initialLoading = false;
            _this.allQuestions = response;
        });
    };
    EventRegisterQuestionsPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad EventRegisterQuestionsPage');
    };
    EventRegisterQuestionsPage.prototype.addOption = function () {
        var opt = {
            questionId: '',
            letter: this.optionLetters[this.optionsArray.length],
            description: '',
            correct: false
        };
        this.optionsArray.push(opt);
    };
    EventRegisterQuestionsPage.prototype.updateCorrect = function (letter) {
        this.correctOptionNumber = this.optionLetters.indexOf(letter);
        this.optionsArray.forEach(function (option) { return option.correct = false; });
        this.optionsArray[this.correctOptionNumber].correct = true;
    };
    EventRegisterQuestionsPage.prototype.removeOption = function () {
        this.optionsArray.pop();
    };
    EventRegisterQuestionsPage.prototype.save = function () {
        var _this = this;
        if (!this.bindOptionsDesc()) {
            alert('Preencha todas as alternativas');
            return;
        }
        if (!this.hasMarkedCorrectAnswer()) {
            alert('Marque a opção correta');
            return;
        }
        var data = this.form.value;
        data.options = this.optionsArray;
        // console.log(this.form.value);
        this.questionsService.addQuestion(data)
            .subscribe(function (response) {
            _this.getAllQuestions();
            _this.setClearForm();
        }, function (error) {
            // this.setClearForm();
        });
    };
    EventRegisterQuestionsPage.prototype.bindOptionsDesc = function () {
        var _this = this;
        var validDescriptions = true;
        var buffer = document.getElementsByClassName('question-option-description');
        Array.from(buffer).forEach(function (element, index) {
            _this.optionsArray[index].description = element.querySelectorAll('input')[0].value;
            if (_this.optionsArray[index].description.length < 1) {
                validDescriptions = false;
                // this.validationMessage = 'Preencha todas as alternativas';
            }
        });
        console.log(this.optionsArray);
        return validDescriptions;
    };
    EventRegisterQuestionsPage.prototype.hasMarkedCorrectAnswer = function () {
        var haveCorrectAnswer = false;
        this.optionsArray.forEach(function (element) {
            if (element.correct) {
                haveCorrectAnswer = true;
                // this.validationMessage = 'Marque a opção correta';
            }
        });
        return haveCorrectAnswer;
    };
    EventRegisterQuestionsPage.prototype.goToQuestionsSection = function (questionId) {
        this.getQuestionById(questionId);
    };
    EventRegisterQuestionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-register-questions',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-register-questions\event-register-questions.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center>{{ event?.name }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-item-divider color="info" text-center>\n\n      Perguntas da <strong>{{ session?.title }}</strong>\n\n  </ion-item-divider>\n\n  <div padding>\n\n    <ion-row padding *ngIf="initialLoading" text-center>\n\n      <i class="fa fa-spinner fa-pulse fa-3x fa-fw m-auto"></i>\n\n    </ion-row>\n\n    <ion-row padding *ngIf="!initialLoading && allQuestions === null" text-center>\n\n      <span>Nenhuma pergunta cadastrada para esta sessão.</span>\n\n    </ion-row>\n\n    <ion-grid *ngIf="!initialLoading && allQuestions && allQuestions.length > 0" class="mb-1">\n\n      <ion-row>\n\n        <ion-col>\n\n          <strong>Título</strong>\n\n        </ion-col>\n\n        <ion-col>\n\n          <strong>Subtítulo</strong>\n\n        </ion-col>\n\n        <ion-col>\n\n          <strong>Descrição</strong>\n\n        </ion-col>\n\n      </ion-row>\n\n      <hr />\n\n      <ion-row class="table-striped" *ngFor="let question of allQuestions" (click)="goToQuestionsSection(question.id)">\n\n        <ion-col class="ellipsis">\n\n          {{ question.title }}\n\n        </ion-col>\n\n        <ion-col class="ellipsis">\n\n          {{ question.subtitle }}\n\n        </ion-col>\n\n        <ion-col class="ellipsis innerHTML" [innerHTML]="question.description"></ion-col>\n\n      </ion-row>\n\n      <hr />\n\n    </ion-grid>\n\n  </div>\n\n  <ion-item-divider color="info" text-center>\n\n    Cadastrar pergunta\n\n  </ion-item-divider>\n\n  <form [formGroup]="form" padding>\n\n    <ion-row class="mb-1">\n\n      <ion-col col-12 col-md-12>\n\n        <ion-label stacked>Título da pergunta</ion-label>\n\n        <div class="mh-16">\n\n          <ion-input type="text" value="{{ newQuestion?.title }}" formControlName="title"></ion-input>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-12>\n\n        <ion-label stacked>Subtítulo</ion-label>\n\n        <div class="mh-16">\n\n          <ion-input type="text" value="{{ newQuestion?.subtitle }}" formControlName="subtitle"></ion-input>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-12>\n\n        <ion-label stacked>Sequência (número da pergunta)</ion-label>\n\n        <div class="mh-16">\n\n          <ion-input type="number" value="{{ newQuestion?.sequence }}" min="1" formControlName="sequence"></ion-input>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-12>\n\n        <ion-label stacked>Descrição</ion-label>\n\n        <div class="mh-16">\n\n          <div class="pt-16" type="text" [froalaEditor] formControlName="description"></div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-12>\n\n        <ion-label stacked><strong>Opções.</strong> Para marcar a opção correta, clique sobre a letra correspondente</ion-label>\n\n        <div class="mh-16" *ngFor="let option of optionsArray">\n\n          <ion-row>\n\n            <div class="option-letter" (click)="updateCorrect(option.letter)"><span [class.correct]="option.correct">( {{ option.letter }} )</span></div>\n\n            <ion-input class="question-option-description" type="text" value="{{ option?.description }}"></ion-input>\n\n          </ion-row>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-12 padding>\n\n        <button ion-button class="addRemoveOption" (click)="addOption()"><i class="fa fa-plus"></i></button>\n\n        <button ion-button class="addRemoveOption danger" (click)="removeOption()" [disabled]="optionsArray.length <= 1"><i class="fa fa-minus"></i></button>\n\n      </ion-col>\n\n      <ion-row padding class="w-100">\n\n        <ion-col col-12 col-md-12>\n\n          <button ion-button block (click)="save()" [disabled]="!form.valid">SALVAR QUESTÃO</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-row>\n\n  </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-register-questions\event-register-questions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__event_register_questions_event_register_questions_service__["a" /* QuestionsService */]])
    ], EventRegisterQuestionsPage);
    return EventRegisterQuestionsPage;
}());

//# sourceMappingURL=event-register-questions.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventViewAnswersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_register_questions_event_register_questions_service__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventViewAnswersPage = /** @class */ (function () {
    function EventViewAnswersPage(navCtrl, navParams, questionsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.questionsService = questionsService;
        this.initialLoading = true;
        this.chartMatrix = [];
        this.maxValue = [];
        this.numberOfLines = ['', '', '', ''];
        this.colors = ['#ff8a80', '#ff80ab', '#ea80fc', '#8c9eff', '#69f0ae', '#b2ff59', '#eeff41', '#ffd740', '#ffab40'];
        this.magicNumber = 56;
        this.factor = 5;
        this.event = this.navParams.get('event');
        this.question = this.navParams.get('question');
        console.log(this.question);
        this.randomColorInit = Math.floor(Math.random() * this.colors.length);
    }
    EventViewAnswersPage.prototype.ionViewDidLoad = function () {
        this.hideFooter(true);
        this.getQuestionGraphInfo();
    };
    EventViewAnswersPage.prototype.ionViewDidLeave = function () {
        this.hideFooter(false);
    };
    EventViewAnswersPage.prototype.hideFooter = function (flag) {
        if (flag) {
            document.getElementsByClassName('show-tabbar')[0]['style'].display = 'none';
        }
        else {
            document.getElementsByClassName('show-tabbar')[0]['style'].display = 'flex';
        }
    };
    EventViewAnswersPage.prototype.getQuestionGraphInfo = function () {
        var _this = this;
        this.questionsService.getGraphQuestions(this.question['id'])
            .subscribe(function (response) {
            _this.chartInfo = response;
            _this.putBlockHeight();
            _this.getTotals();
            _this.initialLoading = false;
        });
    };
    EventViewAnswersPage.prototype.putBlockHeight = function () {
        var vh = this.magicNumber / this.getMax();
        setTimeout(function () {
            var elements = document.getElementsByClassName('block-size');
            Array.from(elements).forEach(function (element, index) {
                element['style'].height = vh + 'vh';
            });
        }, 0);
    };
    EventViewAnswersPage.prototype.getMax = function () {
        var _this = this;
        var buffer = 0;
        this.chartInfo.forEach(function (item) {
            _this.putMatrixColumns(item);
            if (item.quantity > buffer) {
                buffer = item.quantity;
            }
        });
        this.divisorNumber = Math.ceil(buffer / this.factor);
        if (buffer >= 5) {
            this.maxValue = new Array(this.divisorNumber * this.factor);
        }
        else {
            this.maxValue = new Array(buffer);
        }
        return buffer;
    };
    EventViewAnswersPage.prototype.getTotals = function () {
        this.totalAnswers = this.chartInfo.reduce(function (a, b) { return a + b.quantity; }, 0);
    };
    EventViewAnswersPage.prototype.getTableChartDisplay = function (maxValue, index) {
        return ((maxValue - index) % (this.divisorNumber)) !== 0;
    };
    EventViewAnswersPage.prototype.putMatrixColumns = function (item) {
        this.chartMatrix.push(new Array(item.quantity));
    };
    EventViewAnswersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-view-answers',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-view-answers\event-view-answers.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center>{{ event?.name }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div padding class="flex">\n\n    <ion-row class="mt-auto">\n\n      <div col class="col-zero mt-auto pl-pr-0 c-gray">\n\n        <div *ngFor="let value of maxValue; let index = index">\n\n          <div class="block-size bd-right">\n\n            <div text-right class="pd-right font-sm"\n\n              [class.hidden]="getTableChartDisplay(maxValue.length, index)">\n\n              {{ (maxValue.length - index) }}\n\n            </div>\n\n          </div>\n\n        </div>\n\n        <hr>\n\n        <div text-right class="block-pattern-size bd-right pd-right font-sm">0</div>\n\n      </div>\n\n      <div col class="columns mt-auto pl-pr-0 c-gray" *ngFor="let column of chartInfo; let index = index">\n\n        <div text-center class="block-pattern-size font-regular font-lg">\n\n            <strong>{{ column.quantity }}</strong>\n\n        </div>\n\n        <div *ngFor="let n of chartMatrix[index]; let idx = index">\n\n          <div class="block-size font-regular" [style.background-color]="colors[(randomColorInit + index) % colors.length]">\n\n          </div>\n\n        </div>\n\n        <hr>\n\n        <div text-center class="block-pattern-size pt-1">\n\n          <span class="uppercase">( {{ column.letter }} )</span>\n\n          &nbsp;<strong>{{ (100 * column.quantity / totalAnswers) | number : \'1.2-2\' }}%</strong>\n\n        </div>\n\n      </div>\n\n    </ion-row>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-view-answers\event-view-answers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__event_register_questions_event_register_questions_service__["a" /* QuestionsService */]])
    ], EventViewAnswersPage);
    return EventViewAnswersPage;
}());

//# sourceMappingURL=event-view-answers.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventViewQuestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventViewQuestionPage = /** @class */ (function () {
    function EventViewQuestionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.showCorrectAnswer = false;
        this.pageName = 'page-event-view-question';
        this.fontSize = 24;
        this.event = this.navParams.get('event');
        this.question = this.navParams.get('question');
    }
    EventViewQuestionPage.prototype.ionViewDidLoad = function () {
        document.getElementsByClassName('show-tabbar')[0]['style'].display = 'none';
    };
    EventViewQuestionPage.prototype.increaseFontSize = function (inc) {
        inc ? this.fontSize++ : this.fontSize--;
        document.getElementsByTagName(this.pageName)[0]['style'].fontSize = this.fontSize + 'px';
    };
    EventViewQuestionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-view-question',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-view-question\event-view-question.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>{{ event?.name }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="padding-question">\n    <div class="header-buttons"></div>\n    <ion-row>\n      <div col-12 col-md-6>\n        <strong>\n          <div class="title">{{ question?.title }}</div>\n          <div class="subtitle">{{ question?.subtitle }}</div>\n        </strong>\n      </div>\n      <div col-12 col-md-6 text-right>\n        <button ion-button class="btn-secondary" (click)="increaseFontSize(false)">\n          <i class="fa fa-sort-desc"></i>&nbsp;<i class="fa fa-font"></i>\n        </button>\n        <button ion-button class="btn-secondary" (click)="increaseFontSize(true)">\n          <i class="fa fa-sort-asc"></i>&nbsp;<i class="fa fa-font"></i>\n        </button>\n      </div>\n    </ion-row>\n    <div class="description" [innerHTML]="question?.description"></div>\n    <ion-row *ngFor="let option of question?.options" [class.correct]="option.correct && showCorrectAnswer">\n      <div class="option-desc pb-12">\n        ( {{ option?.letter }} ) &nbsp; {{ option.description }}\n      </div>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-view-question\event-view-question.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EventViewQuestionPage);
    return EventViewQuestionPage;
}());

//# sourceMappingURL=event-view-question.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_view_question_event_view_question__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_view_answers_event_view_answers__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_ranking_event_ranking__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_register_questions_event_register_questions_service__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EventResultsPage = /** @class */ (function () {
    function EventResultsPage(navCtrl, navParams, questionsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.questionsService = questionsService;
        this.initialLoading = true;
        this.visible = true;
        this.event = this.navParams.get('event');
    }
    EventResultsPage.prototype.ionViewDidLoad = function () {
        this.getAllQuestions();
    };
    EventResultsPage.prototype.getAllQuestions = function () {
        var _this = this;
        this.questionsService.getQuestions()
            .subscribe(function (response) {
            _this.initialLoading = false;
            _this.allQuestions = response;
        });
    };
    EventResultsPage.prototype.activateOrDeactivate = function (question) {
        var data = {
            id: question.id,
            status: true
        };
        this.questionsService.activateQuestion(data)
            .subscribe(function (response) { });
    };
    EventResultsPage.prototype.goToDetailQuestionPage = function (question) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__event_view_question_event_view_question__["a" /* EventViewQuestionPage */], { event: this.event, question: question });
    };
    EventResultsPage.prototype.goToChartsPage = function (question) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__event_view_answers_event_view_answers__["a" /* EventViewAnswersPage */], { event: this.event, question: question });
    };
    EventResultsPage.prototype.goToRankingPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__event_ranking_event_ranking__["a" /* EventRankingPage */], { event: this.event, questions: this.allQuestions });
    };
    EventResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-results',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-results\event-results.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>{{ event?.name }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <ion-item-divider color="info" text-center>\n      Perguntas da Sessão Interativa\n  </ion-item-divider> -->\n  <div padding>\n    <ion-row padding *ngIf="initialLoading" text-center>\n      <i class="fa fa-spinner fa-pulse fa-3x fa-fw m-auto"></i>\n    </ion-row>\n    <ion-row padding *ngIf="!initialLoading && allQuestions === null" text-center>\n      <span>Nenhuma pergunta cadastrada para esta sessão.</span>\n    </ion-row>\n    <ion-grid *ngIf="!initialLoading && allQuestions && allQuestions.length > 0" class="mb-1">\n      <ion-row class="font-md">\n        <ion-col col-6 col-md-4 padding>\n          <strong>Título</strong>\n        </ion-col>\n        <ion-col col-6 col-md-6 padding>\n          <strong>Subtítulo</strong>\n        </ion-col>\n        <ion-col col-6 col-md-2 text-center padding>\n          <strong>Ações</strong>\n        </ion-col>\n      </ion-row>\n      <hr />\n      <ion-row class="table-striped" *ngFor="let question of allQuestions">\n        <ion-col col-6 col-md-4 padding class="ellipsis question-title">\n          {{ question.title }}\n        </ion-col>\n        <ion-col col-6 col-md-6 padding class="ellipsis question-title">\n          {{ question.subtitle }}\n        </ion-col>\n        <ion-col col-6 col-md-2 text-center>\n          <!-- Parte de poder ou não visualizar as questões -->\n          <!-- <button ion-button class="actInact" (click)="activateOrDeactivate(question)"\n            [class.active]="question?.status" [class.inactive]="!question?.status">\n            <i class="fa" [class.fa-eye]="question?.status" [class.fa-eye-slash]="!question?.status"></i>\n          </button> -->\n          <button ion-button class="enter-question" (click)="goToDetailQuestionPage(question)">\n            <i class="fa fa-file-text"></i>\n          </button>\n          <button ion-button class="showCharts" (click)="goToChartsPage(question)">\n            <i class="fa fa-bar-chart"></i>\n          </button>\n        </ion-col>\n      </ion-row>\n      <hr />\n      <button block-size ion-button class="btn-top-10" (click)="goToRankingPage()">\n        Ver ranking geral\n      </button>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-results\event-results.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__event_register_questions_event_register_questions_service__["a" /* QuestionsService */]])
    ], EventResultsPage);
    return EventResultsPage;
}());

//# sourceMappingURL=event-results.js.map

/***/ }),

/***/ 203:
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
webpackEmptyAsyncContext.id = 203;

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/event-ranking/event-ranking.module": [
		517,
		4
	],
	"../pages/event-register-questions/event-register-questions.module": [
		518,
		3
	],
	"../pages/event-results/event-results.module": [
		521,
		2
	],
	"../pages/event-view-answers/event-view-answers.module": [
		519,
		1
	],
	"../pages/event-view-question/event-view-question.module": [
		520,
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
webpackAsyncContext.id = 245;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(289);
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\login\login.html"*/'<ion-content padding>\n\n  <ion-grid fixed>\n\n    <ion-row align-items-center justify-content-center>\n\n      <img src="/assets/imgs/logomarca.png" width="250" height="250">\n\n    </ion-row>\n\n    <ion-row align-items-center justify-content-center>\n\n      <ion-col col-12 col-sm-12 col-md-8>\n\n        <ion-card>\n\n          <ion-item-divider text-center>Autentique-se</ion-item-divider>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-label stacked>E-mail</ion-label>\n\n              <ion-input type="text"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label stacked>Senha</ion-label>\n\n              <ion-input type="password"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-card>\n\n        <ion-card>\n\n          <button class="btn-entrar" ion-button block (click)="login()">ENTRAR</button>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar text-center>\n\n    <p ion-text color="dark">Elo Eventos 2018 - Todos os direitos reservados</p>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_contact__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(291);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Eventos" tabIcon="star"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Sobre" tabIcon="information-circle"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angularfire2_firestore__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_menu_event_menu__ = __webpack_require__(295);
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center>Eventos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12 col-md-6 col-lg-3 *ngFor="let event of events | async" (click)="goToEvent(event)">\n\n        <!-- <ion-row *ngIf="events?.length === 0" text-center>\n\n          <i class="fa fa-spinner fa-pulse fa-3x fa-fw m-auto"></i>\n\n        </ion-row>\n\n        <ion-card *ngIf="events?.length > 0"> -->\n\n        <ion-card>\n\n          <ion-card-header class="bold">\n\n            {{ event.name }}\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            {{ event.date }}\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angularfire2_firestore__["AngularFirestore"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_info_event_info__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_sponsor_event_sponsor__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_speaker_event_speaker__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_schedule_event_schedule__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_interactive_section_event_interactive_section__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__event_results_event_results__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__event_menu_service__ = __webpack_require__(302);
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
    function EventMenuPage(navCtrl, navParams, eventsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventsService = eventsService;
        this.initialLoading = true;
        this.event = this.navParams.get('event');
        this.getEvents();
    }
    EventMenuPage.prototype.getEvents = function () {
        var _this = this;
        this.eventsService.getEvents()
            .subscribe(function (response) {
            _this.allEvents = response;
            _this.initialLoading = false;
            // console.log('this.event', this.event);
            // console.log('this.allEvents', this.allEvents);
            _this.chosenEvent = _this.allEvents.filter(function (evt) {
                return !_this.event.name.indexOf(evt.name);
            });
            _this.chosenEvent = _this.chosenEvent[0];
            _this.event.eventId = _this.chosenEvent.id;
        });
    };
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
    EventMenuPage.prototype.results = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__event_results_event_results__["a" /* EventResultsPage */], { event: this.event });
    };
    EventMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-menu',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-menu\event-menu.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center>{{ event?.name }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light-gray">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12 col-md-6 col-lg-3>\n\n        <ion-card class="card-light-gray" (click)="info()">\n\n          <ion-card-header class="bold">\n\n            <i class="fa fa-info-circle fa-2x"></i>\n\n            <span class="card-header">Informações</span>\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            Informações gerais do evento\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6 col-lg-3>\n\n        <ion-card class="card-light-gray" (click)="sponsors()">\n\n          <ion-card-header class="bold">\n\n            <i class="fa fa-handshake-o fa-17"></i>\n\n            <span class="card-header">Patrocinadores</span>\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            Patrocinadores do evento\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6 col-lg-3>\n\n        <ion-card class="card-light-gray" (click)="speakers()">\n\n          <ion-card-header class="bold">\n\n            <i class="fa fa-rss-square fa-2x"></i>\n\n            <span class="card-header">Palestrantes</span>\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            Palestrantes do evento\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6 col-lg-3>\n\n        <ion-card class="card-light-gray" (click)="schedule()">\n\n          <ion-card-header class="bold">\n\n            <i class="fa fa-list fa-17"></i>\n\n            <span class="card-header">Programação</span>\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            Programação do evento\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 col-md-6 col-lg-3>\n\n        <ion-card class="card-light-gray" (click)="interactiveSection()">\n\n          <ion-card-header class="bold">\n\n            <i class="fa fa-users fa-17"></i>\n\n            <span class="card-header">Sessão Interativa</span>\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            Perguntas e respostas para a Sessão Interativa\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-6 col-lg-3>\n\n        <ion-card class="card-light-gray" (click)="results()">\n\n          <ion-card-header class="bold">\n\n            <i class="fa fa-bar-chart fa-17"></i>\n\n            <span class="card-header">Resultados</span>\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            Respostas e resultados das Sessões Interativas\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-menu\event-menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_8__event_menu_service__["a" /* EventsService */]])
    ], EventMenuPage);
    return EventMenuPage;
}());

//# sourceMappingURL=event-menu.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angularfire2_firestore__ = __webpack_require__(155);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__node_modules_angularfire2_firestore__["AngularFirestore"]])
    ], EventInfoPage);
    return EventInfoPage;
}());

//# sourceMappingURL=event-info.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventSponsorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EventSponsorPage);
    return EventSponsorPage;
}());

//# sourceMappingURL=event-sponsor.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventSpeakerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_speaker_service__ = __webpack_require__(159);
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
    function EventSpeakerPage(camera, navCtrl, navParams, formBuilder, speakerService, loadingController) {
        var _this = this;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.speakerService = speakerService;
        this.loadingController = loadingController;
        this.allSpeakers = [
            { name: 'John Connor', detail: '-' },
            { name: 'Sarah Connor', detail: '-' },
            { name: 'Arnold Schwarzenegger', detail: '-' },
            { name: 'Linda Hamilton', detail: '-' },
            { name: 'Edward Furlong', detail: '-' },
        ];
        this.message = '';
        this.showErrorMsg = false;
        this.isDesktop = (!document.URL.startsWith('http') || document.URL.startsWith('http://localhost:8100'));
        this.loading = this.loadingController.create({
            content: 'Carregando palestrantes...'
        });
        this.loading.present();
        setTimeout(function () {
            _this.loading.dismiss();
        }, 3000);
        this.event = this.navParams.get('event');
        this.setClearFormAndImg();
    }
    EventSpeakerPage.prototype.ionViewDidLoad = function () {
        // this.getAllSpeakers();
    };
    EventSpeakerPage.prototype.getAllSpeakers = function () {
        var _this = this;
        this.speakerService.getSpeakers()
            .subscribe(function (speakers) {
            // this.allSpeakers = speakers;
            _this.dismissLoading();
        }, function (error) {
            _this.dismissLoading();
            _this.errorMessage(error);
        });
    };
    // getAllSpeakersHardCode() {
    //   this.speakerService.getSpeakersHardCode()
    //     .subscribe( speakers => {
    //       this.allSpeakers = speakers;
    //       this.dismissLoading();
    //     }, error => {
    //       this.dismissLoading();
    //       this.errorMessage(error);
    //     });
    // }
    EventSpeakerPage.prototype.errorMessage = function (error) {
        this.showErrorMsg = true;
        this.message = 'Ocorreu um erro, tente novamente...';
        console.error(error);
    };
    EventSpeakerPage.prototype.dismissLoading = function () {
        this.loading.dismiss();
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
            eventId: [this.event.eventId],
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
        // console.log('Data', this.form);
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
            selector: 'page-event-speaker',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-speaker\event-speaker.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center>{{ event?.name }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <!-- PALESTRANTES -->\n\n\n\n  <!-- componentizar esse elemento -->\n\n  <div class="new-padding">\n\n    <ion-row class="page-info">\n\n      <div col class="pt-13">Palestrantes</div>\n\n      <div col class="pr-0">\n\n        <button class="btn-add" (click)="goToAddPage()">+ add</button>\n\n      </div>\n\n    </ion-row>\n\n  </div>\n\n  <!-- -->\n\n\n\n  <div class="pd-20">\n\n    <ion-row padding *ngIf="showErrorMsg" text-center>\n\n      <span text-center>{{ message }}</span>\n\n      <!-- botão carregar novamente -->\n\n      <!-- <span>Nenhum palestrante cadastrado para este evento ainda.</span> -->\n\n    </ion-row>\n\n    <ion-grid *ngIf="allSpeakers" class="table-pattern">\n\n      <ion-row class="table-header">\n\n        <ion-col>\n\n          <strong>Nome</strong>\n\n        </ion-col>\n\n        <ion-col>\n\n          <strong>Tema</strong>\n\n        </ion-col>\n\n        <!-- <ion-col class="text-right">\n\n          <strong>Deletar</strong>\n\n        </ion-col> -->\n\n      </ion-row>\n\n      <hr />\n\n      <ion-row class="table-striped table-body" *ngFor="let speaker of allSpeakers">\n\n        <ion-col class="ellipsis">\n\n          {{ speaker.name }}\n\n        </ion-col>\n\n        <ion-col class="ellipsis">\n\n          {{ speaker.detail }}\n\n        </ion-col>\n\n        <!-- <ion-col class="text-right">\n\n          <i class="fa fa-trash-o fa-lg danger"></i>\n\n        </ion-col> -->\n\n      </ion-row>\n\n      <hr />\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <!-- CADASTRO -->\n\n  <div *ngIf="false">\n\n    <ion-item-divider color="info" text-center>\n\n      <strong>Novo palestrante</strong>\n\n    </ion-item-divider>\n\n    <form [formGroup]="form" padding>\n\n      <ion-grid fixed>\n\n        <ion-row align-items-center justify-content-center>\n\n          <ion-col col-12 col-sm-12 col-md-12>\n\n            <ion-label stacked>Foto</ion-label>\n\n            <div>\n\n              <div class="m-16">\n\n                <label for=\'speakers-photo\'>Selecione uma foto...</label>\n\n              </div>\n\n              <input type="file" id="speakers-photo" name="speakers-photo" (change)="readImg($event)">\n\n            </div>\n\n            <!-- if is Cordova -->\n\n            <!-- <div *ngIf="!isDesktop" class="mh-16">\n\n              <button type="file" ion-button color="primary" (click)="uploadImageMobile()">Selecionar foto</button>\n\n            </div> -->\n\n            <div class="mt-32" *ngIf="myphoto">\n\n              <img class="speakers-photo"src="{{ myphoto }}">\n\n            </div>\n\n          </ion-col>\n\n          <ion-col col-12 col-sm-12 col-md-12>\n\n            <ion-label stacked>Nome</ion-label>\n\n            <div class="mh-16">\n\n              <ion-input type="text" value="{{ newSpeaker?.name }}" formControlName="name"></ion-input>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col col-12 col-sm-12 col-md-12>\n\n            <ion-label stacked>Tema da Palestra</ion-label>\n\n            <div class="mh-16">\n\n              <ion-input type="text" value="{{ newSpeaker?.detail }}" formControlName="detail"></ion-input>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col col-12 col-sm-12 col-md-12>\n\n            <ion-label stacked>Currículo</ion-label>\n\n            <!-- <ion-input type="text" value="{{ newSpeaker?.resume }}" formControlName="resume"></ion-input> -->\n\n            <div class="m-16">\n\n              <div id="froala-editor" [froalaEditor] formControlName="resume"></div>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row padding>\n\n          <ion-col col-12 col-sm-12 col-md-12>\n\n            <button ion-button block (click)="save()" [disabled]="!form.valid">SALVAR INFORMAÇÕES</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-speaker\event-speaker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__event_speaker_service__["a" /* SpeakerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], EventSpeakerPage);
    return EventSpeakerPage;
}());

//# sourceMappingURL=event-speaker.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventSchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EventSchedulePage);
    return EventSchedulePage;
}());

//# sourceMappingURL=event-schedule.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventInteractiveSectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_register_questions_event_register_questions__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_speaker_event_speaker_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_interactive_section_service__ = __webpack_require__(131);
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
    function EventInteractiveSectionPage(navCtrl, navParams, formBuilder, speakerService, interactiveSectionsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.speakerService = speakerService;
        this.interactiveSectionsService = interactiveSectionsService;
        this.allSpeakers = null;
        this.allInterativeSections = null;
        this.initialLoading = true;
        this.event = this.navParams.get('event');
        this.setClearForm();
        this.getAllSpeakers();
        this.getAllInterativeSections();
    }
    EventInteractiveSectionPage.prototype.setClearForm = function () {
        this.form = this.formBuilder.group({
            eventId: [this.event.eventId],
            speakerId: ['', __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["f" /* Validators */].required],
            title: ['', __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["f" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["f" /* Validators */].required],
        });
    };
    EventInteractiveSectionPage.prototype.getAllInterativeSections = function () {
        var _this = this;
        this.interactiveSectionsService.getSections()
            .subscribe(function (response) {
            _this.allInterativeSections = response;
            _this.initialLoading = false;
        });
    };
    EventInteractiveSectionPage.prototype.getAllSpeakers = function () {
        var _this = this;
        this.speakerService.getSpeakers()
            .subscribe(function (response) {
            _this.allSpeakers = response;
        });
    };
    EventInteractiveSectionPage.prototype.save = function () {
        // console.log(this.form);
        var _this = this;
        this.interactiveSectionsService.addSection(this.form.value)
            .subscribe(function (response) {
            _this.getAllInterativeSections();
            _this.setClearForm();
        }, function (error) {
            // this.setClearForm();
        });
    };
    EventInteractiveSectionPage.prototype.goToQuestionsSection = function (chosenSession) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__event_register_questions_event_register_questions__["a" /* EventRegisterQuestionsPage */], { event: this.event, session: chosenSession });
    };
    EventInteractiveSectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-interactive-section',template:/*ion-inline-start:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-interactive-section\event-interactive-section.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center>{{ event?.name }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!-- SESSOES CADASTRADAS -->\n\n  <ion-item-divider color="info" text-center>\n\n    <strong>Sessão Interativa</strong>\n\n  </ion-item-divider>\n\n  <div padding>\n\n    <ion-row padding *ngIf="initialLoading" text-center>\n\n      <i class="fa fa-spinner fa-pulse fa-3x fa-fw m-auto"></i>\n\n    </ion-row>\n\n    <ion-row padding *ngIf="!initialLoading && allInterativeSections && allInterativeSections.length === 0" text-center>\n\n      <span>Nenhuma Sessão Interativa cadastrada até o momento.</span>\n\n    </ion-row>\n\n    <ion-grid *ngIf="!initialLoading && allInterativeSections && allInterativeSections.length > 0" class="mb-1">\n\n      <ion-row>\n\n        <ion-col>\n\n          <strong>Título</strong>\n\n        </ion-col>\n\n        <ion-col>\n\n          <strong>Descrição</strong>\n\n        </ion-col>\n\n      </ion-row>\n\n      <hr />\n\n      <div>\n\n        <ion-row class="table-striped pointer" *ngFor="let interactiveSection of allInterativeSections" (click)="goToQuestionsSection(interactiveSection)">\n\n          <ion-col class="ellipsis">\n\n            {{ interactiveSection.title }}\n\n          </ion-col>\n\n          <ion-col class="ellipsis">\n\n            {{ interactiveSection.description }}\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n      <hr />\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <!-- CADASTRAR NOVA SESSAO -->\n\n  <ion-item-divider color="info" text-center>\n\n    <strong>Cadastrar Sessão</strong>\n\n  </ion-item-divider>\n\n  <form [formGroup]="form" padding>\n\n    <ion-grid>\n\n      <ion-row align-items-center justify-content-center>\n\n        <ion-col col-12 col-sm-12 col-md-12>\n\n          <ion-label stacked>Palestrante da sessão</ion-label>\n\n          <ion-item>\n\n            <ion-select formControlName="speakerId">\n\n              <ion-option *ngFor="let speaker of allSpeakers" [value]="speaker?.id">{{ speaker?.name }}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12 col-sm-12 col-md-12>\n\n          <ion-label stacked>Título da sessão</ion-label>\n\n          <div class="mh-16">\n\n            <ion-input type="text" value="{{ newSession?.title }}" formControlName="title"></ion-input>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12 col-sm-12 col-md-12>\n\n          <ion-label stacked>Descrição</ion-label>\n\n          <div class="mh-16">\n\n            <ion-input type="text" value="{{ newSession?.description }}" formControlName="description"></ion-input>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row padding>\n\n        <ion-col col-12 col-sm-12 col-md-12>\n\n          <button ion-button block (click)="save()" [disabled]="!form.valid">SALVAR SESSÃO</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Murillo\Documents\Github\FREELAS\elo-adm\elo-adm-master\src\pages\event-interactive-section\event-interactive-section.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__event_speaker_event_speaker_service__["a" /* SpeakerService */],
            __WEBPACK_IMPORTED_MODULE_5__event_interactive_section_service__["a" /* InteractiveSectionsService */]])
    ], EventInteractiveSectionPage);
    return EventInteractiveSectionPage;
}());

//# sourceMappingURL=event-interactive-section.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment_environment__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventsService = /** @class */ (function () {
    function EventsService(http) {
        this.http = http;
    }
    EventsService.prototype.getEvents = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/events");
    };
    EventsService.prototype.getEventById = function (id) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/events/" + id);
    };
    EventsService.prototype.addEvent = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/events/", data);
    };
    EventsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], EventsService);
    return EventsService;
}());

//# sourceMappingURL=event-menu.service.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(440);

window["$"] = __WEBPACK_IMPORTED_MODULE_0_jquery__;
window["jQuery"] = __WEBPACK_IMPORTED_MODULE_0_jquery__;


Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environment_environment__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_event_menu_event_menu__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_event_info_event_info__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_event_interactive_section_event_interactive_section__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_event_schedule_event_schedule__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_event_speaker_event_speaker__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_event_sponsor_event_sponsor__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_event_register_questions_event_register_questions__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_event_results_event_results__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_event_view_question_event_view_question__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_event_view_answers_event_view_answers__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_event_ranking_event_ranking__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_event_menu_event_menu_service__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_event_speaker_event_speaker_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_event_register_questions_event_register_questions_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_event_interactive_section_event_interactive_section_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_froala_editor_js_froala_editor_pkgd_min_js__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_froala_editor_js_froala_editor_pkgd_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_froala_editor_js_froala_editor_pkgd_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angular_froala_wysiwyg__ = __webpack_require__(514);
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
                __WEBPACK_IMPORTED_MODULE_25__pages_event_ranking_event_ranking__["a" /* EventRankingPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_event_register_questions_event_register_questions__["a" /* EventRegisterQuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_event_results_event_results__["a" /* EventResultsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_event_schedule_event_schedule__["a" /* EventSchedulePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_event_speaker_event_speaker__["a" /* EventSpeakerPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_event_sponsor_event_sponsor__["a" /* EventSponsorPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_event_view_answers_event_view_answers__["a" /* EventViewAnswersPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_event_view_question_event_view_question__["a" /* EventViewQuestionPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/event-ranking/event-ranking.module#EventRankingPageModule', name: 'EventRankingPage', segment: 'event-ranking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-register-questions/event-register-questions.module#EventRegisterQuestionsPageModule', name: 'EventRegisterQuestionsPage', segment: 'event-register-questions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-view-answers/event-view-answers.module#EventViewAnswersPageModule', name: 'EventViewAnswersPage', segment: 'event-view-answers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-view-question/event-view-question.module#EventViewQuestionPageModule', name: 'EventViewQuestionPage', segment: 'event-view-question', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-results/event-results.module#EventResultsPageModule', name: 'EventResultsPage', segment: 'event-results', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_8__environment_environment__["b" /* Environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_31_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_31_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot(),
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
                __WEBPACK_IMPORTED_MODULE_25__pages_event_ranking_event_ranking__["a" /* EventRankingPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_event_register_questions_event_register_questions__["a" /* EventRegisterQuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_event_results_event_results__["a" /* EventResultsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_event_schedule_event_schedule__["a" /* EventSchedulePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_event_speaker_event_speaker__["a" /* EventSpeakerPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_event_sponsor_event_sponsor__["a" /* EventSponsorPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_event_view_answers_event_view_answers__["a" /* EventViewAnswersPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_event_view_question_event_view_question__["a" /* EventViewQuestionPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_26__pages_event_menu_event_menu_service__["a" /* EventsService */],
                __WEBPACK_IMPORTED_MODULE_29__pages_event_interactive_section_event_interactive_section_service__["a" /* InteractiveSectionsService */],
                __WEBPACK_IMPORTED_MODULE_28__pages_event_register_questions_event_register_questions_service__["a" /* QuestionsService */],
                __WEBPACK_IMPORTED_MODULE_27__pages_event_speaker_event_speaker_service__["a" /* SpeakerService */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(288);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 68:
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

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment_environment__ = __webpack_require__(68);
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
    function QuestionsService(http) {
        this.http = http;
    }
    QuestionsService.prototype.getQuestions = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/questions");
    };
    QuestionsService.prototype.getQuestionById = function (id) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/questions/" + id);
    };
    QuestionsService.prototype.getQuestionsBySessionId = function (sessionId) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/questions/" + sessionId);
    };
    QuestionsService.prototype.getGraphQuestions = function (questionId) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/questions/" + questionId + "/graph");
    };
    QuestionsService.prototype.addQuestion = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/questions/", data);
    };
    QuestionsService.prototype.activateQuestion = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].base + "/questions/" + data.id + "/activate", data);
    };
    QuestionsService.prototype.getQuestionsHardCode = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environment_environment__["a" /* API */].dev + "/questions.json");
    };
    QuestionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], QuestionsService);
    return QuestionsService;
}());

//# sourceMappingURL=event-register-questions.service.js.map

/***/ })

},[307]);
//# sourceMappingURL=main.js.map
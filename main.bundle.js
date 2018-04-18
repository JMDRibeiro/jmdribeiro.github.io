webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_rotas__ = __webpack_require__("../../../../../src/app/app.rotas.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inserir_questao_inserir_questao_component__ = __webpack_require__("../../../../../src/app/inserir-questao/inserir-questao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cabecalho_cabecalho_component__ = __webpack_require__("../../../../../src/app/cabecalho/cabecalho.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__listar_todas_questoes_crud_listar_todas_questoes_crud_component__ = __webpack_require__("../../../../../src/app/listar-todas-questoes-crud/listar-todas-questoes-crud.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__criar_lista_questoes_criar_lista_questoes_component__ = __webpack_require__("../../../../../src/app/criar-lista-questoes/criar-lista-questoes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__responder_questao_responder_questao_component__ = __webpack_require__("../../../../../src/app/responder-questao/responder-questao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__cadastro_cadastro_component__ = __webpack_require__("../../../../../src/app/cadastro/cadastro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__perfil_perfil_component__ = __webpack_require__("../../../../../src/app/perfil/perfil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__corrigir_questoes_corrigir_questoes_component__ = __webpack_require__("../../../../../src/app/corrigir-questoes/corrigir-questoes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__questao_service__ = __webpack_require__("../../../../../src/app/questao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__usuario_service_service__ = __webpack_require__("../../../../../src/app/usuario-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__questao_respondida_service__ = __webpack_require__("../../../../../src/app/questao-respondida.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__turma_service__ = __webpack_require__("../../../../../src/app/turma.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__tag_service__ = __webpack_require__("../../../../../src/app/tag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_primeng_components_common_messageservice__ = __webpack_require__("../../../../primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_primeng_components_common_messageservice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__listar_questoes_listar_questoes_component__ = __webpack_require__("../../../../../src/app/listar-questoes/listar-questoes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__listar_questoes_respondidas_listar_questoes_respondidas_component__ = __webpack_require__("../../../../../src/app/listar-questoes-respondidas/listar-questoes-respondidas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__listar_corrigidas_listar_corrigidas_component__ = __webpack_require__("../../../../../src/app/listar-corrigidas/listar-corrigidas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__correcao_correcao_component__ = __webpack_require__("../../../../../src/app/correcao/correcao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__listas_questoes_crud_listas_questoes_crud_component__ = __webpack_require__("../../../../../src/app/listas-questoes-crud/listas-questoes-crud.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__lista_questoes_service__ = __webpack_require__("../../../../../src/app/lista-questoes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__listar_listas_questoes_listar_listas_questoes_component__ = __webpack_require__("../../../../../src/app/listar-listas-questoes/listar-listas-questoes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__listar_listas_alunos_listar_listas_alunos_component__ = __webpack_require__("../../../../../src/app/listar-listas-alunos/listar-listas-alunos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__lista_questoes_alunos_lista_questoes_alunos_component__ = __webpack_require__("../../../../../src/app/lista-questoes-alunos/lista-questoes-alunos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__inserir_turma_inserir_turma_component__ = __webpack_require__("../../../../../src/app/inserir-turma/inserir-turma.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__listar_todas_crud_turma_listar_todas_crud_turma_component__ = __webpack_require__("../../../../../src/app/listar-todas-crud-turma/listar-todas-crud-turma.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__gerenciar_tags_gerenciar_tags_component__ = __webpack_require__("../../../../../src/app/gerenciar-tags/gerenciar-tags.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__listar_dados_alunos_listar_dados_alunos_component__ = __webpack_require__("../../../../../src/app/listar-dados-alunos/listar-dados-alunos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__dados_aluno_dados_aluno_component__ = __webpack_require__("../../../../../src/app/dados-aluno/dados-aluno.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__environments_firebase_config__ = __webpack_require__("../../../../../src/environments/firebase.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__inserir_questao_inserir_questao_component__["a" /* InserirQuestaoComponent */],
                __WEBPACK_IMPORTED_MODULE_8__cabecalho_cabecalho_component__["a" /* CabecalhoComponent */],
                __WEBPACK_IMPORTED_MODULE_9__listar_todas_questoes_crud_listar_todas_questoes_crud_component__["a" /* ListarTodasQuestoesCRUDComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__criar_lista_questoes_criar_lista_questoes_component__["a" /* CriarListaQuestoesComponent */],
                __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__responder_questao_responder_questao_component__["a" /* ResponderQuestaoComponent */],
                __WEBPACK_IMPORTED_MODULE_14__cadastro_cadastro_component__["a" /* CadastroComponent */],
                __WEBPACK_IMPORTED_MODULE_15__perfil_perfil_component__["a" /* PerfilComponent */],
                __WEBPACK_IMPORTED_MODULE_16__corrigir_questoes_corrigir_questoes_component__["a" /* CorrigirQuestoesComponent */],
                __WEBPACK_IMPORTED_MODULE_23__listar_questoes_listar_questoes_component__["a" /* ListarQuestoesComponent */],
                __WEBPACK_IMPORTED_MODULE_24__listar_questoes_respondidas_listar_questoes_respondidas_component__["a" /* ListarQuestoesRespondidasComponent */],
                __WEBPACK_IMPORTED_MODULE_25__listar_corrigidas_listar_corrigidas_component__["a" /* ListarCorrigidasComponent */],
                __WEBPACK_IMPORTED_MODULE_26__correcao_correcao_component__["a" /* CorrecaoComponent */],
                __WEBPACK_IMPORTED_MODULE_27__listas_questoes_crud_listas_questoes_crud_component__["a" /* ListasQuestoesCrudComponent */],
                __WEBPACK_IMPORTED_MODULE_29__listar_listas_questoes_listar_listas_questoes_component__["a" /* ListarListasQuestoesComponent */],
                __WEBPACK_IMPORTED_MODULE_30__listar_listas_alunos_listar_listas_alunos_component__["a" /* ListarListasAlunosComponent */],
                __WEBPACK_IMPORTED_MODULE_31__lista_questoes_alunos_lista_questoes_alunos_component__["a" /* ListaQuestoesAlunosComponent */],
                __WEBPACK_IMPORTED_MODULE_32__inserir_turma_inserir_turma_component__["a" /* InserirTurmaComponent */],
                __WEBPACK_IMPORTED_MODULE_33__listar_todas_crud_turma_listar_todas_crud_turma_component__["a" /* ListarTodasCrudTurmaComponent */],
                __WEBPACK_IMPORTED_MODULE_34__gerenciar_tags_gerenciar_tags_component__["a" /* GerenciarTagsComponent */],
                __WEBPACK_IMPORTED_MODULE_35__listar_dados_alunos_listar_dados_alunos_component__["a" /* ListarDadosAlunosComponent */],
                __WEBPACK_IMPORTED_MODULE_36__dados_aluno_dados_aluno_component__["a" /* DadosAlunoComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_37_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_38__environments_firebase_config__["a" /* FireBaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_39_angularfire2_firestore__["b" /* AngularFirestoreModule */].enablePersistence(),
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["PickListModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ListboxModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["MenubarModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["RadioButtonModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["MegaMenuModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["AccordionModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["PasswordModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["PanelMenuModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_rotas__["a" /* rota */],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["InputTextareaModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TabMenuModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["MenubarModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DropdownModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17__questao_service__["a" /* QuestaoService */], __WEBPACK_IMPORTED_MODULE_18__usuario_service_service__["a" /* UsuarioService */], __WEBPACK_IMPORTED_MODULE_22_primeng_components_common_messageservice__["MessageService"], __WEBPACK_IMPORTED_MODULE_19__questao_respondida_service__["a" /* QuestaoRespondidaService */], __WEBPACK_IMPORTED_MODULE_28__lista_questoes_service__["a" /* ListaQuestoesService */], __WEBPACK_IMPORTED_MODULE_20__turma_service__["a" /* TurmaService */], __WEBPACK_IMPORTED_MODULE_21__tag_service__["a" /* TagService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.rotas.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rota; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__responder_questao_responder_questao_component__ = __webpack_require__("../../../../../src/app/responder-questao/responder-questao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inserir_questao_inserir_questao_component__ = __webpack_require__("../../../../../src/app/inserir-questao/inserir-questao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listar_todas_questoes_crud_listar_todas_questoes_crud_component__ = __webpack_require__("../../../../../src/app/listar-todas-questoes-crud/listar-todas-questoes-crud.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listas_questoes_crud_listas_questoes_crud_component__ = __webpack_require__("../../../../../src/app/listas-questoes-crud/listas-questoes-crud.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cadastro_cadastro_component__ = __webpack_require__("../../../../../src/app/cadastro/cadastro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__criar_lista_questoes_criar_lista_questoes_component__ = __webpack_require__("../../../../../src/app/criar-lista-questoes/criar-lista-questoes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__perfil_perfil_component__ = __webpack_require__("../../../../../src/app/perfil/perfil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__corrigir_questoes_corrigir_questoes_component__ = __webpack_require__("../../../../../src/app/corrigir-questoes/corrigir-questoes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__listar_questoes_listar_questoes_component__ = __webpack_require__("../../../../../src/app/listar-questoes/listar-questoes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__listar_questoes_respondidas_listar_questoes_respondidas_component__ = __webpack_require__("../../../../../src/app/listar-questoes-respondidas/listar-questoes-respondidas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__listar_corrigidas_listar_corrigidas_component__ = __webpack_require__("../../../../../src/app/listar-corrigidas/listar-corrigidas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__correcao_correcao_component__ = __webpack_require__("../../../../../src/app/correcao/correcao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__listar_listas_alunos_listar_listas_alunos_component__ = __webpack_require__("../../../../../src/app/listar-listas-alunos/listar-listas-alunos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__lista_questoes_alunos_lista_questoes_alunos_component__ = __webpack_require__("../../../../../src/app/lista-questoes-alunos/lista-questoes-alunos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__inserir_turma_inserir_turma_component__ = __webpack_require__("../../../../../src/app/inserir-turma/inserir-turma.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__listar_todas_crud_turma_listar_todas_crud_turma_component__ = __webpack_require__("../../../../../src/app/listar-todas-crud-turma/listar-todas-crud-turma.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__gerenciar_tags_gerenciar_tags_component__ = __webpack_require__("../../../../../src/app/gerenciar-tags/gerenciar-tags.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__listar_dados_alunos_listar_dados_alunos_component__ = __webpack_require__("../../../../../src/app/listar-dados-alunos/listar-dados-alunos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__dados_aluno_dados_aluno_component__ = __webpack_require__("../../../../../src/app/dados-aluno/dados-aluno.component.ts");






















var APP_ROTAS = [
    { path: 'turma/inserir', component: __WEBPACK_IMPORTED_MODULE_17__inserir_turma_inserir_turma_component__["a" /* InserirTurmaComponent */] },
    { path: 'turma/gerenciar', component: __WEBPACK_IMPORTED_MODULE_18__listar_todas_crud_turma_listar_todas_crud_turma_component__["a" /* ListarTodasCrudTurmaComponent */] },
    { path: 'turma/editar/:id', component: __WEBPACK_IMPORTED_MODULE_17__inserir_turma_inserir_turma_component__["a" /* InserirTurmaComponent */] },
    { path: 'tag/gerenciar', component: __WEBPACK_IMPORTED_MODULE_19__gerenciar_tags_gerenciar_tags_component__["a" /* GerenciarTagsComponent */] },
    { path: 'responder', component: __WEBPACK_IMPORTED_MODULE_1__responder_questao_responder_questao_component__["a" /* ResponderQuestaoComponent */] },
    { path: 'inserir', component: __WEBPACK_IMPORTED_MODULE_2__inserir_questao_inserir_questao_component__["a" /* InserirQuestaoComponent */] },
    { path: 'editar/:id', component: __WEBPACK_IMPORTED_MODULE_2__inserir_questao_inserir_questao_component__["a" /* InserirQuestaoComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'listar-todas-crud', component: __WEBPACK_IMPORTED_MODULE_3__listar_todas_questoes_crud_listar_todas_questoes_crud_component__["a" /* ListarTodasQuestoesCRUDComponent */] },
    { path: 'listas-questoes-crud', component: __WEBPACK_IMPORTED_MODULE_4__listas_questoes_crud_listas_questoes_crud_component__["a" /* ListasQuestoesCrudComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'cadastro', component: __WEBPACK_IMPORTED_MODULE_6__cadastro_cadastro_component__["a" /* CadastroComponent */] },
    { path: 'criar-lista', component: __WEBPACK_IMPORTED_MODULE_7__criar_lista_questoes_criar_lista_questoes_component__["a" /* CriarListaQuestoesComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
    { path: 'home/:id', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
    { path: 'perfil', component: __WEBPACK_IMPORTED_MODULE_9__perfil_perfil_component__["a" /* PerfilComponent */] },
    { path: 'corrigir', component: __WEBPACK_IMPORTED_MODULE_12__listar_questoes_respondidas_listar_questoes_respondidas_component__["a" /* ListarQuestoesRespondidasComponent */] },
    { path: 'listar-questoes/:tipoListagem', component: __WEBPACK_IMPORTED_MODULE_11__listar_questoes_listar_questoes_component__["a" /* ListarQuestoesComponent */] },
    { path: 'corrigir/:id', component: __WEBPACK_IMPORTED_MODULE_10__corrigir_questoes_corrigir_questoes_component__["a" /* CorrigirQuestoesComponent */] },
    { path: 'corrigidas', component: __WEBPACK_IMPORTED_MODULE_13__listar_corrigidas_listar_corrigidas_component__["a" /* ListarCorrigidasComponent */] },
    { path: 'correcao/:id', component: __WEBPACK_IMPORTED_MODULE_14__correcao_correcao_component__["a" /* CorrecaoComponent */] },
    { path: 'responder/:id', component: __WEBPACK_IMPORTED_MODULE_1__responder_questao_responder_questao_component__["a" /* ResponderQuestaoComponent */] },
    { path: 'editar-lista-questoes/:id', component: __WEBPACK_IMPORTED_MODULE_7__criar_lista_questoes_criar_lista_questoes_component__["a" /* CriarListaQuestoesComponent */] },
    { path: 'listar-listas', component: __WEBPACK_IMPORTED_MODULE_15__listar_listas_alunos_listar_listas_alunos_component__["a" /* ListarListasAlunosComponent */] },
    { path: 'lista-questoes-aluno/:id', component: __WEBPACK_IMPORTED_MODULE_16__lista_questoes_alunos_lista_questoes_alunos_component__["a" /* ListaQuestoesAlunosComponent */] },
    { path: 'listar-dados-alunos', component: __WEBPACK_IMPORTED_MODULE_20__listar_dados_alunos_listar_dados_alunos_component__["a" /* ListarDadosAlunosComponent */] },
    { path: 'dados-aluno/:id', component: __WEBPACK_IMPORTED_MODULE_21__dados_aluno_dados_aluno_component__["a" /* DadosAlunoComponent */] },
    { path: 'gerenciar-tags', component: __WEBPACK_IMPORTED_MODULE_19__gerenciar_tags_gerenciar_tags_component__["a" /* GerenciarTagsComponent */] },
];
var rota = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(APP_ROTAS);
//# sourceMappingURL=app.rotas.js.map

/***/ }),

/***/ "../../../../../src/app/cabecalho/cabecalho.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cabecalho/cabecalho.component.html":
/***/ (function(module, exports) {

module.exports = "<div style= \"margin-bottom: -35px; margin-top: -50px\" class=\"jumbotron bg-danger text-white jumbotron-fluid\" routerLink=\"/home\">\n<h2 class=\"text-center\"><strong>RPG Creator</strong></h2>\n<h4 class=\"text-center\"><code>Programar, Jogar e Estudar</code></h4>\n</div>\n\n\n<p-menubar [model]=\"items\"></p-menubar>\n"

/***/ }),

/***/ "../../../../../src/app/cabecalho/cabecalho.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabecalhoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__usuario_service_service__ = __webpack_require__("../../../../../src/app/usuario-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CabecalhoComponent = (function () {
    function CabecalhoComponent(usuarioService) {
        this.usuarioService = usuarioService;
        /*
                  this.items = [
                   {label: 'Gerenciar Missões(P)', routerLink:['/listar-todas-crud'] },
                   {label: 'Inserir missões(P)', routerLink:['/inserir'] },
                   {label: 'Responder missões(A)', routerLink:['/listar-questoes/responder'] },
                   {label: 'Corrigir missões(P)', routerLink:['/corrigir'] },
                   {label: 'Missões corrigidas(A)', routerLink:['/corrigidas'] },
                   {label: 'Criar campeonato', icon: 'fa-calendar',routerLink:['/criar-lista']},
                   {label: 'Materiais', icon: 'fa-book',routerLink:['/login']},
                   {label: 'Perfil', icon: 'fa-support',routerLink:['/perfil']},
                   {label: 'Fale conosco', icon: 'fa-twitter',routerLink:['/corrigir']}
              ];
              */
        this.menuAluno = [
            { label: 'Questões corrigidas', routerLink: ['/corrigidas'] },
            { label: 'Listas de questões', routerLink: ['/listar-listas'] },
            { label: 'Materiais', icon: 'fa-book', routerLink: ['/home'] },
            { label: 'Perfil', icon: 'fa-support', routerLink: ['/perfil'] },
            { label: 'Fale conosco', icon: 'fa-twitter', routerLink: ['/home'] },
            { label: 'Sair', icon: 'fa-twitter', routerLink: ['/login'] }
        ];
        this.menuProfessor = [
            {
                label: 'Questões', icon: 'fa-book',
                items: [
                    { label: 'Gerenciar questões', routerLink: ['/listar-todas-crud'] },
                    { label: 'Inserir questões', routerLink: ['/inserir'] },
                    { label: 'Corrigir questões', routerLink: ['/corrigir'] },
                ]
            },
            {
                label: 'Listas', icon: 'fa-book',
                items: [
                    { label: 'Gerenciar listas', routerLink: ['/listas-questoes-crud'] },
                    { label: 'Inserir listas', routerLink: ['/criar-lista'] },
                ]
            },
            {
                label: 'Turma', icon: 'fa fa-users',
                items: [
                    { label: 'Gerenciar turmas', routerLink: ['/turma/gerenciar'] },
                    { label: 'Inserir turmas', routerLink: ['/turma/inserir'] },
                ]
            },
            {
                label: 'Relatórios', icon: 'fa-line-chart',
                items: [
                    { label: 'Dados dos turmas', routerLink: ['/listar-dados-alunos'] },
                ]
            },
            {
                label: 'Tags', icon: 'fa-flag', routerLink: ['/gerenciar-tags']
            },
            //fa-book ; fa-graduation-cap
            { label: 'Materiais', icon: 'fa-folder-open', routerLink: ['/login'] },
            { label: 'Perfil', icon: 'fa-support', routerLink: ['/perfil'] },
            { label: 'Fale conosco', icon: 'fa-comments-o', routerLink: ['/corrigir'] },
            { label: 'Sair', icon: 'fa-sign-out ', routerLink: ['/login'] }
        ];
    }
    CabecalhoComponent.prototype.ngOnInit = function () {
        //de acordo com o tipo de usuário, determinar qual será o seu Menu
        if (this.usuarioService.usuarioLogado.tipo == 1) {
            this.items = this.menuProfessor;
        }
        else {
            this.items = this.menuAluno;
        }
    };
    CabecalhoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cabecalho',
            template: __webpack_require__("../../../../../src/app/cabecalho/cabecalho.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cabecalho/cabecalho.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__usuario_service_service__["a" /* UsuarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__usuario_service_service__["a" /* UsuarioService */]) === "function" && _a || Object])
    ], CabecalhoComponent);
    return CabecalhoComponent;
    var _a;
}());

//# sourceMappingURL=cabecalho.component.js.map

/***/ }),

/***/ "../../../../../src/app/cadastro/cadastro.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cadastro/cadastro.component.html":
/***/ (function(module, exports) {

module.exports = "<div style= \"margin-bottom: -5px\" class=\"jumbotron bg-danger text-white jumbotron-fluid\">\n<h1 class=\"text-center\"><strong>RPG Creator</strong></h1>\n<h3 class=\"text-center\"><code>Programar, Jogar e Estudar</code></h3>\n</div>\n<div class=\"container\" style=\"width: 600px;\">\n<router-outlet></router-outlet>\n<h2><strong>Não perca tempo, faça hoje seu RPG!</strong></h2><br>\n<form #meuForm=\"ngForm\" class=\"form-group\">\n    <input type=\"text\"class=\"input form-control\" placeholder=\"Nome Completo\" type=\"text\" name=\"nomeCompleto\" [(ngModel)] = \"this.usuario.nomeCompleto\" required><br>\n    <input type=\"text\"class=\"input form-control\" placeholder=\"Nickname\" type=\"text\" name=\"titulo\" [(ngModel)] = \"this.usuario.nomeUsuario\" required><br>\n    <input type=\"text\"class=\"input form-control\" placeholder=\"Email\" type=\"text\" name=\"enunciado\" [(ngModel)] = \"this.usuario.email\" required><br> \n    <input type=\"text\"class=\"input form-control\" placeholder=\"Senha\" type=\"text\" name=\"senha\" [(ngModel)] = \"this.usuario.senha\" required> <br>\n    <p-dropdown [options]=\"tiposUsuario\" [(ngModel)]=\"usuario.tipo\" placeholder=\"Selecione seu tipo de usuário\" name=\"tipoUsuario\"></p-dropdown>\n    <button class=\"btn btn-success\" [disabled]=\"!meuForm.valid\" style=\"float:right\" (click)=\"cadastrarUsuario()\" routerLink=\"/login\">Cadastrar-se</button>\n</form>\n<p-growl [(value)]=\"msgs\"></p-growl>\nJá está cadastrado? Clique <a href=\"/\">aqui</a> e siga para a tela de login!<br><br><br>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/cadastro/cadastro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Usuario__ = __webpack_require__("../../../../../src/app/models/Usuario.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuario_service_service__ = __webpack_require__("../../../../../src/app/usuario-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice__ = __webpack_require__("../../../../primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CadastroComponent = (function () {
    function CadastroComponent(usuarioService) {
        this.usuarioService = usuarioService;
        this.msgs = [];
        this.tiposUsuario = [];
        this.usuario = new __WEBPACK_IMPORTED_MODULE_1__models_Usuario__["a" /* Usuario */]();
        this.tiposUsuario = [];
        this.tiposUsuario.push({ label: 'Aluno', value: 0 });
        this.tiposUsuario.push({ label: 'Professor', value: 1 });
    }
    CadastroComponent.prototype.ngOnInit = function () {
    };
    CadastroComponent.prototype.cadastrarUsuario = function () {
        var _this = this;
        console.log(this.usuario.tipo);
        var retorno = this.usuarioService.insertOnFirebase(this.usuario);
        retorno.then(function (resultado) {
            _this.usuario.id = resultado.id;
        });
        console.log("id gerado pelo FireBase : " + this.usuario.id);
        console.log("Cadastrado!");
    };
    CadastroComponent.prototype.showSuccess = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Cadastrado com sucesso!', detail: 'Seja bem-vindo ao RPG Creator!' });
    };
    CadastroComponent.prototype.jaEstaCadastrado = function () {
    };
    CadastroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cadastro',
            template: __webpack_require__("../../../../../src/app/cadastro/cadastro.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cadastro/cadastro.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice__["MessageService"]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__usuario_service_service__["a" /* UsuarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__usuario_service_service__["a" /* UsuarioService */]) === "function" && _a || Object])
    ], CadastroComponent);
    return CadastroComponent;
    var _a;
}());

//# sourceMappingURL=cadastro.component.js.map

/***/ }),

/***/ "../../../../../src/app/correcao/correcao.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/correcao/correcao.component.html":
/***/ (function(module, exports) {

module.exports = "<app-cabecalho></app-cabecalho>\n<div class=\"container\">\n<router-outlet></router-outlet>\n<br>\n<h4 class=\"text-center\"><strong>{{questaoRespondida.questao.titulo}}</strong></h4>\n<strong>Nivel de dificuldade : {{questaoRespondida.questao.nivelDificuldade}} </strong><br><br>\n<div class=\"card\">\n  <div class=\"card-body\">\n      <h5>{{questaoRespondida.questao.enunciado}}</h5>\n  </div>\n</div><br>\n\n<table class=\"table table-bordered\"> \n<thead>\n    <tr>\n      <th style=\"width: 550px;\" class=\"text-center\">{{questaoRespondida.questao.retornosEsperados[0].entrada}}</th>\n      <th style=\"width: 550px;\" class=\"text-center\">{{questaoRespondida.questao.retornosEsperados[0].saida}}</th>\n    </tr>\n </thead>   \n\n  <tr>\n    <td> {{questaoRespondida.questao.retornosEsperados[0].entrada}}</td>\n    <td> {{questaoRespondida.questao.retornosEsperados[0].saida}}</td>\n  </tr> \n\n  <tr>\n    <td> {{questaoRespondida.questao.retornosEsperados[1].entrada}}</td>\n    <td> {{questaoRespondida.questao.retornosEsperados[1].saida}}</td>\n  </tr>\n\n  <tr>\n    <td> {{questaoRespondida.questao.retornosEsperados[2].saida}}</td>\n    <td> {{questaoRespondida.questao.retornosEsperados[2].saida}}</td>\n  </tr>\n</table><br>\n  <strong>Sua resposta:</strong><br>\n  <div class=\"card\">\n  <div class=\"card-body\">\n    {{questaoRespondida.resposta}}\n  </div>\n  </div>\n<br>\n<strong>Comentários:</strong><br>\n  <div class=\"card\">\n  <div class=\"card-body\">\n    {{questaoRespondida.comentario}}\n  </div>\n  </div>\n  <br>\n  <button class=\"btn btn-success \"  style=\"float:left\">Tentar novamente</button>\n  <button class=\"btn btn-success\"   style=\"float:right\"routerLink=\"/corrigidas\" >Ver outras correções</button>\n"

/***/ }),

/***/ "../../../../../src/app/correcao/correcao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorrecaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_QuestaoRespondida__ = __webpack_require__("../../../../../src/app/models/QuestaoRespondida.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questao_respondida_service__ = __webpack_require__("../../../../../src/app/questao-respondida.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questao_service__ = __webpack_require__("../../../../../src/app/questao.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CorrecaoComponent = (function () {
    function CorrecaoComponent(route, questaoRespondidaService, questaoService, router) {
        this.route = route;
        this.questaoRespondidaService = questaoRespondidaService;
        this.questaoService = questaoService;
        this.router = router;
        this.questaoRespondida = new __WEBPACK_IMPORTED_MODULE_1__models_QuestaoRespondida__["a" /* QuestaoRespondida */]();
        this.questaoRespondida.id = this.route.snapshot.params['id'];
        this.questaoRespondida = this.questaoRespondidaService.getById(this.questaoRespondida);
        this.questaoRespondida.questao = this.questaoService.getById(this.questaoRespondida.questao);
    }
    CorrecaoComponent.prototype.ngOnInit = function () { };
    CorrecaoComponent.prototype.enviar = function () {
        this.questaoRespondida.foiCorrigida = true;
        console.log(this.questaoRespondida);
        this.router.navigate(['/corrigir']);
    };
    CorrecaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-correcao',
            template: __webpack_require__("../../../../../src/app/correcao/correcao.component.html"),
            styles: [__webpack_require__("../../../../../src/app/correcao/correcao.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__questao_respondida_service__["a" /* QuestaoRespondidaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__questao_respondida_service__["a" /* QuestaoRespondidaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__questao_service__["a" /* QuestaoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__questao_service__["a" /* QuestaoService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _d || Object])
    ], CorrecaoComponent);
    return CorrecaoComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=correcao.component.js.map

/***/ }),

/***/ "../../../../../src/app/corrigir-questoes/corrigir-questoes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/corrigir-questoes/corrigir-questoes.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Depois adicionar Pontuação, Nível e Assunto-->\n<app-cabecalho></app-cabecalho>  \n<div class=\"container\">\n<router-outlet></router-outlet>\n<h4 class=\"text-center\t\"><strong> {{questaoRespondida.questao.titulo}}</strong></h4> <!--questaoRespondida.questao.titulo-->\n<strong>Nivel de dificuldade : {{questaoRespondida.questao.nivelDificuldade}}</strong><br><br> <!--questaoRespondida.questao.nivelDificuldade-->\n<div class=\"card\">\n  <div class=\"card-body\">\n      <h5>{{questaoRespondida.questao.enunciado}}</h5><!--questaoRespondida.questao.enunciado-->\n  </div>\n</div><br>\n\n<table class=\"table table-bordered\"> \n<thead>\n    <tr>\n      <th style=\"width: 550px;\" class=\"text-center\">Entrada</th>\n      <th style=\"width: 550px;\" class=\"text-center\">Saída</th>\n    </tr>\n </thead>   \n\n  <tr>\n    <td> {{questaoRespondida.questao.retornosEsperados[0].entrada}}</td><!--questaoRespondida.questao.retornosEsperados[0].entrada-->\n    <td> {{questaoRespondida.questao.retornosEsperados[0].saida}}</td><!--questaoRespondida.questao.retornosEsperados[0].saida-->\n  </tr> \n\n  <tr>\n    <td> {{questaoRespondida.questao.retornosEsperados[1].entrada}}</td><!--questaoRespondida.questao.retornosEsperados[1].entrada-->\n    <td> {{questaoRespondida.questao.retornosEsperados[1].saida}}</td><!--questaoRespondida.questao.retornosEsperados[1].saida-->\n  </tr>\n\n  <tr>\n    <td> {{questaoRespondida.questao.retornosEsperados[2].entrada}}</td><!--questaoRespondida.questao.retornosEsperados[2].entrada-->\n    <td> {{questaoRespondida.questao.retornosEsperados[2].saida}}</td><!--questaoRespondida.questao.retornosEsperados[2].saida-->\n  </tr>\n</table>\n  \n<div>\n<h5><strong>Resposta do aluno:</strong></h5>\n  <div class=\"card\">\n  <div class=\"card-body\">\n      <h5>{{questaoRespondida.resposta}}</h5><!--questaoRespondida.questao.resposta-->\n  </div>\n</div><br> \n</div>\n<form #correcao=\"ngForm\">\n      <div required>\n        <p-radioButton name=\"group1\" value=\"true\" label=\"Acertou\" [(ngModel)]=\"questaoRespondida.acertou\" inputId=\"opt1\"></p-radioButton>   \n        <p-radioButton name=\"group1\" value=\"false\" label=\"Errou\" [(ngModel)]=\"questaoRespondida.acertou\" inputId=\"opt2\"></p-radioButton><br>\n      </div><br>\n        <button class=\"btn btn-success float:left\" (click)=\"addComent()\"><h5>Add Comentário</h5></button>\n        <button class=\"btn btn-success float:right\"  [disabled]=\"(correcao.valid && this.entrar)\"  (click)=\"enviar()\"><h5>Enviar correção</h5></button><br><br>\n        <form *ngIf=\"addComentario\" #meuForm=\"ngForm\">\n            <textarea rows=\"5\" cols=\"155\" [(ngModel)]=\"questaoRespondida.comentario\" name=\"comentario\"pInputTextarea></textarea><br>\n        </form>\n    </form>\n</div>\n  \n<!--\n<div class=\"container\">\n<router-outlet></router-outlet>\n<h3 class=\"centralizado\">Questões para corrigir </h3>\n    <br>\n    <div style=\"width: 1500px;\" class=\"container\">\n    <table>\n    <thead>\n    <tr>\n      <th style=\"width: 30px;\"></th>\n      <th style=\"width: 1000px;\"></th>\n    </tr>\n  </thead>\n  <tbody>\n      <tr class=\"border\" *ngFor=\"let questaoRespondida of questoeRespondidas\">\n        <td></td>\n        ser \"imparcial\"\n        <td>  \n          <br>      \n            <p-accordion>\n                <p-accordionTab header=\"{{questaoRespondida}}\">\n                  Aqui estará o enunciado da Questão\n                </p-accordionTab>\n            </p-accordion>\n            <div class=\"card\">\n            <div class=\"card-body\">\n                <h6>Aqui estará a resposta do aluno</h6>\n            </div>\n            </div><br>\n            \n              <div><p-radioButton name=\"group1\" value=\"true\" label=\"Acertou\" [(ngModel)]=\"val1\" inputId=\"opt1\"></p-radioButton>   \n                  <p-radioButton name=\"group1\" value=\"true\" label=\"Errou\" [(ngModel)]=\"val1\" inputId=\"opt1\"></p-radioButton><br>\n              </div><br>\n              <button class=\"btn btn-outline-dark\" (click)=\"addComentario = !addComentario\">Add comentário</button>\n              <button class=\"btn btn-outline-dark\">Enviar correção</button><br><br>\n              <form *ngIf=\"addComentario\" #meuForm=\"ngForm\">\n                    <textarea rows=\"3\" cols=\"135\" [(ngModel)]=\"questaoRespondida.comentario\" name=\"comentario\"pInputTextarea></textarea>\n                    <br>\n              </form>\n              </td>   \n        \n      </tr>\n  </tbody>    \n    </table>\n    \n    <br>\n    </div>\n</div>\n    <button type=\"button\" pButton (click)=\"showInfo()\" label=\"Info\" class=\"\">Lá </button>\n-->\n"

/***/ }),

/***/ "../../../../../src/app/corrigir-questoes/corrigir-questoes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorrigirQuestoesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_QuestaoRespondida__ = __webpack_require__("../../../../../src/app/models/QuestaoRespondida.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questao_respondida_service__ = __webpack_require__("../../../../../src/app/questao-respondida.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CorrigirQuestoesComponent = (function () {
    function CorrigirQuestoesComponent(route, questaoRespondidaService, router) {
        this.route = route;
        this.questaoRespondidaService = questaoRespondidaService;
        this.router = router;
        this.questaoRespondida = new __WEBPACK_IMPORTED_MODULE_1__models_QuestaoRespondida__["a" /* QuestaoRespondida */]();
        this.addComentario = false;
        this.questaoRespondida.id = this.route.snapshot.params['id'];
        this.questaoRespondida = this.questaoRespondidaService.getById(this.questaoRespondida);
    }
    CorrigirQuestoesComponent.prototype.ngOnInit = function () { };
    CorrigirQuestoesComponent.prototype.enviar = function () {
        this.questaoRespondida.foiCorrigida = true;
        console.log(this.questaoRespondida);
        this.router.navigate(['/corrigir']);
    };
    CorrigirQuestoesComponent.prototype.addComent = function () {
        console.log("Add comentário");
        this.addComentario = !this.addComentario;
    };
    CorrigirQuestoesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-corrigir-questoes',
            template: __webpack_require__("../../../../../src/app/corrigir-questoes/corrigir-questoes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/corrigir-questoes/corrigir-questoes.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__questao_respondida_service__["a" /* QuestaoRespondidaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__questao_respondida_service__["a" /* QuestaoRespondidaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _c || Object])
    ], CorrigirQuestoesComponent);
    return CorrigirQuestoesComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=corrigir-questoes.component.js.map

/***/ }),

/***/ "../../../../../src/app/criar-lista-questoes/criar-lista-questoes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/criar-lista-questoes/criar-lista-questoes.component.html":
/***/ (function(module, exports) {

module.exports = "<app-cabecalho></app-cabecalho>  \n<div class=\"container\">\n<router-outlet></router-outlet>\n<h3 class=\"text-center\t\"><strong>Crie sua lista de Questões</strong></h3>\n<br>\n<form #meuForm=\"ngForm\" class=\"form-group\">\n\n<!--Para modificar a cor quando não preenchido = border border-warning, border border-danger-->\n<input  placeholder=\" Nome da Lista das Questões \"type=\"text\"class=\"input form-control\" type=\"text\" name=\"titulo\" [(ngModel)]=\"listaQuestoes.titulo\" required>\n<br>\n\nSelecione as questões : <br><br>\n\n<p-pickList [source]=\"questoes\" [target]=\"listaQuestoes.questoes\" sourceHeader=\"Todas questões\" targetHeader=\"Questões selecionadas\" [responsive]=\"true\" filterBy=\"titulo\" \ndragdrop=\"true\" dragdropScope=\"questoes\" sourceFilterPlaceholder=\"Procure por titulo\" targetFilterPlaceholder=\"Procure por titulo\" [sourceStyle]=\"{'height':'200px'}\" [targetStyle]=\"{'height':'200px'}\" required>\n    <ng-template let-questao pTemplate=\"item\">\n        <div class=\"ui-helper-clearfix\">\n            <div style=\"font-size:14px;float:right;margin:15px 5px 0 0\">{{questao.titulo}}</div>\n        </div>\n    </ng-template>\n</p-pickList><br><br>\n\nSelecione os alunos : <br><br>\n\n<p-pickList [source]=\"alunos\" [target]=\"listaQuestoes.alunos\" sourceHeader=\"Todos alunos\" targetHeader=\"Aluno(s) selecionado(s)\" [responsive]=\"true\" filterBy=\"nomeCompleto\" \ndragdrop=\"true\" dragdropScope=\"alunos\" sourceFilterPlaceholder=\"Procure por turma\" targetFilterPlaceholder=\"Procure por turma\" [sourceStyle]=\"{'height':'200px'}\" [targetStyle]=\"{'height':'200px'}\" required>\n    <ng-template let-aluno pTemplate=\"item\">\n        <div class=\"ui-helper-clearfix\">\n            <div style=\"font-size:14px;float:right;margin:15px 5px 0 0\">{{aluno.nomeCompleto}}</div>\n        </div>\n    </ng-template>\n</p-pickList>\n<!--\n<table class=\"table\" style=\"width: 1100px;\">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th style=\"width: 900px;\">Missão</th>\n      <th></th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let questao of questoes\" class=\"{{cor}}\">      <th scope=\"row\">{{questao.id}}</th>\n      <td >{{questao.titulo}}</td>\n        <div class=\"ui-g-12\">\n          <p-checkbox name=\"{{questao.id}}\" value=\"{{questao.id}}\" label=\"\" [(ngModel)]=\"selectedQuestionsId\" inputId=\"{{questao.id}}\"></p-checkbox>\n          </div>\n       no lugar deste selecionar seria melhor  colocar um checkbox?\n      <td><button class=\"btn bg-warning text-white\" (click)=mudarCor()>Selecionar</button></td>\n    </tr>\n  </tbody>\n</table>\n-->\n<br>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col \">\n    Disponível a partir de :\n    <br><p-calendar name=\"calendar\"  [(ngModel)]=\"listaQuestoes.dataInicio\" [showTime]=\"true\" required></p-calendar>\n    </div>\n    <div class=\"col \">\n    Disponível até :\n     <br><p-calendar name=\"calendar\"  [(ngModel)]=\"listaQuestoes.dataFim\" [showTime]=\"true\" required></p-calendar>\n    </div>\n  </div>\n</div>\n<br>\n\n<br><br>\n\n<button class=\"btn btn-success\" [disabled]=\"!meuForm.valid\" (click)=\"salvar()\">Salvar Lista</button>\n</form>\n<p-growl [(value)]=\"msgs\"></p-growl>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/criar-lista-questoes/criar-lista-questoes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriarListaQuestoesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Questao__ = __webpack_require__("../../../../../src/app/models/Questao.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_questoes_service__ = __webpack_require__("../../../../../src/app/lista-questoes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questao_service__ = __webpack_require__("../../../../../src/app/questao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__usuario_service_service__ = __webpack_require__("../../../../../src/app/usuario-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_ListaQuestoes__ = __webpack_require__("../../../../../src/app/models/ListaQuestoes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CriarListaQuestoesComponent = (function () {
    function CriarListaQuestoesComponent(questaoService, usuarioService, listaQuestoesService, router, route) {
        this.questaoService = questaoService;
        this.usuarioService = usuarioService;
        this.listaQuestoesService = listaQuestoesService;
        this.router = router;
        this.route = route;
        this.msgs = [];
        this.listaQuestoes = new __WEBPACK_IMPORTED_MODULE_5__models_ListaQuestoes__["a" /* ListaQuestoes */]();
        this.selectedQuestionsId = [];
    }
    CriarListaQuestoesComponent.prototype.ngOnInit = function () {
        this.questoes = this.questaoService.listAll();
        this.alunos = this.usuarioService.listAllAlunos();
        this.listaQuestoes.id = this.route.snapshot.params['id'];
        this.listaQuestoes = this.listaQuestoesService.getById(this.listaQuestoes);
        if (this.listaQuestoes == undefined) {
            this.listaQuestoes = new __WEBPACK_IMPORTED_MODULE_5__models_ListaQuestoes__["a" /* ListaQuestoes */]();
        }
    };
    CriarListaQuestoesComponent.prototype.salvar = function () {
        var _this = this;
        this.listaQuestoes.professorAdministrador = this.usuarioService.usuarioLogado;
        for (var i = 0; i < this.selectedQuestionsId.length; i++) {
            var questao = new __WEBPACK_IMPORTED_MODULE_1__models_Questao__["a" /* Questao */]();
            questao.id = this.selectedQuestionsId[i];
            questao = this.questaoService.getById(questao);
            console.log(questao);
            this.listaQuestoes.questoes.push(questao);
        }
        console.log("THIS");
        console.log(this.listaQuestoes);
        console.log("SOBRE O ID DAS LISTAS" + this.listaQuestoes.id != " " || this.listaQuestoes.id == undefined);
        if (this.listaQuestoes.id != " " && this.listaQuestoes.id != undefined) {
            console.log("Entramos Here");
            this.listaQuestoesService.update(this.listaQuestoes);
            this.router.navigate(['/listas-questoes-crud']);
        }
        else {
            console.log("Entramos HereII");
            this.listaQuestoesService.insertOnFirebase(this.listaQuestoes).then(function (resultado) {
                _this.listaQuestoes.id = resultado.id;
            });
            console.log("id gerado pelo FireBase : " + this.listaQuestoes.id);
            ;
            this.router.navigate(['/listas-questoes-crud']);
        }
        /* if(this.listaQuestoes.checarValidadeData()==false){
               this.msgs=[];
          this.msgs.push({severity:'error', summary:'Data inválida', detail:'Verifique as datas.'});
         }else{
           
         }
         */
    };
    CriarListaQuestoesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-criar-lista-questoes',
            template: __webpack_require__("../../../../../src/app/criar-lista-questoes/criar-lista-questoes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/criar-lista-questoes/criar-lista-questoes.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__questao_service__["a" /* QuestaoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__questao_service__["a" /* QuestaoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__usuario_service_service__["a" /* UsuarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__usuario_service_service__["a" /* UsuarioService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__lista_questoes_service__["a" /* ListaQuestoesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__lista_questoes_service__["a" /* ListaQuestoesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["ActivatedRoute"]) === "function" && _e || Object])
    ], CriarListaQuestoesComponent);
    return CriarListaQuestoesComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=criar-lista-questoes.component.js.map

/***/ }),

/***/ "../../../../../src/app/dados-aluno/dados-aluno.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dados-aluno/dados-aluno.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  dados-aluno works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/dados-aluno/dados-aluno.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DadosAlunoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DadosAlunoComponent = (function () {
    function DadosAlunoComponent() {
    }
    DadosAlunoComponent.prototype.ngOnInit = function () {
    };
    DadosAlunoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dados-aluno',
            template: __webpack_require__("../../../../../src/app/dados-aluno/dados-aluno.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dados-aluno/dados-aluno.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DadosAlunoComponent);
    return DadosAlunoComponent;
}());

//# sourceMappingURL=dados-aluno.component.js.map

/***/ }),

/***/ "../../../../../src/app/gerenciar-tags/gerenciar-tags.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gerenciar-tags/gerenciar-tags.component.html":
/***/ (function(module, exports) {

module.exports = "<app-cabecalho></app-cabecalho>\n<div class=\"container\">\n<br><br>\n<p-dataTable [value]=\"tags\" selectionMode=\"single\" [(selection)]=\"selectedCar\" (onRowSelect)=\"onRowSelect($event)\" [paginator]=\"true\" rows=\"15\" [responsive]=\"true\">\n    <p-header>Gerencie suas Tags</p-header>\n    <p-column field=\"nome\" header=\"Nome\" [sortable]=\"true\"></p-column>\n    <p-footer><div class=\"ui-helper-clearfix\" style=\"width:100%\"><button type=\"button\" pButton icon=\"fa-plus\" style=\"float:left\" (click)=\"showDialogToAdd()\" label=\"Add\"></button></div></p-footer>\n</p-dataTable>\n\n<p-dialog header=\"Tag\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\">\n    <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"tag\">\n        <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-4\"><label for=\"nome\">Nome:</label></div>\n            <div class=\"ui-grid-col-8\"><input pInputText id=\"nome\" [(ngModel)]=\"tag.nome\" /></div>\n        </div>\n    </div>\n    <p-footer>\n        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n            <button type=\"button\" pButton icon=\"fa-close\" (click)=\"delete()\" label=\"Delete\"></button>\n            <button type=\"button\" pButton icon=\"fa-check\" (click)=\"save()\" label=\"Save\"></button>\n        </div>\n    </p-footer>\n</p-dialog>\n</div>\n    "

/***/ }),

/***/ "../../../../../src/app/gerenciar-tags/gerenciar-tags.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GerenciarTagsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Tag__ = __webpack_require__("../../../../../src/app/models/Tag.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tag_service__ = __webpack_require__("../../../../../src/app/tag.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GerenciarTagsComponent = (function () {
    function GerenciarTagsComponent(tagsService) {
        this.tagsService = tagsService;
        this.tags = [];
    }
    GerenciarTagsComponent.prototype.ngOnInit = function () {
        this.tags = this.tagsService.listAll();
    };
    GerenciarTagsComponent.prototype.showDialogToAdd = function () {
        this.newTag = true;
        this.tag = new __WEBPACK_IMPORTED_MODULE_1__models_Tag__["a" /* Tag */]();
        this.displayDialog = true;
    };
    GerenciarTagsComponent.prototype.save = function () {
        if (this.newTag)
            this.tagsService.insert(this.tag);
        else
            this.tagsService.update(this.tag);
        console.log(this.tag);
        console.log(this.tags);
        this.tagsService.tags = this.tags;
        console.log(this.tagsService.tags);
        this.displayDialog = false;
    };
    GerenciarTagsComponent.prototype.delete = function () {
        var index = this.findSelectedTagIndex();
        this.tags = this.tags.filter(function (val, i) { return i != index; });
        this.tag = null;
        this.displayDialog = false;
    };
    GerenciarTagsComponent.prototype.onRowSelect = function (event) {
        this.newTag = false;
        this.tag = this.cloneCar(event.data);
        this.displayDialog = true;
    };
    GerenciarTagsComponent.prototype.cloneCar = function (c) {
        var car = new __WEBPACK_IMPORTED_MODULE_1__models_Tag__["a" /* Tag */]();
        for (var prop in c) {
            car[prop] = c[prop];
        }
        return car;
    };
    GerenciarTagsComponent.prototype.findSelectedTagIndex = function () {
        var pos;
        for (var i = 0; i < this.tags.length; i++) {
            if (this.tags[i].id == this.tag.id) {
                pos = i;
            }
        }
        return pos;
    };
    GerenciarTagsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gerenciar-tags',
            template: __webpack_require__("../../../../../src/app/gerenciar-tags/gerenciar-tags.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gerenciar-tags/gerenciar-tags.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__tag_service__["a" /* TagService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__tag_service__["a" /* TagService */]) === "function" && _a || Object])
    ], GerenciarTagsComponent);
    return GerenciarTagsComponent;
    var _a;
}());

//# sourceMappingURL=gerenciar-tags.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<app-cabecalho></app-cabecalho>  \n<div class=\"container\">\n  <h3><strong>Seja bem-vindo de volta, {{usuario.nomeUsuario}}!</strong></h3><br>\n  <div class=\"row\">\n\n    <div style=\"width: 300px;\">\n    <h5><strong>Próximas atividades:</strong></h5>\n    <!-- reduzir o tamanho do calendário-->\n    <!-- marcar atividades no calendário-->\n    <!-- daria trabalho para inserir um módulo de comunicação professor/aluno  ou de comentário nas questões?-->\n    <!-- teria como criar umas msg de estimulo ao usuário?\n          Ex.: \"Se liga, faz muito tempo que vc não responde nenhuma questão!\"-->\n   <p-calendar [(ngModel)]=\"date11\" [inline]=\"true\" [showOtherMonths]=\"true\"></p-calendar> \n    </div>\n\n\n    <div style=\"width: 500px;\">\n    <h5><strong>Veja as principais novidades</strong></h5>\n\n    Avisos em geral enviados pelo professor,\n    etc.\n    </div>\n\n\n    <div style=\"width: 300px;\" class=\"container\">\n    <h5><strong>Ranking Semanal</strong> </h5>\n    <table>\n    <thead>\n    <tr>\n      <th style=\"width: 30px;\">#</th>\n      <th style=\"width: 100px;\">Jogador</th>\n      <th style=\"width: 10px;\">Pontos</th>\n    </tr>\n  </thead>\n  <tbody>\n      <tr *ngFor=\"let jogador of jogadores\">\n        <td>{{jogador.pos}}°</td>\n        <td>{{jogador.name}}</td>\n        <td>{{jogador.pontos}}</td>\n      </tr>\n  </tbody>    \n    </table>\n    \n    <br>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Usuario__ = __webpack_require__("../../../../../src/app/models/Usuario.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usuario_service_service__ = __webpack_require__("../../../../../src/app/usuario-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(route, usuarioService) {
        this.route = route;
        this.usuarioService = usuarioService;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_2__models_Usuario__["a" /* Usuario */]();
        this.jogadores = [
            { pos: 1, name: 'Evra', pontos: '550' },
            { pos: 2, name: 'Ciço', pontos: '549' },
            { pos: 3, name: 'Tabata', pontos: '500' },
            { pos: 4, name: 'Cicrano', pontos: '499' },
            { pos: 5, name: 'Você', pontos: '498' }
        ];
        this.usuario.id = this.route.snapshot.params['id'];
        this.usuario = this.usuarioService.getById(this.usuario);
        console.log(this.usuario);
        console.log("USUÁRIO LOGADO!");
        console.log(this.usuarioService.usuarioLogado);
        if (this.usuario == undefined) {
            this.usuario = new __WEBPACK_IMPORTED_MODULE_2__models_Usuario__["a" /* Usuario */]();
            this.usuario.nomeUsuario = "Fulano";
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__usuario_service_service__["a" /* UsuarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__usuario_service_service__["a" /* UsuarioService */]) === "function" && _b || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/inserir-questao/inserir-questao.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input{\n        width: 100%;\n}\n.centralizado{\n    \ttext-align: center;\n}\n.botaoSalvar{\n        background-color:greenyellow;\n        float:right;\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/inserir-questao/inserir-questao.component.html":
/***/ (function(module, exports) {

module.exports = "<app-cabecalho></app-cabecalho>  \n<div class=\"container\">\n<router-outlet></router-outlet>\n<h3 class=\"centralizado\"><strong>Inserir Questão</strong></h3>\n<br>\n<form #meuForm=\"ngForm\" class=\"form-group\">\n<!--Para modificar a cor quando não preenchido = border border-warning, border border-danger-->\n<input  placeholder=\"Digite o titulo da Questão\" type=\"text\"class=\"input form-control\" type=\"text\" name=\"titulo\" [(ngModel)]=\"questao.titulo\" required><br> \n<input  placeholder=\"Digite o enunciado da Questão\" type=\"text\"class=\"input form-control\" type=\"text\" name=\"enunciado\" [(ngModel)]=\"questao.enunciado\" required><br>\nDigite três retornos esperados :   <br>\n<table>\n  <tr>\n    <td><input name=\"primeiroRetorno.entrada\" style=\"width: 550px;\" placeholder=\"Entrada do primeiro caso\" type=\"text\" class=\"input form-control\" type=\"text\" [(ngModel)]=\"questao.retornosEsperados[0].entrada\" required> </td>\n    <td><input name=\"primeiroRetorno.saida\" style=\"width: 550px;\" placeholder=\"Saída do primeiro caso\" type=\"text\" class=\"input form-control\" type=\"text\" [(ngModel)]=\"questao.retornosEsperados[0].saida\" required ></td>\n  </tr> \n\n  <tr>\n    <td><input name=\"segundoRetorno.entrada\" placeholder=\"Entrada do segundo caso\" type=\"text\" class=\"input form-control\" type=\"text\" [(ngModel)]=\"questao.retornosEsperados[1].entrada\" > </td>\n    <td><input name=\"segundoRetorno.saida\" placeholder=\"Saída do segundo caso\" type=\"text\" class=\"input form-control\" type=\"text\" [(ngModel)]=\"questao.retornosEsperados[1].saida\" ></td>\n  </tr>\n\n  <tr>\n    <td><input name=\"terceiroRetorno.entrada\" placeholder=\"Entrada do terceiro caso\" type=\"text\" class=\"input form-control\" type=\"text\" [(ngModel)]=\"questao.retornosEsperados[2].entrada\"> </td>\n    <td><input name=\"terceiroRetorno.saida\" placeholder=\"Saída do terceiro caso\" type=\"text\" class=\"input form-control\" type=\"text\" [(ngModel)]=\"questao.retornosEsperados[2].saida\"></td>\n  </tr>\n</table><br>\n\n\nSelecione o nivel de dificuldade:\n    <select name=\"niveis\" [(ngModel)]=\"questao.nivelDificuldade\" required>\n    <option value=\"1\">1</option>\n    <option value=\"2\">2</option>\n    <option value=\"3\">3</option>\n    <option value=\"4\">Desafio</option>    \n    </select>\n<br><br>\n<input  placeholder=\"Qual seria a dica para responder a Questão\" type=\"text\" class=\"input form-control\"  type=\"text\" name=\"dica\" [(ngModel)]=\"questao.dica\" required><br>\n<!--Quando a Questão estiver completa, mudar a cor dos botões para verde -->\n<button class=\"btn btn-success\" style=\"float:left\" [disabled]=\"!meuForm.valid\" (click)=\"salvar()\">{{funcionalidade}} e Criar nova</button>\n<button class=\"btn btn-success\" style=\"float:right\" [disabled]=\"!meuForm.valid\" routerLink=\"/listar-todas-crud\"(click)=\"salvar()\">{{funcionalidade}} e Listar</button>\n<button class=\"btn btn-danger\" style=\"float:center;text-center\"  routerLink=\"/listar-todas-crud\"(click)=\"deletar()\" *ngIf=\"this.questao.id!=''\">Deletar</button>\n<p-growl [(value)]=\"msgs\"></p-growl>\n</form>\n</div>\n "

/***/ }),

/***/ "../../../../../src/app/inserir-questao/inserir-questao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InserirQuestaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Questao__ = __webpack_require__("../../../../../src/app/models/Questao.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questao_service__ = __webpack_require__("../../../../../src/app/questao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice__ = __webpack_require__("../../../../primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InserirQuestaoComponent = (function () {
    function InserirQuestaoComponent(questaoService, messageService, route) {
        this.questaoService = questaoService;
        this.messageService = messageService;
        this.route = route;
        this.questao = new __WEBPACK_IMPORTED_MODULE_1__models_Questao__["a" /* Questao */];
        this.msgs = [];
        this.funcionalidade = "Salvar";
    }
    InserirQuestaoComponent.prototype.ngOnInit = function () {
        this.questao.id = this.route.snapshot.params['id'];
        console.log(this.questao.id);
        console.log(this.questao.id == undefined);
        if (!(this.questao.id == "")) {
            this.funcionalidade = "Atualizar";
            this.questao = this.questaoService.getByIdOnFireBase(this.questao);
        }
        console.log(this.questao);
        if (this.questao == undefined) {
            this.questao = new __WEBPACK_IMPORTED_MODULE_1__models_Questao__["a" /* Questao */]();
        }
    };
    InserirQuestaoComponent.prototype.salvar = function () {
        if ((this.questao.id == " ")) {
            this.questaoService.insertOnFirebase(this.questao);
        }
        else {
            console.log("enterUpdate");
            this.questaoService.updateOnFireBase(this.questao);
        }
        //alert(this.questaoService.listAll().length);    
        //alert(this.questao.imprimirQuestao());
        this.showSuccess();
        this.questao = new __WEBPACK_IMPORTED_MODULE_1__models_Questao__["a" /* Questao */]();
    };
    InserirQuestaoComponent.prototype.showSuccess = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Questão inserida com sucesso!', detail: ' ' });
    };
    InserirQuestaoComponent.prototype.deletar = function () {
        this.questaoService.deleteOnFireBase(this.questao);
    };
    InserirQuestaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'inserir-questao',
            template: __webpack_require__("../../../../../src/app/inserir-questao/inserir-questao.component.html"),
            styles: [__webpack_require__("../../../../../src/app/inserir-questao/inserir-questao.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice__["MessageService"]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__questao_service__["a" /* QuestaoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__questao_service__["a" /* QuestaoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice__["MessageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice__["MessageService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"]) === "function" && _c || Object])
    ], InserirQuestaoComponent);
    return InserirQuestaoComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=inserir-questao.component.js.map

/***/ }),

/***/ "../../../../../src/app/inserir-turma/inserir-turma.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/inserir-turma/inserir-turma.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<app-cabecalho></app-cabecalho>  \n<div class=\"container\">\n<h3 class=\"centralizado\"><strong>Inserir turma</strong></h3>\n<br>\n<form #meuForm=\"ngForm\" class=\"form-group\">\n  Nome da turma :<input  placeholder=\"\" type=\"text\"class=\"input form-control\" type=\"text\" name=\"titulo\" [(ngModel)]=\"turma.nome\" required><br>\n  Professor : {{turma.professorAdminstrador.nomeCompleto}}<br><br>\n  Selecione os alunos : <br><br>\n\n  <p-pickList [source]=\"alunos\" [target]=\"turma.alunos\" sourceHeader=\"Todos alunos\" targetHeader=\"Aluno(s) selecionado(s)\" [responsive]=\"true\" filterBy=\"nomeCompleto\" \n  dragdrop=\"true\" dragdropScope=\"alunos\" sourceFilterPlaceholder=\"Procure por turma\" targetFilterPlaceholder=\"Procure por turma\" [sourceStyle]=\"{'height':'200px'}\" [targetStyle]=\"{'height':'200px'}\" required>\n      <ng-template let-aluno pTemplate=\"item\">\n        <div class=\"ui-helper-clearfix\">\n            <div style=\"font-size:14px;float:right;margin:15px 5px 0 0\">{{aluno.nomeCompleto}}</div>\n        </div>\n      </ng-template>\n  </p-pickList><br>\n\n  <button class=\"btn btn-success\" [disabled]=\"!meuForm.valid\" (click)=\"salvar()\">Salvar turma</button>\n\n</form>\n</div>\n "

/***/ }),

/***/ "../../../../../src/app/inserir-turma/inserir-turma.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InserirTurmaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__usuario_service_service__ = __webpack_require__("../../../../../src/app/usuario-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__turma_service__ = __webpack_require__("../../../../../src/app/turma.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Turma__ = __webpack_require__("../../../../../src/app/models/Turma.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InserirTurmaComponent = (function () {
    function InserirTurmaComponent(usuarioService, turmaService, router, route) {
        this.usuarioService = usuarioService;
        this.turmaService = turmaService;
        this.router = router;
        this.route = route;
        this.turma = new __WEBPACK_IMPORTED_MODULE_3__models_Turma__["a" /* Turma */]();
    }
    InserirTurmaComponent.prototype.ngOnInit = function () {
        this.turma.id = this.route.snapshot.params['id'];
        if (this.turma.id == undefined) {
            this.turma.nome = "";
            this.turma.professorAdminstrador = this.usuarioService.usuarioLogado;
            this.alunos = this.usuarioService.listAllAlunos();
            console.log(this.turma);
        }
        else {
            this.turma = this.turmaService.getById(this.turma);
            this.alunos = this.turmaService.alunosNaoEstaoNaTurma(this.turma);
        }
    };
    InserirTurmaComponent.prototype.salvar = function () {
        if (this.turma.id > 0) {
            this.turmaService.update(this.turma);
        }
        else {
            this.turmaService.insert(this.turma);
            this.router.navigate(['/turma/gerenciar']);
        }
    };
    InserirTurmaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inserir-turma',
            template: __webpack_require__("../../../../../src/app/inserir-turma/inserir-turma.component.html"),
            styles: [__webpack_require__("../../../../../src/app/inserir-turma/inserir-turma.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__usuario_service_service__["a" /* UsuarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__usuario_service_service__["a" /* UsuarioService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__turma_service__["a" /* TurmaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__turma_service__["a" /* TurmaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"]) === "function" && _d || Object])
    ], InserirTurmaComponent);
    return InserirTurmaComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=inserir-turma.component.js.map

/***/ }),

/***/ "../../../../../src/app/lista-questoes-alunos/lista-questoes-alunos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lista-questoes-alunos/lista-questoes-alunos.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<app-cabecalho></app-cabecalho>\n<br>\n<h4 class=\"text-center\"><strong>{{listaQuestoes.titulo}}</strong></h4><br>\n<div class=\"container\">\n  Você já respondeu : {{carregarPercentualRespondido()}}% (em destaque)<br>\n  Total de questões: {{listaQuestoes.questoes.length}}<br>\n  Total respondido: {{totalRespondido()}}<br>\n  Faltam {{diasRestantes()}} dias!(destaque)<br>\n  Acaba em {{listaQuestoes.dataFim.toString()}}<br><br>\n<p-dataTable [value]=\"carregarQuestoes()\" selectionMode=\"single\" [(selection)]=\"questaoSelecionada\" (onRowSelect)=\"onRowSelect($event)\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\">\n    <p-column field=\"titulo\" header=\"Título\" [sortable]=\"true\"></p-column>\n    <p-column field=\"enunciado\" header=\"Enunciado\" [sortable]=\"true\"></p-column>\n    <p-column field=\"\" header=\"Foi respondida?\" [sortable]=\"true\"></p-column>\n</p-dataTable>\n</div>"

/***/ }),

/***/ "../../../../../src/app/lista-questoes-alunos/lista-questoes-alunos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaQuestoesAlunosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__questao_service__ = __webpack_require__("../../../../../src/app/questao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questao_respondida_service__ = __webpack_require__("../../../../../src/app/questao-respondida.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_ListaQuestoes__ = __webpack_require__("../../../../../src/app/models/ListaQuestoes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_Questao__ = __webpack_require__("../../../../../src/app/models/Questao.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lista_questoes_service__ = __webpack_require__("../../../../../src/app/lista-questoes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListaQuestoesAlunosComponent = (function () {
    function ListaQuestoesAlunosComponent(listaQuestoesService, questaoService, questaoRespondidaService, router, route) {
        this.listaQuestoesService = listaQuestoesService;
        this.questaoService = questaoService;
        this.questaoRespondidaService = questaoRespondidaService;
        this.router = router;
        this.route = route;
        this.listaQuestoes = new __WEBPACK_IMPORTED_MODULE_3__models_ListaQuestoes__["a" /* ListaQuestoes */]();
        this.questaoSelecionada = new __WEBPACK_IMPORTED_MODULE_4__models_Questao__["a" /* Questao */]();
        this.listaQuestoes.id = this.route.snapshot.params['id'];
        this.listaQuestoes = this.listaQuestoesService.getById(this.listaQuestoes);
        console.log(this.listaQuestoes);
    }
    ListaQuestoesAlunosComponent.prototype.ngOnInit = function () {
    };
    ListaQuestoesAlunosComponent.prototype.carregarPercentualRespondido = function () {
        var percentualRespondido = 0;
        var totalRespondido = this.totalRespondido();
        if (!(this.listaQuestoes.questoes.length == 0)) {
            if (totalRespondido == 0) {
                percentualRespondido = 0;
            }
            else {
                percentualRespondido = (totalRespondido / this.listaQuestoes.questoes.length) * 100;
            }
        }
        return percentualRespondido;
    };
    ListaQuestoesAlunosComponent.prototype.carregarQuestoes = function () {
        console.log(this.listaQuestoes);
        for (var i = 0; i < this.listaQuestoes.questoes.length; i++) {
            this.listaQuestoes.questoes[i] = this.questaoService.getById(this.listaQuestoes.questoes[i]);
        }
        return this.listaQuestoes.questoes;
    };
    ListaQuestoesAlunosComponent.prototype.totalRespondido = function () {
        var totalRespondido = 0;
        for (var i = 0; i < this.listaQuestoes.questoes.length; i++) {
            if (this.questaoRespondidaService.foiRespondida(this.listaQuestoes.questoes[i])) {
                totalRespondido++;
            }
        }
        return totalRespondido;
    };
    ListaQuestoesAlunosComponent.prototype.onRowSelect = function (event) {
        console.log(this.questaoSelecionada);
        this.router.navigate(['responder/', this.questaoSelecionada.id]);
    };
    ListaQuestoesAlunosComponent.prototype.diasRestantes = function () {
        var timeDiff = Math.abs(this.listaQuestoes.dataFim.getTime() - this.listaQuestoes.dataInicio.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return diffDays;
    };
    ListaQuestoesAlunosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lista-questoes-alunos',
            template: __webpack_require__("../../../../../src/app/lista-questoes-alunos/lista-questoes-alunos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lista-questoes-alunos/lista-questoes-alunos.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__lista_questoes_service__["a" /* ListaQuestoesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__lista_questoes_service__["a" /* ListaQuestoesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__questao_service__["a" /* QuestaoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__questao_service__["a" /* QuestaoService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__questao_respondida_service__["a" /* QuestaoRespondidaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__questao_respondida_service__["a" /* QuestaoRespondidaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["ActivatedRoute"]) === "function" && _e || Object])
    ], ListaQuestoesAlunosComponent);
    return ListaQuestoesAlunosComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=lista-questoes-alunos.component.js.map

/***/ }),

/***/ "../../../../../src/app/lista-questoes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaQuestoesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_ListaQuestoes__ = __webpack_require__("../../../../../src/app/models/ListaQuestoes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Questao__ = __webpack_require__("../../../../../src/app/models/Questao.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Usuario__ = __webpack_require__("../../../../../src/app/models/Usuario.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questao_service__ = __webpack_require__("../../../../../src/app/questao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__usuario_service_service__ = __webpack_require__("../../../../../src/app/usuario-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListaQuestoesService = (function () {
    function ListaQuestoesService(questaoService, usuarioService, afs) {
        this.questaoService = questaoService;
        this.usuarioService = usuarioService;
        this.afs = afs;
        this.listasQuestoes = [];
        this.listasQuestoesCollection = this.afs.collection("ListaQuestoes");
        var listaQuestoes1 = new __WEBPACK_IMPORTED_MODULE_1__models_ListaQuestoes__["a" /* ListaQuestoes */]();
        var listaQuestoes2 = new __WEBPACK_IMPORTED_MODULE_1__models_ListaQuestoes__["a" /* ListaQuestoes */]();
        var listaQuestoes3 = new __WEBPACK_IMPORTED_MODULE_1__models_ListaQuestoes__["a" /* ListaQuestoes */]();
        var usuarioLaranja = new __WEBPACK_IMPORTED_MODULE_3__models_Usuario__["a" /* Usuario */]();
        listaQuestoes1.titulo = "Teste1";
        listaQuestoes1.professorAdministrador = this.usuarioService.getById(usuarioLaranja);
        listaQuestoes2.titulo = "Teste2";
        listaQuestoes2.professorAdministrador = this.usuarioService.getById(usuarioLaranja);
        listaQuestoes3.titulo = "Teste3";
        listaQuestoes3.professorAdministrador = this.usuarioService.getById(usuarioLaranja);
        var questao = new __WEBPACK_IMPORTED_MODULE_2__models_Questao__["a" /* Questao */]();
        questao.id = "1";
        listaQuestoes1.questoes.push(this.questaoService.getById(questao));
        listaQuestoes2.questoes.push(this.questaoService.getById(questao));
        listaQuestoes3.questoes.push(this.questaoService.getById(questao));
        questao.id = "2";
        listaQuestoes1.questoes.push(this.questaoService.getById(questao));
        questao.id = "3";
        listaQuestoes1.questoes.push(this.questaoService.getById(questao));
        listaQuestoes2.questoes.push(this.questaoService.getById(questao));
        listaQuestoes1.dataInicio = new Date();
        listaQuestoes1.dataFim = new Date("December 4, 2017 10:13:00");
        listaQuestoes2.dataInicio = new Date();
        listaQuestoes2.dataFim = new Date("January 4, 2018 10:13:00");
        listaQuestoes3.dataInicio = new Date();
        listaQuestoes3.dataFim = new Date("December 22, 2017 12:15:00");
        //this.insert(listaQuestoes1);
        //this.insert(listaQuestoes2);
        //this.insert(listaQuestoes3);
    }
    ListaQuestoesService.prototype.insert = function (listaQuestao) {
        this.listasQuestoes.push(listaQuestao);
        console.log("Inserção efetuada! Questao:\n" + listaQuestao);
    };
    ListaQuestoesService.prototype.insertOnFirebase = function (listaQuestoes) {
        return this.listasQuestoesCollection.add(listaQuestoes.toChaveValor());
    };
    ListaQuestoesService.prototype.listAllOnFireBase = function () {
        var _this = this;
        var resultados = [];
        var meuObservable = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"](function (observer) {
            _this.listasQuestoesCollection.snapshotChanges().subscribe(function (result) {
                result.map(function (documents) {
                    var id = documents.payload.doc.id;
                    var data = documents.payload.doc.data();
                    var document = __assign({ id: id }, data);
                    resultados.push(document);
                });
                observer.next(resultados);
                observer.complete();
            });
        });
        return meuObservable;
    };
    ListaQuestoesService.prototype.listAll = function () {
        console.log("Listando todas as Questões> Total :" + this.listasQuestoes.length);
        return this.listasQuestoes;
    };
    ListaQuestoesService.prototype.listAllByAluno = function (aluno) {
        var listasAluno = [];
        for (var i = 0; i < this.listasQuestoes.length; i++) {
            if (this.alunoEstaNaLista(this.listasQuestoes[i], aluno)) {
                listasAluno.push(this.listasQuestoes[i]);
            }
        }
        console.log("Listando todas as Questões do aluno" + aluno.nomeCompleto + "> Total :\n" + listasAluno);
        return listasAluno;
    };
    ListaQuestoesService.prototype.listAllByProfessor = function (professor) {
        var listasProfessor = [];
        for (var i = 0; i < this.listasQuestoes.length; i++) {
            if (this.professorEstaNaLista(this.listasQuestoes[i], professor)) {
                listasProfessor.push(this.listasQuestoes[i]);
            }
        }
        console.log("Listando todas as Questões do professor" + professor.nomeCompleto + "> Total :\n" + listasProfessor);
        return listasProfessor;
    };
    ListaQuestoesService.prototype.update = function (listaQuestao) {
        console.log("Atualizando Questão = " + listaQuestao);
        var posicao = this.findListaQuestao(listaQuestao);
        this.listasQuestoes[posicao] = listaQuestao;
    };
    ListaQuestoesService.prototype.delete = function (listaQuestao) {
        console.log("Eliminando Questão  = " + listaQuestao);
        var posicao = this.findListaQuestao(listaQuestao);
        this.listasQuestoes.splice(posicao, 1);
    };
    ListaQuestoesService.prototype.findListaQuestao = function (listaQuestao) {
        var posicao = 0;
        for (var i = 0; i < this.listasQuestoes.length; i++) {
            if (listaQuestao.id == this.listasQuestoes[i].id) {
                posicao = i;
            }
        }
        return posicao;
    };
    ListaQuestoesService.prototype.getById = function (listaQuestao) {
        var posicao = -1;
        for (var i = 0; i < this.listasQuestoes.length; i++) {
            if (listaQuestao.id == this.listasQuestoes[i].id) {
                posicao = i;
            }
        }
        listaQuestao = this.listasQuestoes[posicao];
        return listaQuestao;
    };
    ListaQuestoesService.prototype.alunosNaoEstaoNaLista = function (lista) {
        var alunos = this.usuarioService.listAllAlunos();
        var alunosNaoEstaoNaLista = [];
        for (var i = 0; i < alunos.length; i++) {
            if (!this.alunoEstaNaLista(lista, alunos[i])) {
                alunosNaoEstaoNaLista.push(alunos[i]);
            }
        }
        return alunosNaoEstaoNaLista;
    };
    ListaQuestoesService.prototype.alunoEstaNaLista = function (lista, aluno) {
        var estaNaLista = false;
        for (var j = 0; j < lista.alunos.length; j++) {
            if (lista.alunos[j].id == aluno.id) {
                estaNaLista = true;
            }
        }
        return estaNaLista;
    };
    ListaQuestoesService.prototype.professorEstaNaLista = function (lista, professor) {
        var estaNaLista = false;
        console.log(lista);
        console.log(professor);
        if (lista.professorAdministrador.id == professor.id) {
            estaNaLista = true;
        }
        return estaNaLista;
    };
    ListaQuestoesService.prototype.questoesNaoEstaoNaLista = function (lista) {
        var questoes = this.questaoService.listAll();
        var questoesNaoEstaoNaLista = [];
        for (var i = 0; i < questoes.length; i++) {
            if (!this.questaoEstaNaLista(questoes[i], lista)) {
                questoesNaoEstaoNaLista.push(questoes[i]);
            }
        }
        return questoesNaoEstaoNaLista;
    };
    ListaQuestoesService.prototype.questaoEstaNaLista = function (questao, lista) {
        var estaNaLista = false;
        for (var i = 0; i < lista.questoes.length; i++) {
            if (lista.questoes[i].id == questao.id) {
                estaNaLista = true;
            }
        }
        return estaNaLista;
    };
    ListaQuestoesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__questao_service__["a" /* QuestaoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__questao_service__["a" /* QuestaoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__usuario_service_service__["a" /* UsuarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__usuario_service_service__["a" /* UsuarioService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _c || Object])
    ], ListaQuestoesService);
    return ListaQuestoesService;
    var _a, _b, _c;
}());

//# sourceMappingURL=lista-questoes.service.js.map

/***/ }),

/***/ "../../../../../src/app/listar-corrigidas/listar-corrigidas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listar-corrigidas/listar-corrigidas.component.html":
/***/ (function(module, exports) {

module.exports = "<app-cabecalho></app-cabecalho><br>\n<router-outlet></router-outlet>\n<h4 class=\"text-center\"><strong>Questões corrigidas</strong></h4><br>\n<div class=\"container\">\n<p-dataTable [value]=\"getQuestoesCorrigidas()\" selectionMode=\"single\" [(selection)]=\"questaoRespondidaSelecionada\" (onRowSelect)=\"onRowSelect($event)\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\">\n    <p-column field=\"acertou\" header=\"Acertou\" [sortable]=\"true\"></p-column>\n    <p-column field=\"questao.titulo\" header=\"Título\" [sortable]=\"true\"></p-column>\n    <p-column field=\"questao.enunciado\" header=\"Enunciado\" [sortable]=\"true\"></p-column>\n    <p-column field=\"comentario\" header=\"Comentário\" [sortable]=\"true\"></p-column>\n    </p-dataTable>\n</div>"

/***/ }),

/***/ "../../../../../src/app/listar-corrigidas/listar-corrigidas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListarCorrigidasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__questao_respondida_service__ = __webpack_require__("../../../../../src/app/questao-respondida.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_QuestaoRespondida__ = __webpack_require__("../../../../../src/app/models/QuestaoRespondida.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListarCorrigidasComponent = (function () {
    function ListarCorrigidasComponent(questaoRespondidaService, router, route) {
        this.questaoRespondidaService = questaoRespondidaService;
        this.router = router;
        this.route = route;
        this.acertou = "Sim";
        this.questaoRespondidaSelecionada = new __WEBPACK_IMPORTED_MODULE_3__models_QuestaoRespondida__["a" /* QuestaoRespondida */]();
    }
    ListarCorrigidasComponent.prototype.ngOnInit = function () {
    };
    ListarCorrigidasComponent.prototype.onRowSelect = function (event) {
        this.router.navigate(['/correcao', this.questaoRespondidaSelecionada.id]);
    };
    ListarCorrigidasComponent.prototype.getQuestoesCorrigidas = function () {
        return this.questaoRespondidaService.getParaCorrigidas();
    };
    ListarCorrigidasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listar-corrigidas',
            template: __webpack_require__("../../../../../src/app/listar-corrigidas/listar-corrigidas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/listar-corrigidas/listar-corrigidas.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__questao_respondida_service__["a" /* QuestaoRespondidaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__questao_respondida_service__["a" /* QuestaoRespondidaService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object])
    ], ListarCorrigidasComponent);
    return ListarCorrigidasComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=listar-corrigidas.component.js.map

/***/ }),

/***/ "../../../../../src/app/listar-dados-alunos/listar-dados-alunos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listar-dados-alunos/listar-dados-alunos.component.html":
/***/ (function(module, exports) {

module.exports = "<app-cabecalho></app-cabecalho>"

/***/ }),

/***/ "../../../../../src/app/listar-dados-alunos/listar-dados-alunos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListarDadosAlunosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListarDadosAlunosComponent = (function () {
    function ListarDadosAlunosComponent() {
    }
    ListarDadosAlunosComponent.prototype.ngOnInit = function () {
    };
    ListarDadosAlunosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listar-dados-alunos',
            template: __webpack_require__("../../../../../src/app/listar-dados-alunos/listar-dados-alunos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/listar-dados-alunos/listar-dados-alunos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListarDadosAlunosComponent);
    return ListarDadosAlunosComponent;
}());

//# sourceMappingURL=listar-dados-alunos.component.js.map

/***/ }),

/***/ "../../../../../src/app/listar-listas-alunos/listar-listas-alunos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listar-listas-alunos/listar-listas-alunos.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<app-cabecalho></app-cabecalho>\n<h3 class=\"text-center\"><strong>Suas listas de questões</strong></h3>\n<div class=\"container\">\n<p-dataTable [value]=\"carregarListas()\" selectionMode=\"single\" [(selection)]=\"listaQuestoesSelecionada\" (onRowSelect)=\"onRowSelect($event)\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\">\n    <p-column field=\"titulo\" header=\"Título\" [sortable]=\"true\"></p-column>\n    <p-column field=\"questoes.length\" header=\"Qtde de questões\" [sortable]=\"true\"></p-column>\n    <p-column field=\"dataInicio\" header=\"A partir de :\" [sortable]=\"true\"></p-column>\n    <p-column field=\"dataFim\" header=\"Até :\" [sortable]=\"true\"></p-column>\n</p-dataTable>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/listar-listas-alunos/listar-listas-alunos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListarListasAlunosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lista_questoes_service__ = __webpack_require__("../../../../../src/app/lista-questoes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuario_service_service__ = __webpack_require__("../../../../../src/app/usuario-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_ListaQuestoes__ = __webpack_require__("../../../../../src/app/models/ListaQuestoes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListarListasAlunosComponent = (function () {
    function ListarListasAlunosComponent(listaQuestoesService, usuarioService, router, route) {
        this.listaQuestoesService = listaQuestoesService;
        this.usuarioService = usuarioService;
        this.router = router;
        this.route = route;
        this.listaQuestoesSelecionada = new __WEBPACK_IMPORTED_MODULE_3__models_ListaQuestoes__["a" /* ListaQuestoes */]();
    }
    ListarListasAlunosComponent.prototype.ngOnInit = function () {
    };
    ListarListasAlunosComponent.prototype.carregarListas = function () {
        return this.listaQuestoesService.listAllByAluno(this.usuarioService.usuarioLogado);
    };
    ListarListasAlunosComponent.prototype.onRowSelect = function (event) {
        console.log(this.listaQuestoesSelecionada);
        this.router.navigate(['lista-questoes-aluno/', this.listaQuestoesSelecionada.id]);
    };
    ListarListasAlunosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listar-listas-alunos',
            template: __webpack_require__("../../../../../src/app/listar-listas-alunos/listar-listas-alunos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/listar-listas-alunos/listar-listas-alunos.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__lista_questoes_service__["a" /* ListaQuestoesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__lista_questoes_service__["a" /* ListaQuestoesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__usuario_service_service__["a" /* UsuarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__usuario_service_service__["a" /* UsuarioService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"]) === "function" && _d || Object])
    ], ListarListasAlunosComponent);
    return ListarListasAlunosComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=listar-listas-alunos.component.js.map

/***/ }),

/***/ "../../../../../src/app/listar-listas-questoes/listar-listas-questoes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listar-listas-questoes/listar-listas-questoes.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  listar-listas-questoes works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/listar-listas-questoes/listar-listas-questoes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListarListasQuestoesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListarListasQuestoesComponent = (function () {
    function ListarListasQuestoesComponent() {
    }
    ListarListasQuestoesComponent.prototype.ngOnInit = function () {
    };
    ListarListasQuestoesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listar-listas-questoes',
            template: __webpack_require__("../../../../../src/app/listar-listas-questoes/listar-listas-questoes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/listar-listas-questoes/listar-listas-questoes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListarListasQuestoesComponent);
    return ListarListasQuestoesComponent;
}());

//# sourceMappingURL=listar-listas-questoes.component.js.map

/***/ }),

/***/ "../../../../../src/app/listar-questoes-respondidas/listar-questoes-respondidas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listar-questoes-respondidas/listar-questoes-respondidas.component.html":
/***/ (function(module, exports) {

module.exports = "<app-cabecalho></app-cabecalho><br>\n<h4 class=\"text-center\"><strong>Questões para corrigir</strong></h4><br>\n<div class=\"container\">\n<p-dataTable [value]=\"getQuestoesRespondidas()\" selectionMode=\"single\" [(selection)]=\"questaoRespondidaSelecionada\" (onRowSelect)=\"onRowSelect($event)\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\">\n    <p-column field=\"questao.titulo\" header=\"Título\" [sortable]=\"true\"></p-column>\n    <p-column field=\"questao.enunciado\" header=\"Enunciado\" [sortable]=\"true\"></p-column>\n</p-dataTable>\n</div>"

/***/ }),

/***/ "../../../../../src/app/listar-questoes-respondidas/listar-questoes-respondidas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListarQuestoesRespondidasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__questao_respondida_service__ = __webpack_require__("../../../../../src/app/questao-respondida.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_QuestaoRespondida__ = __webpack_require__("../../../../../src/app/models/QuestaoRespondida.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListarQuestoesRespondidasComponent = (function () {
    function ListarQuestoesRespondidasComponent(questaoRespondidaService, router, route) {
        this.questaoRespondidaService = questaoRespondidaService;
        this.router = router;
        this.route = route;
        this.questaoRespondidaSelecionada = new __WEBPACK_IMPORTED_MODULE_3__models_QuestaoRespondida__["a" /* QuestaoRespondida */]();
        this.questoesRespondidas = [];
    }
    ListarQuestoesRespondidasComponent.prototype.ngOnInit = function () {
    };
    ListarQuestoesRespondidasComponent.prototype.onRowSelect = function (event) {
        this.router.navigate(['/corrigir', this.questaoRespondidaSelecionada.id]);
    };
    ListarQuestoesRespondidasComponent.prototype.getQuestoesRespondidas = function () {
        return this.questaoRespondidaService.getParaCorrigir();
        ;
    };
    ListarQuestoesRespondidasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listar-questoes-respondidas',
            template: __webpack_require__("../../../../../src/app/listar-questoes-respondidas/listar-questoes-respondidas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/listar-questoes-respondidas/listar-questoes-respondidas.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__questao_respondida_service__["a" /* QuestaoRespondidaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__questao_respondida_service__["a" /* QuestaoRespondidaService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object])
    ], ListarQuestoesRespondidasComponent);
    return ListarQuestoesRespondidasComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=listar-questoes-respondidas.component.js.map

/***/ }),

/***/ "../../../../../src/app/listar-questoes/listar-questoes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listar-questoes/listar-questoes.component.html":
/***/ (function(module, exports) {

module.exports = "<app-cabecalho></app-cabecalho><br>\n<h4 class=\"text-center\"><strong>{{tipoListagem}}</strong></h4><br>\n<div class=\"container\">\n<p-dataTable [value]=\"questoes\" selectionMode=\"single\" [(selection)]=\"questaoSelecionada\" (onRowSelect)=\"onRowSelect($event)\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\">\n    <p-column field=\"titulo\" header=\"Título\" [sortable]=\"true\"></p-column>\n    <p-column field=\"enunciado\" header=\"Enunciado\" [sortable]=\"true\"></p-column>\n</p-dataTable>\n</div>"

/***/ }),

/***/ "../../../../../src/app/listar-questoes/listar-questoes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListarQuestoesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__questao_service__ = __webpack_require__("../../../../../src/app/questao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questao_respondida_service__ = __webpack_require__("../../../../../src/app/questao-respondida.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Questao__ = __webpack_require__("../../../../../src/app/models/Questao.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListarQuestoesComponent = (function () {
    function ListarQuestoesComponent(questaoService, questaoRespondidaService, router, route) {
        this.questaoService = questaoService;
        this.questaoRespondidaService = questaoRespondidaService;
        this.router = router;
        this.route = route;
        this.tipoListagem = "Questões para ";
        this.destino = "";
        this.questoes = [];
        this.questao = new __WEBPACK_IMPORTED_MODULE_3__models_Questao__["a" /* Questao */]();
        this.questoes = this.questaoRespondidaService.getNaoRespondidas(this.questaoService.listAll());
        this.tipoListagem = this.route.snapshot.params['tipoListagem'];
        if (this.tipoListagem == "responder") {
            this.destino = "/responder";
        }
        if (this.tipoListagem == "corrigir") {
            this.destino = "/corrigir";
        }
        this.tipoListagem = "Questões para " + this.tipoListagem + " !";
    }
    ListarQuestoesComponent.prototype.ngOnInit = function () {
    };
    ListarQuestoesComponent.prototype.onRowSelect = function (event) {
        console.log(this.destino);
        console.log(this.questaoSelecionada);
        this.router.navigate([this.destino, this.questaoSelecionada.id]);
    };
    ListarQuestoesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listar-questoes',
            template: __webpack_require__("../../../../../src/app/listar-questoes/listar-questoes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/listar-questoes/listar-questoes.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__questao_service__["a" /* QuestaoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__questao_service__["a" /* QuestaoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__questao_respondida_service__["a" /* QuestaoRespondidaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__questao_respondida_service__["a" /* QuestaoRespondidaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"]) === "function" && _d || Object])
    ], ListarQuestoesComponent);
    return ListarQuestoesComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=listar-questoes.component.js.map

/***/ }),

/***/ "../../../../../src/app/listar-todas-crud-turma/listar-todas-crud-turma.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listar-todas-crud-turma/listar-todas-crud-turma.component.html":
/***/ (function(module, exports) {

module.exports = "<app-cabecalho></app-cabecalho>\n<h4 class=\"text-center\"><strong>Todas as turmas</strong></h4><br>\n<div class=\"container\">\n<p-dataTable [value]=\"turmas\" selectionMode=\"single\" [(selection)]=\"turmaSelecionada\" (onRowSelect)=\"onRowSelect($event)\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\">\n    <p-column field=\"nome\" header=\"Nome\" [sortable]=\"true\"></p-column>\n    <p-column field=\"alunos.length\" header=\"Qtde de alunos\" [sortable]=\"true\"></p-column>\n    <p-footer>\n        <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n        <button icon=\"fa-plus\" style=\"float:right\" class=\"btn btn-success\"  routerLink=\"/turma/inserir\">+Turma</button>\n        </div></p-footer> \n</p-dataTable>\n</div>"

/***/ }),

/***/ "../../../../../src/app/listar-todas-crud-turma/listar-todas-crud-turma.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListarTodasCrudTurmaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__turma_service__ = __webpack_require__("../../../../../src/app/turma.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListarTodasCrudTurmaComponent = (function () {
    function ListarTodasCrudTurmaComponent(turmaService, router) {
        this.turmaService = turmaService;
        this.router = router;
        this.turmas = [];
    }
    ListarTodasCrudTurmaComponent.prototype.ngOnInit = function () {
        this.turmas = this.turmaService.listAll();
    };
    ListarTodasCrudTurmaComponent.prototype.onRowSelect = function (event) {
        this.turmas = event.data;
        this.router.navigate(['/turma/editar', this.turmaSelecionada.id]);
    };
    ListarTodasCrudTurmaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listar-todas-crud-turma',
            template: __webpack_require__("../../../../../src/app/listar-todas-crud-turma/listar-todas-crud-turma.component.html"),
            styles: [__webpack_require__("../../../../../src/app/listar-todas-crud-turma/listar-todas-crud-turma.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__turma_service__["a" /* TurmaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__turma_service__["a" /* TurmaService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object])
    ], ListarTodasCrudTurmaComponent);
    return ListarTodasCrudTurmaComponent;
    var _a, _b;
}());

//# sourceMappingURL=listar-todas-crud-turma.component.js.map

/***/ }),

/***/ "../../../../../src/app/listar-todas-questoes-crud/listar-todas-questoes-crud.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input{\n    width: 100%;\n}\n.centralizado{\n    \ttext-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listar-todas-questoes-crud/listar-todas-questoes-crud.component.html":
/***/ (function(module, exports) {

module.exports = "<app-cabecalho></app-cabecalho>  \n<div class=\"container\">\n    <router-outlet></router-outlet>\n<h3 class=\"text-center\"><strong>Todas as Questões</strong></h3><br>\n\n<p-dataTable [value]=\"questoes\" selectionMode=\"single\" [(selection)]=\"questaoSelecionada\" (onRowSelect)=\"onRowSelect($event)\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\">\n    <p-column field=\"nivelDificuldade\" header=\"Nível de Dificuldade\" [sortable]=\"true\"></p-column>\n    <p-column field=\"titulo\" header=\"Título\" [sortable]=\"true\"></p-column>\n    <p-column field=\"enunciado\" header=\"Enunciado\" [sortable]=\"true\"></p-column>\n    <p-column field=\"dica\" header=\"Dica\" [sortable]=\"true\"></p-column>\n    <p-footer>\n        <div class=\"ui-helper-clearfix\" style=\"width:100%\"><button icon=\"fa-plus\" style=\"float:left\" class=\"btn btn-success\"  routerLink=\"/inserir\">Add</button>\n        <button icon=\"fa-plus\" style=\"float:right\" class=\"btn btn-success\"  routerLink=\"/criar-lista\">+Lista</button>\n        </div></p-footer>   \n</p-dataTable>\n\n<p-dialog header=\"Questão Completa\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\">\n    <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"questao\">\n        <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-4\"><label for=\"nivelDificuldade\">Nível</label></div>\n            <div class=\"ui-grid-col-8\"><input pInputText id=\"nivelDificuldade\" [(ngModel)]=\"questao.nivelDificuldade\" /></div>\n        </div>\n        <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-4\"><label for=\"titulo\">Título</label></div>\n            <div class=\"ui-grid-col-8\"><input pInputText id=\"titulo\" [(ngModel)]=\"questao.titulo\" /></div>\n        </div>\n        <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-4\"><label for=\"enunciado\">Enunciado</label></div>\n            <div class=\"ui-grid-col-8\"><input pInputText id=\"enunciado\" [(ngModel)]=\"questao.enunciado\" /></div>\n        </div>\n        <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-4\"><label for=\"dica\">Dica</label></div>\n            <div class=\"ui-grid-col-8\"><input pInputText id=\"dica\" [(ngModel)]=\"questao.dica\" /></div>\n        </div>\n        <br>\n        <div class=\"ui-grid-row text-center\">\n            <div class=\"ui-grid-col-8\"><label for=\"dica\">Casos de Teste:</label></div>\n        </div>\n        <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-4\"><label for=\"casoTeste1Entrada\">#1(entrada):</label></div>\n            <div class=\"ui-grid-col-8\"><input pInputText id=\"casoTeste1Entrada\" [(ngModel)]=\"questao.retornosEsperados[0].entrada\" /></div>\n        </div>\n        <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-4\"><label for=\"casoTeste1Saida\">#1(saida):</label></div>\n            <div class=\"ui-grid-col-8\"><input pInputText id=\"casoTeste1Saida\" [(ngModel)]=\"questao.retornosEsperados[0].saida\" /></div>\n        </div>\n        <br>\n        <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-4\"><label for=\"casoTeste2Entrada\">#2(entrada):</label></div>\n            <div class=\"ui-grid-col-8\"><input pInputText id=\"casoTeste2Entrada\" [(ngModel)]=\"questao.retornosEsperados[1].entrada\" /></div>\n        </div>\n        <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-4\"><label for=\"casoTeste1Saida\">#2(saida):</label></div>\n            <div class=\"ui-grid-col-8\"><input pInputText id=\"casoTeste1Saida\" [(ngModel)]=\"questao.retornosEsperados[1].saida\" /></div>\n        </div>\n        <br>\n        <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-4\"><label for=\"casoTeste1Entrada\">#3(entrada):</label></div>\n            <div class=\"ui-grid-col-8\"><input pInputText id=\"casoTeste1Entrada\" [(ngModel)]=\"questao.retornosEsperados[2].entrada\" /></div>\n        </div>\n        <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-4\"><label for=\"casoTeste1Saida\">#3(saida):</label></div>\n            <div class=\"ui-grid-col-8\"><input pInputText id=\"casoTeste1Saida\" [(ngModel)]=\"questao.retornosEsperados[2].saida\" /></div>\n        </div>\n    </div>\n    <p-footer>\n        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n            <button type=\"button\" pButton icon=\"fa-close\" (click)=\"delete()\" label=\"Delete\"></button>\n            <button type=\"button\" pButton icon=\"fa-check\" (click)=\"save()\" label=\"Save\"></button>\n        </div>\n    </p-footer>\n</p-dialog>\n</div>\n<!--<h3 class=\"centralizado\"><strong>Listar todas as questões</strong></h3><br>-->\n  <!-- Default panel contents -->\n\n<!--<router-outlet></router-outlet>\n\n<table class=\"table\" style=\"width: 1100px;\">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th style=\"width: 900px;\">Missão</th>\n      <th></th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let questao of cars\">\n      <th scope=\"row\">1</th>\n      <td routerLink=\"/visualizar\">{{questao.titulo}}</td>\n      <td><button class=\"btn bg-warning text-white\" routerLink=\"/inserir\">Editar</button></td>\n      <td><button class=\"btn bg-danger text-white\" (click)=\"eliminarQuestoes()\">X</button></td>\n    </tr>\n  </tbody>\n</table>\n-->\n\n  <!-- List group \n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let questao of questoes\">\n          primeiroRetorno\n          <button class=\"btn bg-warning text-white\" routerLink=\"\">Editar</button>\n          <button class=\"btn bg-danger text-white\" (click)=\"eliminarQuestoes()\">X</button>\n          </li>\n  </ul>\n  -->\n\n <!--  \n<p-dataTable [value]=\"questoes\" selectionMode=\"single\" [(selection)]=\"selectedCar\" (onRowSelect)=\"onRowSelect($event)\">\n    <p-column field=\"id\" header=\"#\"></p-column>\n    <p-column field=\"titulo\" header=\"Título\"></p-column>\n    <p-column field=\"nivelDificuldade\" header=\"Nivel de Dificuldade\"></p-column>\n</p-dataTable>\n-->\n\n"

/***/ }),

/***/ "../../../../../src/app/listar-todas-questoes-crud/listar-todas-questoes-crud.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListarTodasQuestoesCRUDComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Questao__ = __webpack_require__("../../../../../src/app/models/Questao.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questao_service__ = __webpack_require__("../../../../../src/app/questao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListarTodasQuestoesCRUDComponent = (function () {
    function ListarTodasQuestoesCRUDComponent(questaoService, router) {
        this.questaoService = questaoService;
        this.router = router;
        this.questoes = [];
        this.questao = new __WEBPACK_IMPORTED_MODULE_1__models_Questao__["a" /* Questao */]();
    }
    ListarTodasQuestoesCRUDComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questoes = this.questaoService.listAll();
        this.questaoService.listAllOnFireBase().subscribe(function (questoes) {
            _this.questoes = questoes;
        });
    };
    ListarTodasQuestoesCRUDComponent.prototype.showDialogToAdd = function () {
        this.novaQuestao = true;
        this.questao = new __WEBPACK_IMPORTED_MODULE_1__models_Questao__["a" /* Questao */]();
        this.displayDialog = true;
    };
    ListarTodasQuestoesCRUDComponent.prototype.save = function () {
        var questoes = this.questoes.slice();
        if (this.novaQuestao)
            questoes.push(this.questao);
        else
            questoes[this.findQuestaoSelecionadaIndex()] = this.questao;
        this.questoes = questoes;
        this.questao = null;
        this.displayDialog = false;
        this.questaoService.questoes = this.questoes;
    };
    ListarTodasQuestoesCRUDComponent.prototype.delete = function () {
        var index = this.findQuestaoSelecionadaIndex();
        this.questoes = this.questoes.filter(function (val, i) { return i != index; });
        this.questao = null;
        this.displayDialog = false;
        this.questaoService.questoes = this.questoes;
    };
    ListarTodasQuestoesCRUDComponent.prototype.onRowSelect = function (event) {
        this.novaQuestao = false;
        this.questao = this.cloneCar(event.data);
        this.router.navigate(['/editar', this.questao.id]);
    };
    ListarTodasQuestoesCRUDComponent.prototype.cloneCar = function (c) {
        var questao = new __WEBPACK_IMPORTED_MODULE_1__models_Questao__["a" /* Questao */]();
        for (var prop in c) {
            questao[prop] = c[prop];
        }
        this.questaoService.questoes = this.questoes;
        return questao;
    };
    ListarTodasQuestoesCRUDComponent.prototype.findQuestaoSelecionadaIndex = function () {
        return this.questoes.indexOf(this.questaoSelecionada);
    };
    ListarTodasQuestoesCRUDComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'listar-todas-questoes-crud',
            template: __webpack_require__("../../../../../src/app/listar-todas-questoes-crud/listar-todas-questoes-crud.component.html"),
            styles: [__webpack_require__("../../../../../src/app/listar-todas-questoes-crud/listar-todas-questoes-crud.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__questao_service__["a" /* QuestaoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__questao_service__["a" /* QuestaoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _b || Object])
    ], ListarTodasQuestoesCRUDComponent);
    return ListarTodasQuestoesCRUDComponent;
    var _a, _b;
}());

//# sourceMappingURL=listar-todas-questoes-crud.component.js.map

/***/ }),

/***/ "../../../../../src/app/listas-questoes-crud/listas-questoes-crud.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listas-questoes-crud/listas-questoes-crud.component.html":
/***/ (function(module, exports) {

module.exports = "<app-cabecalho></app-cabecalho>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n<h3 class=\"text-center\"><strong>Todas Listas de Questões</strong></h3><br>\n<p-dataTable [value]=\"listasQuestoes\" selectionMode=\"single\" [(selection)]=\"questaoSelecionada\" (onRowSelect)=\"onRowSelect($event)\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\">\n    <p-column field=\"titulo\" header=\"Título\" [sortable]=\"true\"></p-column>\n    <p-column field=\"questoes.length\" header=\"Qtde questões\" [sortable]=\"true\"></p-column>\n    <p-column field=\"dataInicio\" header=\"A partir de:\" [sortable]=\"true\"></p-column>\n    <p-column field=\"dataFim\" header=\"Até:\" [sortable]=\"true\"></p-column>\n    <p-footer>\n        <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n        <button icon=\"fa-plus\" style=\"float:right\" class=\"btn btn-success\"  routerLink=\"/criar-lista\">+Lista</button>\n        </div></p-footer>   \n</p-dataTable>\n"

/***/ }),

/***/ "../../../../../src/app/listas-questoes-crud/listas-questoes-crud.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListasQuestoesCrudComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lista_questoes_service__ = __webpack_require__("../../../../../src/app/lista-questoes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuario_service_service__ = __webpack_require__("../../../../../src/app/usuario-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListasQuestoesCrudComponent = (function () {
    function ListasQuestoesCrudComponent(listaQuestoesService, usuarioService, router) {
        var _this = this;
        this.listaQuestoesService = listaQuestoesService;
        this.usuarioService = usuarioService;
        this.router = router;
        this.listasQuestoes = [];
        this.listasQuestoes = this.listaQuestoesService.listAllByProfessor(this.usuarioService.usuarioLogado);
        this.listaQuestoesService.listAllOnFireBase().subscribe(function (resultado) {
            _this.listasQuestoes = resultado;
        });
        console.log(this.listasQuestoes);
    }
    ListasQuestoesCrudComponent.prototype.ngOnInit = function () {
    };
    ListasQuestoesCrudComponent.prototype.onRowSelect = function (event) {
        this.listaQuestoes = event.data;
        this.router.navigate(['/editar-lista-questoes', this.listaQuestoes.id]);
    };
    ListasQuestoesCrudComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listas-questoes-crud',
            template: __webpack_require__("../../../../../src/app/listas-questoes-crud/listas-questoes-crud.component.html"),
            styles: [__webpack_require__("../../../../../src/app/listas-questoes-crud/listas-questoes-crud.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__lista_questoes_service__["a" /* ListaQuestoesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__lista_questoes_service__["a" /* ListaQuestoesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__usuario_service_service__["a" /* UsuarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__usuario_service_service__["a" /* UsuarioService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _c || Object])
    ], ListasQuestoesCrudComponent);
    return ListasQuestoesCrudComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=listas-questoes-crud.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div style= \"margin-bottom: -5px\" class=\"jumbotron bg-danger text-white jumbotron-fluid\">\n<h1 class=\"text-center\"><strong>RPG Creator</strong></h1>\n<h3 class=\"text-center\"><code>Programar, Jogar e Estudar</code></h3>\n</div>\n<div class=\"container\" style=\"width: 600px;\">\n<router-outlet></router-outlet>\n<h2><strong>Entre e faça hoje seu RPG!</strong></h2><br>\n<form #meuForm=\"ngForm\" class=\"form-group\">\n    <input type=\"text\"class=\"input form-control\" placeholder=\"Email ou Nickname\" type=\"text\" name=\"nomeCompleto\" [(ngModel)] = \"entrada\" required><br>\n    <input type=\"text\"class=\"input form-control\" placeholder=\"Senha\" type=\"password\" name=\"titulo\" [(ngModel)] = \"senha\" required><br>\n    <button class=\"btn btn-success\" [disabled]=\"(meuForm.valid && this.entrar)\" (click)=\"verficarUsuario()\">Entre</button>\n</form>\n<p-growl [(value)]=\"msgs\"></p-growl>\nAinda não está cadastrado? Clique <a href=\"/cadastro\">aqui</a> e cadastre-se!\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Usuario__ = __webpack_require__("../../../../../src/app/models/Usuario.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuario_service_service__ = __webpack_require__("../../../../../src/app/usuario-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(usuarioService, router) {
        this.usuarioService = usuarioService;
        this.router = router;
        this.msgs = [];
        this.entrada = "";
        this.senha = "";
        this.usuario = new __WEBPACK_IMPORTED_MODULE_1__models_Usuario__["a" /* Usuario */]();
        this.entrar = false;
        var usuarios = [];
        this.usuarioService.listAllOnFireBase().subscribe(function (questoes) {
            console.log(questoes);
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.verficarUsuario = function () {
        if (!this.usuarioService.autenticarUsuario(this.entrada, this.senha)) {
            this.showLoginInexistente();
        }
        else {
            this.usuario = this.usuarioService.getUsuarioByTupla(this.entrada, this.senha);
            this.usuarioService.usuarioLogado = this.usuario;
            this.router.navigate(['/home', this.usuario.id]);
        }
    };
    LoginComponent.prototype.showLoginInexistente = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Login inválido', detail: 'O login ou a senha não correspondem a nenhuma conta. Cadastre-se para abrir uma conta.' });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__usuario_service_service__["a" /* UsuarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__usuario_service_service__["a" /* UsuarioService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _b || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/ListaQuestoes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaQuestoes; });
var ListaQuestoes = (function () {
    function ListaQuestoes() {
        this.questoes = [];
        this.alunos = [];
    }
    ListaQuestoes.prototype.toChaveValor = function () {
        var chaveValor = {
            titulo: this.titulo,
            professorAdministrador: {
                nomeCompleto: this.professorAdministrador.nomeCompleto,
                nomeUsuario: this.professorAdministrador.nomeUsuario,
                email: this.professorAdministrador.email,
                senha: this.professorAdministrador.senha,
                tipo: this.professorAdministrador.tipo
            },
            dataInicio: this.dataInicio,
            questoes: this.questoes[0].toChaveValor(),
            alunos: {
                nomeCompleto: this.alunos[0].nomeCompleto,
                nomeUsuario: this.alunos[0].nomeUsuario,
                email: this.alunos[0].email,
                senha: this.alunos[0].senha,
                tipo: this.alunos[0].tipo
            },
            dataFim: this.dataFim
        };
        return chaveValor;
    };
    ListaQuestoes.prototype.checarValidadeData = function () {
        var dataHoje = new Date();
        var dataValida = true;
        console.log("Data atual: " + dataHoje);
        console.log("Data inicio: " + this.dataInicio);
        console.log("Data fim: " + this.dataFim);
        if (this.dataFim < this.dataInicio || dataHoje > this.dataInicio) {
            dataValida = false;
        }
        return dataValida;
    };
    ListaQuestoes.prototype.ehProfessor = function () {
        var ehProfessor = false;
        if (this.professorAdministrador.tipo == 1) {
            ehProfessor = true;
        }
        return ehProfessor;
    };
    ListaQuestoes.prototype.questoesToChaveValor = function (questoes) {
        var chaveValor = [];
        for (var i = 0; i < questoes.length; i++) {
            chaveValor.concat(questoes[i].toChaveValor());
        }
    };
    return ListaQuestoes;
}());

//# sourceMappingURL=ListaQuestoes.js.map

/***/ }),

/***/ "../../../../../src/app/models/Questao.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Questao; });
var Questao = (function () {
    /*
    constructor(nivelDificuldade,enunciado,dica,retornos,titulo){
        //this.id = id;
        this.nivelDificuldade = nivelDificuldade;
        //this.tempoRespostaSegundos = tempoRespostaSegundos;
        this.enunciado = enunciado;
        this.dica = dica;
        //this.pontuacao = pontuacao;
        //this.assunto = assunto;
        this.retornosEsperados = retornos;
        this.titulo = titulo;
    }
    algumasQuestoes(){
        let questaoEhPar : Questao = new Questao(1,"Escreva um algoritmos que retorne se um número é ou não par","Se ligue na condição para ser par : SER DIVISÍVEL POR 2",[{entrada :"2", saida:"Eh par"},{entrada :"5", saida:"Eh impar"}],"É par?");
        let questaoEhPerfeito : Questao = new Questao(2,"Escreva um algoritmos que retorne se um número é ou não perfeito","Se ligue na condição para ser perfeito : ESSE NÚMERO TEM DE SER IGUAL A SOMA DE SEUS DIVISORES, EXCETO ELE MESMO",[{entrada :"6", saida:"Eh perfeito"},{entrada :"5", saida:"Não é perfeito"}],"É par?");
    }
    */
    function Questao() {
        this.retornosEsperados = [
            { entrada: "", saida: "" }, { entrada: "", saida: "" }, { entrada: "", saida: "" }
        ];
    }
    Questao.prototype.imprimirQuestao = function () {
        var retorno = "";
        retorno += this.id + "***" + this.titulo + "/" + this.nivelDificuldade + "\n";
        retorno += this.enunciado + "\n";
        retorno += this.dica + "\n";
        retorno += this.retornosEsperados[0].entrada + "//" + this.retornosEsperados[0].saida + "\n";
        retorno += this.retornosEsperados[1].entrada + "//" + this.retornosEsperados[1].saida + "\n";
        retorno += this.retornosEsperados[2].entrada + "//" + this.retornosEsperados[2].saida + "\n";
        return retorno;
    };
    Questao.prototype.toChaveValor = function () {
        var chaveValor = { nivelDificuldade: this.nivelDificuldade,
            enunciado: this.enunciado,
            dica: this.dica,
            retornosEsperados: [
                { entrada: this.retornosEsperados[0].entrada, saida: this.retornosEsperados[0].saida },
                { entrada: this.retornosEsperados[1].entrada, saida: this.retornosEsperados[1].saida },
                { entrada: this.retornosEsperados[2].entrada, saida: this.retornosEsperados[2].saida }
            ],
            titulo: this.titulo };
        return chaveValor;
    };
    return Questao;
}());

//# sourceMappingURL=Questao.js.map

/***/ }),

/***/ "../../../../../src/app/models/QuestaoRespondida.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestaoRespondida; });
var QuestaoRespondida = (function () {
    function QuestaoRespondida() {
    }
    return QuestaoRespondida;
}());

//# sourceMappingURL=QuestaoRespondida.js.map

/***/ }),

/***/ "../../../../../src/app/models/Tag.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tag; });
var Tag = (function () {
    function Tag() {
    }
    return Tag;
}());

//# sourceMappingURL=Tag.js.map

/***/ }),

/***/ "../../../../../src/app/models/Turma.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Turma; });
var Turma = (function () {
    function Turma() {
        this.alunos = [];
    }
    return Turma;
}());

//# sourceMappingURL=Turma.js.map

/***/ }),

/***/ "../../../../../src/app/models/Usuario.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = (function () {
    function Usuario() {
        this.turmas = [];
    }
    Usuario.prototype.toChaveValor = function () {
        var chaveValor = {
            nomeCompleto: this.nomeCompleto,
            nomeUsuario: this.nomeUsuario,
            email: this.email,
            senha: this.senha,
            tipo: this.tipo
        };
        console.log(chaveValor);
        return chaveValor;
    };
    return Usuario;
}());

//# sourceMappingURL=Usuario.js.map

/***/ }),

/***/ "../../../../../src/app/perfil/perfil.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/perfil/perfil.component.html":
/***/ (function(module, exports) {

module.exports = "<app-cabecalho></app-cabecalho>  \n\n<div class=\"container\">\n\n<!--Colocar o gráfico  \n<p-chart type=\"bar\" [data]=\"data\"></p-chart>\n-->\n<h4><strong>Seja bem-vindo {{usuario.nomeUsuario}}</strong></h4>\n\n<div class=\"container\">\n  <div class=\"row\">\n\n    <div style=\"width: 400px;\" >\n      <br>\n      <div class=\"border\" style=\"width: 150px;\">\n        <br>\n        <br>\n        Foto\n        <br>\n        <br>\n        <br>\n        <br>\n      </div>\n      <br>\n      <div style=\"width: 300px;\">\n      <h6><strong>#pos {{usuario.nomeUsuario}}</strong></h6>\n      </div>\n    </div>\n\n\n    <div style=\"width: 700px;\" class=\"border\">\n      <h6>Veja sua evolução no RPG!</h6>\n<p-chart type=\"line\" [data]=\"data\" (onDataSelect)=\"selectData($event)\"></p-chart>\n           \n    </div>\n\n  </div> \n</div>\n<br>\nTava pensando em criar \"Conquistas\" para premiar os estudantes.\nEx.: \"Conseguiu responder questões durante X dias\";\"Conseguiu responder Y  questões corretamente\""

/***/ }),

/***/ "../../../../../src/app/perfil/perfil.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Usuario__ = __webpack_require__("../../../../../src/app/models/Usuario.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PerfilComponent = (function () {
    function PerfilComponent() {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#565656'
                }
            ]
        };
    }
    PerfilComponent.prototype.ngOnInit = function () {
        this.usuario = new __WEBPACK_IMPORTED_MODULE_1__models_Usuario__["a" /* Usuario */]();
        this.usuario.nomeCompleto = " João Marcelo D. R. Sobrinho";
        this.usuario.nomeUsuario = "JR55";
    };
    PerfilComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'perfil',
            template: __webpack_require__("../../../../../src/app/perfil/perfil.component.html"),
            styles: [__webpack_require__("../../../../../src/app/perfil/perfil.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PerfilComponent);
    return PerfilComponent;
}());

//# sourceMappingURL=perfil.component.js.map

/***/ }),

/***/ "../../../../../src/app/questao-respondida.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestaoRespondidaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_QuestaoRespondida__ = __webpack_require__("../../../../../src/app/models/QuestaoRespondida.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questao_service__ = __webpack_require__("../../../../../src/app/questao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Questao__ = __webpack_require__("../../../../../src/app/models/Questao.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestaoRespondidaService = (function () {
    function QuestaoRespondidaService(questaoService) {
        this.questaoService = questaoService;
        this.id = 0;
        this.questoesRespondidas = [];
        var qRTeste = new __WEBPACK_IMPORTED_MODULE_1__models_QuestaoRespondida__["a" /* QuestaoRespondida */]();
        qRTeste.foiCorrigida = false;
        qRTeste.resposta = "Famos fazer o feste!";
        var questao = new __WEBPACK_IMPORTED_MODULE_3__models_Questao__["a" /* Questao */]();
        questao.id = "1";
        qRTeste.questao = this.questaoService.getById(questao);
        this.insert(qRTeste);
    }
    QuestaoRespondidaService.prototype.insert = function (questaoRespondida) {
        this.id++;
        questaoRespondida.id = this.id;
        this.questoesRespondidas.push(questaoRespondida);
        console.log("Inserção efetuada! Questao:" + questaoRespondida.questao + " #" + questaoRespondida.id);
    };
    QuestaoRespondidaService.prototype.listAll = function () {
        console.log("Listando todas as Questões> Total :" + this.questoesRespondidas.length);
        return this.questoesRespondidas;
    };
    QuestaoRespondidaService.prototype.update = function (questao) {
        console.log("Atualizando Questão Respondida( titulo = " + __WEBPACK_IMPORTED_MODULE_1__models_QuestaoRespondida__["a" /* QuestaoRespondida */]);
        var posicao = this.findQuestao(questao);
        this.questoesRespondidas[posicao] = questao;
    };
    QuestaoRespondidaService.prototype.delete = function (questao) {
        console.log("Eliminando Questão Respondida ( titulo = " + __WEBPACK_IMPORTED_MODULE_1__models_QuestaoRespondida__["a" /* QuestaoRespondida */]);
        var posicao = this.findQuestao(questao);
        this.questoesRespondidas.splice(posicao, 1);
    };
    QuestaoRespondidaService.prototype.findQuestao = function (questao) {
        var posicao = 0;
        for (var i = 0; i < this.questoesRespondidas.length; i++) {
            if (questao.id == this.questoesRespondidas[i].id) {
                posicao = i;
            }
        }
        return posicao;
    };
    QuestaoRespondidaService.prototype.getById = function (questao) {
        var posicao = -1;
        for (var i = 0; i < this.questoesRespondidas.length; i++) {
            if (questao.id == this.questoesRespondidas[i].id) {
                posicao = i;
            }
        }
        questao = this.questoesRespondidas[posicao];
        return questao;
    };
    QuestaoRespondidaService.prototype.getParaCorrigir = function () {
        var questoesCorrigir = [];
        for (var i = 0; i < this.questoesRespondidas.length; i++) {
            if (!this.questoesRespondidas[i].foiCorrigida) {
                questoesCorrigir.push(this.questoesRespondidas[i]);
            }
        }
        return questoesCorrigir;
    };
    QuestaoRespondidaService.prototype.getParaCorrigidas = function () {
        var questoesCorrigidas = [];
        for (var i = 0; i < this.questoesRespondidas.length; i++) {
            if (this.questoesRespondidas[i].foiCorrigida) {
                questoesCorrigidas.push(this.questoesRespondidas[i]);
            }
        }
        return questoesCorrigidas;
    };
    QuestaoRespondidaService.prototype.foiRespondida = function (questao) {
        var foiRespondida = false;
        for (var i = 0; i < this.questoesRespondidas.length; i++) {
            if (this.questoesRespondidas[i].questao.id == questao.id) {
                foiRespondida = true;
            }
        }
        return foiRespondida;
    };
    QuestaoRespondidaService.prototype.getNaoRespondidas = function (questoes) {
        var questoesNaoRespondidas = [];
        for (var i = 0; i < questoes.length; i++) {
            console.log(this.foiRespondida(questoes[i]));
            if (!this.foiRespondida(questoes[i])) {
                console.log(questoes[i].enunciado + ":" + questoes[i].id + "///" + this.foiRespondida(questoes[i]));
                questoesNaoRespondidas.push(questoes[i]);
            }
        }
        return questoesNaoRespondidas;
    };
    QuestaoRespondidaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__questao_service__["a" /* QuestaoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__questao_service__["a" /* QuestaoService */]) === "function" && _a || Object])
    ], QuestaoRespondidaService);
    return QuestaoRespondidaService;
    var _a;
}());

//# sourceMappingURL=questao-respondida.service.js.map

/***/ }),

/***/ "../../../../../src/app/questao.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestaoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Questao__ = __webpack_require__("../../../../../src/app/models/Questao.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestaoService = (function () {
    function QuestaoService(afs) {
        this.afs = afs;
        this.id = 0;
        this.questoes = [];
        this.questao1 = new __WEBPACK_IMPORTED_MODULE_1__models_Questao__["a" /* Questao */]();
        this.questao2 = new __WEBPACK_IMPORTED_MODULE_1__models_Questao__["a" /* Questao */]();
        this.questao3 = new __WEBPACK_IMPORTED_MODULE_1__models_Questao__["a" /* Questao */]();
        this.questaoCollection = this.afs.collection("Questoes");
        this.questao1.titulo = "Bazinga!";
        this.questao1.nivelDificuldade = 1;
        this.questao1.enunciado = " Enunciado do Bazinga!";
        this.questao1.dica = " Dica do Bazinga!";
        this.questao1.retornosEsperados[0].entrada = "Entrada1 - Bazinga";
        this.questao1.retornosEsperados[0].saida = "Saida1 - Bazinga";
        this.questao1.retornosEsperados[1].entrada = "Entrada2 - Bazinga";
        this.questao1.retornosEsperados[1].saida = "Saida2 - Bazinga";
        this.questao1.retornosEsperados[2].entrada = "Entrada3 - Bazinga";
        this.questao1.retornosEsperados[2].saida = "Saida3 - Bazinga";
        this.questao2.titulo = "Vamos trabalhar!";
        this.questao2.nivelDificuldade = 2;
        this.questao2.enunciado = " Enunciado do Vamos trabalhar!";
        this.questao2.dica = " Dica do Vamos trabalhar!";
        this.questao2.retornosEsperados[0].entrada = "Entrada1 - Vamos trabalhar";
        this.questao2.retornosEsperados[0].saida = "Saida1 - Vamos trabalhar";
        this.questao2.retornosEsperados[1].entrada = "Entrada2 - Vamos trabalhar";
        this.questao2.retornosEsperados[1].saida = "Saida2 - Vamos trabalhar";
        this.questao2.retornosEsperados[2].entrada = "Entrada3 - Vamos trabalhar";
        this.questao2.retornosEsperados[2].saida = "Saida3 - Vamos trabalhar";
        this.questao3.titulo = "Triângulos!";
        this.questao3.nivelDificuldade = 3;
        this.questao3.enunciado = " Enunciado do Triângulos!";
        this.questao3.dica = " Dica do Triângulos!";
        this.questao3.retornosEsperados[0].entrada = "Entrada1 - Triângulos";
        this.questao3.retornosEsperados[0].saida = "Saida1 - Triângulos";
        this.questao3.retornosEsperados[1].entrada = "Entrada2 - Triângulos";
        this.questao3.retornosEsperados[1].saida = "Saida2 -  Triângulos";
        this.questao3.retornosEsperados[2].entrada = "Entrada3 -  Triângulos";
        this.questao3.retornosEsperados[2].saida = "Saida3 -  Triângulos";
        this.insert(this.questao1);
        this.insert(this.questao2);
        this.insert(this.questao3);
    }
    QuestaoService.prototype.insertOnFirebase = function (questao) {
        this.questaoCollection.add(questao.toChaveValor()).then(function (resultado) {
            questao.id = resultado.id;
        });
        console.log("id gerado pelo FireBase : " + questao.id);
    };
    QuestaoService.prototype.insert = function (questao) {
        this.id++;
        questao.id = this.id + "";
        this.questoes.push(questao);
        console.log("Inserção efetuada! Questao:" + questao.titulo + " #" + questao.id);
    };
    QuestaoService.prototype.listAll = function () {
        console.log("Listando todas as Questões> Total :" + this.questoes.length);
        return this.questoes;
    };
    QuestaoService.prototype.update = function (questao) {
        console.log("Atualizando Questão ( titulo = " + questao.titulo);
        var posicao = this.findQuestao(questao);
        this.questoes[posicao] = questao;
    };
    QuestaoService.prototype.delete = function (questao) {
        console.log("Eliminando Questão ( titulo = " + questao.titulo);
        var posicao = this.findQuestao(questao);
        this.questoes.splice(posicao, 1);
    };
    QuestaoService.prototype.findQuestao = function (questao) {
        var posicao = 0;
        for (var i = 0; i < this.questoes.length; i++) {
            if (questao.id == this.questoes[i].id) {
                posicao = i;
            }
        }
        return posicao;
    };
    QuestaoService.prototype.getById = function (questao) {
        var posicao = -1;
        for (var i = 0; i < this.questoes.length; i++) {
            if (questao.id == this.questoes[i].id) {
                posicao = i;
            }
        }
        questao = this.questoes[posicao];
        return questao;
    };
    QuestaoService.prototype.getByIdOnFireBase = function (questao) {
        var _this = this;
        var questaoObservable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            var doc = _this.questaoCollection.doc(questao.id);
            doc.snapshotChanges().subscribe(function (result) {
                var id = result.payload.id;
                var data = result.payload.data();
                console.log("Oh o data");
                console.log(data);
                var document = __assign({ id: id }, data);
                observer.next(document);
                observer.complete();
            });
        });
        questaoObservable.subscribe(function (resultadoObservable) {
            questao.id = resultadoObservable.id;
            questao.enunciado = resultadoObservable.enunciado;
            questao.dica = resultadoObservable.dica;
            questao.nivelDificuldade = resultadoObservable.nivelDificuldade;
            questao.retornosEsperados = resultadoObservable.retornosEsperados;
            questao.titulo = resultadoObservable.titulo;
        });
        console.log("Oh a questão!");
        console.log(questao);
        /*
        let  q:Questao = new Questao();
        q.id = questao.id;
        q.enunciado = questao.enunciado;
        q.dica = questao.dica;
        q.nivelDificuldade = questao.nivelDificuldade;
        q.retornosEsperados = questao.retornosEsperados;*/
        return questao;
    };
    QuestaoService.prototype.listAllOnFireBase = function () {
        var _this = this;
        var resultados = [];
        var meuObservable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.questaoCollection.snapshotChanges().subscribe(function (result) {
                result.map(function (documents) {
                    var id = documents.payload.doc.id;
                    var data = documents.payload.doc.data();
                    var document = __assign({ id: id }, data);
                    resultados.push(document);
                });
                observer.next(resultados);
                observer.complete();
            });
        });
        return meuObservable;
    };
    QuestaoService.prototype.deleteOnFireBase = function (funcionario) {
        return this.questaoCollection.doc(funcionario.id).delete();
    };
    QuestaoService.prototype.updateOnFireBase = function (questao) {
        this.questaoCollection.add(questao.toChaveValor()).then(function (resultado) {
            questao.id = resultado.id;
        });
    };
    QuestaoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _a || Object])
    ], QuestaoService);
    return QuestaoService;
    var _a;
}());

//# sourceMappingURL=questao.service.js.map

/***/ }),

/***/ "../../../../../src/app/responder-questao/responder-questao.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/responder-questao/responder-questao.component.html":
/***/ (function(module, exports) {

module.exports = "<app-cabecalho></app-cabecalho>  \n\n<!--Depois adicionar Pontuação, Nível e Assunto-->\n<div class=\"container\">\n<router-outlet></router-outlet>\n<br>\n<h4 class=\"text-center\"><strong>{{questao.titulo}}</strong></h4>\n<strong>Nivel de dificuldade : {{questao.nivelDificuldade}} </strong><br><br>\n<div class=\"card\">\n  <div class=\"card-body\">\n      <h5>{{questao.enunciado}}</h5>\n  </div>\n</div><br>\n\n<table class=\"table table-bordered\"> \n<thead>\n    <tr>\n      <th style=\"width: 550px;\" class=\"text-center\">{{questao.retornosEsperados[0].entrada}}</th>\n      <th style=\"width: 550px;\" class=\"text-center\">{{questao.retornosEsperados[0].saida}}</th>\n    </tr>\n </thead>   \n\n  <tr>\n    <td> {{questao.retornosEsperados[0].entrada}}</td>\n    <td> {{questao.retornosEsperados[0].saida}}</td>\n  </tr> \n\n  <tr>\n    <td> {{questao.retornosEsperados[1].entrada}}</td>\n    <td> {{questao.retornosEsperados[1].saida}}</td>\n  </tr>\n\n  <tr>\n    <td> {{questao.retornosEsperados[2].saida}}</td>\n    <td> {{questao.retornosEsperados[2].saida}}</td>\n  </tr>\n</table><br>\n<strong>Sua resposta:</strong><br>\n\n<textarea [(ngModel)]=\"questaoRespondida.resposta\" rows=\"15\" cols=\"155\" pInputTextarea></textarea>\n<button class=\"btn btn-success\" (click)=\"responder()\">Responder</button>\n\n\n  <!--\n    <form #meuForm=\"ngForm\" class=\"form-group\">\n<textarea [(ngModel)]=\"questaoRespondida.resposta\" rows=\"15\" cols=\"155\" pInputTextarea></textarea>\n<button class=\"btn btn-success\" (click)=\"responder()\">Responder</button>\n</form>\n\n    \n    \n     List group\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">primeiroRetorno</li>\n    <li class=\"list-group-item\">segundoRetorno</li>\n    <li class=\"list-group-item\">terceiroRetorno</li>\n  </ul>\n  -->\n  <!--<p-rating [(ngModel)]=\"val\"></p-rating>-->\n\n</div><br>\n<!-- ao clicar em responder, abrir uma caixa de texto, ou algo parecido, para o usuário submeter sua resposta-->\n<!--Botão responder/editar de acordo com as permissões do usuário, ao clicar é redirecionado para a tela de inserir questão, com os campos preenchidos-->\n\n<!-- validar a lógica para responder-->"

/***/ }),

/***/ "../../../../../src/app/responder-questao/responder-questao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponderQuestaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Questao__ = __webpack_require__("../../../../../src/app/models/Questao.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_QuestaoRespondida__ = __webpack_require__("../../../../../src/app/models/QuestaoRespondida.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Usuario__ = __webpack_require__("../../../../../src/app/models/Usuario.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questao_respondida_service__ = __webpack_require__("../../../../../src/app/questao-respondida.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__questao_service__ = __webpack_require__("../../../../../src/app/questao.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ResponderQuestaoComponent = (function () {
    function ResponderQuestaoComponent(questaoRespondidaService, route, router, questaoService) {
        this.questaoRespondidaService = questaoRespondidaService;
        this.route = route;
        this.router = router;
        this.questaoService = questaoService;
        this.questao = new __WEBPACK_IMPORTED_MODULE_1__models_Questao__["a" /* Questao */]();
        this.questaoRespondida = new __WEBPACK_IMPORTED_MODULE_2__models_QuestaoRespondida__["a" /* QuestaoRespondida */]();
        /*
        this.questao.titulo = "Neste espaço o título da questão.";
          this.questao.enunciado = "Neste espaço aparecerá o enunciado da questão";
          this.questao.nivelDificuldade = 1;
              this.questao.retornosEsperados = [
            {entrada :"Entrada de exemplo", saida:"Retorno Esperado"},
            {entrada :"2a Entrada de exemplo", saida:"2o Retorno Esperado"},
            {entrada :"3a Entrada de exemplo", saida:"3o Retorno Esperado"}
            ];
            */
        this.questao.id = this.route.snapshot.params['id'];
        this.questao = this.questaoService.getById(this.questao);
        console.log(this.questao);
        this.questaoRespondida.aluno = new __WEBPACK_IMPORTED_MODULE_3__models_Usuario__["a" /* Usuario */](); // como associar ao usuario? Vai ter que passar o id por todo canto?
        this.questaoRespondida.questao = this.questao;
    }
    ResponderQuestaoComponent.prototype.ngOnInit = function () {
    };
    ResponderQuestaoComponent.prototype.responder = function () {
        this.questaoRespondida.foiCorrigida = false;
        this.questaoRespondidaService.insert(this.questaoRespondida);
        console.log(this.questaoRespondida);
        this.router.navigate(['/listar-questoes/responder']);
        //essas função poderia abrir uma janela na qual o jogador insere sua resposta
    };
    ResponderQuestaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-responder-questao',
            template: __webpack_require__("../../../../../src/app/responder-questao/responder-questao.component.html"),
            styles: [__webpack_require__("../../../../../src/app/responder-questao/responder-questao.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__questao_respondida_service__["a" /* QuestaoRespondidaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__questao_respondida_service__["a" /* QuestaoRespondidaService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__questao_service__["a" /* QuestaoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__questao_service__["a" /* QuestaoService */]) === "function" && _d || Object])
    ], ResponderQuestaoComponent);
    return ResponderQuestaoComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=responder-questao.component.js.map

/***/ }),

/***/ "../../../../../src/app/tag.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Tag__ = __webpack_require__("../../../../../src/app/models/Tag.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TagService = (function () {
    function TagService() {
        this.tags = [];
        this.id = 0;
        var tagTestes = new __WEBPACK_IMPORTED_MODULE_1__models_Tag__["a" /* Tag */]();
        var tagTestes1 = new __WEBPACK_IMPORTED_MODULE_1__models_Tag__["a" /* Tag */]();
        var tagTestes2 = new __WEBPACK_IMPORTED_MODULE_1__models_Tag__["a" /* Tag */]();
        tagTestes.nome = "Estruturas de Repetição";
        this.insert(tagTestes);
        tagTestes1.nome = "Matrizes";
        this.insert(tagTestes1);
        tagTestes2.nome = "Array";
        this.insert(tagTestes2);
    }
    TagService.prototype.insert = function (tag) {
        this.id++;
        tag.id = this.id;
        this.tags.push(tag);
        console.log("Inserção efetuada! Tag:\n" + tag);
    };
    TagService.prototype.listAll = function () {
        console.log("Listando todas as Tags> Total :" + this.tags);
        return this.tags;
    };
    TagService.prototype.update = function (tag) {
        var posicao = this.findTag(tag);
        this.tags[posicao] = tag;
    };
    TagService.prototype.delete = function (tag) {
        var posicao = this.findTag(tag);
        this.tags.splice(posicao, 1);
    };
    TagService.prototype.findTag = function (tag) {
        var posicao = 0;
        for (var i = 0; i < this.tags.length; i++) {
            if (tag.id == this.tags[i].id) {
                posicao = i;
            }
        }
        return posicao;
    };
    TagService.prototype.getById = function (tag) {
        var posicao = -1;
        for (var i = 0; i < this.tags.length; i++) {
            if (tag.id == this.tags[i].id) {
                posicao = i;
            }
        }
        tag = this.tags[posicao];
        return tag;
    };
    TagService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TagService);
    return TagService;
}());

//# sourceMappingURL=tag.service.js.map

/***/ }),

/***/ "../../../../../src/app/turma.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurmaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__usuario_service_service__ = __webpack_require__("../../../../../src/app/usuario-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TurmaService = (function () {
    function TurmaService(usuarioService) {
        this.usuarioService = usuarioService;
        this.turmas = [];
        this.id = 0;
    }
    TurmaService.prototype.insert = function (turma) {
        this.id++;
        turma.id = this.id;
        this.turmas.push(turma);
        console.log("Inserção efetuada! Turma:\n" + turma);
    };
    TurmaService.prototype.listAll = function () {
        console.log("Listando todas as Turmas> Total :" + this.turmas);
        return this.turmas;
    };
    TurmaService.prototype.update = function (turma) {
        var posicao = this.findTurma(turma);
        this.turmas[posicao] = turma;
    };
    TurmaService.prototype.delete = function (turma) {
        var posicao = this.findTurma(turma);
        this.turmas.splice(posicao, 1);
    };
    TurmaService.prototype.findTurma = function (turma) {
        var posicao = 0;
        for (var i = 0; i < this.turmas.length; i++) {
            if (turma.id == this.turmas[i].id) {
                posicao = i;
            }
        }
        return posicao;
    };
    TurmaService.prototype.getById = function (turma) {
        var posicao = -1;
        for (var i = 0; i < this.turmas.length; i++) {
            if (turma.id == this.turmas[i].id) {
                posicao = i;
            }
        }
        turma = this.turmas[posicao];
        return turma;
    };
    TurmaService.prototype.alunosNaoEstaoNaTurma = function (turma) {
        var alunos = this.usuarioService.listAllAlunos();
        var alunosNaoEstaoNaLista = [];
        for (var i = 0; i < alunos.length; i++) {
            if (!this.alunoEstaNaTurma(turma, alunos[i])) {
                alunosNaoEstaoNaLista.push(alunos[i]);
            }
        }
        return alunosNaoEstaoNaLista;
    };
    TurmaService.prototype.alunoEstaNaTurma = function (turma, aluno) {
        var estaNaLista = false;
        for (var j = 0; j < turma.alunos.length; j++) {
            if (turma.alunos[j].id == aluno.id) {
                estaNaLista = true;
            }
        }
        return estaNaLista;
    };
    TurmaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__usuario_service_service__["a" /* UsuarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__usuario_service_service__["a" /* UsuarioService */]) === "function" && _a || Object])
    ], TurmaService);
    return TurmaService;
    var _a;
}());

//# sourceMappingURL=turma.service.js.map

/***/ }),

/***/ "../../../../../src/app/usuario-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Usuario__ = __webpack_require__("../../../../../src/app/models/Usuario.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsuarioService = (function () {
    function UsuarioService(afs) {
        var _this = this;
        this.afs = afs;
        this.usuarios = [];
        this.usuarioLogado = new __WEBPACK_IMPORTED_MODULE_1__models_Usuario__["a" /* Usuario */]();
        this.usuarioCollection = this.afs.collection("Usuarios");
        this.listAllOnFireBase().subscribe(function (resultado) {
            _this.usuarios = resultado;
        });
        /*
        let professorTeste1 = new Usuario();
        let alunoTeste1 = new Usuario();
        let professorTeste2 = new Usuario();
        let alunoTeste2 = new Usuario();  let alunoTeste3 = new Usuario();  let alunoTeste4 = new Usuario();
        let alunoTeste5 = new Usuario();  let alunoTeste6 = new Usuario();  let alunoTeste7 = new Usuario();
        let alunoTeste8 = new Usuario();  let alunoTeste9 = new Usuario();  let alunoTeste10 = new Usuario();  let alunoTeste11 = new Usuario();
    
        professorTeste1.email =  "leonardo@gmail.com";             professorTeste2.email =  "david.alain@gmail.com";
        professorTeste1.login = "leosoares";                       professorTeste2.login = "davalain";
        professorTeste1.nomeCompleto = "Leonardo Soares e Silva";  professorTeste2.nomeCompleto = "David Alain do Nascimento";
        professorTeste1.nomeUsuario = "LSoares";                   professorTeste2.nomeUsuario = "DavAlain";
        professorTeste1.senha = "123";                             professorTeste2.senha = "123";
        professorTeste1.tipo = 1;    professorTeste1.id = "1";     professorTeste2.tipo = 1;
    
        alunoTeste1.email =  "joaoifpe15@gmail.com";              alunoTeste2.email =  "van@gmail.com";
        alunoTeste1.login = "jdr55";                              alunoTeste2.login = "vanCap";
        alunoTeste1.nomeCompleto = "João Marcelo D. R. Sobrinho"; alunoTeste2.nomeCompleto = "Vanessa Almeida";
        alunoTeste1.nomeUsuario = "JMDRS";                        alunoTeste2.nomeUsuario = "Vanessinha Magali";
        alunoTeste1.senha = "123";                                alunoTeste2.senha = "123";
        alunoTeste1.tipo = 0;                                     alunoTeste2.tipo = 0;
        alunoTeste1.disciplina = '3TILPW';                        alunoTeste2.disciplina = '3TIADS';
    
    
        alunoTeste3.email =  "bia@gmail.com";              alunoTeste4.email =  "emely.melo@gmail.com";
        alunoTeste3.login = "biaGus";                              alunoTeste4.login = "emyLaj";
        alunoTeste3.nomeCompleto = "Beatriz Ramos"; alunoTeste4.nomeCompleto = "Emely Melo";
        alunoTeste3.nomeUsuario = "Bia Engenheira";                        alunoTeste4.nomeUsuario = "Emely Grey";
        alunoTeste3.senha = "123";                                alunoTeste4.senha = "123";
        alunoTeste3.tipo = 0;                                     alunoTeste4.tipo = 0;
        alunoTeste3.disciplina = '3TIADS';                        alunoTeste4.disciplina = '3TILPW';
    
        alunoTeste5.email =  "gusmao@gmail.com";              alunoTeste6.email =  "evra@gmail.com";
        alunoTeste5.login = "gusGus";                              alunoTeste6.login = "evaSj";
        alunoTeste5.nomeCompleto = "Mateus Gusmão"; alunoTeste6.nomeCompleto = "Eva Victória";
        alunoTeste5.nomeUsuario = "Capitão";                        alunoTeste6.nomeUsuario = "Evinha dos TI";
        alunoTeste5.senha = "123";                                alunoTeste6.senha = "123";
        alunoTeste5.tipo = 0;                                     alunoTeste6.tipo = 0;
        alunoTeste5.disciplina = '3TIMAT';                        alunoTeste6.disciplina = '3TILPW';
    
        alunoTeste7.email =  "milena@gmail.com";              alunoTeste8.email =  "muke@gmail.com";
        alunoTeste7.login = "mihGus";                              alunoTeste8.login = "johPeq";
        alunoTeste7.nomeCompleto = "Milena Siqueira"; alunoTeste8.nomeCompleto = "Joanne Gabriela";
        alunoTeste7.nomeUsuario = "Milenária";                        alunoTeste8.nomeUsuario = "Joh Jong Un";
        alunoTeste7.senha = "123";                                alunoTeste8.senha = "123";
        alunoTeste7.tipo = 0;                                     alunoTeste8.tipo = 0;
        alunoTeste7.disciplina = '3TILPW';                        alunoTeste8.disciplina = '3TIADS';
    
        alunoTeste9.email =  "pedrao@gmail.com";              alunoTeste10.email =  "marcelino@gmail.com";
        alunoTeste9.login = "pedGus";                              alunoTeste10.login = "marGus";
        alunoTeste9.nomeCompleto = "Pedro Hugo"; alunoTeste10.nomeCompleto = "Marcelino Barros";
        alunoTeste9.nomeUsuario = "Capivara comprometida";        alunoTeste10.nomeUsuario = "Marcelino dos teclados";
        alunoTeste9.senha = "123";                                alunoTeste10.senha = "123";
        alunoTeste9.tipo = 0;                                     alunoTeste10.tipo = 0;
        alunoTeste9.disciplina = '3TIMAT';                        alunoTeste10.disciplina = '3TILPW';
    
        alunoTeste11.email =  "joh@gmail.com";
        alunoTeste11.login = "johGus";
        alunoTeste11.nomeCompleto = "Jhonantas Wesley";
        alunoTeste11.nomeUsuario = "Cap. Iaw Brow";
        alunoTeste11.senha = "123";
        alunoTeste11.tipo = 0;
        alunoTeste11.disciplina = '3TIMAT';
    
        this.insert(professorTeste1); this.insert(professorTeste2);
        this.insert(alunoTeste1);this.insert(alunoTeste2);this.insert(alunoTeste3);this.insert(alunoTeste4);
        this.insert(alunoTeste5);this.insert(alunoTeste6);this.insert(alunoTeste7);this.insert(alunoTeste8);
        this.insert(alunoTeste9);this.insert(alunoTeste10);this.insert(alunoTeste11);*/
    }
    UsuarioService.prototype.insertOnFirebase = function (usuario) {
        return this.usuarioCollection.add(usuario.toChaveValor());
    };
    UsuarioService.prototype.insert = function (usuario) {
        this.usuarios.push(usuario);
        console.log(usuario);
    };
    UsuarioService.prototype.listAll = function () {
        console.log("Listando todos os Usuários> Total :" + this.usuarios.length);
        return this.usuarios;
    };
    UsuarioService.prototype.update = function (usuario) {
        console.log("Atualizando Usuário");
        var posicao = this.findUsuario(usuario);
        this.usuarios[posicao] = usuario;
    };
    UsuarioService.prototype.delete = function (usuario) {
        console.log("Eliminando Usuário");
        var posicao = this.findUsuario(usuario);
        this.usuarios.splice(posicao, 1);
    };
    UsuarioService.prototype.findUsuario = function (usuario) {
        var posicao = -1;
        for (var i = 0; i < this.usuarios.length; i++) {
            if (usuario.id == this.usuarios[i].id) {
                posicao = i;
            }
        }
        return posicao;
    };
    UsuarioService.prototype.getById = function (usuario) {
        var posicao = -1;
        for (var i = 0; i < this.usuarios.length; i++) {
            if (usuario.id == this.usuarios[i].id) {
                posicao = i;
            }
        }
        usuario = this.usuarios[posicao];
        return usuario;
    };
    UsuarioService.prototype.autenticarUsuario = function (entrada, senha) {
        var podeLogar = false;
        for (var i = 0; i < this.usuarios.length; i++) {
            if ((this.usuarios[i].nomeUsuario == entrada || this.usuarios[i].email == entrada) && this.usuarios[i].senha == senha) {
                podeLogar = true;
            }
        }
        return podeLogar;
    };
    UsuarioService.prototype.getUsuarioByTupla = function (entrada, senha) {
        var user = null;
        for (var i = 0; i < this.usuarios.length; i++) {
            if ((this.usuarios[i].nomeUsuario == entrada || this.usuarios[i].email == entrada) && this.usuarios[i].senha == senha) {
                user = this.usuarios[i];
            }
        }
        return user;
    };
    UsuarioService.prototype.listAllAlunos = function () {
        var alunos = [];
        for (var i = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].tipo == 0) {
                alunos.push(this.usuarios[i]);
            }
        }
        return alunos;
    };
    UsuarioService.prototype.listAllOnFireBase = function () {
        var _this = this;
        var resultados = [];
        var meuObservable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.usuarioCollection.snapshotChanges().subscribe(function (result) {
                result.map(function (documents) {
                    var id = documents.payload.doc.id;
                    var data = documents.payload.doc.data();
                    var document = __assign({ id: id }, data);
                    resultados.push(document);
                });
                observer.next(resultados);
                observer.complete();
            });
        });
        return meuObservable;
    };
    UsuarioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _a || Object])
    ], UsuarioService);
    return UsuarioService;
    var _a;
}());

//# sourceMappingURL=usuario-service.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/environments/firebase.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireBaseConfig; });
var FireBaseConfig = {
    apiKey: "AIzaSyBL_Ffsgg9_zwjZIWKaXSoWfxWYj4wdKr8",
    authDomain: "rpg-creator.firebaseapp.com",
    databaseURL: "https://rpg-creator.firebaseio.com",
    projectId: "rpg-creator",
    storageBucket: "rpg-creator.appspot.com",
    messagingSenderId: "866688566271"
};
//# sourceMappingURL=firebase.config.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
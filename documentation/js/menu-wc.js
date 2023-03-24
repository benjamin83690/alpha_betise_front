'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">front documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-4f79ed313301eba8da3aea63f0438a7a52b197c47e89daf92ea11b78bf59bc57582a3742571d5547ce42b2321c4b61aef9a6da058535e6a3852305dd5b8cb6da"' : 'data-target="#xs-components-links-module-AppModule-4f79ed313301eba8da3aea63f0438a7a52b197c47e89daf92ea11b78bf59bc57582a3742571d5547ce42b2321c4b61aef9a6da058535e6a3852305dd5b8cb6da"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-4f79ed313301eba8da3aea63f0438a7a52b197c47e89daf92ea11b78bf59bc57582a3742571d5547ce42b2321c4b61aef9a6da058535e6a3852305dd5b8cb6da"' :
                                            'id="xs-components-links-module-AppModule-4f79ed313301eba8da3aea63f0438a7a52b197c47e89daf92ea11b78bf59bc57582a3742571d5547ce42b2321c4b61aef9a6da058535e6a3852305dd5b8cb6da"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BackOfficeModule.html" data-type="entity-link" >BackOfficeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BackOfficeModule-518d9138e84afdca1e06e06afcd849813653e08367a7dd9f62ec04530c4fd96ee4845ddc0f637b917f207ac63466eb853aab808e82c5e15aaa17fb10e92ad9c1"' : 'data-target="#xs-components-links-module-BackOfficeModule-518d9138e84afdca1e06e06afcd849813653e08367a7dd9f62ec04530c4fd96ee4845ddc0f637b917f207ac63466eb853aab808e82c5e15aaa17fb10e92ad9c1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BackOfficeModule-518d9138e84afdca1e06e06afcd849813653e08367a7dd9f62ec04530c4fd96ee4845ddc0f637b917f207ac63466eb853aab808e82c5e15aaa17fb10e92ad9c1"' :
                                            'id="xs-components-links-module-BackOfficeModule-518d9138e84afdca1e06e06afcd849813653e08367a7dd9f62ec04530c4fd96ee4845ddc0f637b917f207ac63466eb853aab808e82c5e15aaa17fb10e92ad9c1"' }>
                                            <li class="link">
                                                <a href="components/AddLivreComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddLivreComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LivresComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LivresComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateLivreComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateLivreComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PublicModule-832368e3a4a3ba27320351712274a2424777076bc81c68a33dd2ec848b539641d82fd124d65bad76c12a4325cc208ba77ca4b4d028d9bc70733e6d395ebfe98c"' : 'data-target="#xs-components-links-module-PublicModule-832368e3a4a3ba27320351712274a2424777076bc81c68a33dd2ec848b539641d82fd124d65bad76c12a4325cc208ba77ca4b4d028d9bc70733e6d395ebfe98c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-832368e3a4a3ba27320351712274a2424777076bc81c68a33dd2ec848b539641d82fd124d65bad76c12a4325cc208ba77ca4b4d028d9bc70733e6d395ebfe98c"' :
                                            'id="xs-components-links-module-PublicModule-832368e3a4a3ba27320351712274a2424777076bc81c68a33dd2ec848b539641d82fd124d65bad76c12a4325cc208ba77ca4b4d028d9bc70733e6d395ebfe98c"' }>
                                            <li class="link">
                                                <a href="components/AccueilComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccueilComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CommentaireComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommentaireComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConseilsLectureComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConseilsLectureComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EvenementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EvenementComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InscriptionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InscriptionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InscriptionEvenementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InscriptionEvenementComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InterditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InterditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LibrairieComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LibrairieComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LivreComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LivreComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PanierComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PanierComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProduitComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProduitComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfilComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfilComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RencontresComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RencontresComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TeaserEvenementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeaserEvenementComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-17e637d929054f426916e72dbedcf072ee77d063b37e762ab313f6c5d05a4d2e214ab3e31017af1f168feec6caf2acd645d9bd8dc193b9659443014b85386a22"' : 'data-target="#xs-components-links-module-SharedModule-17e637d929054f426916e72dbedcf072ee77d063b37e762ab313f6c5d05a4d2e214ab3e31017af1f168feec6caf2acd645d9bd8dc193b9659443014b85386a22"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-17e637d929054f426916e72dbedcf072ee77d063b37e762ab313f6c5d05a4d2e214ab3e31017af1f168feec6caf2acd645d9bd8dc193b9659443014b85386a22"' :
                                            'id="xs-components-links-module-SharedModule-17e637d929054f426916e72dbedcf072ee77d063b37e762ab313f6c5d05a4d2e214ab3e31017af1f168feec6caf2acd645d9bd8dc193b9659443014b85386a22"' }>
                                            <li class="link">
                                                <a href="components/SnackbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SnackbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CrudService.html" data-type="entity-link" >CrudService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PanierService.html" data-type="entity-link" >PanierService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RencontresService.html" data-type="entity-link" >RencontresService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UtilsService.html" data-type="entity-link" >UtilsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/TokenInterceptor.html" data-type="entity-link" >TokenInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/IsAdminConnectedGuard.html" data-type="entity-link" >IsAdminConnectedGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/EventConfig.html" data-type="entity-link" >EventConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PeriodicElement.html" data-type="entity-link" >PeriodicElement</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
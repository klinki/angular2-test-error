import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import "rxjs/Rx";
import {AppComponent} from "./components/app.component";
import {routing} from "./app.routing";
import {ExecutionsListComponent} from "./components/executions/executions-list.component";
import {ExecutionsListTestWorkingComponent} from "./components/executions-test-working/executions-list-test-working.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        ExecutionsListComponent,
        ExecutionsListTestWorkingComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

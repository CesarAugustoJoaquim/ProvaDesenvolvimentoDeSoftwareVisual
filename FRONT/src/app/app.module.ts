import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { ListarAutomovelComponent } from './components/views/automovel/listar-automovel/listar-automovel.component';
import { CadastarAutomovelComponent } from './components/views/automovel/cadastar-automovel/cadastar-automovel.component';

@NgModule({
    declarations: [
        AppComponent,
        ListarAutomovelComponent,
        CadastarAutomovelComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

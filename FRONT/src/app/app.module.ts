import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { CadastrarautomovelComponent } from './components/views/automovel/cadastrarautomovel/cadastrarautomovel.component';
import { ListarautomovelComponent } from './components/views/automovel/listarautomovel/listarautomovel.component';

@NgModule({
    declarations: [
        AppComponent,
        CadastrarautomovelComponent,
        ListarautomovelComponent
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

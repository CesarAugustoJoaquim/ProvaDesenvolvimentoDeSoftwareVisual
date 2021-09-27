import { CadastarAutomovelComponent } from './components/views/automovel/cadastar-automovel/cadastar-automovel.component';
import { ListarAutomovelComponent } from './components/views/automovel/listar-automovel/listar-automovel.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: "",
        component: ListarAutomovelComponent
    },
    {
        path: "automovel/listar",
        component: ListarAutomovelComponent
    },
    {
        path: "automovel/cadastrar",
        component: CadastarAutomovelComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
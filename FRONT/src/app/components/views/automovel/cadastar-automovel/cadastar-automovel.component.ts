import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Automovel } from 'src/app/models/automovel';
import { AutomovelService } from 'src/app/services/automovel.service';

@Component({
    selector: 'app-cadastar-automovel',
    templateUrl: './cadastar-automovel.component.html',
    styleUrls: ['./cadastar-automovel.component.css']
})
export class CadastarAutomovelComponent implements OnInit {

    numeroChassi!: string;
    fabricante!: string;
    modelo!: string;
    ano!: number;
    cor!: string;
    placa?: string;

    constructor(private service: AutomovelService, private router: Router) { }

    ngOnInit(): void {}

    create(): void{
        let automovel: Automovel = {
            numeroChassi: this.numeroChassi,
            fabricante: this.fabricante,
            modelo: this.modelo,
            ano: this.ano,
            cor: this.cor,
            placa: this.placa
        }
        this.service.create(automovel).subscribe((automovel) => {
            this.router.navigate(["automovel/listar"])
        })
    }

}

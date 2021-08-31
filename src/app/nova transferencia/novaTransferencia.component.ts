import { routes } from './../app.routing.models';
import { Transferencia } from './../models/tranferencia.models';
import { TransferenciaService } from './../services/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Input } from "@angular/core";
import { Component, Output } from "@angular/core";
import { Router } from '@angular/router';


@Component({
    selector: 'app-nova-transferencia',
    templateUrl : './novaTransferencia.component.html',
    styleUrls : ['./novaTransferencia.component.scss']
})

export class NovaTransferenciaComponent {
  @Output() public aoTransferir: EventEmitter<any> = new EventEmitter();

  valor: number= 0;
  destino: number= 0;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    console.log('Solicitada nova transferência')
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino}
    this.service.adicionar(valorEmitir).subscribe( resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato')
    },
    (error) => console.error(error)
    )

  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}

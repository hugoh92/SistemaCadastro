import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Cadastro } from '../Cadastro.model';
import { Endereco } from '../Endereco.model';

@Component({
  selector: 'app-lista-cadastros',
  templateUrl: './lista-cadastros.component.html',
  styleUrls: ['./lista-cadastros.component.scss']
})
export class ListaCadastrosComponent implements OnInit {

  cadastros: Cadastro[]; 
  cadastro?: Cadastro;
  route: any;

  constructor(private router: Router, 
    private dataService: DataService) {
    this.cadastros = this.dataService.getCadastros();
  }

  ngOnInit() {
    this.cadastros = this.dataService.getCadastros();
  }

/*   editarCadastro(cadastroId: string): void {
    const cadastro = this.dataService.obterCadastroPorId(cadastroId);
    this.modalController.openEdicaoCadastro(cadastro).then((dadosAtualizados) => {
        this.dataService.atualizarCadastro(cadastroId, dadosAtualizados);
        this.carregarCadastros();
    });
} */

  excluirCadastro(id: string) {
    this.dataService.excluirCadastro(id);
    this.cadastros = this.dataService.getCadastros(); // Atualiza a lista após a exclusão
  }


}



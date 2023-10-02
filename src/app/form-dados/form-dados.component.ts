
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form-dados',
  templateUrl: './form-dados.component.html',
  styleUrls: ['./form-dados.component.scss'],
})
export class FormDadosComponent implements OnInit {
  cadastroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) {
    this.cadastroForm = this.fb.group({
      tipoProdutor: ['', Validators.required],
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
      rg: ['', [Validators.required, Validators.pattern(/^\d{1,9}$/)]],
      inscricao: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      incra: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      propriedade: ['', Validators.required],
      tipoLogradouro: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      complemento: [''],
      bairro: ['', Validators.required],
      cep: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      municipio: ['', Validators.required],
      endereco: ['', Validators.required],
      bairroCorresp: ['', Validators.required],
      municipioCorresp: ['', Validators.required],
      cepCorresp: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      ufCorresp: ['', [Validators.required, Validators.pattern(/^[A-Za-z]{2}$/)]],
      telefone: ['', Validators.required],
      caixaPostal: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      enderecoEletronico: ['', [Validators.required, Validators.email]],
      area: [''],
      especieAnimal: [''],
      saldoTotal: [''],
      exploracaoComercial: ['', Validators.required],
      tipoPropriedade: ['', Validators.required],
      proprietario: [''],
      cpfCnpjProprietario: [''],
      enderecoPropriedade: [''],
      codigoSDA: [''],
      contratoArrendamento: [''],
      nomeResponsavel: ['', Validators.required],
      cpfResponsavel: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
      rgResponsavel: ['', [Validators.required, Validators.pattern(/^\d{1,9}$/)]],

    });
  }

  enviarFormulario() {
    if (this.cadastroForm.valid) {
      const novoCadastro = this.cadastroForm.value;
      this.dataService.addCadastro(novoCadastro);
      console.log("cadastro", this.cadastroForm.value)
      this.router.navigate(['/']);
    }
  }

  limparCadastro() {
    this.cadastroForm.reset();
  }

  ngOnInit(): void {

  }

}


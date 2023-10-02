// data.service.ts
import { Injectable } from '@angular/core';
import { Cadastro } from './Cadastro.model';
// Defina uma interface para o tipo de dados que você está manipulando


@Injectable({
  providedIn: 'root'
})
export class DataService {
  /* private cadastros: Cadastro[] = []; */

  private cadastros: Cadastro[] = [
    {
      id: '1',
      tipoProdutor: 'Pessoa Física',
      nome: 'João da Silva',
      cpf: '123.456.789-01',
      rg: '1234567',
      inscricao: '123456',
      incra: '7890',
      propriedade: 'Fazenda Boa Vista',
      tipoLogradouro: 'Rua Principal',
      logradouro: 'Sítio Feliz',
      complemento: 'Casa 2',
      numero: '123',
      bairro: 'Centro',
      cep: '12345-678',
      municipio: 'Cidade Alegre',
      tipoPropriedade: 'propria',
      proprietario: 'João da Silva',
      cpfCnpjProprietario: '123.456.789-01',
      enderecoPropriedade: 'Rua Nova',
      codigoSDA: '98765',
      contratoArrendamento: '001',
      bairroCorresp: 'Centro',
      municipioCorresp: 'Cidade Nova',
      cepCorresp: '98765-432',
      ufCorresp: 'ES',
      telefone: '9999-8888',
      caixaPostal: '12345',
      enderecoEletronico: 'joao.silva@email.com',
      area: '50',
      especieAnimal: 'Gado de Corte',
      saldoTotal: 'R$ 100.000,00',
      exploracaoComercial: 'Sim',
      nomeResponsavel: 'Maria Oliveira',
      cpfResponsavel: '876.543.210-98',
      rgResponsavel: '987654'
    },
    {
      id: '2',
      tipoProdutor: 'Pessoa Jurídica',
      nome: 'Empresa Agropecuária LTDA',
      cpf: '12.345.678/0001-90',
      rg: '7654321',
      inscricao: '654321',
      incra: '9876',
      propriedade: 'Fazenda Esperança',
      tipoLogradouro: 'Avenida Principal',
      logradouro: 'Sítio Alegre',
      complemento: 'Casa 1',
      numero: '987',
      bairro: 'Centro',
      cep: '54321-876',
      municipio: 'Cidade Feliz',
      tipoPropriedade: 'arrendada',
      proprietario: 'José Alves',
      cpfCnpjProprietario: '98.765.432/0001-21',
      enderecoPropriedade: 'Rua Velha',
      codigoSDA: '87654',
      contratoArrendamento: '003',
      bairroCorresp: 'Centro',
      municipioCorresp: 'Cidade Nova',
      cepCorresp: '87654-321',
      ufCorresp: 'Cidade Nova',
      telefone: '8888-7777',
      caixaPostal: '56789',
      enderecoEletronico: 'empresa.agro@email.com',
      area: '75',
      especieAnimal: 'Avicultura',
      saldoTotal: 'R$ 150.000,00',
      exploracaoComercial: 'Não',
      nomeResponsavel: 'Pedro Silva',
      cpfResponsavel: '765.432.109-87',
      rgResponsavel: '876543'
    },
  ];


  getCadastros(): Cadastro[] {
    return this.cadastros;
  }

  addCadastro(cadastro: Cadastro): void {
    this.cadastros.push(cadastro);
  }

  /*   updateCadastro(index: number, novoCadastro: Cadastro): void {
      this.cadastros[index] = novoCadastro;
    } */

  updateCadastro(cadastro: Cadastro): void {
    const index = this.cadastros.findIndex(c => c.id === cadastro.id);
    if (index !== -1) {
      this.cadastros[index] = cadastro;
    }
  }

  removeCadastro(index: number): void {
    this.cadastros.splice(index, 1);
  }

  excluirCadastro(id: string): void {
    this.cadastros = this.cadastros.filter(c => c.id !== id);
  }

  getCadastroById(id: string): Cadastro | undefined {
    return this.cadastros.find(c => c.id === id);
  }

}




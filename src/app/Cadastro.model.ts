import { Endereco } from './Endereco.model';


// cadastro.model.ts
/* export class Cadastro {
  id: string;
  tipoProdutor!: string;
  nome: string;
  cpf:string;
  rg: string;
  inscricao!: string;
  incra: string;
  propriedade!: string;
  tipoLogradouro: string;
  logradouro: string;
  complemento: string;
  numero: string;
  bairro: string;
  cep: string;
  municipio: string;
  tipoPropriedade?: string;
  proprietario?: string;
  cpfCnpjProprietario?: string;
  enderecoPropriedade?: string;
  codigoSDA?: string;
  contratoArrendamento?: string;

  constructor(
    id: string,
    tipoProdutor: string,
    nome: string,
    rg: string,
    cpf: string,
    inscricao: string,
    incra: string,
    propriedade: string,
    tipoLogradouro: string,
    logradouro: string,
    complemento: string,
    numero: string,
    bairro: string,
    cep: string,
    municipio: string
  ) {
    this.id = id;
    this.tipoProdutor = tipoProdutor;
    this.nome = nome;
    this.cpf = cpf;
    this.rg = rg;
    this.inscricao = inscricao;
    this.incra = incra;
    this.propriedade = propriedade;
    this.tipoLogradouro = tipoLogradouro;
    this.logradouro = logradouro;
    this.complemento = complemento;
    this.numero = numero;
    this.bairro = bairro;
    this.cep = cep;
    this.municipio = municipio;
  }
} */

// cadastro.model.ts
export class Cadastro {
  id: string;
  tipoProdutor!: string;
  nome: string;
  cpf: string;
  rg: string;
  inscricao!: string;
  incra: string;
  propriedade!: string;
  tipoLogradouro: string;
  logradouro: string;
  complemento: string;
  numero: string;
  endereco?:string;
  bairro: string;
  cep: string;
  municipio: string;
  tipoPropriedade?: string;
  proprietario?: string;
  cpfCnpjProprietario?: string;
  enderecoPropriedade?: string;
  codigoSDA?: string;
  contratoArrendamento?: string;
  bairroCorresp?: string;
  municipioCorresp?: string;
  cepCorresp?: string;
  ufCorresp?: string;
  telefone?: string;
  caixaPostal?: string;
  enderecoEletronico?: string;
  area?: string;
  especieAnimal?: string;
  saldoTotal?: string;
  exploracaoComercial?: string;
  nomeResponsavel?: string;
  cpfResponsavel?: string;
  rgResponsavel?: string;

  constructor(
    id: string,
    tipoProdutor: string,
    nome: string,
    rg: string,
    cpf: string,
    inscricao: string,
    incra: string,
    propriedade: string,
    tipoLogradouro: string,
    logradouro: string,
    complemento: string,
    numero: string,
    bairro: string,
    cep: string,
    municipio: string
  ) {
    this.id = id;
    this.tipoProdutor = tipoProdutor;
    this.nome = nome;
    this.cpf = cpf;
    this.rg = rg;
    this.inscricao = inscricao;
    this.incra = incra;
    this.propriedade = propriedade;
    this.tipoLogradouro = tipoLogradouro;
    this.logradouro = logradouro;
    this.complemento = complemento;
    this.numero = numero;
    this.bairro = bairro;
    this.cep = cep;
    this.municipio = municipio;
  }
}



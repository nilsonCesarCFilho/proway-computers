import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens:  IProdutoCarrinho[] = [];
  itensB: IProdutoCarrinho[] = [];

  constructor() { }

  obtemCarrinho(){
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]"); //Recupera de um Json salvo no localStorage
    console.log(this.itens)
    return this.itens
  }

  adicionarAoCarrinho( produto: IProdutoCarrinho ){
    this.itens.push(produto);
    localStorage.setItem("carrinho",JSON.stringify(this.itens))
  }

  removerProdutoCarrinho(produtoId: number){
    console.log("Remocao - antes do filtro...")
    console.log(this.itens)
    this.itens = this.itens.filter(item => item.id !== produtoId);
    console.log("Remocao - apos o filtro...")
    console.log(this.itens)
    console.log("ProdutoId:")
    console.log(produtoId)
    localStorage.setItem("carrinho",JSON.stringify(this.itens));
  }

  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }

}

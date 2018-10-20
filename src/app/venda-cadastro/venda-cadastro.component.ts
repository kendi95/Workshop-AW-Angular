import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VendasService } from '../vendas/vendas.service';
import { FormGroup } from '@angular/forms';

import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-venda-cadastro',
  templateUrl: './venda-cadastro.component.html',
  styleUrls: ['./venda-cadastro.component.css']
})
export class VendaCadastroComponent implements OnInit {

  clientes: Array<any>;
  produtos: Array<any>;
  item: any = {};
  venda: any = {items: [], frete: 0.0, total: 0.0};

  @Output() vendaSalva = new EventEmitter();

  constructor(
    private vendaService: VendasService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.vendaService.listarCliente().subscribe(response => this.clientes = response);
    this.vendaService.listarProduto().subscribe(response => this.produtos = response);
  }

  incluirItem() {
    this.item.total = this.item.produto.valor * this.item.quantidade;
    this.venda.items.push(this.item);
    this.item = {};
    this.calcularTotal();
  }

  calcularTotal() {
    const totalItems = this.venda.items
      .map(x => (x.produto.valor * x.quantidade))
      .reduce((total, v) => total + v, 0);
    this.venda.total = totalItems + this.venda.frete;
  }

  adicionar(frm: FormGroup) {
    this.vendaService.adicionar(this.venda).subscribe(response => {
      frm.reset();
      this.novaVenda();
      this.messageService.add({severity: 'success', detail: 'Venda adicionada com sucesso'});
      this.vendaSalva.emit(response);
    });
  }

  private novaVenda() {
    this.venda = {items: [], frete: 0.0, total: 0.0};
    this.item = {};
  }

}

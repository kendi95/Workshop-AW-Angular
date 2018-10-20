import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import locale_pt from '@angular/common/locales/pt';

import { CurrencyMaskModule } from 'ng2-currency-mask';

import { MessageService } from 'primeng/components/common/messageservice';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { GrowlModule } from 'primeng/growl';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { VendaCadastroComponent } from './venda-cadastro/venda-cadastro.component';
import { VendasListagemComponent } from './vendas-listagem/vendas-listagem.component';

registerLocaleData(locale_pt);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VendasListagemComponent,
    VendaCadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    InputTextModule,
    TableModule,
    DropdownModule,
    PanelModule,
    ButtonModule,
    GrowlModule,

    CurrencyMaskModule,
    AppRoutingModule
  ],
  providers: [
    MessageService,
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

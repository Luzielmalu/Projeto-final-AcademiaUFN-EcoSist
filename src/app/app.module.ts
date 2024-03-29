import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';

import { AdminListaAgendamentosComponent } from './admin-lista-agendamentos/admin-lista-agendamentos.component';
import { AdminListaCadastrosComponent } from './admin-lista-cadastros/admin-lista-cadastros.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtualizarAgendamentoComponent } from './atualizar-agendamento/atualizar-agendamento.component';
import { AtualizarCadastroComponent } from './atualizar-cadastro/atualizar-cadastro.component';
import { AuthGuardService } from './auth-guard.service';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormAgendarComponent } from './components/form-agendar/form-agendar.component';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';
import { FormRegistrarComponent } from './components/form-registrar/form-registrar.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminHeaderComponent } from './components/pages/admin-header/admin-header.component';
import { AgendarComponent } from './components/pages/agendar/agendar.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { ContatoComponent } from './components/pages/contato/contato.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { EcopontosComponent } from './components/pages/ecopontos/ecopontos.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LayoutComponent } from './components/pages/layout/layout.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegistrarComponent } from './components/pages/registrar/registrar.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';
import { PerfilAdminComponent } from './components/perfil-admin/perfil-admin.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { ListaAgendamentoComponent } from './lista-agendamento/lista-agendamento.component';
import { ListaCadastroComponent } from './lista-cadastro/lista-cadastro.component';
import { TokenInterceptor } from './services/custome.interceptor';
import { UsuarioHeaderComponent } from './components/pages/usuario-header/usuario-header.component';
import { UsuarioAtualizarCadastroComponent } from './components/usuario-atualizar-cadastro/usuario-atualizar-cadastro.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SobreComponent,
    HomeComponent,
    CadastroComponent,
    LoginComponent,
    RegistrarComponent,
    AgendarComponent,
    FormCadastroComponent,
    ContatoComponent,
    FormRegistrarComponent,
    DashboardComponent,
    LayoutComponent,
    PerfilUsuarioComponent,
    PerfilAdminComponent,
    AdminDashboardComponent,
    FormAgendarComponent,
    ListaCadastroComponent,
    ListaAgendamentoComponent,
    AdminListaCadastrosComponent,
    AdminListaAgendamentosComponent,
    AtualizarCadastroComponent,
    EcopontosComponent,
    AtualizarAgendamentoComponent,
    AdminHeaderComponent,
    UsuarioHeaderComponent,
    UsuarioAtualizarCadastroComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,




  ],
     providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass:TokenInterceptor,
        multi:true
      },
      [AuthGuardService],
  ],
  bootstrap: [AppComponent]
})
export class AppModule {



}

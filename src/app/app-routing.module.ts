import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListaAgendamentosComponent } from './admin-lista-agendamentos/admin-lista-agendamentos.component';
import { AdminListaCadastrosComponent } from './admin-lista-cadastros/admin-lista-cadastros.component';
import { AtualizarAgendamentoComponent } from './atualizar-agendamento/atualizar-agendamento.component';
import { AtualizarCadastroComponent } from './atualizar-cadastro/atualizar-cadastro.component';
import { AuthGuardService } from './auth-guard.service';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './components/pages/admin-header/admin-header.component';
import { AgendarComponent } from './components/pages/agendar/agendar.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { ContatoComponent } from './components/pages/contato/contato.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { EcopontosComponent } from './components/pages/ecopontos/ecopontos.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegistrarComponent } from './components/pages/registrar/registrar.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';
import { UsuarioHeaderComponent } from './components/pages/usuario-header/usuario-header.component';
import { PerfilAdminComponent } from './components/perfil-admin/perfil-admin.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { ListaAgendamentoComponent } from './lista-agendamento/lista-agendamento.component';
import { ListaCadastroComponent } from './lista-cadastro/lista-cadastro.component';
import { RoleGuardService } from './role-guard.service';
const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path:'cadastrar', component: CadastroComponent},
  {path: 'cadastro/cpfCnpj', component: ListaCadastroComponent},
  {path: 'agendamento/cpfCnpj', component: ListaAgendamentoComponent},
  {path: 'cadastro', component: AdminListaCadastrosComponent},
  {path: 'agendamento', component: AdminListaAgendamentosComponent},
  {path: 'agendamento', component: AtualizarAgendamentoComponent},
  {path: 'agendamento/{id}/{campo}', component: AtualizarAgendamentoComponent},
  {path: 'agendamento/{id}', component: AtualizarAgendamentoComponent},
  {path: 'agendamento/{id}', component: AdminListaAgendamentosComponent},
  {path:'cadastro/{id}', component: AtualizarCadastroComponent},
  {path:'cadastro', component: AtualizarCadastroComponent},
  {path:'cadastro/{id}/{campo}', component: AtualizarCadastroComponent},
  {path:'cadastro/{id}', component: AdminListaCadastrosComponent},




  {path: 'ecopontos', component: EcopontosComponent},
  {path:'contato',component: ContatoComponent},
  {path: 'login', component: LoginComponent},
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  /*{
    path:'',
    component:LayoutComponent,
    children:  [
      {
        path:'dashboard',
        component: DashboardComponent
      }
    ]
  },*/
  {path: 'perfilUsuario', component: PerfilUsuarioComponent},
  {path: 'perfilAdmin', component: PerfilAdminComponent, canActivate: [RoleGuardService], data: { roles: ['ADMIN'] } },
  {path: 'dashboard', component: DashboardComponent},
{path: 'adminHeader', component: AdminHeaderComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'agendar', component: AgendarComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuardService]},
  {path: 'perfilUsuario/cadastro', component: ListaCadastroComponent},
  {path: 'perfilUsuario/agendamento', component: ListaAgendamentoComponent},
  /*{path: 'admin', component: PerfilAdminComponent, canActivate: [RoleGuardService], data: { roles: ['ADMIN'] } },*/
  {path: 'perfilAdmin/cadastro', component: AdminListaCadastrosComponent},
  {path: 'perfilAdmin/agendamento', component: AdminListaAgendamentosComponent},
{path:'atualizar-cadastro', component: AtualizarCadastroComponent},
{path:'admin-lista-cadastro', component: AdminListaCadastrosComponent},
{path:'atualizar-agendamento', component: AtualizarAgendamentoComponent},
{path:'admin-lista-agendamento', component: AdminListaAgendamentosComponent},
{path:'usuarioHeader', component: UsuarioHeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }

/*export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch()), provideRouter(routes), provideClientHydration()]
};*/

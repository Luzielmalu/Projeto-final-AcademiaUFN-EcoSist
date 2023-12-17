import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormAgendarComponent } from './components/form-agendar/form-agendar.component';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';
import { FormRegistrarComponent } from './components/form-registrar/form-registrar.component';
import { HeaderComponent } from './components/header/header.component';
import { AgendarComponent } from './components/pages/agendar/agendar.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { ContatoComponent } from './components/pages/contato/contato.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LayoutComponent } from './components/pages/layout/layout.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegistrarComponent } from './components/pages/registrar/registrar.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';
import { TokenInterceptor } from './services/custome.interceptor';
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
    FormAgendarComponent,
    DashboardComponent,
    LayoutComponent

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






  ],
     providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass:TokenInterceptor,
        multi:true
      },

  ],
  bootstrap: [AppComponent]
})
export class AppModule {



}

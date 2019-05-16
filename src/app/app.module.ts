import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListaComponent } from './lista/lista.component';
import { SeleccionComponent } from './seleccion/seleccion.component';
import { RegionesService } from './services/regiones.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListaComponent,
    SeleccionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
    // AppRoutingModule
  ],
  providers: [RegionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

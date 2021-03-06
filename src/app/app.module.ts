import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';

import { NguCarouselModule } from '@ngu/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ServicesComponent } from './services/services.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { TcgdprDialog } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ServicesComponent,
    ContactFormComponent,
    FooterComponent,
    ProjectsComponent,
    TcgdprDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    NguCarouselModule,
  ],
  entryComponents: [
    TcgdprDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

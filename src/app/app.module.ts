import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatGridListModule,
  MatSelectModule,
  MatDialogModule,
  MatTabsModule,
  MatCardModule,
  MatIconModule,
  MatChipsModule,
  MatTooltipModule
} from '@angular/material';
const matModules = [
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTooltipModule,
    MatCardModule,
    MatGridListModule
];
@NgModule({
  imports: [...matModules],
  exports: [...matModules],
})
export class MaterialModule {}

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DisclosureComponent } from './information/disclosure.component';
import { EducationComponent } from './information/education.component';


@NgModule({
    declarations: [
        AppComponent,
        DisclosureComponent,
        EducationComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialModule,
        AppRoutingModule
    ],
    providers: [],
    entryComponents: [
        DisclosureComponent,
        EducationComponent
    ],
     bootstrap: [AppComponent]
})
export class AppModule { }

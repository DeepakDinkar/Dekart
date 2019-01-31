import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatBadgeModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorIntl,
  MatPaginatorModule,
  MatSelectModule,
  MatSliderModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  NativeDateAdapter,
} from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { CardDirective } from './card.directive';
import { CardComponent } from './card/card.component';
import { ChatComponent } from './chat/chat.component';
import { CustomMatPaginatorIntl } from './customPaginator';
import { DataService } from './data.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SocialComponent } from './social/social.component';
import { TableComponent } from './table/table.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: SidebarComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: HomeComponent, data: { page: 'main' } },
      { path: 'social', component: SocialComponent, data: { page: 'social' } },
      { path: 'chat', component: ChatComponent, data: { page: 'chat' } }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardDirective,
    CardComponent,
    LoginComponent,
    UserLoginComponent,
    UserRegisterComponent,
    HomeComponent,
    SidebarComponent,
    TableComponent,
    SocialComponent,
    ChatComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatGridListModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule,
    LayoutModule,
    MatToolbarModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatChipsModule,
    MatBadgeModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  exports: [
    MainComponent,
    CardComponent,
    UserLoginComponent,
    UserRegisterComponent,
    HomeComponent
  ],
  entryComponents: [CardComponent],
  providers: [
    DataService,
    MatNativeDateModule,
    NativeDateAdapter,
    { provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

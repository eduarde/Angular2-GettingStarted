import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ProductModule } from './products/product.module';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';



@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
    
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
 

  declarations: [ 
    AppComponent,
    WelcomeComponent
  ],

  // providers: [ providers here ],

  bootstrap: [ 
    AppComponent
     ]
})
export class AppModule { }

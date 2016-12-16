import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductListComponent }  from './product-list.components';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-guard.service';
import { ProductFilterPipe } from './product-filter.pipe';
import { StarComponent } from '../shared/star.component';

import { ProductService } from './product.service'

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe,
        StarComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        HttpModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent},
            { path: 'product/:id', 
                canActivate: [ ProductDetailGuard ], 
                component: ProductDetailComponent},
        ])
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]

})
export class ProductModule {

}
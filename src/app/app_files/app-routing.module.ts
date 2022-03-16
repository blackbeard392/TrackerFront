import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginComponent } from '../login/login.component';
import { AddProductComponent } from '../products/add-product/add-product.component';
import { EditProductComponent } from '../products/edit-product/edit-product.component';
import { ProductsComponent } from '../products/products.component';
import { ViewProductComponent } from '../products/view-product/view-product.component';


const routes: Routes = [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        {path:'login', component:LoginComponent},
        {path:'products', component:ProductsComponent, canActivate:[AuthService]},
        { path: 'view-product/:id', component: ViewProductComponent, canActivate:[AuthService] },
        { path: 'edit-product/:id', component: EditProductComponent,canActivate:[AuthService] },
        {path: 'add-product',component:AddProductComponent, canActivate:[AuthService]},
        { path: '', redirectTo: 'products',pathMatch: 'full' },
        { path: '**', component: ProductsComponent, canActivate:[AuthService]}
          ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

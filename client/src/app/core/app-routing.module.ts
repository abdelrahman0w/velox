import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { ProductComponent } from '../components/product/product.component';
import { RegisterComponent } from '../components/register/register.component';
import { HomeComponent } from '../components/home/home.component';
import { SingleCatComponent } from '../components/single-cat/single-cat.component';
import { SearchResultsComponent } from '../components/search-results/search-results.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'categories/:cat', component: SingleCatComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'search/:search', component: SearchResultsComponent },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [LoginComponent, RegisterComponent];

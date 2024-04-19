import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './layout/about/about.component';
import { ContactComponent } from './layout/contact/contact.component';
import { PagenotComponent } from './layout/pagenot/pagenot.component';
import { catchError } from 'rxjs';
import { CategoryComponent } from './layout/category/category.component';

export const routes: Routes = [
  { path: '', title: 'VelvetVogue', component: HomeComponent },
  { path: 'products', title: 'Product', component: ProductsComponent },

  {
    path: 'products',
    title: 'Product',
    children: [{ path: 'category', component: CategoryComponent }],
  },
  { path: 'about', title: 'About', component: AboutComponent },
  { path: 'contact', title: 'Contact', component: ContactComponent },
  { path: '**', component: PagenotComponent },
];

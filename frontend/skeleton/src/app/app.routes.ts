import { LayoutComponent } from './layouts/layout/layout.component';
import { VexRoutes } from '@vex/interfaces/vex-route.interface';
import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { ProductFormComponent } from './pages/products/product-form/product-form.component';

export const appRoutes: VexRoutes = [
  {
    path: '',
    component: LayoutComponent,
    children: []
  }
];

export const routes: Routes = [
  { 
    path: 'products',
    component: ProductListComponent 
  },
  { 
    path: 'products/create',
    component: ProductFormComponent 
  },
  { 
    path: 'products/edit/:id',
    component: ProductFormComponent 
  }

  // TODO: faltan rutas y layouts para update y delete
];

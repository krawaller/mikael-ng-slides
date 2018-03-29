import { RouterModule }   from '@angular/router';
import { HomeComponent } from './home';
import { ProductComponent } from './product';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:tool', component: ProductComponent}
]

export const routing = RouterModule.forRoot(routes)
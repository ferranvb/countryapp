import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page';
import { countryRoutes } from './country/country.routes';

export const routes: Routes = [

  { path:'',
    component: HomePageComponent
  },
  {
    path: 'country',
    loadChildren: () => import('./country/country.routes').then(m => m.countryRoutes),
  },
  {
    path:'**',
    redirectTo: ''
  }

];

export default countryRoutes;
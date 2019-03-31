import {RouterModule,Routes} from '@angular/router';
import {HomeComponent} from './componets/home/home.component';
    import { from } from 'rxjs';
import{HeroesComponent} from './componets/heroes/heroes.component';
import{AboutComponent} from './componets/about/about.component';
//arreglo de rutas
const APP_ROUTES:Routes=[
    {path:'home',component: HomeComponent },
    {path:'heroes',component: HeroesComponent },
    {path:'about',component: AboutComponent },
    //ESTA RUTA ES PARa si en caso de que no se encuentre la ruta espesifica se valla a esta
    {path: '**',pathMatch:'full',redirectTo:'home'}
];

//useHash es para que se use la forma antigua de html5 para gregar rutas
export const APP_ROUTING =RouterModule.forRoot(APP_ROUTES,{useHash:true});
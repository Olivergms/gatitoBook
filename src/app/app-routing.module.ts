import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const HomeModule = import('./home/home.module').then((m) => m.HomeModule);
const AnimaisModule = import('./animais/animais.module').then((m)=> m.AnimaisModule);

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => HomeModule,
  },
  {
    path: 'animais',
    loadChildren: () => AnimaisModule,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

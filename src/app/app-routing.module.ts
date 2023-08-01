import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/components/landing-page/landing-page.component';
import { SuitesComponent } from './pages/suites/components/suites/suites.component';
import { TestCasesComponent } from './pages/test-cases/components/test-cases/test-cases.component';

const routes: Routes = [
  {
    path: 'test-cases',
    component: TestCasesComponent,
    loadChildren: () => import('./pages/test-cases/test-cases.module').then(m => m.TestCasesModule)
  },
  {
    path: 'suites',
    component: SuitesComponent,
    loadChildren: () => import('./pages/suites/suites.module').then(m => m.SuitesModule)
  },
  { path: '**', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

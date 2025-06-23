import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { DonationComponent } from './components/donation/donation.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'donate', component: DonationComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
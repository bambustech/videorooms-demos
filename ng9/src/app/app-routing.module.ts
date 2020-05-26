import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path: "landing", component: LandingComponent },
  { path: "room/:token", component: VideoComponent },
  { path: "", redirectTo: "/landing", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, onSameUrlNavigation: "reload"})],
  exports: [RouterModule],
})
export class AppRoutingModule {}

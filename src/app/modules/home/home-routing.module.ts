import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home.component"
import { HomeWrapperComponent } from './components/home-wrapper/home-wrapper.component';
import { NotFoundComponent } from 'src/app/not-found.component';
const routes: Routes = [

    {
        path: '', component: HomeComponent,
        children: [{
            path: '', component: HomeWrapperComponent
        }]
    },

    {path: '404', component: NotFoundComponent},
    {path: '**', redirectTo: '404'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }

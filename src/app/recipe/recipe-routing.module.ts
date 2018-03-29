import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeComponent} from './recipe.component';

const routes: Routes = [
    {path: 'recipe', component: RecipeComponent},
    {path: '', redirectTo: 'recipe', pathMatch: 'full'}, // default route
    {path: '**', redirectTo: 'recipe', pathMatch: 'full'} // any unknown routes
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipeRoutingModule {
}

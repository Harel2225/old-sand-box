import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { EditorComponent } from './editor/editor.component';



const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'list', component: ListComponent },
    { path: 'card', component: CardComponent },
    { path: 'editor', component: EditorComponent },
    { path: 'card/:id', component: CardComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Lesson3RoutingModule { }

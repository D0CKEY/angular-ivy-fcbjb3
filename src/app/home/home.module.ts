import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../shared';
import {SuiCheckboxModule, SuiSelectModule} from 'ng2-semantic-ui';
import {MatExpansionModule} from '@angular/material/expansion';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskEditorComponent } from './task-editor/task-editor.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { HelpComponent } from './help/help.component';


const homeRouting: ModuleWithProviders<unknown> = RouterModule.forChild([
  {
    path: 'help',
    component: HelpComponent,
  },

  {
    path: '**',
    component: TodoPageComponent
  }
]);

@NgModule({
  imports: [
    homeRouting,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule,              // ha ide új module bekerül, újra 'ng serve' kell!!!
    SuiCheckboxModule,
    SuiSelectModule,
    MatExpansionModule
  ],
  declarations: [
    TaskListComponent,
    TaskEditorComponent,
    TodoPageComponent,
    HelpComponent
  ],
  providers: []
})
export class HomeModule {
}

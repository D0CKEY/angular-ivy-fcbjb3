import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../shared';
import {MatExpansionModule} from '@angular/material/expansion';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskEditorComponent} from './task-editor/task-editor.component';
import {TodoPageComponent} from './todo-page/todo-page.component';
import {HelpComponent} from './help/help.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

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
    MatSlideToggleModule,
    homeRouting,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule,
    MatExpansionModule,
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

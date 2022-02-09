import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace.component';

import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [WorkspaceComponent],
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule
  ]
})
export class WorkspaceModule { }

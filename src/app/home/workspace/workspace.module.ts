import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace.component';
import { CKEditorModule } from 'ng2-ckeditor';


@NgModule({
  declarations: [WorkspaceComponent],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    CKEditorModule
  ]
})
export class WorkspaceModule { }

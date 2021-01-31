import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateseverityComponent } from './createseverity.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule, ReactiveFormsModule,
        RouterModule.forChild([
            { path: '', component: CreateseverityComponent },
        ])
    ],
    declarations: [
        CreateseverityComponent,
    ]
})
export class CreateseverityModule { }
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';
import { RegisterRoutes } from './register.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(RegisterRoutes),
        FormsModule
    ],
    declarations: [RegisterComponent]
})

export class RegisterModule {}

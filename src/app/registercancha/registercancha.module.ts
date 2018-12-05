import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterCanchaComponent } from './registercancha.component';
import { UserRoutes } from './registercancha.routing';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UserRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [RegisterCanchaComponent]
})

export class RegisterCanchaModule {}

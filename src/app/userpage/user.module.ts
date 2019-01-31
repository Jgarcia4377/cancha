import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { UserPageRoutes } from './user.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UserPageRoutes),
        FormsModule
    ],
    declarations: [UserComponent]
})

export class UserModule {}

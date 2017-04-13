import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { WizardService } from './wizard.service';
import { FormWizardService } from './form-wizard.service';

import { WizardComponent } from './wizard.component';

@NgModule({
    declarations: [
        WizardComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: WizardComponent }])
    ],
    exports: [
        WizardComponent
    ],
    providers: [
        WizardService, FormWizardService
    ]
})

export class WizardModule
{

}

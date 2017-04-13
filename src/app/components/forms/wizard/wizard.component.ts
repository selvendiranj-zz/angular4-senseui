import { Component, AfterViewInit } from '@angular/core';
import { WizardService } from './wizard.service';
import { FormWizardService } from './form-wizard.service';

@Component({
    selector: 'senseui-wizard',
    templateUrl: './wizard.component.html'
})

export class WizardComponent implements AfterViewInit
{
    private wizardSvc: WizardService;
    private formWizardSvc: FormWizardService;

    public constructor(wizardSvc: WizardService, formWizardSvc: FormWizardService)
    {
        this.wizardSvc = wizardSvc;
        this.formWizardSvc = formWizardSvc;
    }

    public ngAfterViewInit(): void
    {
        this.wizardSvc.InitWizard();
        this.formWizardSvc.InitFormWizard();
    }
}

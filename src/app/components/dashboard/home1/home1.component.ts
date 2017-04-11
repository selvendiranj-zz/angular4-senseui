import { Component, AfterViewInit } from '@angular/core';
import { Home1Service } from './home1.service';
import { WizardService } from '../wizard.service';
import { FormWizardService } from '../form-wizard.service';

@Component({
    selector: 'senseui-home1',
    templateUrl: './home1.component.html'
})

export class Home1Component implements AfterViewInit
{
    private home1Svc: Home1Service;
    private wizardSvc: WizardService;
    private formwzSvc: FormWizardService;

    public constructor(
        home1Svc: Home1Service,
        wizardSvc: WizardService,
        formwzSvc: FormWizardService)
    {
        this.home1Svc = home1Svc;
        this.wizardSvc = wizardSvc;
        this.formwzSvc = formwzSvc;
    }

    public ngAfterViewInit(): void
    {
        this.home1Svc.InitHome1();
        this.wizardSvc.InitWizard();
        this.formwzSvc.InitFormWizard();
    }
}

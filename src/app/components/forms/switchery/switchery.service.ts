// tslint:disable-next-line:max-file-line-count
// Form-Switchery
// ====================================================================
import { Injectable } from '@angular/core';

@Injectable()
export class SwitcheryService
{
    public InitSwitchery(): any
    {
        // SWITCHERY - Default Size
        // =================================================================
        // Require Switchery
        // http://abpetkov.github.io/switchery/
        // =================================================================
        // tslint:disable-next-line:no-unused-new
        new Switchery(document.getElementById('demo-sw-default'));

        // SWITCHERY - UNCHECKED BY DEFAULT
        // =================================================================
        // Require Switchery
        // http://abpetkov.github.io/switchery/
        // =================================================================
        // tslint:disable-next-line:no-unused-new
        new Switchery(document.getElementById('demo-sw-unchecked'));

        // SWITCHERY - CHECKING STATE
        // =================================================================
        // Require Switchery
        // http://abpetkov.github.io/switchery/
        // =================================================================
        let changeCheckbox = document.getElementById('demo-sw-checkstate');
        let changeField = document.getElementById('demo-sw-checkstate-field');
        // tslint:disable-next-line:no-unused-new
        new Switchery(changeCheckbox);
        changeField.innerHTML = (changeCheckbox as HTMLInputElement).checked.toString();
        changeCheckbox.onchange = function (): any
        {
            changeField.innerHTML = (changeCheckbox as HTMLInputElement).checked.toString();
        };

        // SWITCHERY - COLORED
        // =================================================================
        // Require Switchery
        // http://abpetkov.github.io/switchery/
        // =================================================================
        // tslint:disable-next-line:no-unused-new
        new Switchery(document.getElementById('demo-sw-blue'), { color: '#489eed' });// tslint:disable-next-line:no-unused-new
        new Switchery(document.getElementById('demo-sw-light-blue'), { color: '#35b9e7' });// tslint:disable-next-line:no-unused-new
        new Switchery(document.getElementById('demo-sw-green'), { color: '#44ba56' });// tslint:disable-next-line:no-unused-new
        new Switchery(document.getElementById('demo-sw-orange'), { color: '#f0a238' });// tslint:disable-next-line:no-unused-new
        new Switchery(document.getElementById('demo-sw-red'), { color: '#e33a4b' });// tslint:disable-next-line:no-unused-new
        new Switchery(document.getElementById('demo-sw-mint'), { color: '#2cd0a7' });// tslint:disable-next-line:no-unused-new
        new Switchery(document.getElementById('demo-sw-purple'), { color: '#8669cc' });// tslint:disable-next-line:no-unused-new
        new Switchery(document.getElementById('demo-sw-pink'), { color: '#ef6eb6' });

        // SWITCHERY - SIZES
        // =================================================================
        // Require Switchery
        // http://abpetkov.github.io/switchery/
        // =================================================================
        // tslint:disable-next-line:no-unused-new
        new Switchery(document.getElementById('demo-sw-sz-lg'), { size: 'large' });// tslint:disable-next-line:no-unused-new
        new Switchery(document.getElementById('demo-sw-sz'));// tslint:disable-next-line:no-unused-new
        new Switchery(document.getElementById('demo-sw-sz-sm'), { size: 'small' });
    }
}

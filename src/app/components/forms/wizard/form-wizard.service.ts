import { Injectable } from '@angular/core';

// Form-Wizard.js
// ====================================================================

// FORM WIZARD
// =================================================================
// Require Bootstrap Wizard
// http://vadimg.com/twitter-bootstrap-wizard-example/
// =================================================================

@Injectable()
export class FormWizardService
{
    public InitFormWizard(): any
    {
        // CLASSIC FORM WIZARD
        // =================================================================
        $('#demo-cls-wz').bootstrapWizard({
            tabClass: 'wz-classic',
            nextSelector: '.next',
            previousSelector: '.previous',
            onTabClick(tab: any, navigation: any, index: any): any
            {
                return false;
            },
            onInit(): any
            {
                $('#demo-cls-wz').find('.finish').hide().prop('disabled', true);
            },
            onTabShow(tab: any, navigation: any, index: any): any
            {
                let $total = navigation.find('li').length;
                let $current = index + 1;
                let $percent = ($current / $total) * 100;
                let wdt = 100 / $total;
                let lft = wdt * index;
                $('#demo-cls-wz').find('.progress-bar').css({ width: $percent + '%' });

                // If it's the last tab then hide the last button and show the finish instead
                if ($current >= $total)
                {
                    $('#demo-cls-wz').find('.next').hide();
                    $('#demo-cls-wz').find('.finish').show();
                    $('#demo-cls-wz').find('.finish').prop('disabled', false);
                } else
                {
                    $('#demo-cls-wz').find('.next').show();
                    $('#demo-cls-wz').find('.finish').hide().prop('disabled', true);
                }
            }
        });

        // FORM WIZARD WITH VALIDATION
        // =================================================================
        $('#demo-bv-wz').bootstrapWizard({
            tabClass: 'wz-steps',
            nextSelector: '.next',
            previousSelector: '.previous',
            onTabClick(tab: any, navigation: any, index: any): any
            {
                return false;
            },
            onInit(): any
            {
                $('#demo-bv-wz').find('.finish').hide().prop('disabled', true);
            },
            onTabShow(tab: any, navigation: any, index: any): any
            {
                let $total = navigation.find('li').length;
                let $current = index + 1;
                let $percent = (index / $total) * 100;
                let margin = (100 / $total) / 2;
                $('#demo-bv-wz').find('.progress-bar').css({ width: $percent + '%', margin: 0 + 'px ' + margin + '%' });

                navigation.find('li:eq(' + index + ') a').trigger('focus');

                // If it's the last tab then hide the last button and show the finish instead
                if ($current >= $total)
                {
                    $('#demo-bv-wz').find('.next').hide();
                    $('#demo-bv-wz').find('.finish').show();
                    $('#demo-bv-wz').find('.finish').prop('disabled', false);
                } else
                {
                    $('#demo-bv-wz').find('.next').show();
                    $('#demo-bv-wz').find('.finish').hide().prop('disabled', true);
                }
            },
            onNext(): any
            {
                let isValid = null;
                $('#demo-bv-wz-form').bootstrapValidator('validate');
                if (isValid === false) { return false; }
            }
        });

        // FORM VALIDATION
        // =================================================================
        // Require Bootstrap Validator
        // http://bootstrapvalidator.com/
        // =================================================================

        let isValid;
        $('#demo-bv-wz-form').bootstrapValidator({
            message: 'This value is not valid',
            feedbackIcons: {
                valid: 'fa fa-check-circle fa-lg text-success',
                invalid: 'fa fa-times-circle fa-lg',
                validating: 'fa fa-refresh'
            },
            fields: {
                username: {
                    message: 'The username is not valid',
                    validators: {
                        notEmpty: {
                            message: 'The username is required.'
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'The email address is required and can\'t be empty'
                        },
                        emailAddress: {
                            message: 'The input is not a valid email address'
                        }
                    }
                },
                firstName: {
                    validators: {
                        notEmpty: {
                            message: 'The first name is required and cannot be empty'
                        },
                        regexp: {
                            regexp: /^[A-Z\s]+$/i,
                            message: 'The first name can only consist of alphabetical characters and spaces'
                        }
                    }
                },
                lastName: {
                    validators: {
                        notEmpty: {
                            message: 'The last name is required and cannot be empty'
                        },
                        regexp: {
                            regexp: /^[A-Z\s]+$/i,
                            message: 'The last name can only consist of alphabetical characters and spaces'
                        }
                    }
                },
                phoneNumber: {
                    validators: {
                        notEmpty: {
                            message: 'The phone number is required and cannot be empty'
                        },
                        digits: {
                            message: 'The value can contain only digits'
                        }
                    }
                },
                address: {
                    validators: {
                        notEmpty: {
                            message: 'The address is required'
                        }
                    }
                }
            }
        }).on('success.field.bv', function (e: any, data: any): any
        {
            // $(e.target)  --> The field element
            // data.bv      --> The BootstrapValidator instance
            // data.field   --> The field name
            // data.element --> The field element

            let $parent = data.element.parents('.form-group');

            // Remove the has-success class
            $parent.removeClass('has-success');

            // Hide the success icon
            // $parent.find('.form-control-feedback[data-bv-icon-for="' + data.field + '"]').hide();
        }).on('error.form.bv', function (e: any): any
        {
            isValid = false;
        });
    }
}

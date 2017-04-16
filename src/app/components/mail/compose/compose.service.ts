// tslint:disable-next-line:max-file-line-count
// mail-compose
// ====================================================================
import { Injectable } from '@angular/core';

@Injectable()
export class ComposeService
{
    public InitCompose(): any
    {
        // CHOSEN
        // =================================================================
        // Require Chosen
        // http://harvesthq.github.io/chosen/
        // =================================================================
        $('#demo-chosen-select').chosen();
        $('#demo-cs-multiselect').chosen({ width: '100%' });

        // JQUERY TAG IT
        // =================================================================
        // Require jQuery Tag It
        // http://harvesthq.github.io/chosen/
        // =================================================================

        $('#jquery-tagIt-white').tagit({});

        // SUMMERNOTE
        // =================================================================
        // Require Summernote
        // http://hackerwins.github.io/summernote/
        // =================================================================
        $('#demo-summernote').summernote({ height: 250 });
    }
}

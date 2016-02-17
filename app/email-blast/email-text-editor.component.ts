import {Component,Directive,ElementRef} from 'angular2/core'

@Directive({
    selector: 'textarea'
})

class CKEditor {
    constructor(_elm: ElementRef) {
        if (!CKEDITOR.instances['ckeditor']) {
            CKEDITOR.replace(_elm.nativeElement);
        }
        else if (CKEDITOR.instances['ckeditor']) {
            CKEDITOR.instances.ckeditor.destroy(true);
            CKEDITOR.replace(_elm.nativeElement);
        }
    }
}

@Component({
    selector: 'email-text-editor',
    template: `
            <div class="messageLabel">
                <label>Message: </label>
            </div>
            <div>
                <textarea id="ckeditor"></textarea>
            </div>
    `,
    styles: [`
        div div {
            width:430px;
            height:300px;
        } 
        .messageLabel {
            width:50px;
        }  
    `],
    directives:[CKEditor]
})

export class EmailTextEditorComponent { }
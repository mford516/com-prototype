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
            <div class="sigLabel">
                <label>Signature: </label>
            </div>
            <div>
                <textarea id="ckeditor"></textarea>
            </div>
            <div>
                &nbsp;
            </div>
            <div class="buttons">
                <paper-button>Cancel</paper-button>
                <paper-button (click)="onSave()">Save</paper-button>
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
        .buttons {
            float:right;
        }
        paper-button {
            display: inline-block !important;
            padding:6px 12px;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.42857143;
            width:120px;
            border:1px solid #ccc;
            border-radius:4px;
            background: white;
            color: black;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            cursor:pointer;
            text-transform: none;
            text-align:left;
        }  
    `],
    directives:[CKEditor]
})

export class EmailSignatureComponent {
    onSave(){
        //console.log(CKEDITOR.instances.editor1.getData());
    }
}
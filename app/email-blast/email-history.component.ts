import {Component,ElementRef,Directive} from 'angular2/core'

import {EmailTextEditorComponent} from './email-text-editor.component'

@Directive({
    selector: 'textarea'
})

class CKEditor {
    constructor(_elm: ElementRef) {
        if (!CKEDITOR.instances['messageEditor']) {
            CKEDITOR.replace(_elm.nativeElement);
        }
        else if (CKEDITOR.instances['messageEditor']) {
            CKEDITOR.instances.messageEditor.destroy(true);
            CKEDITOR.replace(_elm.nativeElement);
        }
    }
}

@Component({
    selector: 'email-history',
    template: `
            <vaadin-grid [columns]="columns" [items]="items" (click)="onSelect()">
            </vaadin-grid>
            
            <paper-dialog modal="true">
                <div>Date: {{selectedRowDate}}</div>
                <div>&nbsp;</div>                
                <div>Time: {{selectedRowTime}}</div>
                <div>&nbsp;</div>
                <div><textarea id="messageEditor"></textarea></div>
                <div>&nbsp;</div>
                <div>Recipients: {{selectedRowRecipients}}</div>
                <div>&nbsp;</div>
                <paper-button (click)="onClose()">close</paper-button>
            </paper-dialog>
    `,
    styles:[`
        vaadin-grid {
            width:100% !important;
            height:400px;
            background-color:white;
        }
    `],
    directives:[CKEditor,EmailTextEditorComponent]
})

export class EmailHistoryComponent {
    public grid;
    public cell;
    public selectedRow;
    public selectedRowDate;
    public selectedRowTime;
    public selectedRowMessage;
    public selectedRowRecipients;
    public modal;
    
    columns = [
        {name:"date", flex:1, minWidth:100},
        {name:"time", flex:1,minWidth:100},
        {name:"message", flex:3,maxWidth:200},
        {name:"recipients", flex:2,minWidth:200}
    ];
    
    constructor(elementRef:ElementRef){
        setTimeout(() => {
            this.grid = elementRef.nativeElement.querySelector("vaadin-grid");
            this.modal = elementRef.nativeElement.querySelector("paper-dialog");
            
            this.grid.cellClassGenerator = function(cell) {
                if (cell.index == 2) {
                    return 'message-cell';
                }
            };
        },0)
    }
    
    onSelect() {
        this.selectedRow = this.grid.items[this.grid.selection.selected()];
        
        this.selectedRowDate = this.selectedRow.date;
        this.selectedRowTime = this.selectedRow.time;
        this.selectedRowMessage = this.selectedRow.message;
        this.selectedRowRecipients = this.selectedRow.recipients;
        
        //CKEDITOR.instances["messageEditor"].setData(this.selectedRowMessage);
        
        this.modal.open();
    }
    
    onClose() {
        this.grid.selection.clear();
        
        this.modal.close();
    }
    
    items = [
        {date:"12/10/2015",time:"4:02PM",message:"test test test test test test test test test test test test test",recipients:"All Active Parents"},
        {date:"11/29/2015",time:"3:22PM",message:"test",recipients:"All Active Teachers"},
        {date:"10/18/2015",time:"12:05PM",message:"test",recipients:"All Active Students"},
        {date:"9/28/2015",time:"10:02AM",message:"test",recipients:"All Active Parents"},
        {date:"12/10/2015",time:"4:02PM",message:"test test test test test test test test test test test test test",recipients:"All Active Parents"},
        {date:"11/29/2015",time:"3:22PM",message:"test",recipients:"All Active Teachers"},
        {date:"10/18/2015",time:"12:05PM",message:"test",recipients:"All Active Students"},
        {date:"9/28/2015",time:"10:02AM",message:"test",recipients:"All Active Parents"},
        {date:"12/10/2015",time:"4:02PM",message:"test test test test test test test test test test test test test",recipients:"All Active Parents"},
        {date:"11/29/2015",time:"3:22PM",message:"test",recipients:"All Active Teachers"},
        {date:"10/18/2015",time:"12:05PM",message:"test",recipients:"All Active Students"},
        {date:"9/28/2015",time:"10:02AM",message:"test",recipients:"All Active Parents"},
        {date:"12/10/2015",time:"4:02PM",message:"test test test test test test test test test test test test test",recipients:"All Active Parents"},
        {date:"11/29/2015",time:"3:22PM",message:"test",recipients:"All Active Teachers"},
        {date:"10/18/2015",time:"12:05PM",message:"test",recipients:"All Active Students"},
        {date:"9/28/2015",time:"10:02AM",message:"test",recipients:"All Active Parents"},
        {date:"12/10/2015",time:"4:02PM",message:"test test test test test test test test test test test test test",recipients:"All Active Parents"},
        {date:"11/29/2015",time:"3:22PM",message:"test",recipients:"All Active Teachers"},
        {date:"10/18/2015",time:"12:05PM",message:"test",recipients:"All Active Students"},
        {date:"9/28/2015",time:"10:02AM",message:"test",recipients:"All Active Parents"},
        {date:"12/10/2015",time:"4:02PM",message:"test test test test test test test test test test test test test",recipients:"All Active Parents"},
        {date:"11/29/2015",time:"3:22PM",message:"test",recipients:"All Active Teachers"},
        {date:"10/18/2015",time:"12:05PM",message:"test",recipients:"All Active Students"},
        {date:"9/28/2015",time:"10:02AM",message:"test",recipients:"All Active Parents"},
        {date:"12/10/2015",time:"4:02PM",message:"test test test test test test test test test test test test test",recipients:"All Active Parents"},
        {date:"11/29/2015",time:"3:22PM",message:"test",recipients:"All Active Teachers"},
        {date:"10/18/2015",time:"12:05PM",message:"test",recipients:"All Active Students"},
        {date:"9/28/2015",time:"10:02AM",message:"test",recipients:"All Active Parents"}
    ];
    
 }
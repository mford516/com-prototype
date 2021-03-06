import {Component,OnInit,ElementRef} from 'angular2/core';

@Component({
    selector: 'email-submit',
    template: `
            <div class="caldiv">
                <paper-dialog class="paper-date-picker-dialog" modal="true">
                    <paper-date-picker date="{{todaysDate}}"></paper-date-picker>
                    <div class="buttons">
                        <paper-button (click)="onClose();toggle()">Cancel</paper-button>
                        <paper-button (click)="onClose()">OK</paper-button>
                    </div>
                </paper-dialog>
            </div>
            <div [hidden]="visible">
                <paper-button class="schedule" (click)="toggle()">
                    <span>Schedule</span>
                </paper-button>
                <paper-button class="send">
                    <span>Send Now</span>
                </paper-button>
            </div>
            <div [hidden]="!visible">
                <vaadin-date-picker label="Pick a date"></vaadin-date-picker>
                <div>&nbsp;</div>
                <paper-button class="cancelSchedule" (click)="toggle()">
                    <span>Cancel</span>
                </paper-button>
                <paper-button class="addToSchedule">
                    <span>Add to Scheduled</span>
                </paper-button>
            </div>
    `,
    styles:[`
        paper-button {
            display: inline-block !important;
            padding:6px 12px;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.42857143;
            width:120px;
            border:1px solid #ccc;
            border-radius:4px;
            background-color: white;
            color: black;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            cursor:pointer;
            text-transform: none;
            text-align:center;
        }
        iron-icon {
            float:right;
        }
        .send {
            margin-left:10px;
        }
        .addToSchedule {
            width:140px;
        }
        .selectedDateButton {
            display: inline-block !important;
            padding:6px 12px;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.42857143;
            width:120px;
            border:1px solid #ccc;
            border-radius: 0px !important;
            background: white;
            color: black;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            cursor:pointer;
            text-transform: none;
            text-align:left;
        }
    `]
})

export class EmailSubmit {
    public scheduleOn = '';
    public visible:boolean;
    private _datePicker:any;
    private _dialog:any;
    private _picker:any;
    public selectedDate:any;
    public date:Date = new Date();
    
    constructor(_elemRef:ElementRef) {
        this.visible = false;
        this._dialog = _elemRef.nativeElement.querySelector('paper-dialog');
        //this._picker = _elemRef.nativeElement.querySelector('paper-date-picker');
    }
    
    toggle() {
        this.visible = !this.visible;
    }
}
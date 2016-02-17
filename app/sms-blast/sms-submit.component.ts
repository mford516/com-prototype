import {Component,OnInit,ElementRef} from 'angular2/core';

@Component({
    selector: 'sms-submit',
    template: `
            <div class="caldiv">
                <paper-dialog class="paper-date-picker-dialog" modal="true">
                    <paper-date-picker date="2/9/2016"></paper-date-picker>
                    <div class="buttons">
                        <paper-button>Cancel</paper-button>
                        <paper-button (click)="onClose()">OK</paper-button>
                    </div>
                </paper-dialog>
            </div>
            <div>
                {{selectedDate}}
            </div>
            <div>
                <paper-button class="schedule" (click)="onOpen()">
                    <span>Schedule</span>
                    <iron-icon suffix icon="today"></iron-icon>
                </paper-button>
                <paper-button class="send">
                    <span>Send Now</span>
                    <iron-icon suffix icon="send"></iron-icon>
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
            background: white;
            color: black;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            cursor:pointer;
            text-transform: none;
            text-align:left;
        }
        iron-icon {
            float:right;
        }
        .send {
            margin-left:10px;
        }
    `]
})

export class SMSSubmit {
    public scheduleOn = '';
    public visible:boolean;
    private _datePicker:any;
    private _dialog:any;
    private _picker:any;
    public selectedDate:any;
    
    constructor(_elemRef:ElementRef) {
        this.visible = false;
        this._dialog = _elemRef.nativeElement.querySelector('paper-dialog');
        this._picker = _elemRef.nativeElement.querySelector('paper-date-picker');
    }
    
    onOpen() {
        this._dialog.open();
    }
    
    onClose() {
        this.selectedDate = this._picker.date;
        this._dialog.close();
    }
}
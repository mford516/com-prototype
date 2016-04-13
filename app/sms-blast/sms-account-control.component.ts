import {Component,Input,OnInit,OnChanges,SimpleChange,ElementRef} from 'angular2/core';

import {Account} from './sms-recipient-account';
import {SMSAccountService} from './sms-recipient-account.service';
import {SMSGroupControl} from './sms-group-control.component';

@Component({
    selector: 'sms-account-control',
    template: `
            <paper-menu-button>
                <paper-button class="dropdown-trigger">
                    <span>{{accountSelectLabel}}</span>
                    <iron-icon icon="arrow-drop-down"></iron-icon>
                </paper-button>
                <paper-menu class="dropdown-content" multi (change)="onSelect()">
                    <paper-item *ngFor="#account of accounts" role="menuitemcheckbox" [value]="account.id">
                        <paper-checkbox>{{account.name}}</paper-checkbox>
                    </paper-item>
                </paper-menu>
            </paper-menu-button>
    `,
    styles:[`
        paper-item {
            width:200px;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }
        paper-button {
            display: inline-block !important;
            padding:6px 12px;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.42857143;
            width:200px;
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
            vertical-align:top;
        }
    `]
    
})

export class SMSAccountControl implements OnChanges {
    public accounts: Account[];
    public selectedAccount: Account;
    public selectedAccounts = [];
    private _menuRef:any;
    private _menuButtonRef:any;
    public accountSelectLabel:string = "Exclude";
    public accountSelectionReview:string = "";
    
    @Input() groupSelection;
    
    constructor(elementRef:ElementRef){
        setTimeout(() => {
            this._menuRef = elementRef.nativeElement.querySelector("paper-menu");
            this._menuButtonRef = elementRef.nativeElement.querySelector("paper-menu-button");
            this._menuButtonRef.horizontalAlign = 'right';
            this._menuButtonRef.verticalOffset = 46;
            this._menuButtonRef.ignoreSelect = true;
        },0)
    }
    
    onSelect(){
        setTimeout(() => {
            var menuSelection = this._menuRef.selectedItems;
            var selectionLength = this._menuRef.selectedValues.length;
            this.selectedAccounts = [];
            this.accountSelectionReview = "";
            for (var i=0;i<menuSelection.length;i+=1) {
                this.selectedAccounts.push(menuSelection[i].value);
                this.accountSelectionReview += menuSelection[i].innerText + "| ";
            }
            if (selectionLength > 0){
                this.accountSelectLabel = selectionLength + " Excluded";
            }
            else {
                this.accountSelectLabel = "Exclude";
            }
        },1)
    }
    
    getAccounts() {
        var STUDENTACCOUNTS: Account[] = [
            { "id": "1001", "type": "Student", "name": "Billy Bob"},
            { "id": "1002", "type": "Student", "name": "Susie Sue"},
            { "id": "1003", "type": "Student", "name": "Jenny Jane"},
        ];

        var PARENTACCOUNTS: Account[] = [
            { "id": "bbob", "type": "Parent", "name": "Billy Bob Parent"},
            { "id": "ssue", "type": "Parent", "name": "Susie Sue Parent"},
            { "id": "jjane", "type": "Parent", "name": "Jenny Jane Parent"},
        ];

        var STAFFACCOUNTS: Account[] = [
            { "id": "10", "type": "Teacher", "name": "Jim James"},
            { "id": "11", "type": "Teacher", "name": "Dan Daniels"},
            { "id": "12", "type": "Teacher", "name": "Cliff Clifford"},
            { "id": "20", "type": "Admin", "name": "Ben Button"},
            { "id": "21", "type": "Admin", "name": "Matt Matthews"},
            { "id": "22", "type": "Admin", "name": "Fred Fredericks"},
            { "id": "30", "type": "NoAccess", "name": "Jeff Jefferson"},
            { "id": "31", "type": "NoAccess", "name": "Howie Howardson"},
            { "id": "32", "type": "NoAccess", "name": "Pete Peterson"},
        ];
        
        this.accounts = [];
        
        for(var i=0;i<this.groupSelection.length;i+=1) {
            if(this.groupSelection[i] == 1) {
                for(var t=0;t<PARENTACCOUNTS.length;t+=1) {
                    this.accounts.push(PARENTACCOUNTS[t]);
                }
            } 
            if(this.groupSelection[i] == 2) {
                for(var t=0;t<STUDENTACCOUNTS.length;t+=1) {
                    this.accounts.push(STUDENTACCOUNTS[t]); 
                }
            } 
            if(this.groupSelection[i] == 3) {
                for(var t=0;t<STAFFACCOUNTS.length;t+=1) {
                    this.accounts.push(STAFFACCOUNTS[t]);  
                }
            } 
        }
    }
    
    ngOnInit(){
        
    }
    
    ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
        for(let propertyName in changes) {
            this.getAccounts();
        }
    }
    
}
import {Component, OnInit, AfterContentInit, ElementRef} from 'angular2/core';

import {Group} from './sms-recipient-group';
import {SMSGroupService} from './sms-recipient-group.service';

@Component({
    selector: 'sms-group-control',
    template: `
            <paper-menu-button>
                <paper-button class="dropdown-trigger">
                    <span>{{groupSelectLabel}}</span>
                    <iron-icon icon="arrow-drop-down"></iron-icon>
                </paper-button>
                <paper-menu #m class="dropdown-content" multi (change)="onSelect()">
                    <paper-item *ngFor="#group of groups" role="menuitemcheckbox" [value]="group.id">
                        <paper-checkbox>{{group.name}}</paper-checkbox>
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
        }
    `]
})

export class SMSGroupControl implements OnInit {
    public groups: Group[];
    public selectedGroup:Group;
    public selectedGroups = [];
    private _menuRef:any;
    private _menuButtonRef:any;
    // private _itemRef:any;
    // private _checkboxRef:any;
    public groupSelectLabel:string = "Groups";
    public groupSelectionReview:string = "";
    
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
            this.selectedGroups = [];
            this.groupSelectionReview = "";
            for (var i=0;i<menuSelection.length;i+=1) {
                this.selectedGroups.push(menuSelection[i].value);
                this.groupSelectionReview += menuSelection[i].innerText + "| ";
            }
            if (selectionLength > 0){
                this.groupSelectLabel = selectionLength + " selected";
            }
            else {
                this.groupSelectLabel = "Groups";
            }
        },1)
    }
    
    getGroups() {
        this.groups = [
            { "id": "1", "name": "All Active Parents" },
            { "id": "2", "name": "All Active Students" },
            { "id": "3", "name": "All Active Staff" },
            { "id": "4", "name": "Add New..." }
        ];
    }
    
    ngOnInit() {
        this.getGroups();
    }
}
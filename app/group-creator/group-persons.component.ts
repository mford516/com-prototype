import {Component} from 'angular2/core';

@Component({
    selector: 'group-persons',
    template: `
            <paper-menu-button>
                <paper-button class="dropdown-trigger">
                    <span>{{personSelectLabel}}</span>
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

export class GroupNameComponent {
    public group: Object = {
        name: ''
    };
    
    public groups: Group[];
    public selectedGroup:Group;
    public selectedGroups = [];
    private _menuRef:any;
    private _menuButtonRef:any;
    // private _itemRef:any;
    // private _checkboxRef:any;
    public groupSelectLabel:string = "Groups";
    public groupSelectionReview:string = "";
}
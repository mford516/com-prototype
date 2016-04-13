import {Component, ElementRef} from 'angular2/core';

export interface Division {
    id: string;
    name: string;
}

@Component({
    selector: 'group-division',
    template: `
        <iron-label>
            Division:
            <paper-menu-button>
                <paper-button class="dropdown-trigger">
                    <span>{{divisionSelectLabel}}</span>
                    <iron-icon icon="arrow-drop-down"></iron-icon>
                </paper-button>
                <paper-menu #m class="dropdown-content" (click)="onSelect()">
                    <paper-item *ngFor="#division of divisions" [value]="division.id">
                        {{division.name}}
                    </paper-item>
                </paper-menu>
            </paper-menu-button>
        </iron-label>
    `,
    styles:[`
        paper-item {
            width:90px;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }
        paper-button {
            display: inline-block !important;
            padding:6px 6px;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.42857143;
            width:90px;
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

export class GroupDivisionComponent {
    public divisions: Division[];
    public divisionSelectLabel:string = 'Select...';
    private _menuRef:any;
    private _menuButtonRef:any;
    
    constructor(elementRef:ElementRef){
        setTimeout(() => {
            this._menuRef = elementRef.nativeElement.querySelector("paper-menu");
            this._menuButtonRef = elementRef.nativeElement.querySelector("paper-menu-button");
            this._menuButtonRef.horizontalAlign = 'right';
            this._menuButtonRef.verticalOffset = 46;
        },0)
    }
    
    getDivisions() {
        this.divisions = [
            { 'id' : '1', 'name' : 'Staff' },
            { 'id' : '2', 'name' : 'Parents' },
            { 'id' : '3', 'name' : 'Students' },
        ]
    }
    
    onSelect(){
        this.divisionSelectLabel = this._menuRef.selectedItems[0].innerText;
    }
    
    ngOnInit(){
        this.getDivisions();
    }
}
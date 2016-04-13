import {Component, ElementRef} from 'angular2/core';

export interface Tag {
    name: string;
}

@Component({
    selector: 'group-tag',
    template: `
        <iron-label>
            Tag:
            <paper-menu-button>
                <paper-button class="dropdown-trigger">
                    <span>{{tagSelectLabel}}</span>
                    <iron-icon icon="arrow-drop-down"></iron-icon>
                </paper-button>
                <paper-menu #m class="dropdown-content" (click)="onSelect()">
                    <paper-item *ngFor="#tag of tags" [value]="tag.id">
                        {{tag.name}}
                    </paper-item>
                </paper-menu>
            </paper-menu-button>
        </iron-label>
    `,
    styles:[`
        paper-item {
            width:120px;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }
        paper-button {
            display: inline-block !important;
            padding:6px 6px;
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
    `]
})

export class GroupTagComponent {
    public tags: Tag[];
    public tagSelectLabel:string = 'Select...';
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
    
    getTags() {
        this.tags = [
            { 'name' : 'Staff' },
            { 'name' : 'Parents' },
            { 'name' : 'Students' },
        ]
    }
    
    onSelect(){
        this.tagSelectLabel = this._menuRef.selectedItems[0].innerText;
    }
    
    ngOnInit(){
        this.getTags();
    }
}
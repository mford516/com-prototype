import {Component, ElementRef} from 'angular2/core';

@Component({
    selector: 'group-include-add',
    template: `
        <paper-button (click)="onAdd()">Add</paper-button>
    `,
    styles:[`
        paper-button {
            float:right;
            display: inline-block !important;
            padding:6px 6px;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.42857143;
            width:30px;
            border:1px solid #ccc;
            border-radius:4px;
            background: white;
            color: black;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            cursor:pointer;
            text-transform: none;
            text-align:left;
        }
    `]
})

export class GroupIncludeAddComponent {
    // public tags: Tag[];
    // public tagSelectLabel:string = 'Select...';
    // private _menuRef:any;
    // private _menuButtonRef:any;
    
    // constructor(elementRef:ElementRef){
    //     this._menuRef = elementRef.nativeElement.querySelector("paper-menu");
    //     this._menuButtonRef = elementRef.nativeElement.querySelector("paper-menu-button");
    //     this._menuButtonRef.horizontalAlign = 'right';
    //     this._menuButtonRef.verticalOffset = 46;
    // }
    
    // getTags() {
    //     this.tags = [
    //         { 'name' : 'Staff' },
    //         { 'name' : 'Parents' },
    //         { 'name' : 'Students' },
    //     ]
    // }
    
    // onAdd(){
    //     //this.tagSelectLabel = this._menuRef.selectedItems[0].innerText;
    // }
    
    // ngOnInit(){
    //     this.getTags();
    // }
}
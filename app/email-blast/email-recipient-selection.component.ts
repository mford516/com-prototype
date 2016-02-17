import {Component, Output, EventEmitter} from 'angular2/core';

import {EmailGroupControl} from './email-group-control.component';
import {EmailGroupService} from './email-recipient-group.service';
import {EmailAccountControl} from './email-account-control.component'
import {EmailAccountService} from './email-recipient-account.service';
import {QuickAddControl} from './quick-add-control.component';
import {EmailSelectionReviewComponent} from  './email-selection-review.component'

@Component({
    selector: 'email-recipient-selection',
    template: `
            <email-group-control #groups></email-group-control>
            <email-account-control [groupSelection]="groups.selectedGroups" #accounts></email-account-control>
            <quick-add-control #quickAdd></quick-add-control>
            <email-selection-review [groupSelectionReview]="groups.groupSelectionReview" 
            [accountSelectionReview]="accounts.accountSelectionReview" 
            [quickAddSelectionReview]="quickAdd.quickAddSelectionReview">
            </email-selection-review>
    `,
    directives:[EmailGroupControl,EmailAccountControl,QuickAddControl,EmailSelectionReviewComponent],
    providers:[EmailGroupService,EmailAccountService],
    //events:['updated']
})

export class EmailRecipientSelectionComponent { 
    
    // @Output() updated: EventEmitter<any> = new EventEmitter();
    // 
    // onUpdate(event) {
    //     //console.log('UPDATED');
    //     this.updated.emit(null);
    //     //console.log(this.updated);
    // }
}
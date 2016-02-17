import {Component} from 'angular2/core';
import {SMSGroupControl} from './sms-group-control.component';
import {SMSGroupService} from './sms-recipient-group.service';
import {SMSAccountControl} from './sms-account-control.component'
import {SMSAccountService} from './sms-recipient-account.service';
import {QuickAddControl} from './quick-add-control.component';
import {SMSSelectionReviewComponent} from  './sms-selection-review.component'

@Component({
    selector: 'sms-recipient-selection',
    template: `
        <div>
            <sms-group-control #groups></sms-group-control>
            <sms-account-control [groupSelection]="groups.selectedGroups" #accounts></sms-account-control>
            <quick-add-control #quickAdd></quick-add-control>
            <div>&nbsp;</div>
            <sms-selection-review [groupSelectionReview]="groups.groupSelectionReview" 
            [accountSelectionReview]="accounts.accountSelectionReview" 
            [quickAddSelectionReview]="quickAdd.quickAddSelectionReview"></sms-selection-review>
        </div>
    `,
    directives:[SMSGroupControl,SMSAccountControl,QuickAddControl,SMSSelectionReviewComponent],
    providers:[SMSGroupService,SMSAccountService]
})

export class SMSRecipientSelectionComponent { }
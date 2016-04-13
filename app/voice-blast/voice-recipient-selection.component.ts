import {Component} from 'angular2/core';

import {VoiceGroupControl} from './voice-group-control.component';
import {VoiceGroupService} from './voice-recipient-group.service';
import {VoiceAccountControl} from './voice-account-control.component'
import {VoiceAccountService} from './voice-recipient-account.service';
import {QuickAddControl} from './quick-add-control.component';
import {VoiceSelectionReviewComponent} from  './voice-selection-review.component'

@Component({
    selector: 'voice-recipient-selection',
    template: `
        <div>
            <voice-group-control #groups></voice-group-control>
            <voice-account-control [groupSelection]="groups.selectedGroups" #accounts></voice-account-control>
            <quick-add-control #quickAdd></quick-add-control>
            <voice-selection-review [groupSelectionReview]="groups.groupSelectionReview" 
            [accountSelectionReview]="accounts.accountSelectionReview" 
            [quickAddSelectionReview]="quickAdd.quickAddSelectionReview">
            </voice-selection-review>
        </div>
    `,
    directives:[VoiceGroupControl,VoiceAccountControl,QuickAddControl,VoiceSelectionReviewComponent],
    providers:[VoiceGroupService,VoiceAccountService]
})

export class VoiceRecipientSelectionComponent { }
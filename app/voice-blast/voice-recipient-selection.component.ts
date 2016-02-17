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
            <voice-group-control #selectedGroup></voice-group-control>
            <voice-account-control [groupID]="selectedGroup"></voice-account-control>
            <quick-add-control></quick-add-control>
            <div>&nbsp;</div>
            <voice-selection-review></voice-selection-review>
        </div>
    `,
    directives:[VoiceGroupControl,VoiceAccountControl,QuickAddControl,VoiceSelectionReviewComponent],
    providers:[VoiceGroupService,VoiceAccountService]
})

export class VoiceRecipientSelectionComponent { }
import {Component, OnInit} from 'angular2/core';

import {VoiceRecipientSelectionComponent} from './voice-recipient-selection.component';
import {VoiceRecordingComponent} from './voice-recording.component';

@Component({
    selector: 'new-voice',
    template: `
        <voice-recipient-selection></voice-recipient-selection>
        <div>&nbsp;</div>
        <voice-recorder></voice-recorder>
    `,
    directives: [VoiceRecipientSelectionComponent,VoiceRecordingComponent]
})

export class NewVoiceComponent {
    
}
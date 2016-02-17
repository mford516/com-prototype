import {Component,Directive,ElementRef} from 'angular2/core'

@Component({
    selector: 'voice-recorder',
    template: `
            <div class="messageLabel">
                <label>Message: </label>
            </div>
            <div>
                Voice Recorder will go here
            </div>
    `
})

export class VoiceRecordingComponent { }
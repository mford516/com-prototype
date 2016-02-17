import {Component} from 'angular2/core';

import {RouteConfig,RouterOutlet,ROUTER_DIRECTIVES} from 'angular2/router';

import {NewVoiceComponent} from './new-voice.component';
import {VoiceHistoryComponent} from './voice-history.component';
import {VoiceScheduledComponent} from './voice-scheduled.component';

@Component({
    selector: 'voice-blast',
    template: `
        <h3>Voice Blast</h3>
        <nav>
            <a [routerLink]="['NewVoice']">New</a>
            <a [routerLink]="['VoiceHistory']">History</a>
            <a [routerLink]="['VoiceScheduled']">Scheduled</a>
        </nav>
        <div>&nbsp;</div>
        <router-outlet></router-outlet>
    `,
    inputs: ['sender'],
    directives: [RouterOutlet,ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path:'/', name:'NewVoice', component: NewVoiceComponent, useAsDefault:true},
    {path:'/sms-history', name:'VoiceHistory', component: VoiceHistoryComponent},
    {path:'/sms-scheduled', name:'VoiceScheduled', component: VoiceScheduledComponent}
])

export class VoiceBlastComponent {
    
}
import {Component} from 'angular2/core';

import {RouteConfig,RouterOutlet,ROUTER_DIRECTIVES} from 'angular2/router';

import {NewVoiceComponent} from './new-voice.component';
import {VoiceHistoryComponent} from './voice-history.component';
import {VoiceScheduledComponent} from './voice-scheduled.component';

@Component({
    selector: 'voice-blast',
    template: `
    
        <div class="container">
            <paper-tabs noink no-bar selected="0">
                <paper-tab [routerLink]="['NewVoice']">
                    New
                </paper-tab>
                <paper-tab [routerLink]="['VoiceHistory']">
                    <iron-icon icon="event"></iron-icon>
                    <br>
                    <div>History</div>
                </paper-tab>
                <paper-tab [routerLink]="['VoiceScheduled']">
                    <iron-icon icon="schedule"></iron-icon>
                    Scheduled
                </paper-tab>
            </paper-tabs>
            <div>&nbsp;</div>
            <router-outlet></router-outlet>
        </div>
    `,
    inputs: ['sender'],
    directives: [RouterOutlet,ROUTER_DIRECTIVES],
    styles: [`
        paper-tabs {
            width:400px;
        }
        paper-tab {
            background-color:#bfcbe8;
            width:100px;
            text-align:center;
            vertical-align:center;
            font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;
            color: black;
            border: 1px solid black;
            border-top:none;
            border-collapse:collapse;
        }
        paper-tabs[no-bar] paper-tab.iron-selected {
            color:white;
            border-bottom: none;
        }
        .container {
            padding:10px;
            width:836px;
            height:100%;
            margin: 0 auto;
            background-color:#bfcbe8;
        }
        iron-icon {
            position:static !important;
        }
    `]
})

@RouteConfig([
    {path:'/', name:'NewVoice', component: NewVoiceComponent, useAsDefault:true},
    {path:'/voice-history', name:'VoiceHistory', component: VoiceHistoryComponent},
    {path:'/voice-scheduled', name:'VoiceScheduled', component: VoiceScheduledComponent}
])

export class VoiceBlastComponent {
    
}
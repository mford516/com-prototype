import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import {EmailBlastComponent} from './email-blast/email-blast.component'
import {SMSBlastComponent} from './sms-blast/sms-blast.component'
import {VoiceBlastComponent} from './voice-blast/voice-blast.component'
import {GroupCreatorComponent} from './group-creator/group-creator.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Communicate Blast Prototype</h1>
        <paper-tabs noink no-bar selected="0">
            <paper-tab [routerLink]="['EmailBlast']">Email</paper-tab>
            <paper-tab [routerLink]="['SMSBlast']">SMS/Text</paper-tab>
            <paper-tab [routerLink]="['VoiceBlast']">Voice</paper-tab>
            <paper-tab [routerLink]="['GroupCreator']">Groups</paper-tab>
        </paper-tabs>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    styles: [`
        h1 {
            width:836px;
            margin:0 auto;
        }
        paper-tabs {
            width:400px;
            height:30px !important;
            margin:0 auto;
        }
        paper-tab {
            background-color:#35448d;
            width:100px;
            text-align:center;
            vertical-align:center;
            font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;
            color: white;
            border:1px solid black;
            border-top-left-radius:10px 10px;
            border-top-right-radius:10px 10px;
        }
        paper-tabs[no-bar] paper-tab.iron-selected {
            color:black;
            border-bottom: none;
            background-color:#bfcbe8;
        }
    `]
})

@RouteConfig([
    {path:'/email-blast/...', name:'EmailBlast', component: EmailBlastComponent, useAsDefault:true},
    {path:'/sms-blast/...', name:'SMSBlast', component: SMSBlastComponent},
    {path:'/voice-blast/...', name:'VoiceBlast', component: VoiceBlastComponent},
    {path:'/group-creator', name:'GroupCreator', component: GroupCreatorComponent}
])

export class AppComponent {
    
}
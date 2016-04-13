import {Component} from 'angular2/core';

import {RouteConfig,RouterOutlet,ROUTER_DIRECTIVES} from 'angular2/router';

import {NewSMSComponent} from './new-sms.component';
import {SMSHistoryComponent} from './sms-history.component';
import {SMSScheduledComponent} from './sms-scheduled.component';

@Component({
    selector: 'sms-blast',
    template: `
        <div>
            <paper-tabs noink no-bar selected="0">
                <paper-tab [routerLink]="['NewSMS']">New</paper-tab>
                <paper-tab [routerLink]="['SMSHistory']">History</paper-tab>
                <paper-tab [routerLink]="['SMSScheduled']">Scheduled</paper-tab>
            </paper-tabs>
            <router-outlet></router-outlet>
        </div>
    `,
    inputs: ['sender'],
    directives: [RouterOutlet,ROUTER_DIRECTIVES],
    styles: [`
        div {
            width:836px;
            height:100%;
            margin: 0 auto;
            padding:10px;
            background-color:#bfcbe8;
        }
        paper-tabs {
            width:300px;
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
        }
        paper-tabs[no-bar] paper-tab.iron-selected {
            color: white;
            border-bottom: none;
        }
    `]
})

@RouteConfig([
    {path:'/', name:'NewSMS', component: NewSMSComponent, useAsDefault:true},
    {path:'/sms-history', name:'SMSHistory', component: SMSHistoryComponent},
    {path:'/sms-scheduled', name:'SMSScheduled', component: SMSScheduledComponent}
])

export class SMSBlastComponent {
    
}
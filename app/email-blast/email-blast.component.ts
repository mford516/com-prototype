import {Component} from 'angular2/core';
import {RouteConfig,RouterOutlet,ROUTER_DIRECTIVES} from 'angular2/router';

import {NewEmailComponent} from './new-email.component';
import {EmailHistoryComponent} from './email-history.component';
import {EmailScheduledComponent} from './email-scheduled.component';
import {EmailSignatureComponent} from './email-signature.component';

@Component({
    selector: 'email-blast',
    template: `
        <div class="container">
            <paper-tabs noink no-bar selected="0">
                <paper-tab [routerLink]="['NewEmail']">
                    New
                </paper-tab>
                <paper-tab [routerLink]="['EmailHistory']">
                    <iron-icon icon="event"></iron-icon>
                    <br>
                    <div>History</div>
                </paper-tab>
                <paper-tab [routerLink]="['EmailScheduled']">
                    <iron-icon icon="schedule"></iron-icon>
                    Scheduled
                </paper-tab>
                <paper-tab [routerLink]="['EmailSignature']">
                    <iron-icon icon="create"></iron-icon>
                    Signature
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
    {path:'/', name:'NewEmail', component: NewEmailComponent, useAsDefault:true},
    {path:'/email-history', name:'EmailHistory', component: EmailHistoryComponent},
    {path:'/email-scheduled', name:'EmailScheduled', component: EmailScheduledComponent},
    {path:'/email-signature', name:'EmailSignature', component: EmailSignatureComponent}
])

export class EmailBlastComponent {
    
}
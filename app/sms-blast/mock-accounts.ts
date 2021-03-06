import {Account} from './sms-recipient-account';

export var STUDENTACCOUNTS: Account[] = [
  { "id": 0, "type": "", "name": "", "phone":""},
  { "id": 1001, "type": "Student", "name": "Billy Bob", "address":"5555555555"},
  { "id": 1002, "type": "Student", "name": "Susie Sue", "address":"5555555555"},
  { "id": 1003, "type": "Student", "name": "Jenny Jane", "address":"5555555555"},
];

export var PARENTACCOUNTS: Account[] = [
  { "id": 0, "type": "", "name": "", "phone":""},
  { "id": "bbob", "type": "Parent", "name": "Billy Bob Parent", "address":"5555555555"},
  { "id": "ssue", "type": "Parent", "name": "Susie Sue Parent", "address":"5555555555"},
  { "id": "jjane", "type": "Parent", "name": "Jenny Jane Parent", "address":"5555555555"},
];

export var STAFFACCOUNTS: Account[] = [
  { "id": 0, "type": "", "name": "", "phone":""},
  { "id": 10, "type": "Teacher", "name": "Jim James", "address":"5555555555"},
  { "id": 11, "type": "Teacher", "name": "Dan Daniels", "address":"5555555555"},
  { "id": 12, "type": "Teacher", "name": "Cliff Clifford", "address":"5555555555"},
  { "id": 20, "type": "Admin", "name": "Ben Button", "address":"5555555555"},
  { "id": 21, "type": "Admin", "name": "Matt Matthews", "address":"5555555555"},
  { "id": 22, "type": "Admin", "name": "Fred Fredericks", "address":"5555555555"},
  { "id": 30, "type": "NoAccess", "name": "Jeff Jefferson", "address":"5555555555"},
  { "id": 31, "type": "NoAccess", "name": "Howie Howardson", "address":"5555555555"},
  { "id": 32, "type": "NoAccess", "name": "Pete Peterson", "address":"5555555555"},
];
import {Account} from './email-recipient-account';

export var STUDENTACCOUNTS: Account[] = [
  { "id": 0, "type": "", "name": "", "address":""},
  { "id": 1001, "type": "Student", "name": "Billy Bob", "address":"billy@example.com"},
  { "id": 1002, "type": "Student", "name": "Susie Sue", "address":"susie@example.com"},
  { "id": 1003, "type": "Student", "name": "Jenny Jane", "address":"jenny@example.com"},
];

export var PARENTACCOUNTS: Account[] = [
  { "id": 0, "type": "", "name": "", "address":""},
  { "id": "bbob", "type": "Parent", "name": "Billy Bob Parent", "address":"billyparent@example.com"},
  { "id": "ssue", "type": "Parent", "name": "Susie Sue Parent", "address":"susieparent@example.com"},
  { "id": "jjane", "type": "Parent", "name": "Jenny Jane Parent", "address":"jennyparent@example.com"},
];

export var STAFFACCOUNTS: Account[] = [
  { "id": 0, "type": "", "name": "", "address":""},
  { "id": 10, "type": "Teacher", "name": "Jim James", "address":"jim@example.com"},
  { "id": 11, "type": "Teacher", "name": "Dan Daniels", "address":"dan@example.com"},
  { "id": 12, "type": "Teacher", "name": "Cliff Clifford", "address":"cliff@example.com"},
  { "id": 20, "type": "Admin", "name": "Ben Button", "address":"ben@example.com"},
  { "id": 21, "type": "Admin", "name": "Matt Matthews", "address":"matt@example.com"},
  { "id": 22, "type": "Admin", "name": "Fred Fredericks", "address":"fred@example.com"},
  { "id": 30, "type": "NoAccess", "name": "Jeff Jefferson", "address":"jeff@example.com"},
  { "id": 31, "type": "NoAccess", "name": "Howie Howardson", "address":"howie@example.com"},
  { "id": 32, "type": "NoAccess", "name": "Pete Peterson", "address":"pete@example.com"},
];
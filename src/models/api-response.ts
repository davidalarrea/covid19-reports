export interface ApiArrayPaginated {
  rows: any[],
  totalRowsCount: number,
}

export interface ApiOrg {
  id: number,
  name: string,
  description: string,
  indexPrefix: string,
  contact?: ApiUser,
}

export interface ApiRole {
  id: number,
  org?: ApiOrg,
  workspace?: ApiWorkspace,
  name: string,
  description: string,
  indexPrefix: string,
  allowedRosterColumns: string[],
  allowedNotificationEvents: string[],
  canManageGroup: boolean,
  canManageRoster: boolean,
  canManageWorkspace: boolean,
  canViewRoster: boolean,
  canViewMuster: boolean,
  canViewPII: boolean,
  canViewPHI: boolean,
}

export interface ApiUser {
  edipi: string,
  firstName: string,
  lastName: string,
  service: string,
  phone: string,
  email: string,
  roles?: ApiRole[],
  rootAdmin: boolean,
  isRegistered: boolean,
}

export interface ApiAccessRequest {
  id: number,
  org: ApiOrg,
  requestDate: Date,
  user: ApiUser,
  status: 'approved' | 'pending' | 'denied',
}

export interface ApiRosterPaginated extends ApiArrayPaginated {
  rows: ApiRosterEntry[],
}

export enum ApiRosterColumnType {
  String = 'string',
  Boolean = 'boolean',
  Date = 'date',
  DateTime = 'datetime',
  Number = 'number',
}

export function rosterColumnTypeDisplayName(type: ApiRosterColumnType) {
  switch (type) {
    case ApiRosterColumnType.Boolean:
      return 'Boolean';
    case ApiRosterColumnType.Number:
      return 'Number';
    case ApiRosterColumnType.String:
      return 'String';
    case ApiRosterColumnType.Date:
      return 'Date';
    case ApiRosterColumnType.DateTime:
      return 'Date/Time';
    default:
      return 'Unknown';
  }
}

export interface ApiNotification {
  id: string;
  name: string;
  description: string;
  settingsTemplate: string;
  defaultThreshold: number;
  defaultMaxDailyCount: number;
  defaultMinMinutesBetweenAlerts: number;
}

export interface ApiUserNotificationSetting {
  id: number;
  notificationId: string;
  threshold: number;
  minMinutesBetweenAlerts: number;
  maxDailyCount: number;
  smsEnabled: boolean;
  emailEnabled: boolean;
}

export interface ApiRosterColumnInfo {
  name: string,
  displayName: string,
  type: ApiRosterColumnType,
  pii: boolean,
  phi: boolean,
  custom: boolean,
  required: boolean,
  updatable: boolean,
}

export interface ApiRosterEntry {
  id: number,
  [key: string]: string | boolean | number | null,
}

export interface ApiWorkspaceTemplate {
  id: number,
  name: string,
  description: string,
  pii: boolean,
  phi: boolean,
}

export interface ApiWorkspace {
  id: number,
  name: string,
  description: string,
  org?: ApiOrg,
  workspaceTemplate?: ApiWorkspaceTemplate,
  pii: boolean,
  phi: boolean,
}

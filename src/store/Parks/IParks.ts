/**
 * Parks Interface
 */
export interface IParks {
  id?: string;
  name?: string;
  description?: string;
  activities?: [];
  parkCode?: string;
  addresses?: IAddresses[];
  images: IImage[];
  operatingHours: IOperatingHours[];
  entranceFees: IEntranceFees[];
  directionsUrl: string;
  contacts: IContacts;
  latitude: string;
  longitude: string;
}

/**
 * Address Interface
 */
export interface IAddresses {
  stateCode: string;
}

/**
 * Image Interface
 */
export interface IImage {
  altText: string;
  caption: string;
  credit: string;
  title: string;
  url: string;
}

/**
 * Standard Hours Interface
 */
export interface IStandardHours {
  [key: string]: string;
}

/**
 * Operating Hours Interface
 */
export interface IOperatingHours {
  exceptions: [];
  description: string;
  standardHours: IStandardHours;
  name: string;
}

/**
 * Entrance Fees Interface
 */
export interface IEntranceFees {
  cost: string;
  description: string;
  title: string;
}

/**
 * Phone Number Interface
 */
export interface IPhoneNumbers {
  phoneNumber: string;
  description: string;
  extension: string;
  type: string;
}

/**
 * Email Address Interface
 */
export interface IEmailAddresses {
  description: string;
  emailAddress: string;
}

/**
 * Contact Details Interface
 */
export interface IContacts {
  phoneNumbers: IPhoneNumbers[];
  emailAddresses: IEmailAddresses[];
}

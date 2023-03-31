export interface FormFieldErrors {
  type: string;
  message: string;
}

export interface FormData {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  birthday: string;
  country: string;
  file: FileList;
  sendNotif: string;
  contestToData: boolean | string;
}

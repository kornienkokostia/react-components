export default interface User {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  birthday: string;
  country: string;
  picFile?: File;
  recieveNotif: string;
  contestToData: boolean;
}

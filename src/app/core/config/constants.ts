
import { environment } from "src/environments/environment";

export const AppConstants = {

  PRISISTED_KEYS: {
    ACCESS_TOKEN: 'ACCESS_TOKEN',
    REMEMBER_ME: 'REMEMBER_ME',
    CURRENT_USER: 'CURRENT_USER',
    USER_BOOKING: 'USER_BOOKING'
  },
  API: {
    LOGIN_API: `${environment.baseURL}/restapi/user/auth`,
    
 
  },
  FORM_FIELDS: {
    LONG: 'LONG',
    SELECT: 'SELECT',
    STRING: 'STRING',
    BOOLEAN: 'BOOLEAN',
    DATE_TIME: 'DATE_TIME',
    DOUBLE: 'DOUBLE',
  },

};

export enum SocketClientState {
  ATTEMPTING,
  CONNECTED,
}

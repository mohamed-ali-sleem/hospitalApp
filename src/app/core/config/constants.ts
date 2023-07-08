
import { environment } from "src/environments/environment";

export const AppConstants = {

  PRISISTED_KEYS: {
    ACCESS_TOKEN: 'ACCESS_TOKEN',
    IS_LOGGED_IN: 'IS_LOGGED_IN',
    CURRENT_USER: 'CURRENT_USER',
  },

  API: {

    LOGIN_API: `${environment.baseURL}/patient/login.php`,
    REGISER_API: `${environment.baseURL}/patient/create.php`,

    DEPARTMENT_API: `${environment.baseURL}/department/view.php`,

    DOCTORS_API: `${environment.baseURL}/doctor/view.php`,

    APPOINTMENT_API: `${environment.baseURL}/appointment/view.php`,
    APPOINTMENT_ADD_API: `${environment.baseURL}/appointment/create.php`,
    APPOINTMENT_DELETE_API: `${environment.baseURL}/appointment/delete.php`,
    APPOINTMENT_UPDATE_API: `${environment.baseURL}/appointment/edit.php`,
  },

};


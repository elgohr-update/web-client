// const BASE_URL = "https://dev-api.pickeat.fr";
const BASE_URL = "https://api.pickeat.fr";
//const BASE_URL = "https://localhost:3000";

export const SIGN_IN_URL = BASE_URL + '/auth/login';
export const SIGN_UP_URL = BASE_URL + '/auth/register';
export const FORGOT_PASSWORD_URL = BASE_URL + '/users/forgot_password';
export const UPDATE_PHONE_URL = BASE_URL + '/users/update_phone'
export const UPDATE_MAIL_URL = BASE_URL + '/users/update_email'
export const UPDATE_USER_PICTURE_URL = BASE_URL + '/users_picture'
export const RESET_PASSWORD_URL = BASE_URL + '/users/reset_password';
export const DELETE_ACCOUNT_URL = BASE_URL + '/users/delete';
export const DELETE_ANNOUNCE_URL = BASE_URL + '/announces';
export const UPDATE_PASSWORD_URL = BASE_URL + '/users/password';
export const GET_USER_ME = BASE_URL + '/users/me';
export const POST_REPORT_USER_URL = BASE_URL + '/report';
export const GET_PRODUCT_LIST_URL = BASE_URL + '/announces';
export const GET_MY_RESERVE_PRODUCTS_URL = BASE_URL + '/announces_me_picker';
export const GET_MY_PUBLISHED_PRODUCTS_URL = BASE_URL + '/announces_me';
export const GET_RESERVED_PRODUCT_LIST_URL = BASE_URL + '/announces_my_reservations';
export const GET_OWN_ANNOUNCES_LIST_URL = BASE_URL + '/announces_me';
export const PRODUCT_URL = BASE_URL + '/announces';
export const RESERVE_URL = BASE_URL + '/announces_reserve';
export const CONFIRM_RESERVE_URL = BASE_URL + '/announces_confirm_reserve';
export const RATE_GIVER_URL = BASE_URL + '/announces_note';
export const CONFIRM_EXCHANGE = BASE_URL + '/announces_confirm';
export const USER_PUBLIC_INFO_URL = BASE_URL + '/users/public_infos';
export const FACEBOOK_CONNECT_URL = BASE_URL + '/auth/facebook';
export const GOOGLE_CONNECT_URL = BASE_URL + '/auth/google';
export const POST_PRODUCT_IMAGE = BASE_URL + '/announces_picture';
export const POST_CONFIRM_ACCOUNT = BASE_URL + '/users/confirm_account';
export const DELETE_CONFIRM_ACCOUNT = BASE_URL + '/users/confirm_delete';

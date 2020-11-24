import Cookies from 'js-cookie'

export default function logout() {
    Cookies.remove('jwt', {path: '/'});
    window.location.reload();
}
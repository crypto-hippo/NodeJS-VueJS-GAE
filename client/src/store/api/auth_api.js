import axios from 'axios';

class AuthApi {
    constructor() {}

    register(user, commit, component) {

        axios.post('/api/auth/register', {user: user}).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }
}

export default new AuthApi();
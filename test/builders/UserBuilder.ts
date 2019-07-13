import { User } from '~/domain/user/User';

export class UserBuilder {
    user: User

    constructor() {
        this.user = new User({
            username: 'userOne',
            password: 'secure123'
        })
    }

    build() {
        return this.user
    }
}
import { User } from '~/domain/entities/User'
import { bcrypt } from '~/infra/crypto/bcrypt'

export class UserBuilder {
    user: User
    password: string

    constructor() {
        this.password = 'secure123'

        this.user = new User({
            email: 'johnny@umbrella.co',
            password: this.password,
            firstName: 'Johnny',
            lastName: 'Cash',
            company: 'Umbrella',
            website: 'umbrella.co'
        })
    }

    withHashedPassword() {
        this.user.password = bcrypt.hash(this.password)
        return this
    }

    build() {
        return this.user
    }
}

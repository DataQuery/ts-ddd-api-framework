import { RegisterUserService } from '~/app/RegisterUserService'
import { FakeUserRepository } from 'test/fakes/repositories/FakeUserRepository'
import { UserBuilder } from 'test/builders/UserBuilder'
import { _ } from '~/lib'
import { ExceptionCode } from '~/domain/exceptions/ExceptionMessages'
import { Exception } from '~/domain/exceptions/Exception'

describe('register()', () => {
    it('registers a user and saves to db', async () => {
        // Arrange
        const userRepository = new FakeUserRepository()
        const sut = new RegisterUserService(userRepository)
        const user = new UserBuilder().build()

        // Act
        await sut.register(_.clone(user))

        // Assert
        const savedUser = userRepository.entities[0]
        expect(savedUser.email).toBe(user.email)

        // Encrypts password
        expect(savedUser.password).not.toBe(user.password)
    })

    it('throws duplicate entity error when email already exists', async () => {
        // Arrangex
        const existingUser = new UserBuilder().build()
        const userRepository = new FakeUserRepository([existingUser])
        const sut = new RegisterUserService(userRepository)

        // Act
        let exception
        try {
            await sut.register(existingUser)
        } catch (e) {
            exception = e
        }

        // Assert
        expect(exception).not.toBeUndefined()
        expect(exception).toBeInstanceOf(Exception)
        expect(ExceptionCode[exception.name]).toBe(ExceptionCode.DUPLICATE_ENTRY)
    })
})

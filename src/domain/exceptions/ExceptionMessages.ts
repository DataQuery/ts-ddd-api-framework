import { Language } from '~/domain/Language'

type ExceptionMessagesTranslation = { [key in Language]: { [key in ExceptionCode | string]: string } }

export enum ExceptionCode {
    BAD_CREDENTIALS,
    DUPLICATE_ENTRY,
    ENTITY_NOT_FOUND,
    PW_NOT_SECURE,
    NOT_VALID_EMAIL,
    VALIDATION_FAILED
}

export const ExceptionMessagesTranslations: ExceptionMessagesTranslation = {
    [Language.EN]: {
        [ExceptionCode.BAD_CREDENTIALS]: 'Incorrect email or password.',
        [ExceptionCode.DUPLICATE_ENTRY]: 'Duplicated record.',
        [ExceptionCode.ENTITY_NOT_FOUND]: 'Entity not found.',
        [ExceptionCode.PW_NOT_SECURE]: 'Password is not secure.',
        [ExceptionCode.NOT_VALID_EMAIL]: 'Email is not valid.',
        [ExceptionCode.VALIDATION_FAILED]: 'Validation failed.',
    }
}
import { InjectionToken } from '@angular/core'

export const finalAnswerToken = new InjectionToken('answer')

export const finalAnswerFactory = dep => dep.bar
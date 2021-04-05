/*
 * @Author: kingford
 * @Date: 2021-04-05 12:04:18
 * @LastEditTime: 2021-04-05 12:59:35
 */
import React, { ReactNode, useState } from 'react'
import * as auth from 'auth/auth-provider'
import { IUser } from '../pages/project-list/search-panel';

interface IAuthForm {
    username: string;
    password: string;
}

const AuthContext = React.createContext<{
    user: IUser | null,
    register: (form: IAuthForm) => Promise<void>,
    login: (form: IAuthForm) => Promise<void>,
    logout: () => Promise<void>,
} | undefined>(undefined)

AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);
    // user => setUser(user) == setUser
    const login = (form: IAuthForm) => auth.login(form).then(setUser)
    const register = (form: IAuthForm) => auth.register(form).then(setUser)
    const logout = () => auth.logout().then(() => setUser(null))

    return <AuthContext.Provider children={children} value={{ user, login, register, logout }}></AuthContext.Provider>
}

export const useAuth = () => {
    const context = React.useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth 需要在authProvider中使用')
    }
    return context
}
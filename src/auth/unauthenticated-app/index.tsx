/*
 * @Author: kingford
 * @Date: 2021-04-05 13:06:13
 * @LastEditTime: 2021-04-05 13:24:28
 */

import React, { useState } from 'react';
import { Login } from './login';
import { Register } from './register';

export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false);
    return (
        <>
            <button onClick={() => setIsRegister(!isRegister)}>切换{isRegister ? '登录' : '注册'}</button>
            {isRegister ? <Register></Register> : <Login></Login>}
        </>
    );
};

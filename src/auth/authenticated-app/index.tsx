/*
 * @Author: kingford
 * @Date: 2021-04-05 13:17:18
 * @LastEditTime: 2021-04-05 13:24:01
 */
import { useAuth } from 'context/auth-context';
import { ProjectList } from '../../pages/project-list';

export const AuthenticatedApp = () => {
    const { logout } = useAuth();
    return (
        <div>
            <button onClick={logout}>登出</button>
            <ProjectList></ProjectList>
        </div>
    );
};

/*
 * @Author: kingford
 * @Date: 2021-05-23 23:58:56
 * @LastEditTime: 2021-05-24 01:28:22
 */
import styled from '@emotion/styled';
import styles from './index.module.css';
import { useHistory } from "react-router-dom";

export const AppHeader = () => {
    let history = useHistory();

    function handleClick(url: string): void {
        history.push(url);
    }

    return (
        <Container>
            <ul className={styles.nav}>
                <li className={styles.navItem} onClick={() => handleClick("/")}>
                    脂肪肝
                </li>
                <li className={styles.navItem} onClick={() => handleClick("/pubmed/fibrosis")}>
                    慢乙肝/肝纤维化
                </li>
            </ul>
        </Container>
    )
}

const Container = styled.div`
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 1rem 2rem;
`;

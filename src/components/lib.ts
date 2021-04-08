/*
 * @Author: kingford
 * @Date: 2021-04-07 13:24:16
 * @LastEditTime: 2021-04-07 13:30:23
 */
import styled from '@emotion/styled';

export const Row = styled.div<{
  gap?: number | boolean;
  between?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.between ? 'space-between' : undefined)};
  > * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    margin-right: ${(props) => (typeof props.gap === 'number' ? props.gap + 'rem' : props.gap ? '2rem' : undefined)};
  }
`;

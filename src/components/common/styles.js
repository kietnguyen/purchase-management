import { Layout as AntLayout } from 'antd';
import styled from 'styled-components';

const { Content: AntContent } = AntLayout;

export const IconWrapper = styled.span`
  margin-right: 0.25rem;
  font-size: 1.125rem;
`;

export const Content = styled(({ children, ...props }) => (
  <AntContent {...props}>{children}</AntContent>
))`
  margin-top: 16px;
  margin-bottom: 16px;
`;

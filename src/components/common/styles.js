import { Layout as AntLayout } from 'antd';
import styled from 'styled-components';

const { Content: AntContent } = AntLayout;

export const Content = styled(({ children, ...props }) =>
  <AntContent {...props}>{children}</AntContent>)`
  margin-top: 16px;
  margin-bottom: 16px;
`;

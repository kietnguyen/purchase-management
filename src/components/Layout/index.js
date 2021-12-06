import { Layout as AntLayout, Typography } from 'antd';
import styled from 'styled-components';
import { Content } from '../common/styles';

const { Header } = AntLayout;
const { Title } = Typography;

const AppHeader = styled(Header)`
  &.ant-layout-header {
    padding: 0 16px;

    h1.ant-typography {
      color: #fff;
      line-height: 64px;
      font-size: 2rem;
    }
  }
`;

const AppContent = styled(Content)`
  margin: 16px;
  overflow: initial;
`;

const Layout = ({ children, ...props }) => {
  return (
    <AntLayout {...props} style={{ backgroundColor: '#fff', ...props.style }}>
      <AppHeader>
        <Title>Purchase Management</Title>
      </AppHeader>

      <AppContent>{children}</AppContent>
    </AntLayout>
  );
};

export default Layout;

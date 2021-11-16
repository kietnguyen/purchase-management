import { Divider } from 'antd';
import './App.less';
import History from './components/History';
import Layout from './components/Layout';
import Overview from './components/Overview';
import Purchase from './components/Purchase';

function App() {
  return (
    <Layout>
      <Overview />
      <Divider />
      <History />
      <Divider />
      <Purchase />
    </Layout>
  );
}

export default App;

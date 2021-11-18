import { Divider } from 'antd';
import './App.less';
import PurchaseList from './components/PurchaseList';
import Layout from './components/Layout';
import Overview from './components/Overview';
import Purchase from './components/Purchase';

function App() {
  return (
    <Layout>
      <Overview />
      <Divider />
      <PurchaseList />
      <Divider />
      <Purchase />
    </Layout>
  );
}

export default App;

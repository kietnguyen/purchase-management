import { Divider } from 'antd';
import './App.less';
import PurchaseList from './components/PurchaseList';
import Layout from './components/Layout';
import Overview from './components/Overview';
import PurchaseForm from './components/PurchaseForm';

function App() {
  return (
    <Layout>
      <Overview />
      <Divider />
      <PurchaseList />
      <Divider />
      <PurchaseForm />
    </Layout>
  );
}

export default App;

import { Divider } from 'antd';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPurchases } from './actions/purchases';
import './App.less';
import Layout from './components/Layout';
import Overview from './components/Overview';
import PurchaseForm from './components/PurchaseForm';
import PurchaseList from './components/PurchaseList';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPurchases());
  }, [dispatch]);

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

import './App.less';
import History from './components/History';
import Layout from './components/Layout';
import Overview from './components/Overview';
import Purchase from './components/Purchase';

function App() {
  return (
    <Layout>
      <Overview />
      <History />
      <Purchase />
    </Layout>
  );
}

export default App;

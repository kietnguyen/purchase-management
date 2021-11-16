import './App.less';
import History from './components/History';
import Layout from './components/Layout';
import Overview from './components/Overview';

function App() {
  return (
    <Layout>
      <Overview />
      <History />
    </Layout>
  );
}

export default App;

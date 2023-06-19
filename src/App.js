import Header from './components/navigations/Header';
import RouterRoutes from './routes/RouterRoutes.js';
import Footer from './components/navigations/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';


const App = () => {
  return (
    <>
      <Provider store={store}>
            <Header />
            <RouterRoutes />
            <Footer />
      </Provider>
    </>
  );
};

export default App;
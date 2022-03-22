import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouterApp from './Router';
import Footer from './Footer';
import Header from './Header';
import Landing from './Landing';
import Loading from './Loading';
import 'bootstrap/dist/css/bootstrap.min.css';
import './trustedPolicy';

const PageNotFound = lazy(() => import('./PageNotFound'));


const App = () =>
{
    return(
        <Router>
            <Header />
            <Routes>
                <Route path={ process.env.REACT_APP_PATH } element={ <RouterApp /> }>
                    <Route index element={ <Landing /> } />
                </Route>
                <Route path="*" element={ 
                    <Suspense fallback={ <Loading /> }>
                        <PageNotFound />
                    </Suspense> } 
                />
            </Routes>
            <Suspense fallback={ <Loading /> }>
                <Footer />
            </Suspense>
        </Router>
    );
}

export default App;
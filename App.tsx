import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import './main.global.css';
import { CardsList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { applyMiddleware, createStore } from "redux";
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./store/reducer";
import thunk from "redux-thunk";
import { tokenRequestAsync } from "./store/token/tokenactions";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Post } from "./shared/Post";
import { Error404 } from "./shared/Error404";


const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
));

function AppComponents() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const code = (new URLSearchParams(window.location.search)).get('code');
        if (!code || code === null) return;
        store.dispatch(tokenRequestAsync(code) as any);
    }, []);

    return (
        <Provider store={store}>
            {mounted && (
                <Router>
                    <Layout>
                        <Header />
                        <Content>
                            <Routes>
                                <Route path="/" element={<Navigate replace to="/posts" />} />
                                <Route path="/auth" element={<Navigate replace to="/posts" />} />
                                <Route path="/posts" element={<CardsList />}>
                                    <Route index element={<div></div>} />
                                    <Route path=":id" element={<Post />} />
                                </Route>
                                <Route path="*" element={<Error404 />} />
                            </Routes>
                        </Content>
                    </Layout>
                </Router>
            )}
        </Provider>
    );
}
export const App = hot(() => <AppComponents />);
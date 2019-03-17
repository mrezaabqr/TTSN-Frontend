import React, {Component} from 'react';
import Header from "./Component/Header";
import Layout from "./Ui/Layout";

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header/>
                </Layout>
            </div>
        );
    }
}

export default App;

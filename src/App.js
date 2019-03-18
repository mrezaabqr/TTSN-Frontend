import React, {Component} from 'react';
import Header from "./Component/Header";
import Layout from "./Ui/Layout";
import SectionOne from "./Component/SectionOne";

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header/>
                    <SectionOne/>
                </Layout>
            </div>
        );
    }
}

export default App;

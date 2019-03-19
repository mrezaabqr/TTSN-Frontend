import React, {Component} from 'react';
import Header from "./Component/Header";
import Layout from "./Ui/Layout";
import SectionOne from "./Component/SectionOne";
import SectionTwo from "./Component/SectionTwo";
import SectionThree from "./Component/SectionThree";

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header/>
                    <SectionOne/>
                    <SectionTwo/>
                    <SectionThree/>
                </Layout>
            </div>
        );
    }
}

export default App;

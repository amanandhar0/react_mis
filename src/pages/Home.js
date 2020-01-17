import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import Services from "../components/Services";

function Home() {
    return (
        <React.Fragment>
            <Hero>
                <Banner title="Home Stay" subtitle="Where you want to stay">
                    <Link to='/rooms' className="btn-primary">our rooms</Link>
                </Banner>
            </Hero>
            <Services/>
        </React.Fragment>

    );
}

export default Home;
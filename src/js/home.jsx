import React from 'react';
import Header from './common/header';
import QuoteBanner from './common/quoteBanner';

const Home = () => {
    return (
        <div>
            <Header />
            <QuoteBanner
                header="An Experience"
                quote="Here at Cosimo’s we focus on providing you with an authentic
                    Italian cuisine experience."
            />
        </div>
    );
};

export default Home;

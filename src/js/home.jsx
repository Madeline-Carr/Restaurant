import React from 'react';
import Header from './common/header';
import QuoteBanner from './common/quoteBanner';
import BigButton from './bigButton';

const Home = () => {
    return (
        <div>
            <Header />
            <QuoteBanner
                quote="Here at Cosimo’s we focus on providing you with an authentic
                    Italian cuisine experience."
                header="An Experience"
            />
            <BigButton message="View our Menu" />
        </div>
    );
};

export default Home;

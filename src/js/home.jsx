import React from 'react';
import Header from './common/header';
import QuoteBanner from './common/quoteBanner';
import BigButton from './bigButton';

const Home = () => {
    return (
        <div>
            <Header />
            <QuoteBanner
                header="An Experience"
                quote="Here at Cosimo’s we focus on providing you with an authentic
                    Italian cuisine experience."
            />
            <BigButton message="View our Menu" link="/menu" />
        </div>
    );
};

export default Home;

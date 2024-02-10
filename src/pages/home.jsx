import React from 'react';
import HomeHeader from '../components/homeHeader/homeHeader';
import HomeContent from '../components/homeContent/homeContent';
import {useState} from 'react';

const Home = () => {

    const [samira, setsamira] = useState(false);


    const addSamira = () => {
        setsamira(true);
    }

    const khelasnaMnSamira = () => {
        setsamira(false);
    }

    return (
        <div>
         <HomeHeader addSamira={addSamira} />
        <HomeContent samira={samira}  khelasnaMnSamira={khelasnaMnSamira} />
        </div>
    );
}

export default Home;

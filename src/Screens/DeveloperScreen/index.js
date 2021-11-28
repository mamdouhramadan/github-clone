import React, { useState } from 'react'
import DeveloperCard from '../../Components/DevelopersCard'
import './DeveloperScreen.css';
// import { SampleData } from './../../Util/Data';
import githubTrends from 'github-trends-api';
import { useEffect } from 'react';
import Loader from '../../Components/Loader.js';

export default function DeveloperScreen({ date, language }) {

    const [developers, setDevelopers] = useState([])

    useEffect(() => {
        githubTrends({ section: 'developers', since:  'monthly'})
            .then(result => {
                setDevelopers(result)
                console.log(result)
            })
            .catch(error => {
                console.log('Error: ', error)
            })
    }, [date,language])

    return (

        <div className="developers__page">
            {
                developers.length > 0 ?
                    developers.map((deveeloper, index) => <DeveloperCard index={index+1} developer={deveeloper} />)
                    : <Loader />
            }

        </div>
    )
}

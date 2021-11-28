import React, { useState } from 'react'
import RepoCard from '../../Components/RepoCard'
import './HomeScreen.css';
import { useEffect } from 'react';
import githubTrends from 'github-trends-api';
import Loader from '../../Components/Loader.js';

export default function HomeScreen() {

    const [repositories, setRepositories] = useState([])



    useEffect(() => {
        githubTrends({ since: 'weekly' })
            .then(result => {
                setRepositories(result)
                console.log('result', result)
            })
            .catch(error => {
                console.log('Error: ', error)
            })
    }, [])


    return (

        <div className="home__page">
            <div className="panel__body">
                {repositories.length > 0 ? repositories.map((item, index) => <RepoCard key={index} repo={item} />)
                    : <Loader />
                }
            </div>
            {/* end panel__body */}
        </div>

    )
}

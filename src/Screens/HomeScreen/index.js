import React from 'react'
import RepoCard from '../../Components/RepoCard'
import './HomeScreen.css';

export default function HomeScreen() {
    return (

        <div className="home__page">
            <div className="panel__body">
                <RepoCard />
                <RepoCard />
                <RepoCard />
                <RepoCard />
            </div>
            {/* end panel__body */}
        </div>

    )
}

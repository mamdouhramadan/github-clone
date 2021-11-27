import React from 'react'
import DeveloperCard from '../../Components/DevelopersCard'
import './DeveloperScreen.css';
import { SampleData } from './../../Util/Data';

export default function DeveloperScreen() {
    return (
        <div className="developers__page">
            {

                SampleData.developerList.map((item, index) =>
                    <DeveloperCard
                        key={index}
                        index={index + 1}
                        name={item.name}
                        title={item.title}
                        avatar={item.avatar}
                        description={item.description}
                    />)

            }

        </div>
    )
}

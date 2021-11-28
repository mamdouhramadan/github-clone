import { MDBTooltip } from 'mdbreact'
import React from 'react'
// avatar: "https://avatars.githubusercontent.com/u/9440676?s=40&v=4"
// url: "https://github.com/davidrmiller"
// username: "davidrmiller"
export default function RepoUserList({ builtby }) {
    return (
        <ul className="repo__users__list">
            {
                builtby.map((item, index) =>
                    <li key={index}>
                        <a href={builtby?.url} >
                            <MDBTooltip domElement tag="span" placement="top">
                                <img
                                    alt={builtby.username}
                                    src={item?.avatar}
                                    className="repo__user__img"
                                />
                                <span>{item.username}</span>
                            </MDBTooltip>
                        </a>
                    </li>
                )
            }

        </ul>
    )
}

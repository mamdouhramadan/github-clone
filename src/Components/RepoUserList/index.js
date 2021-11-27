import React from 'react'

export default function RepoUserList() {
    const img_url = require('./../../Images/user-avatar.png').default;
    return (
        <ul className="repo__users__list">
            <li><img src={img_url} className="repo__user__img" alt="" /></li>
            <li><img src={img_url} className="repo__user__img" alt="" /></li>
            <li><img src={img_url} className="repo__user__img" alt="" /></li>
        </ul>
    )
}

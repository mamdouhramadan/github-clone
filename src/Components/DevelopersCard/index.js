import React from 'react';
import './DeveloperCard.css';

export default function DeveloperCard({ name, title, description, avatar, index }) {
    return (
        <div className="developer__card p-3">
            <div className="row justify-content-between">
                <div className="col-md-4 d-flex">
                    <span className="developer__order mt-2 mr-3">{index}</span>
                    <img
                        src={require(`./../../Images/${avatar}`).default}
                        className="developer__img"
                        alt=""
                    />
                    <div className="dveloper__info">
                        <h3 className="developer__name">{name}</h3>
                        <h4 className="developer__position">{title}</h4>
                    </div>
                </div>

                <div className="col-md-4">
                    <ul className="list-unstyled developer__detailes">
                        <li className="list-item text-uppercase">
                            <span className="iconify  mr-1 text-danger" data-icon="octicon:flame-24"></span>

                            Popular repo
                        </li>
                        <li className="list-item ">
                            <span className="iconify mr-2" data-icon="octicon:repo-16"></span>
                            SVU
                        </li>
                        <li className="list-item ">
                            <p className="m-0">
                                {description}
                            </p>
                        </li>

                    </ul>
                </div>

                <div classNam="col-md-4">
                    <button className="btn btn-primary"><i className="far fa-heart
 mr-2"></i>Favorite</button>
                    <button className="btn btn-primary">Follow</button>
                </div>
            </div>

        </div>
    )
}

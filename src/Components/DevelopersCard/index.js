import React from 'react';
import './DeveloperCard.css';

export default function DeveloperCard({ developer, index }) {
    return (
        <div className="developer__card p-3">
            <div className="row justify-content-between">
                <div className="col-md-4 col-8 d-flex">
                    <span className="developer__order mt-2 mr-3">{index}</span>
                    <img
                        src={developer.avatar}
                        className="developer__img"
                        alt=""
                    />
                    <div className="dveloper__info">
                        <h3 className="developer__name"><a href={developer.url}>{developer.author}</a></h3>
                        <h4 className="developer__position">{developer.username}</h4>
                    </div>
                </div>

                <div className="col-4 ">
                    <ul className="list-unstyled developer__detailes">
                        <li className="list-item text-uppercase">
                            <span className="iconify  mr-1 text-danger" data-icon="octicon:flame-24"></span>
                            Popular repo
                        </li>
                        <li className="list-item ">
                            <span className="iconify mr-2" data-icon="octicon:repo-16"></span>
                            <a href={developer.repourl}>{developer.reponame}</a>
                        </li>
                        <li className="list-item ">
                            <p className="m-0">
                                <a href={developer.repourl}>{developer.description}</a>

                            </p>
                        </li>

                    </ul>
                </div>

                <div className="col-md-4 col-12 btns-group">
                    <button className="btn btn-primary"><i className="far fa-heart
 mr-2"></i>Favorite</button>
                    <button className="btn btn-primary">Follow</button>
                </div>
            </div>

        </div>
    )
}

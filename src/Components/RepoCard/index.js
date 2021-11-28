import React from 'react'
import { numberWithCommas } from '../../Util/Functions';
import RepoUserList from '../RepoUserList'
import './RepoCard.css';

export default function RepoCard({ repo }) {
    return (
        <div className="repo__card border p-3">
            <div className="row justify-content-between">
                <div className="col-md-9 col-12">

                    <h3 className="repo__title d-flex align-items-center">
                        <span className="icon iconify" data-icon="octicon:repo-16"></span>
                        <a href={repo.repourl} className="mx-2">{repo.reponame}</a>
                    </h3>
                    <p className="repo__content">{repo.repodesc}</p>

                    <ul className="repo__info list-unstyled d-flex">
                        <li className="info__lang">{repo.language}</li>
                        <li className="info__stars"><i className="icon far fa-star fa-fw mx-2" ></i> <span>{numberWithCommas(repo.stars)}</span></li>
                        <li className="info__forks"><i className="icon fas fa-code-branch mx-2"></i> <span>{numberWithCommas(repo.forks)}</span></li>
                        <li className="info__built">Built By: <RepoUserList builtby={repo.builtby} /> </li>
                    </ul>
                </div>
                <div className="col-md-3 col-12">
                    <ul className="card__actions d-flex h-100">
                        <li><button className="btn btn-default"><i className="far fa-star mr-2"></i>Start</button></li>
                        <li><i className="far fa-star m-1"></i>Start {numberWithCommas(repo.laststars)} stars today </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

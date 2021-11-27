import React from 'react'
import RepoUserList from '../RepoUserList'
import './RepoCard.css';

export default function RepoCard() {
    return (
        <div className="repo__card border p-3">
            <div className="row justify-content-between">
                <div className="col-md-9 col-12">

                    <h3 className="repo__title d-flex align-items-center">
                        <span className="icon iconify" data-icon="octicon:repo-16"></span>
                        <span className="mx-2">welcome repooooo</span>
                    </h3>
                    <p className="repo__content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et lacinia orci. Aenean elementum cursus tortor sed congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur tincidunt nunc nec tellus lacinia gravida. Ut at justo vitae ex vestibulum ullamcorper. In hac habitasse platea dictumst. Aenean bibendum, ipsum sit amet venenatis tempor, velit eros bibendum neque, quis ultrices velit est vitae erat. Ut vitae metus metus. Suspendisse pretium vitae ex ut faucibus. Sed risus urna, mattis id velit eget, commodo laoreet nisi. Mauris dignissim quam velit, vitae lacinia eros fermentum eget. Proin porta, justo ac dignissim vulputate, erat tellus vehicula erat, sit amet auctor velit dui quis ex. Nulla blandit turpis quis eros gravida pellentesque. Vestibulum sapien erat, mollis et ex in, vestibulum bibendum sem.
                    </p>

                    <ul className="repo__info list-unstyled d-flex">
                        <li className="info__lang">Python</li>
                        <li className="info__stars"><i className="icon far fa-star fa-fw mx-2" ></i> <span>2548</span></li>
                        <li className="info__forks"><i className="icon fas fa-code-branch mx-2"></i> <span>1452</span></li>
                        <li className="info__built">Built By: <RepoUserList /> </li>
                    </ul>
                </div>
                <div className="col-md-3 col-12">
                    <ul className="card__actions d-flex h-100">
                        <li><button className="btn btn-default"><i className="far fa-star mr-2"></i>Start</button></li>
                        <li><i className="far fa-star m-1"></i>Start 222 stars today </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

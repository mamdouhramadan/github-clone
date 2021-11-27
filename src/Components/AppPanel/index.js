import React from 'react';
import './AppPanel.css';
import { SampleData } from './../../Util/Data';
import { NavLink } from 'react-router-dom';

export default function AppPanel({ children }) {
    return (
        <div className="panel py-5">
            <div className="panel__header p-3">
                <div className="d-flex justify-content-between align-items-center">

                    <div className="panel__navigation">
                        <ul className="list-unstyled m-0 d-flex">
                            <li className="list-item">
                                <NavLink activeClassName="selected" to="/">Reprosetry</NavLink>
                            </li>
                            <li className="list-item">
                                <NavLink activeClassName="selected" to="/developers">Developers</NavLink>
                            </li>

                        </ul>
                    </div>
                    {/* end panel__navigation */}

                    <div className="panel__filters d-flex">
                        {
                            SampleData.filter.map((item, index) => {
                                return (
                                    <div key={index} className="form-group m-0">
                                        <label>{item?.label}</label>
                                        <select className="form-control">
                                            {item?.data.map((item, index) =>
                                                <option key={index} value={item.value.toString()}  >{item.text}</option>
                                            )}
                                        </select>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* end panel__filters */}

                </div>

            </div>
            {/* end panel__header */}

            {children}

        </div>
    )
}

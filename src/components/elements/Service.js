import React from 'react'
import { Link } from 'react-router-dom'

const Service = (props) => (
    <li className="column is-one-third">
        <div className="service">
            <Link to={props.route}>
                <div className="service-icon">
                    <span className="service-icon-background">
                        <i className={`${props.icon}`}></i>
                    </span>
                </div>
                <div className="service-name">{props.name}</div>
                <div className="service-description">{props.description}</div>
            </Link>
        </div>
    </li>
)

export default Service
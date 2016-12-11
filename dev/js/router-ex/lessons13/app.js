import React, {Component} from 'react';
import NavLink from './navLink';

//require('../../../scss/style.scss');

export default class App extends Component {

    render() {
        //console.log(this.props.children);

        return (
            <div>
                <h2>React Router Tutorial</h2>
                <ul role="nav">
                    <li>
                        <NavLink to="/" onlyActiveOnIndex>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/repos">Repos</NavLink>
                    </li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}


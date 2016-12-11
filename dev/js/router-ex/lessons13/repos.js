import React from 'react';
import NavLink from './navLink';

//as if this.props.children != null, show children-tag (Repo)
//format /repos/repo/:userName/:repoName...
export default React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },
    handleSubmit(event){
        event.preventDefault();

        const userName = event.target.elements[0].value;
        const repo = event.target.elements[1].value;

        //set path to router -> '/repos/repo/userName/repoName'
        const path = `/repos/repo/${userName}/${repo}`;

        this.context.router.push(path);

    },
    render(){
        return (

            <div>
                <h2>Repos</h2>
                <ul>
                    <li>
                        <NavLink to="/repos/repo/reactjs/react-router">React-Router</NavLink>
                    </li>
                    <li>
                        <NavLink to="/repos/repo/facebook/react">React</NavLink>
                    </li>
                    <li>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="userName"/>{' '}
                            <input type="text" placeholder="repoName"/>{' '}
                            <button type="submit">Go</button>
                        </form>
                        {this.props.children}
                    </li>
                </ul>
            </div>)
    }
});
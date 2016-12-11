import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import App from './app';
import About from './about';
import Repos from './repos';
import Repo from './repo';

//insert IndexRoute..to resolve default path (this.props.children null...)
import Home from './home';


//[write code type2..]
export default class Entry extends React.Component {

    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="repos" component={Repos}>
                        <Route path="repo/:userName/:repoName" component={Repo}/>
                    </Route>
                    <Route path="about" component={About}/>
                </Route>
            </Router>
        );
    }
}

//*UserName -> {userName:${p1} ; repoName -> repoName:${p2}
//get params.. ex./repos/:userName/:repoName -> this.props.params.repoName...
//                                           -> this.props.params.userName...

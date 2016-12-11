Router use-note...

(1) import {Router,Route,hashHistory,IndexRoute} from 'react-router'

(2) import page for your own use..
  
  PageTree like this...
  
  Layer1:
  -App
  
  Layer2:
    -Home (defualt page)  
    -Repos
      Layer3:
      -repo
    -About
   
(3) register Routers code..

  index.js
  
  1.broswer default-path - https://localhost:3000/
  
  2.IndexRoute means - default path will show page 'App' match 'Home'
  
  3.direct path - ex. as directing to 'Repo' page, it use the path '/locaclhost:3000/repos/repo/{userName}/{repoName}'
  
    *{userName} & {repoName} mean 'any-word that you want'
  
  <Router history = {hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="repos" component={Repos}>
        <Route path="repo/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="about" component={About}/>
    </Route>
  </Router>
  
(4) use NavLink to direct path
  
  NavLink.js
  
    import {Link} from 'react-router'
  
    <Link {...this.props activeClassName='actives'/>
  
  *activeClassName means when you clicked the Link (defined your own css)
    
  app.js
   
    <div>
      <h2> React Router Tutorial </h2>
      <ul role='nav'>
        <li>
          <NavLink to="/" onlyActiveOnIndex>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" >About</NavLink>
        </li>
        <li>
          <NavLink to="/repos" >Repos</NavLink>
        </li>
      </ul>
      {this.props.children}
    </div>
    
  * props for 'to' match 'index.js props 'path'
  
  * //{this.props.children} means that shows page what you direct to ...
  

(5) extra use ..(set custom path..)
  
  repos.js
  
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
                            <NavLink to="/repos/repo/reactjs/react-router">React-Router</NavLink> //*note1
                        </li>
                        <li>
                            <NavLink to="/repos/repo/facebook/react">React</NavLink> //*note2
                        </li>
                        <li>
                            <form onSubmit={this.handleSubmit}> //*note3
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
   
  
  *note1- means redirect to path /repos/repo, and it alaways past two params 'reactjs' & 'react-router'
  *note2- the same as two params 'facebook' & 'react'
  *note3- handleSubmit -> trigger handleSubmit(event) and set path what path you click submit button...
  
  repo.js
  
  
  
  
  
  
    
  

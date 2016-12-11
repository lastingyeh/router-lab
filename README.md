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
  
  
  
  
    
  

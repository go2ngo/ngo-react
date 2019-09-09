import React, {Component} from 'react'
import Menu from './Menu'
import Blog from './Blog'
import Home from './Home'
import {Route, Switch} from 'react-router-dom'

class App extends Component{
    render(){
        return(
            <div>
                <Menu/>
                    <Switch>
                        <Route path='/blog' component={Blog} />
                        <Route exact path='/' component={Home} />
                    </Switch>
            </div>
            
        )
    }
}

export default App
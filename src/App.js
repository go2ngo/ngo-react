import React, {Component} from 'react'
import Menu from './Menu'
import Carousels from './Carousels'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionTwoB from './SectionTwoB'
import SectionFour from './SectionFour'

class App extends Component{
    render(){
        return(
            <div>
                <Menu/>
                <br/>
                <div>
                    <Carousels/>
                </div>
                <br/>
                <div  style={{color:"green", textTransform:"uppercase", textAlign:"center"}}>
                    <SectionTwo/>  
                </div>
                <br/>
                <div style={{color:"lightgreen", textTransform:"lowercase", textAlign:"center"}}>
                    <SectionThree/>
                </div>
                <div>
                    <h2>Fucking Awesome</h2>
                    <SectionTwoB/> 
                </div>
                <br/>
                <div>
                    <SectionFour/>
                </div>
                
            </div>
            
        )
    }
}

export default App
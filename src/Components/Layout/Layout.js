import React, {Component, Fragment} from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    //need to manage some state here
    //showSideDrawer: manages whether it is visible or not

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    //a method that that handles
    // using arrow function so that inside this method "this" keyword always refer to "this" in Layout class

    render() {
        return (
            <Fragment>
                <Toolbar/>
                <SideDrawer open={this.state.showSideDrawer}  closed={this.sideDrawerClosedHandler}/>
                {/*pass this event handler method to the SideDrawer
                now we have to use this closed property in the sidedrawer
                simply pass it on to the Backdrop in SideDrawer.js where i have this clicked property
                when will simply pass me the onClick event
                */}
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
}


export default Layout;
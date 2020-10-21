import React, {Component, Fragment} from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    //need to manage some state here
    //showSideDrawer: manages whether it is visible or not

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
        console.log("aaaa");
    }
    //a method that that handles
    // using arrow function so that inside this method "this" keyword always refer to "this" in Layout class

    sideDrawerToggleHandler = () => {
        this.setState((prevState) =>
        {
            console.log("dddd");
            return { showSideDrawer: !prevState.showSideDrawer };

        });
        //this way has a flaw: this.setState({showSideDrawer: !this.stae.showSideDrawer});
    }

    render() {
        return (
            <Fragment>
                <Toolbar drawerToggleClicked={() => this.sideDrawerToggleHandler()}/>
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
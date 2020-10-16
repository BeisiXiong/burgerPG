import React, {Fragment} from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';


const sideDrawer = (props) => {
    //not JXS code immediately, but w/ a real function body
    //bc bf I return JXS code, i want to do sth (i.e. conditionally
    // attach diff css classes to make sure we play some animation when the drawer is shown, i.e.
    //add an open class which slides it in, close class slides it out

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    //if you click the backdrop, it disappears, it should also disappear the sidedrawer
    // we need to conditionally attch the Open and Close css classes
    // before I return JXS, we create a variable attachedClaases and
    // pass it on to the div below " <div className={attachedClasses.join(' ')}>"


    return (
        <Fragment>
        <Backdrop show={props.open} clicked={props.closed}/>
        {/*set up this chain where i pass down the method reference to the place
         where I handle the click in the end

         show should also be bounded, the open handles the show to open state
         */}
        <div className={attachedClasses.join(' ')}>

            <div className={classes.Logo}>
              <Logo/>
            </div>

            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Fragment>
    );
};

export default sideDrawer;
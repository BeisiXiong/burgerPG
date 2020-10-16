import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label} </div>  {/*name of the ingredients*/}
        <button className={classes.Less}
                onClick={props.removed}
                disabled={props.disabled}>Less</button>  {/*remove ingredients*/}
                {/*disbaled is a default property we can set on a html element */}
        <button
            className={classes.More}
            onClick={props.added}>More</button> {/*add ingredients*/}
    </div>

);

export default buildControl;
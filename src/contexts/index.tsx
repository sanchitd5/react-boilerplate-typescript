import React from 'react';


export const ContextManager = (props: { children: JSX.Element }) => {
    return (<div>
        {props.children}
    </div>);
}

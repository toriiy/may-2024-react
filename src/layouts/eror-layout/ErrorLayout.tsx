import React from 'react';
import './ErorLayout.css'

const ErrorLayout = () => {
    return (
        <div className={'errorDiv'}>
            <h1>404 Not Found</h1>
            <h3>This url does not exist.</h3>
            <img
                src="https://thumbs.dreamstime.com/b/eror-sad-man-holding-broken-wire-having-trouble-accessing-internet-site-eror-sad-man-holding-broken-wire-hands-270054571.jpg"
                alt="eror-img"/>
        </div>
    );
};

export default ErrorLayout;
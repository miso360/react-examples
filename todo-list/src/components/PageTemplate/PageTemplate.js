import React from 'react';

const PageTemplate = ({children}) => {
    return (
        <div>
            <h1>TODO-LIST</h1>
            <div>
                {children}
            </div>
        </div>
    );
};

export default PageTemplate;
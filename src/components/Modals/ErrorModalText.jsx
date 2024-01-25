import React from 'react';

function ErrorText() {
    const errorModalMessage = `It seems like an error has occured with the API call, for assistance contact one of the administrators of the website.`;

    return (
        <div>
            <h5>
                Hello there!
            </h5>
            <p>
                {errorModalMessage}
            </p>
        </div>
    );
}

export default ErrorText;
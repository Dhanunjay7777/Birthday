import React from 'react';

function Login() {
    return (
        <div className='full-height'>
            <div className="card">
                <img 
                    src="https://raw.githubusercontent.com/DenverCoder1/Responsive-Birthday-Card/main/birthday.svg" 
                    alt="birthday" 
                    className="birthday"
                />
                <div className="text">
                    <h1 style={{ color: 'purple' }}>Happy Birthday Lokeshwari</h1>

                    <p style={{ color: 'blues' }}>I hope you have a wonderful birthday</p>
                    <p style={{ color: 'green' }}>
                        Your presence has made my life richer and more vibrant. 
                        You have a way of making every day brighter and every challenge easier to face. 
                        Your wisdom and humor have been a source of comfort and inspiration to me, 
                        and I cherish all the memories we have created together.
                    </p>
                </div>
                <div className="space"></div>
            </div>
        </div>
    );
}

export default Login;

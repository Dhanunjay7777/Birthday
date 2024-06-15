import React from 'react';

function Login() {
    return (
        <div className='full-height'>
            <div className="card">
            <img src="https://i0.wp.com/www.eventstodayz.com/wp-content/uploads/2020/09/birthday-cake-gif-animation.gif" alt="birthday cake"/>
                {/* <img 
                    src="https://raw.githubusercontent.com/DenverCoder1/Responsive-Birthday-Card/main/birthday.svg" 
                    alt="birthday" 
                    className="birthday"
                /> */}
                <div className="text">
                    <h1 style={{ color: 'purple' }}>Happy Birthday Tanisha Chowdary</h1>

                    <p style={{ color: 'blues' }}>I hope you have a wonderful birthday</p>
                    <p style={{ color: 'green' }}>
                    From the moment you were born, you brought an immeasurable amount of joy and happiness into our lives. Watching you grow has been a journey filled with pride and endless cherished memories. Each year, you blossom more beautifully, and our love for you deepens beyond measure.
                    On your special day, we want you to know how much you mean to us. Your laughter is our music
                    </p>
                    
                </div>
                <div className="space"></div>
            </div>
        </div>
    );
}

export default Login;

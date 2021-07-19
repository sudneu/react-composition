import React from 'react';

import Input from '../../UIComponents/Input';

const Signin = props => {
    const {values, handleChange} = props;

    return (
        <div>
            <Input 
                InputType="email"
                InputId="email"
                InputName="email"
                InputPlaceholder="Enter your email"
                InputValue={values.email}
                InputChange={handleChange('email')}
                LabelName="Email"
            />
            <Input 
                InputType="password"
                InputId="pword"
                InputName="password"
                InputPlaceholder="Enter your password"
                InputValue={values.password}
                InputChange={handleChange('password')}
                LabelName="Password"
            />
        </div>
    );
}

export default Signin;
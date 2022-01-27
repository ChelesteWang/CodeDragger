import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

import './SignIn.css'


export default class SignIn extends React.Component{

    render(): React.ReactNode {
        return (
            <div>
                <div className="SignIn">
                    <img id="img_signin" src="http://tva1.sinaimg.cn/large/005BcTWDly1gyrdpm4u9bj30dw0opjtf.jpg" alt="" />

                    <div className='signin_text'>
                        <div className='title'>
                            We are CodeDragger
                        </div>
                        <div className='para'>
                            Welcome back!Login in to your account to view it!
                        </div>
                    </div>

                    <div className='signin_form'>
                        <Box component="form" noValidate  sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color='secondary'
                                sx={{ mt: 3, mb: 2, borderRadius: 10}}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                </Grid>
                                <Grid item >
                                    <Link href="#">
                                        {"Basic version"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                </div>
            </div>
        )
    }
}
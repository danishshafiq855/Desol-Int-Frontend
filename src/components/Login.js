import React, { useEffect, useState } from "react";

import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import { TextField, Button, styled, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import {useHistory, Redirect} from 'react-router-dom';

// actions
import UserActions from '../actions/UserAction.js'
import { Link } from "react-router-dom";



const Login = () => {
	const history = useHistory();

	const { register, handleSubmit, formState: {errors}} = useForm();

	const loginFormHandler = async(data) => {
		const res = await UserActions.authUser(data);
		setLocalStorage(res);

		if(res.status === 200){
			<Link to='/add-vehicle'/>
		}
	};

	const setLocalStorage = (res) => {
		localStorage.setItem('token', res.data.token);
		localStorage.setItem('userData', JSON.stringify(res.data));
	}

	return (
		<Container maxWidth="xs" align="center">
			<form onSubmit={handleSubmit(loginFormHandler)}>
				<Box mb={2}>
					<Typography>Login Form</Typography>
					<TextField
						// className={classes.field}
						id="userName"
						label="UserName"
						variant="standard"
						fullWidth
						autoFocus
						{...register("userName", { required: "Required" })}
						error={!!errors?.userName}
						helperText={errors?.userName ? errors.userName.message : null}
					/>
					<TextField
						// className={classes.field}
						id="password"
						label="Password"
						variant="standard"
						fullWidth
						autoFocus
						{...register("password", { required: "Required" })}
						error={!!errors.password}
						helperText={errors?.password ? errors.password.message : null}
					/>
				</Box>
				<Button variant="contained" type="submit">
					Login
				</Button>
			</form>
		</Container>
	);
};

export default Login;

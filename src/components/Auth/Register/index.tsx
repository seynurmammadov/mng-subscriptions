import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from "@material-ui/core/Link";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { IUser } from '../../../redux/interface/auth';
import { registerUser } from '../../../redux/actions/Auth';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import * as yup from 'yup';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const validationSchema = yup.object({
	email: yup.string().
  email('Enter a valid email').
  required('Email is required'),

	password: yup.string().
  min(8, 'Password should be of minimum 8 characters length').
  required('Password is required'),

  name: yup.string().
  min(4, 'Name should be of minimum 5 characters length').
  required('Name is required'),
  lastname: yup.string().
  min(4, 'Lastname should be of minimum 5 characters length').
  required('Lastname is required'),
  confirmPass: yup.string().
  min(4, 'Confirm password should be of minimum 5 characters length').
  required('Confirm password is required'),

});

export default function Register() {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
      name: "",
      confirmPass: "",
      lastname: ""
      
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	const classes = useStyles();

	const [confirmPass, setConfirmPass] = React.useState('');
	const [formState, setFormState] = React.useState<IUser>({
		email: '',
		name: '',
		surname: '',
		password: '',
		// createdAt: Date.now(),
		phone: '0777777777',
	});

	const dispatch = useDispatch();

	const handleFormChange = React.useCallback(
		(evt: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = evt.target;
			setFormState((prevState) => ({
				...prevState,
				[name]: value,
			}));
			console.log(name, value);
			console.log(formState);
			formik.handleChange(evt);
		},
		[setFormState, formState]
	);

	const handleSubmit = React.useCallback(
		(e: React.FormEvent) => {
			e.preventDefault();
			formik.handleSubmit();
			console.log(formState.password, confirmPass);

			if (confirmPass === formState.password) {
				console.log('true');
			} else {
				console.log('false');
			}
			// if (formState.email && formState.password) {
			registerUser(formState)(dispatch);
			// }
			formik.handleSubmit();
		},
		[formState, confirmPass]
	);
	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form className={classes.form} onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete="fname"
								name="name"
								variant="outlined"
								required
								fullWidth
								id="firstName"
								label="First Name"
								autoFocus
								onChange={handleFormChange}

                value={formik.values.name}
								error={formik.touched.name && Boolean(formik.errors.name)}
								helperText={formik.touched.name && formik.errors.name}

							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="surname"
								label="Last Name"
								name="lastname"
								autoComplete="lastname"
								onChange={handleFormChange}

                value={formik.values.lastname}
								error={formik.touched.lastname && Boolean(formik.errors.lastname)}
								helperText={formik.touched.lastname && formik.errors.lastname}



							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								onChange={handleFormChange}
								value={formik.values.email}
								error={formik.touched.email && Boolean(formik.errors.email)}
								helperText={formik.touched.email && formik.errors.email}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								onChange={handleFormChange}
								value={formik.values.password}
								
								error={formik.touched.password && Boolean(formik.errors.password)}
								helperText={formik.touched.password && formik.errors.password}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="confirmPass"
								label="Confirm Password"
								type="password"
								id="Confirm Password"
								autoComplete="current-password"
								// onChange={(e) => setConfirmPass(e.target.value)}
                onChange={handleFormChange}
                value={formik.values.confirmPass}
								
								error={formik.touched.confirmPass && Boolean(formik.errors.confirmPass)}
								helperText={formik.touched.confirmPass && formik.errors.confirmPass}
                
							/>
						</Grid>
						<Grid item xs={12}>
							{/* <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                >
                  <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem>
                  <MenuItem value={30}>Other</MenuItem>
                </Select>
              </FormControl> */}
						</Grid>
					</Grid>
					<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
						Sign Up
					</Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link to="/login">Already have an account? Sign in</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}

import React, {useState} from 'react'
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import { TextField, Button, styled, Box, Select, MenuItem } from "@mui/material";
import { useForm } from "react-hook-form";

const AddVehicle = () => {

    const [imageUploadCount, setImageUploadCount] = useState();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const vehicleFormHandler = () => {};


    const selectChangeHandler = (event) => {
        event.preventDefault();
        setImageUploadCount(event.target.value)
    }

	return (
		<Container maxWidth="xs" align="center">
			<form onSubmit={handleSubmit(vehicleFormHandler)}>
				<Box mb={2}>
					<TextField
						id="name"
						label="Name"
						variant="standard"
						fullWidth
						autoFocus
						{...register("name", { required: "Required" })}
						error={!!errors?.name}
						helperText={errors?.Name ? errors.name.message : null}
					/>
					<TextField
						id="email"
						label="Email"
						variant="standard"
						fullWidth
						autoFocus
						{...register("email", { required: "Required" })}
						error={!!errors?.email}
						helperText={errors?.email ? errors.email.message : null}
					/>
					<TextField
						id="phoneNo"
						label="Phone No"
						variant="standard"
						fullWidth
						autoFocus
						{...register("phoneNo", { required: "Required" })}
						error={!!errors.phoneNo}
						helperText={errors?.phoneNo ? errors.phoneNo.message : null}
					/>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						
						label="Select"
						onChange={selectChangeHandler}
					>
						<MenuItem value={1}>1</MenuItem>
						<MenuItem value={2}>2</MenuItem>
						<MenuItem value={3}>3</MenuItem>
					</Select>


                    {imageUploadCount?.length?.map(() => {
                        return (
                            <input type='file' accept="/*,.png,.jpg,.jpeg,.gif"/>
                        )
                    })}
				</Box>
				<Button variant="contained" type="submit">
					Submit
				</Button>
			</form>
		</Container>
	);
};

export default AddVehicle;

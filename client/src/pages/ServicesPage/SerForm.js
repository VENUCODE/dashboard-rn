import React, { useState } from 'react';
import { Grid,Container,TextField, Typography,Button,Alert,Snackbar} from '@mui/material';

export default function SerForm()
{

const [FormData,setformData]=useState({name:'',desc:'',category:'',price:'',provider:'',mobile:'',location:''});

const handleChange = (event) => {
    const {name,value}=event.target;
    setformData((prev)=>({...prev,[name]:value}));
};

const handleSubmit=(e)=>
    {

        if(FormData.name || FormData.desc || FormData.category || FormData.location || FormData.price || FormData.provider || FormData.mobile){
          
        
            

        }
    }
return(

<>

<Container maxWidth="sm">
<Typography variant="h5" gutterBottom>
    Upload Service
</Typography>
<form onSubmit={handleSubmit}>
<Grid container spacing={4}>


<Grid item sm={6}>
<TextField 

required
fullWidth
label="Service Name"
name='name'
value={FormData.name}
onChange={handleChange}
variant="outlined"

/>
</Grid>


<Grid item sm={6}>
<TextField 

required
fullWidth
label="Category"
name='category'
value={FormData.category}
onChange={handleChange}
variant="outlined"

/>
</Grid>



<Grid item sm={6}>
<TextField 

required
fullWidth
label="Price"
name='price'
value={FormData.price}
onChange={handleChange}
variant="outlined"

/>
</Grid>
<Grid item sm={6}>
<TextField 

required
fullWidth
label="Provider"
name='provider'
value={FormData.provider}
onChange={handleChange}
variant="outlined"

/>
</Grid>

<Grid item sm={6}>
<TextField 

required
fullWidth
label="Mobile"
name='mobile'
value={FormData.mobile}
onChange={handleChange}
variant="outlined"

/>
</Grid>



<Grid item sm={6}>
<TextField 

required
fullWidth
label="Location"
name='location'
value={FormData.location}
onChange={handleChange}
variant="outlined"

/>
</Grid>
<Grid item xs={12}>
<TextField 
multiline
rows={4}
required
fullWidth
label="Description"
name='desc'
value={FormData.desc}
onChange={handleChange}
variant="outlined"

/>
</Grid>


<Grid item xs={12}>
        <Button type="submit" fullWidth variant="contained" color="primary">
            Upload Service
        </Button>
 </Grid>

</Grid>
</form>
</Container>


</>

);





}
import React, { useEffect, useState } from "react";
import {Box,Paper,Select,MenuItem,Typography, Grid,InputLabel,FormControl, TextField,Button, Icon, Avatar, ListItem, ListItemAvatar, ListItemText} from '@mui/material'
import image from './5867.jpg'
import { Container } from "@mui/system";
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import DeleteIcon from '@mui/icons-material/Delete';


function Form()
{

    let [obj,setObj] = useState({}) 
    let [mainArr,setMainArr] = useState(JSON.parse(localStorage.getItem("mainArr")) || [])
    let [expenseArr,setExpenseArr] = useState(["Bills","Cars","Clothes","Travel","Food","Shopping","House","Entertainment","Phone","Pets","Other"])
    let [incomeArr,setIncomeArr] = useState(["Business","Investments","Extra income","Deposits","Lottery","Gifts","Salary","Savings","Rental income"])
    
    useEffect(() => {
        localStorage.setItem("mainArr",JSON.stringify(mainArr))
    }, [mainArr])
    
    const handleClick = () =>
    {
        setMainArr([obj,...mainArr])
       
    }
    console.log(mainArr)

    const handleDelete = (ind) =>
    {
        mainArr.splice(ind,1)
        setMainArr([...mainArr])
    }
    console.log(obj)
    
    return (
        <Container>
            <Box  sx={{ display: 'flex',justifyContent:'center', flexWrap: 'wrap','& > :not(style)': {m: 19,width: 600,height: 500,}}}>
                <Paper elevation={3} sx={{padding:'1.5rem'}}>
                    <Typography sx={{fontSize:'1.5rem'}}>Expense Tracker</Typography>
                    <Typography className='p-3 text-center'  sx={{fontSize:'1.5rem'}}>Total Balance Rs 1000</Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <FormControl variant="standard" sx={{width:'17rem'}}>
                            <InputLabel id="demo-simple-select-standard-label" sx={{fontSize:'16px'}}> Type </InputLabel>
                                    
                            <Select
                                value={obj.type || ''}
                                onChange={(e)=>setObj({...obj,type:e.target.value})}
                                label="type"
                                fullWidth
                            >
                                <MenuItem value="Income"> Income </MenuItem>
                                <MenuItem value="Expense"> Expense </MenuItem>
                                
                            </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={6}>
                            <FormControl variant="standard" sx={{width:'17rem'}}>
                                <InputLabel id="demo-simple-select-standard-label" sx={{fontSize:'16px'}}> Category </InputLabel>
                                        
                                <Select
                                    value={obj.category || ''}
                                    onChange={(e)=>setObj({...obj,category:e.target.value})}
                                    variant="standard"
                                    label="type"
                                    fullWidth
                                >
                                { obj.type == "Income" ? incomeArr.map((item,ind) =>
                                        <MenuItem key={ind} value={item}> {item} </MenuItem>
                                    )
                                    : expenseArr.map((item,ind)=>
                                        <MenuItem key={ind} value={item}> {item} </MenuItem>
                                    )
                                }
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={6}>
                            <FormControl sx={{width:'17rem'}}>
                                <TextField
                                    value={obj.amount || ''}
                                    onChange={(e)=>setObj({...obj,amount:e.target.value})}
                                    label="Amount"
                                    type="number"
                                    variant="standard" 
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={6}>
                            <FormControl sx={{width:'17rem',pt:2}}>
                            <TextField
                                variant="standard"
                                id="date"
                                type="date"
                                value={obj.date || ''}
                                onChange={(e)=> setObj({...obj,date:e.target.value})}
                               
                            />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl sx={{width:'35rem',pt:4,color:'purple'}}>
                                <Button id="MuiButton-outlinedPrimary" onClick={handleClick} variant="outlined"> Create </Button>
                            </FormControl>
                        </Grid>
                    
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <div style={{overflowY:'scroll',height:'9rem',marginTop:'1rem'}}>
                            { mainArr.length!=0 && mainArr.map((item,ind)=>
                                
                                    <ListItem key={ind} style={{display:'flex',flexDirection:'row'}}> 

                                        <ListItemAvatar>
                                            <Avatar sx={{backgroundColor: item.type=='Income' ? '#4caf50' : '#f44336'}}>
                                                <MoneyOffIcon sx={{color:"white"}}/> 
                                            </Avatar>
                                        </ListItemAvatar>
                                        
                                        <ListItemText style={{display:'flex',flexDirection:'column'}}>
                                            <Typography sx={{fontSize:'1rem'}}>
                                                    {item.category}
                                            </Typography>
                                            <Typography sx={{fontSize:'0.875rem',color:'rgba(0, 0, 0, 0.54)'}}>
                                                    Rs.{item.amount} - {item.date}
                                            </Typography>
                                            
                                        </ListItemText>
                                        <DeleteIcon style={{cursor:'pointer'}} color="action" onClick={()=>handleDelete(ind)}/>
                                    </ListItem>
                            )}
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
    
            </Box>
        </Container>
    )
}   

export default Form;
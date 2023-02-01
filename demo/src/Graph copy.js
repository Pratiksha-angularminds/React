import { Box, Container, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Graph()
{
    let [amount,setAmount] = useState(0)
    let [mainArr,setMainArr] = useState(JSON.parse(localStorage.getItem("mainArr")) || [])
    mainArr.map(item => {
        amount+= Number(item.amount)
    })
   
    console.log(mainArr)

    const data = {  
        labels: mainArr.map(item => item.category),
        datasets: [
          {
            data: mainArr.map(item => item.amount),
            backgroundColor: ["#006400", "#2E8B57", "#228B22","#32CD32","#6B8E23","#ADFF2F","#7CFC00","#3CB371","#90EE90"],
            borderWidth: 2
          }
        ]
    };

    return(
        <Container>
            <Box  sx={{ display: 'flex',justifyContent:'center', flexWrap: 'wrap','& > :not(style)': {m: 16}}}>
                <Paper elevation={3} sx={{padding:'2rem'}}>
                    <Typography sx={{fontSize:'1.5rem'}}> Income </Typography>
                    <Typography className='p-3 text-center' sx={{fontSize:'1.5rem'}}> Rs.{amount}</Typography>
                    <Doughnut data={data} height={200} width={400}/>
                </Paper>
            </Box>
        </Container>
    )
}

export default Graph
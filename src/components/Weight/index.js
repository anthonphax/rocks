import React from "react";
import { Grid, Card, CardContent, Box, Typography, CardActions, Button } from "@mui/material";
import { Line } from "react-chartjs-2";
import { volume } from '../Chart/data';

const Weight = () =>  {
    const peso = 101.5;
    return  (
      <div>
        <Box sx={{ width: '100%', textAlign: 'center', display: 'flex' }}>
          <Grid>
            <Card>
              <CardContent >
              <Typography variant="h5" component="div">
               Peso Total
              </Typography>
              <Typography >
                {peso} Kgs
              </Typography>
              <Typography variant="body2">
                {Math.round(peso * 2.20462)} Lbs
              </Typography>
            </CardContent>
            </Card>
          </Grid>
        </Box>
        <Line   datasetIdKey='id'
                data={{
                  labels: ['30\'', '31\'', '32\'', '33\'', '34\''],
                  datasets: volume
                }}
                />
      </div>
    )
    }

export default Weight;

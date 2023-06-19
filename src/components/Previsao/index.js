import React from "react";
import { Grid, Card, CardContent, Box, Typography, CardActions, Button } from "@mui/material";

const Previsao = () =>  {
    const temperatura = 20;
    return  (
      <div>
        <Box sx={{ width: '100%' }}>
          <Grid>
            <Card>
              <CardContent >
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Boa noite!
              </Typography>
              <Typography variant="h5" component="div">
                Londrina
              </Typography>
              <Typography sx={{ fontSize: 28 }}>
                 { temperatura } ºC
              </Typography>
              <Typography variant="body2" color="text.secondary">
                { temperatura + 273.15 } ºK
              </Typography>
            </CardContent>
            </Card>
          </Grid>
        </Box>
      </div>
    )
    }

export default Previsao;

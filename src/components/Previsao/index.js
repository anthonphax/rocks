import React from "react";
import { Grid, Card, CardContent, Box, Typography, CardActions, Button } from "@mui/material";

const Previsao = () =>  {
    return  (
      <div>
        <Box sx={{ width: '100%' }}>
          <Grid>
            <Card>
              <CardContent >
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Bom dia!
              </Typography>
              <Typography variant="h5" component="div">
                Cidade
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                20 ºC
              </Typography>
              <Typography variant="body2">
                100 ºF
              </Typography>
            </CardContent>
            </Card>
          </Grid>
        </Box>
      </div>
    )
    }

export default Previsao;

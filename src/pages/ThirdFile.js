import { Box, Stack, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import AddWithCarasol from '../components/Card/CardForOurServics'
import image1 from '../assets/3rd Page/find-house.webp'
import image3 from '../assets/3rd Page/images.jpg'
import image2 from '../assets/3rd Page/search-records-34.png'

const ThirdFile = () => {
  return (
    <Box xs={12} sx={{ display: 'flex', flexDirection: 'column', color: '#000fff' }} >
      <Box xs={12} sx={{ height: '150px', backgroundImage: 'linear-gradient(to right, #ec77ab 0%, #7873f5 100%)' }} />

      <Box xs={12} sx={{
        height: '550px', display: 'flex',
        flexDirection:{xs:'column',sm:'row'}, justifyContent: 'space-evenly', alignItems: 'center'
      }}>
        <Box  sx={{
          display: 'flex',
          flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
        }}>
          <img src={image3} alt='Home' style={{ height: '60px', width: '80px', position: 'absolute' }} />
          <Paper elevation={24} sx={{ height: '80px', width: '200px', mt: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant='h5' >

              Need Room
            </Typography>
          </Paper>

        </Box>
        <Stack sx={{
          display: 'flex',
          flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        }}>
          <img src={image2} alt='Home' style={{ height: '60px', width: '80px', mt: '-80px', position: 'absolute' }} />
          <Paper elevation={24} sx={{ height: '80px', width: '200px', mt: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}  >
            <Typography variant='h5' >


              Have Room
            </Typography>
          </Paper>

        </Stack>


      </Box>
      <Box xs={12} >
        <AddWithCarasol smallcard={false} />
      </Box>
    </Box>
  )
}

export default ThirdFile
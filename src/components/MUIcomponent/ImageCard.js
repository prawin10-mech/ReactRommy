import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SingleCardCarousel from '../Card/SingleCardCarousel';
import { Paper } from '@mui/material';

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Paper sx={{ display: 'flex' }}>
      <SingleCardCarousel imageStyle={{width: "100%", height: "240px", borderRadius: '16px'}} boxStyle={{width: "400px", py: 1}} />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
       ghjguk7
      </Box>
      
    </Paper>
  );
}
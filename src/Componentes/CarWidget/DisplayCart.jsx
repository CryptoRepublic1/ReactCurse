
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { flexbox } from '@mui/system';
import { CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export const DisplayCart =  function() {
  return (
    
    <Card sx={{ minWidth: 275, display:flexbox}} >
      
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}




export const DisplayProducts =  function({nombre, desc, precio, id, img,}) {

  return (
 
    <Box component="div" sx={{ display: 'inline' }}>
      <Card sx={{ width: 250 , bgcolor:"primary.main", mr: 4, ml:6, mb:2}} >
      <CardMedia
        component="img"
        height="150"
        image="http://placehold.jp/150x150.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Productos en stock
        </Typography>
        <Typography variant="h5" component="div">
         {nombre}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {precio}
        </Typography>
        <Typography variant="body2">
          {desc}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">
        <Typography as={Link} to={`/detail/${id}`} color="text.secondary">Mas</Typography>
        
        </Button>
      </CardActions>
    </Card>
    </Box> 

    




  
      

  );










}


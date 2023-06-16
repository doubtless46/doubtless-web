import {Box,Typography} from '@mui/material'
interface Props{
      index: number;
      item:String;
      key:number;
}
const Navitems = (props: Props) => {
  return (
      <Box sx={{mx:'0.5em',my:'0.5em',"&:hover": {
        borderBottom:'1.5px solid #D3D3D3'
      }}} key={props.index}>
      {/* give divs id matching to the array name in the array above */}
     <Typography component="a" href={`${props.item}`} sx={{
      mx:'auto',
       textAlign:'center',
       mb:'1em',
       fontWeight: 700,
       letterSpacing: '.3rem',
       color: 'black',
       textDecoration: 'none',
       "&:hover":{
        color:'grey'
       }
     }}>
       {props.item}
     </Typography>
  </Box>
  )
}

export default Navitems
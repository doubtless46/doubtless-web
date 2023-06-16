import {Box,Typography} from '@mui/material'
interface Props{
      index: number;
      item:String;
      key:number;
}
const Navitems = (props: Props) => {
  return (
      <Box sx={{pl:'0.5em',"&:hover": {
        borderBottom:'2px solid black'
      }}} key={props.index}>
      {/* give divs id matching to the array name in the array above */}
     <Typography component="a" href={`${props.item}`} sx={{
      textAlign:'center',
       mr: 2,
       mb:'10',
       fontWeight: 700,
       letterSpacing: '.3rem',
       color: 'black',
       textDecoration: 'none',
     }}>
       {props.item}
     </Typography>
  </Box>
  )
}

export default Navitems
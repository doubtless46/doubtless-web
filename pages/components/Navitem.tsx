import {Box,Typography} from '@mui/material'
interface Props{
      index: number;
      item:String;
}
const Navitems = (props: Props) => {
  return (
      <Box sx={{ml:'0.5em'}} key={props.index}>
      {/* give divs id matching to the array name in the array above */}
     <Typography component="a" href={`#${props.item}`} sx={{
       mr: 2,
       display: { xs: 'none', md:'flex' },
       fontWeight: 700,
       letterSpacing: '.3rem',
       color: '#6b7280',
       textDecoration: 'none',
     }}>
       {props.item}
     </Typography>
  </Box>
  )
}

export default Navitems
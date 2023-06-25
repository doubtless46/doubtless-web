import { Button } from "@mui/material"
interface Props{
      content:String;
}
const ButtonComp = (props: Props) => {
  return (
    <Button sx={{ mx: "0.5em", bgcolor: "#9370DB",my:'10' }} variant="contained">
      {props.content}
    </Button>
  )
}

export default ButtonComp
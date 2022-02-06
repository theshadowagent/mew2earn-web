import { Button } from '@mui/material';

export const SkewedButton = (props) => {
    return <Button
        variant="contained"
        sx={{
            width: "210px",
        }}
        {...props}
    >
        <span className="unskew">{props.children}</span>
    </Button>
}

export default SkewedButton

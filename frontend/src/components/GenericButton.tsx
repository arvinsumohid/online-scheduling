import React from 'react'
import { Button } from '@mui/material'
import { SxProps, Theme } from '@mui/material/styles'
interface CustomButtonProps {
  label: string;
  onClick: () => void;
  sx?: SxProps<Theme>;
}

const GenericButton = ({ label, onClick, sx, ...props }: CustomButtonProps) => {
  return (
    <Button
      variant="contained"
      size="small"
      sx={{
        textTransform: "none",
        boxShadow: "none",
        fontSize: "0.875rem",
        ...sx,
      }}
      {...props}
      onClick={onClick}
    >
      {label}
    </Button>
  )
}

export default GenericButton
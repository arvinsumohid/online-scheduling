import React from 'react'
import { Box, Typography } from '@mui/material'

const TitleWithDescription = ({ title, description }: { title: string, description: string }) => {
  return (
    <Box className="text-center">
      <Typography variant="h5" fontWeight="bold" mb={1}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: "grey.600", mb: 3 }}>
        {description}
      </Typography>
    </Box>
  )
}

export default TitleWithDescription
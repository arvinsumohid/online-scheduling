import React, { memo } from 'react'
import { Box } from '@mui/material'
import HeaderLogo from './HeaderLogo'

const HeaderSideMenu = ({
    collapsed,
    isMobile,
}: {
    collapsed: boolean;
    isMobile: boolean;
}) => {
  return (
    <Box className="sidenav" sx={{ height: "50px" }}>
        <HeaderLogo collapsed={collapsed} isMobile={isMobile} />
    </Box>
  )
}

export default memo(HeaderSideMenu)
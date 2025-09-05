import { DeleteOutline } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Typography variant='h3' component={'h3'} gutterBottom>Next.js + MUI Playground</Typography>
      {/* Caption Typography is inline */}
      <Typography variant='caption'>Next.js + MUI Playground</Typography>
      <Typography variant='subtitle1'>Next.js + MUI Playground</Typography>
      <Typography variant='subtitle2'>Next.js + MUI Playground</Typography>
      <Typography variant='body1'>Next.js + MUI Playground</Typography>
      <Typography variant='body2 text-gray-400'>Next.js + MUI Playground</Typography>
      <Button startIcon={<DeleteOutline />} >Delete</Button>
    </div>
  )
}

export default HomePage
import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const outlinedCard = (title: string, content: string) => (
  <React.Fragment>
    <CardContent>
      <Typography variant='h4' component='div' sx={{ mt: 1, color: '#fd7901' }}>
        {title}
      </Typography>
      <Typography variant='body' component='div' sx={{ mt: 3 }}>
        {content}
      </Typography>
    </CardContent>
  </React.Fragment>
)

export default function OutlinedCard({
  title,
  content
}: {
  title: string
  content: string
}) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined'>{outlinedCard(title, content)}</Card>
    </Box>
  )
}

// ** React Import
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import { usePopper } from 'react-popper'

const BuyNowButton = () => {
  // ** States
  const [open, setOpen] = useState(false)
  const [popperElement, setPopperElement] = useState(null)
  const [referenceElement, setReferenceElement] = useState(null)

  const { styles, attributes, update } = usePopper(referenceElement, popperElement, {
    placement: 'top-end'
  })

  const handleOpen = () => {
    setOpen(true)
    update ? update() : null
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box
      className='upgrade-to-pro-button mui-fixed'
      sx={{ right: theme => theme.spacing(20), bottom: theme => theme.spacing(10), zIndex: 11, position: 'fixed' }}
    >
      <Button
        component='a'
        target='_blank'
        variant='contained'
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        ref={e => setReferenceElement(e)}
      
        sx={{
          backgroundColor: '#ff3e1d',
          boxShadow: '0 1px 20px 1px #ff3e1d',
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: '#e6381a'
          }
        }}
      >
        OTTOMON ADMIN
      </Button>
      <Fade in={open} timeout={700}>
        <Box
          style={styles.popper}
          ref={setPopperElement}
          {...attributes.popper}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          sx={{ pb: 4, minWidth: theme => (theme.breakpoints.down('sm') ? 400 : 300) }}
        >
          <Paper elevation={9} sx={{ borderRadius: 1, overflow: 'hidden' }}>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://themeselection.com/products/materio-mui-react-nextjs-admin-template/'
            >
              {/* <img width='100%' alt='materio-pro-banner' src='/images/misc/materio-pro-banner.png' /> */}
            </a>
            <CardContent>
              <Typography sx={{ mb: 4 }} variant='h6'>
              Welcome, Administrator! - OTTOMON ADMIN
              </Typography>
              <Typography sx={{ mb: 4 }} variant='body2'>
              We appreciate your hard work and dedication in managing the system
              </Typography>
              <Typography sx={{ mb: 4 }} variant='body2'>
                Click on below buttons to Reach your website to see changes
              </Typography>
              <Button
                component='a'
                sx={{ mr: 4 }}
                target='_blank'
                variant='contained'
                href='https://www.ottoman-bed.co.uk/collections/orthopaedic-collection/orthopaedic'
              >
                Visit
              </Button>
             
            </CardContent>
          </Paper>
        </Box>
      </Fade>
    </Box>
  )
}

export default BuyNowButton
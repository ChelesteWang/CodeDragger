import React, { useMemo } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import 'swiper/css'
import 'swiper/css/pagination'
import './index.css'

// import required modules
import { Pagination } from 'swiper'

export default () => {
  const authorList = useMemo(() => {
    return [
      {
        avatar: 'https://avatars.githubusercontent.com/u/63062575?s=40&v=4',
        name: 'lweijian',
        introduce:
          '  well meaning and kindly well meaning and kindly well meaning and kindly well meaning and kindly',
        github: 'https://github.com/lweijian'
      },
      {
        avatar: 'https://avatars.githubusercontent.com/u/63062575?s=40&v=4',
        name: 'lweijian',
        introduce:
          '  well meaning and kindly well meaning and kindly well meaning and kindly well meaning and kindly',
        github: 'https://github.com/lweijian'
      },
      {
        avatar: 'https://avatars.githubusercontent.com/u/63062575?s=40&v=4',
        name: 'lweijian',
        introduce:
          '  well meaning and kindly well meaning and kindly well meaning and kindly well meaning and kindly',
        github: 'https://github.com/lweijian'
      },
      {
        avatar: 'https://avatars.githubusercontent.com/u/63062575?s=40&v=4',
        name: 'lweijian',
        introduce:
          '  well meaning and kindly well meaning and kindly well meaning and kindly well meaning and kindly',
        github: 'https://github.com/lweijian'
      },
      {
        avatar: 'https://avatars.githubusercontent.com/u/63062575?s=40&v=4',
        name: 'lweijian',
        introduce:
          '  well meaning and kindly well meaning and kindly well meaning and kindly well meaning and kindly',
        github: 'https://github.com/lweijian'
      },
      {
        avatar: 'https://avatars.githubusercontent.com/u/63062575?s=40&v=4',
        name: 'lweijian',
        introduce:
          '  well meaning and kindly well meaning and kindly well meaning and kindly well meaning and kindly',
        github: 'https://github.com/lweijian'
      },
      {
        avatar: 'https://avatars.githubusercontent.com/u/63062575?s=40&v=4',
        name: 'lweijian',
        introduce:
          '  well meaning and kindly well meaning and kindly well meaning and kindly well meaning and kindly',
        github: 'https://github.com/lweijian'
      }
    ]
  }, [])
  return (
    <>
      <Swiper
        initialSlide={3}
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        centeredSlides={true}
        modules={[Pagination]}
        className='mySwiper'
      >
        {authorList.map((item) => (
          <SwiperSlide>
            <BasicCard
              avatar={item.avatar}
              name={item.name}
              introduce={item.introduce}
              github={item.github}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export function BasicCard(props: {
  avatar: string
  name: string
  introduce: string
  github: string
}) {
  const { avatar, name, introduce, github } = props
  return (
    <Card sx={{ width: 275 }}>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '10px'
          }}
        >
          <img
            style={{
              height: '40px',
              width: '40px',
              borderRadius: '50%'
            }}
            src={avatar}
            alt='avatar'
          />
        </Box>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {name}
        </Typography>
        <Typography variant='body2' sx={{ width: '80%', margin: '0 10%' }}>
          {introduce}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' href={github}>
          GITHUB
        </Button>
      </CardActions>
    </Card>
  )
}

import { Carousel } from 'zarm'

// const ITEMS = [
//   'https://static.zhongan.com/website/health/zarm/images/banners/1.png',
//   'https://static.zhongan.com/website/health/zarm/images/banners/2.png',
//   'https://static.zhongan.com/website/health/zarm/images/banners/3.png'
// ]

const contentRender = (items: string[]) => {
  return items.map((item, i) => {
    return (
      <div className='carousel__item__pic' key={+i}>
        <img src={item} alt='' draggable={false} />
      </div>
    )
  })
}

export default function ({ items }: { items: string[] }) {
  return (
    <Carousel
      onChange={(index) => {
        console.log(`onChange: ${index}`)
      }}
    >
      {contentRender(items)}
    </Carousel>
  )
}

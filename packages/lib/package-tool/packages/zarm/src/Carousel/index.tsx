import { Carousel } from 'zarm'

const contentRender = (items: string[]) => {
  return items.map((item, i) => {
    return (
      <div className='carousel__item__pic' key={+i}>
        <img src={item} width='100%' alt='' draggable={false} />
      </div>
    )
  })
}

export default function ({ images, style }: { images: string[], style: any }) {
  return (
    <Carousel
      onChange={(index) => {
        console.log(`onChange: ${index}`)
      }}
      style={{
        ...style,
        width: '100%',
        height: '100%',
      }}
    >
      {contentRender(images)}
    </Carousel>
  )
}

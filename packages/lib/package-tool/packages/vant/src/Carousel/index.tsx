import { Image, Swiper } from 'react-vant'

export default ({ images }: { images: string[] }) => {
  return (
    <Swiper>
      {images.map((image) => (
        <Swiper.Item key={image}>
          <Image lazyload src={image} />
        </Swiper.Item>
      ))}
    </Swiper>
  )
}

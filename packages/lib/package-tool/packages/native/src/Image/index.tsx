const Image = ({ src, style }: { src: string, style: any }) => {
  return <img src={src} style={{ ...style, width: '100%', height: '100%' }} width="100%" height="100%" ></img>
}

export default Image

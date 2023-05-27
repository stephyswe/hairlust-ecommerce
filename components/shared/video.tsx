import cn from 'clsx'

export const Video = ({ className, src, ...props }: any) => (
  <video
    className={cn(className)}
    data-autoplay=""
    loop={true}
    muted={true}
    playsInline={true}
    data-expand="-10"
    autoPlay={true}
    {...props}
  >
    <source src={src} type="video/mp4" />
  </video>
)

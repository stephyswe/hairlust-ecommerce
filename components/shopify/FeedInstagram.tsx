import cn from 'clsx'
import { SvgIconInstagram } from '../icons'

const ImageInstagramSingleItem = (props: any) => (
  <img
    className={cn('js-lazy-image ', props.className)}
    style={{ width: '100%', height: '100%' }}
    data-src="https://scontent.cdninstagram.com/v/t51.2885-15/325386389_702928764521689_8631226130899789305_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=FgBhveH8l_wAX9mh8EV&amp;_nc_ht=scontent.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfCuWbNQk0vzEBnQM-MYufNDqb6LXE25XLcw3YjtEFl8Og&amp;oe=63C8AC74"
    alt='When the "Quick and easy haircare routine" Youtube video is over 50 minutes and not at all quick or  on Instagram'
    {...props}
  />
)

const InstagramImageProfile = () => (
  <>
    <img
      src="https://instafeed.nfcube.com/assets/img/logo-instagram-transparent.png"
      data-feed-id="insta-feed"
      className="profile-picture js-lazy-image"
      data-src="https://instafeed.nfcube.com/assets/img/logo-instagram-transparent.png"
      alt="instagram profile picture"
    />
    <object className="name-section">
      <a
        className="fullname"
        href="https://www.instagram.com/hairlust/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="fullname instafeed-text" data-feed-id="insta-feed">
          hairlust
        </div>
      </a>
    </object>
  </>
)

export const InstagramFeedItem = ({ src, index }: any) => (
  <a href={`"#${index}-insta-feed`}>
    <div
      className="instafeed-container"
      style={{ width: '20.000000%', paddingTop: '20.000000%' }}
    >
      <ImageInstagramSingleItem src={src} className="js-lazy-image--handled" />
      <div
        style={{ width: '100%', height: '100%' }}
        className="instafeed-overlay "
      ></div>
    </div>
  </a>
)

const InstagramButtonClose = () => (
  <div className="close-button">
    <a
      style={{
        height: '25px',
        width: '25px',
        display: 'block!important',
        position: 'relative',
        background: 'transparent',
      }}
      aria-label="close button"
      href="#_"
      id="close-button-url"
    ></a>
  </div>
)

const InstagramLightboxArrows = ({ length, index }: any) => {
  const prev = index === 1 ? length : index - 1
  const next = index === length ? 1 : index + 1

  const Arrow = ({ data, prev }: any) => (
    <object>
      <a href={`#${data}-insta-feed`}>
        <img
          src="//instafeed.nfcube.com/assets/img/placeholder.gif"
          alt={`${prev ? 'previous image' : 'next image'}`}
        />
      </a>
    </object>
  )
  return (
    <div className="arrows">
      <Arrow prev data={prev} />
      <Arrow data={next} />
    </div>
  )
}

const InstagramLightboxDate = () => (
  <div className="post-date">
    <span style={{ paddingLeft: '8px' }}>January 15</span> •
    <object>
      <a
        href="https://www.instagram.com/p/CnbxS5ytBEt/"
        target="_blank"
        rel="noopener noreferrer"
        className="follow"
      >
        View on Instagram
      </a>
    </object>
  </div>
)

const InstagramLightboxContent = ({ length, index, caption }: any) => (
  <div className="box-content">
    <div className="sub-header">
      <div className="post-engagement"></div>
      <InstagramLightboxArrows length={length} index={index} />
    </div>
    <div className="instafeed-caption">{caption}</div>
  </div>
)

export const InstagramLightboxItem = ({ src, caption, index, length }: any) => (
  <div className="instafeed-lightbox" id={`${index}-insta-feed`}>
    <div
      className="lightbox-instagram"
      role="dialog"
      aria-labelledby={`{${index}-insta-feed`}
      aria-modal="true"
    >
      <div className="instafeed-post-image">
        <a href="#_" tabIndex={-1}>
          <ImageInstagramSingleItem src={src} />
        </a>
      </div>
      <div className="description">
        <div className="instafeed-header">
          <InstagramButtonClose />
          <InstagramImageProfile />
        </div>
        <hr />
        <InstagramLightboxContent
          caption={caption}
          length={length}
          index={index}
        />
        <InstagramLightboxDate />
      </div>
    </div>
  </div>
)

const InstagramHeader = () => (
  <header className="instagram-feed__header container">
    <div className="instagram-feed__header__info">
      <SvgIconInstagram />
      <span className="instagram-feed__header__info__text">
        +80.000 följare
      </span>
      <span className="instagram-feed__header__info__handle">@hairlust</span>
    </div>
    <div className="instagram-feed__header__cta">
      <a
        href="https://www.instagram.com/hairlust/"
        className="cta cta--stroked-dark"
      >
        Följ oss på Instagram
      </a>
    </div>
  </header>
)

export const ShopifyFeedInstagram = ({ data }: any) => (
  <section className="instagram-feed section section--large">
    <InstagramHeader />
    <div className="instagram-feed__list" id="insta-feed">
      {data.map(({ src }: any, index: number) => (
        <InstagramFeedItem key={index} src={src} index={index + 1} />
      ))}
      {data.map(({ src, caption }: any, index: number) => (
        <InstagramLightboxItem
          key={index}
          src={src}
          caption={caption}
          index={index + 1}
          length={data.length}
        />
      ))}
    </div>
    {/* <div className="instagram-feed__mobile-cta">
        <a href="https://www.instagram.com/hairlust/" className="cta cta--stroked-dark">Följ oss på Instagram</a>
    </div> */}
  </section>
)

import cn from 'clsx'
import { useMeasure, useWindowSize } from 'react-use'
import { handleSizes } from '../../../../../lib/sizes'

export const SliderSingleImage = (props: any) => {
  const { width } = useWindowSize()
  let [ref, { width: measureWidth }] = useMeasure<HTMLDivElement>()
  measureWidth = measureWidth + 200
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      className={cn('lazyautosizes lazyloaded')}
      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
      data-sizes="auto"
      data-max-width="900"
      data-srcset="//cdn.shopify.com/s/files/1/2199/8485/products/HairLust_Produkt_2020-11-0214389-2_1_72dpi_5c709d44-18cb-4658-ac86-3dde552975b7_180x.jpg?v=1663854733 180w, //cdn.shopify.com/s/files/1/2199/8485/products/HairLust_Produkt_2020-11-0214389-2_1_72dpi_5c709d44-18cb-4658-ac86-3dde552975b7_320x.jpg?v=1663854733 320w, //cdn.shopify.com/s/files/1/2199/8485/products/HairLust_Produkt_2020-11-0214389-2_1_72dpi_5c709d44-18cb-4658-ac86-3dde552975b7_480x.jpg?v=1663854733 480w, //cdn.shopify.com/s/files/1/2199/8485/products/HairLust_Produkt_2020-11-0214389-2_1_72dpi_5c709d44-18cb-4658-ac86-3dde552975b7_540x.jpg?v=1663854733 540w, //cdn.shopify.com/s/files/1/2199/8485/products/HairLust_Produkt_2020-11-0214389-2_1_72dpi_5c709d44-18cb-4658-ac86-3dde552975b7_720x.jpg?v=1663854733 720w, //cdn.shopify.com/s/files/1/2199/8485/products/HairLust_Produkt_2020-11-0214389-2_1_72dpi_5c709d44-18cb-4658-ac86-3dde552975b7_768x.jpg?v=1663854733 768w, //cdn.shopify.com/s/files/1/2199/8485/products/HairLust_Produkt_2020-11-0214389-2_1_72dpi_5c709d44-18cb-4658-ac86-3dde552975b7_900x.jpg?v=1663854733 900w, //cdn.shopify.com/s/files/1/2199/8485/products/HairLust_Produkt_2020-11-0214389-2_1_72dpi_5c709d44-18cb-4658-ac86-3dde552975b7_1024x.jpg?v=1663854733 1024w, //cdn.shopify.com/s/files/1/2199/8485/products/HairLust_Produkt_2020-11-0214389-2_1_72dpi_5c709d44-18cb-4658-ac86-3dde552975b7_1080x.jpg?v=1663854733 1080w, //cdn.shopify.com/s/files/1/2199/8485/products/HairLust_Produkt_2020-11-0214389-2_1_72dpi_5c709d44-18cb-4658-ac86-3dde552975b7_1296x.jpg?v=1663854733 1296w, //cdn.shopify.com/s/files/1/2199/8485/products/HairLust_Produkt_2020-11-0214389-2_1_72dpi_5c709d44-18cb-4658-ac86-3dde552975b7_1512x.jpg?v=1663854733 1512w, //cdn.shopify.com/s/files/1/2199/8485/products/HairLust_Produkt_2020-11-0214389-2_1_72dpi_5c709d44-18cb-4658-ac86-3dde552975b7_1728x.jpg?v=1663854733 1728w, //cdn.shopify.com/s/files/1/2199/8485/products/HairLust_Produkt_2020-11-0214389-2_1_72dpi_5c709d44-18cb-4658-ac86-3dde552975b7_1944x.jpg?v=1663854733 1944w"
      sizes={handleSizes(measureWidth, width, false)}
      alt="Hairlust - Hair Formula Gummies for Women"
      srcSet={props.srcSet}
      {...props}
    />
  )
}

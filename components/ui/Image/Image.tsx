/* eslint-disable @next/next/no-img-element */
import cn from 'clsx'
import { useMeasure, useWindowSize } from 'react-use'
import { handleSizes } from '../../../lib/sizes'
import { getModifiedProps } from '../../../lib/get-modified-props'

export const ProductStaticImage = (props: any) => {
  return <ImageRender maxWidth="1944" props={props} />
}

export const ImageSingleItem = (props: any) => {
  return <ImageRender extraMeasure={200} maxWidth="900" props={props} />
}

export const ProductImage = (props: any) => {
  return <ImageRender maxWidth="1944" props={getModifiedProps(props)} />
}

export const ImageRender = ({ extraMeasure = 0, maxWidth, props }: any) => {
  const { width } = useWindowSize()
  let [ref, { width: measureWidth }] = useMeasure<HTMLDivElement>()
  measureWidth = measureWidth + extraMeasure

  return (
    <img
      ref={ref}
      className={cn(props.className)}
      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
      data-sizes="auto"
      data-max-width={maxWidth}
      data-srcset={props.srcSet}
      sizes={handleSizes(measureWidth, width, false)}
      alt="Hairlust - Hair Formula Gummies for Women"
      srcSet={props.srcSet}
      {...props}
    />
  )
}

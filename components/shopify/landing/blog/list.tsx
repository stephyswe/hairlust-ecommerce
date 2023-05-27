/* eslint-disable @next/next/no-img-element */
import { BlogListItem } from './item'

export const BlogList = ({ data }: any) => (
  <ul className="blog-slider__slider-element js-sliderEl keen-slider">
    {data.map((item: any, index: number) => (
      <BlogListItem key={index} data={item} />
    ))}
  </ul>
)

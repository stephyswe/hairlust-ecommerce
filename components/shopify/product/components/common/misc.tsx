import cn from 'clsx'
import { SvgIconArrowLeft } from '../../../../icons'

export const BackLink = ({ title, className }: any) => (
  <a href="/" className={cn('back-button', className)}>
    <SvgIconArrowLeft />
    <span className="back-button__text">{title}</span>
  </a>
)

import { FC } from 'react'
import colorCodes from '../../common/colors'

type Props = {
  style?: any,
  fill?: any,
  width?: number,
  height?: number,
  className?: string,
  onClick?: () => void,
  viewBox?: string
}

const Quote: FC<Props> = ({
  style = {},
  fill = colorCodes.BLACK_2,
  width = 15,
  height = 11,
  className = "",
  onClick,
  viewBox = "0 0 15 11"
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    className={className}
    onClick={() => !!onClick && onClick()}
  >
    <path d="M1.01049 9.78867V5.57231C1 5.47112 1 5.36631 1 5.25066C1.0152 4.38052 1.25142 3.52981 1.68499 2.78384C2.11856 2.03788 2.73423 1.4229 3.47025 1.00057C3.63994 0.99437 3.80777 1.0388 3.95369 1.12857C4.09962 1.21833 4.21746 1.34962 4.29315 1.50676C4.36884 1.66391 4.39918 1.84025 4.38053 2.01474C4.36189 2.18923 4.29506 2.35448 4.18802 2.49075C3.84727 3.33966 3.74274 4.27012 3.88623 5.17718H5.88456V9.78867H1.01049Z" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.96068 9.78867V5.57231C8.9502 5.47112 8.9502 5.36631 8.9502 5.25066C8.96539 4.38052 9.20162 3.52981 9.63519 2.78384C10.0688 2.03788 10.6844 1.4229 11.4204 1.00057C11.5901 0.99437 11.758 1.0388 11.9039 1.12857C12.0498 1.21833 12.1677 1.34962 12.2433 1.50676C12.319 1.66391 12.3494 1.84025 12.3307 2.01474C12.3121 2.18923 12.2453 2.35448 12.1382 2.49075C11.7975 3.33966 11.6929 4.27012 11.8364 5.17718H13.8348V9.78867H8.96068Z" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default Quote

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

const Nodes: FC<Props> = ({
  style = {},
  fill = colorCodes.PINK_3,
  width = 18,
  height = 18,
  className = "",
  onClick,
  viewBox = "0 0 18 18"
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    className={className}
    onClick={() => !!onClick && onClick()}
  >
    <path d="M4.80981 6.81836V6.81836C4.80981 4.60922 6.60068 2.81836 8.80981 2.81836H9.00029" stroke={fill} strokeWidth="2" />
    <path d="M4.80981 11.1816V11.1816C4.80981 13.3908 6.60068 15.1816 8.80981 15.1816H9.00029" stroke={fill} strokeWidth="2" />
    <path d="M16.0475 1H10.3332C9.80725 1 9.38086 1.65122 9.38086 2.45455V3.90909C9.38086 4.71241 9.80725 5.36364 10.3332 5.36364H16.0475C16.5735 5.36364 16.9999 4.71241 16.9999 3.90909V2.45455C16.9999 1.65122 16.5735 1 16.0475 1Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.66667 6.8186H1.95238C1.4264 6.8186 1 7.46983 1 8.27315V9.72769C1 10.531 1.4264 11.1822 1.95238 11.1822H7.66667C8.19265 11.1822 8.61905 10.531 8.61905 9.72769V8.27315C8.61905 7.46983 8.19265 6.8186 7.66667 6.8186Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.0475 12.6367H10.3332C9.80725 12.6367 9.38086 13.2879 9.38086 14.0913V15.5458C9.38086 16.3491 9.80725 17.0004 10.3332 17.0004H16.0475C16.5735 17.0004 16.9999 16.3491 16.9999 15.5458V14.0913C16.9999 13.2879 16.5735 12.6367 16.0475 12.6367Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

  </svg>
)

export default Nodes

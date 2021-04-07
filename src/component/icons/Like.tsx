import { FC } from 'react'
import colorCodes from '../../common/colors'

type Props = {
  fill?: string,
  style?: any,
  width?: number,
  height?: number,
  className?: string,
  onClick?: () => void,
  viewBox?: string
}

const Like: FC<Props> = ({
  fill = colorCodes.BLACK,
  style = {},
  width = 16,
  height = 17,
  className = "",
  onClick,
  viewBox = "0 0 16 17"
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    className={className}
    onClick={() => !!onClick && onClick()}
  >
    <path d="M4.65097 15.6019H2.46068C2.07341 15.6019 1.70201 15.4481 1.42817 15.1743C1.15433 14.9004 1.00049 14.529 1.00049 14.1417V9.03107C1.00049 8.6438 1.15433 8.27239 1.42817 7.99855C1.70201 7.72472 2.07341 7.57087 2.46068 7.57087H4.65097M9.76165 6.11068V3.19029C9.76165 2.60939 9.53089 2.05228 9.12013 1.64152C8.70937 1.23076 8.15226 1 7.57136 1L4.65097 7.57087V15.6019H12.8865C13.2386 15.6059 13.5803 15.4825 13.8487 15.2544C14.117 15.0263 14.2939 14.709 14.3467 14.3608L15.3542 7.7899C15.386 7.58063 15.3718 7.36694 15.3128 7.16366C15.2538 6.96038 15.1513 6.77236 15.0124 6.61263C14.8735 6.4529 14.7015 6.32528 14.5084 6.23861C14.3153 6.15193 14.1057 6.10828 13.894 6.11068H9.76165Z" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default Like
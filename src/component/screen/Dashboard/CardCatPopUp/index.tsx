import { FC } from 'react'
import styled from 'styled-components'
import PopUp from '../../../common/PopUp'
import Content from './Content'
import Sidebar from './Sidebar'

const PopUpCard = styled(PopUp) <{
    handleClose: (v: boolean) => void
}>`
.popup-content-holder {
  box-sizing: border-box;
  border-radius: 12px;
  width: 80%;
  max-width: 1224px;
  background: ${({ theme: { color } }) => color.WHITE_3};
}
`;

type Props = {
    handleClose: (v: boolean) => void
}

const CardCatPopUp: FC<Props> = ({
    handleClose
}) => (
    <PopUpCard closeOnEsc={true} handleClose={handleClose}>
        <div className="d-flex">
            <Sidebar />
            <Content />
        </div>
    </PopUpCard>
)

export default CardCatPopUp
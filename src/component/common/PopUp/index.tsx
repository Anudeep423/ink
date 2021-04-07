import { FC, useEffect, useRef } from 'react'
import styled from 'styled-components'
import colorCodes from '../../../common/colors'
import Icon from '../../icons'

const { WHITE_1, BLACK } = colorCodes
const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    left: 0;
    transition: opacity 500ms;
    background-color: rgba(25, 24, 22, 0.5);
    visibility: visible;
    opacity: 1;
    z-index: 9999;
    align-items: center;
`;

const SubContainer = styled.div<{
    width?: any
}>`
    width: ${props => props.width && props.width}px;
    max-width: 80%;
    position: relative;
    background-color: ${WHITE_1};
`;

const CrossSection = styled.div`
    width: 15px;
    position: absolute;
    top: -35px;
    right: 14px;
    cursor: pointer;
`;

const Wrapper = styled.div<{
    height?: any
}>`
  max-height: 90vh;
  border-radius: 4px;
  overflow-y: scroll;
  height: ${props => props.height}px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;


type Props = {
    height?: any,
    width?: any,
    handleClose?: any,
    className?: string,
    closeOnEsc?: boolean,
    closeOnOutClick?: boolean,
    children: any
}

const PopUp: FC<Props> = ({
    height = 650, width = 600, handleClose, className = '',
    closeOnEsc = false, closeOnOutClick = true, children
}) => {
    const wrapperRef: any = useRef()

    const handleClickOutside = (event: any) => {
        if (!!wrapperRef &&
            !!closeOnOutClick &&
            (wrapperRef.current !== null) &&
            !wrapperRef.current.contains(event.target)) {
            handleClose()
        }
    }

    const handleKeyDown = (e: any) => {
        if (((e.keyCode === 27) ||
            (e.key === "Escape") ||
            (e.key === "Esc")) && !!closeOnEsc) {
            handleClose()
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('keydown', handleKeyDown)
        document.body.classList.add('modal-open');
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleKeyDown)
            document.body.classList.remove('modal-open');
        }
        // eslint-disable-next-line
    }, [])

    return (
        <Container className={className}>
            <SubContainer className="popup-content-holder" width={width}>
                <CrossSection onClick={() => handleClose()} className="popup-content-svg-holder">
                    <Icon name="circle-cross" height={30} width={30} fill={WHITE_1} innerFill={WHITE_1} outerFill={BLACK} />
                </CrossSection>
                <Wrapper ref={wrapperRef} height={height}>
                    {children}
                </Wrapper>
            </SubContainer>
        </Container>
    )
}

export default PopUp
import styled from 'styled-components'

const Container = styled.div`
flex-direction: column;
padding: 40px 0px 0px;
width: 56px;
height: 100%;
position: absolute;
left: 0px;
top: 72px;
${({ theme: { color: { BLACK, GREY_2 } } }) =>
        `background: linear-gradient(180deg, ${BLACK} 0%, ${GREY_2} 100%);`}
opacity: 0.1;
border-radius: 8px;
`;

const SideBar = () => (
    <Container className="between-flex" />
)

export default SideBar
import { FC } from 'react'
import styled from 'styled-components'
import Icon from '../../../icons'
import Card from '../Card'

const Container = styled.div<{
    onClick: (i: any) => void
}>`
margin-right: 40px;
min-width: 260px;
cursor: pointer;
`;

const Title = styled.p.attrs({ className: 'bold ai-center' })`
display: flex;
font-size: 14px;
line-height: 20px;
text-transform: capitalize;
color: ${({ theme: { color } }) => color.BLACK_1};
`;

const CardHolder = styled.div`
margin-bottom: 20px;
`;

const RenderedCards = styled.div`
`;

const DotSpan = styled.span`
width: 8px;
height: 8px;
border-radius: 50%;
margin-right: 8px;
${({ theme: { color: { GREY_7, YELLOW_1, BLUE_1, BLUE_2, GREEN_1 } } }) => `
&.in-undefined {
    background: ${GREY_7};
}
&.in-progress {
    background: ${YELLOW_1};
}
&.in-pending {
    background: ${BLUE_1};
}
&.in-approved {
    background: ${GREEN_1};
}
&.in-certified {
    background: ${BLUE_2};
}
`};
`;

const Heading = styled.div.attrs({ className: 'between-flex' })`
margin: 44px 0 21px;
`;

type CardProps = {
    title: string,
    options: any,
    className: string,
    cardType: string
}



type Props = {
    card: CardProps,
    onClick: (i: any) => void,
    setActiveCat: (i: any) => void
   
}

const CardList: FC<Props> = ({
    card: { title, options,  className , cardType }, onClick,
    setActiveCat
 } : Props ) => (
    <Container onClick={onClick}>
        <Heading>
            {!!title && <Title><DotSpan className={`in-${className}`} />{`${title} (${options.length})`}</Title>}
            <Icon name="resizer" onClick={() => setActiveCat(title)} />
        </Heading>
        {
            !!options && !!options.length &&
            <RenderedCards>
                {
                    options.map((option: any, i: number) =>
                        <CardHolder key={i}>
                            <Card   info={option} type={cardType} className={`in-${className}`} key={i} />
                        </CardHolder>)
                }
            </RenderedCards>
        }
    </Container>
)

export default CardList
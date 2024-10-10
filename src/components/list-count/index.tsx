import * as s from "./styled"

type Props = {
    text: string,
    color: string
    countNumber: number
}

export const ListCount = ({ text, color, countNumber }: Props) => {
    return (
        <s.ListCountContainer>
            <s.ListCountText color={color}>
                {text}
            </s.ListCountText>

            <s.ListCountNumberContainer >
                <s.ListCountNumberText>
                    {countNumber}
                </s.ListCountNumberText>
            </s.ListCountNumberContainer>
        </s.ListCountContainer>
    )
}
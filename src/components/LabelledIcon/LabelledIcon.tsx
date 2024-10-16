import StackIcon from "tech-stack-icons"
import { Props } from "../../@types/Props"
import { optionalRender } from "../../utils/optionalRender"
import FlexContainer from "../FlexContainer/FlexContainer"
import Text from "../Text/Text"
import "./LabelledIcon.css"

export interface LabelledIconProps extends Props {
    icon: string
    label: string
    years?: number
}

export default function LabelledIcon({ icon, label, years }: LabelledIconProps) {
    return (
        <FlexContainer className="labelled-icon" direction="column" alignItems="center" justifyContent="center">
            <StackIcon name={icon} />
            <Text fontWeight="B">{label}</Text>
            {optionalRender(years != undefined, <Text fontSize="SM" fontWeight="L">{`${years} ${years == 1 ? "year" : "years"}`}</Text>)}
        </FlexContainer>
    )
}
import { TouchableOpacity } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox"
import { theme } from "../../theme"
import { Trash } from "phosphor-react-native";
import { Task } from "../../types/task"
import * as s from "./styled"

type Props = Omit<Task, 'id'> & {
    onCheckboxChange: (isChecked: boolean) => void;
};

export const ListItem = ({ isChecked, text, onCheckboxChange }: Props) => {
    return (
        <s.Container>
            <BouncyCheckbox
                onPress={(isChecked: boolean) => onCheckboxChange(isChecked)}
                isChecked={isChecked}
                fillColor={isChecked ? theme.COLORS.PURPLE_DARK : theme.COLORS.BLUE}
                style={{ width: 30 }}
                size={30}
            />

            <s.Text isChecked={isChecked}>
                {text}
            </s.Text>

            <TouchableOpacity>
                <Trash size={30} color={theme.COLORS.GRAY_300} />
            </TouchableOpacity>
        </s.Container>
    )
}
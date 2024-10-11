import { TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { theme } from "../../theme";
import { Trash } from "phosphor-react-native";
import { Task } from "../../types/task";
import * as s from "./styled";
import { useState } from "react";

type Props = Omit<Task, 'id'> & {
    onCheckboxChange: (isChecked: boolean) => void;
    handleRemove: (shouldAnimate: (startAnim: boolean) => void) => void;
};

export const ListItem = ({ isChecked, text, onCheckboxChange, handleRemove }: Props) => {
    const [startAnim, setStartAnim] = useState(true);

    return (
        <s.Container
            from={{ opacity: 0, translateY: 100 }}
            animate={{
                opacity: startAnim ? 1 : 0,
                translateY: 0,
                translateX: startAnim ? 0 : -100,
            }}
            transition={{ type: 'timing', duration: 400 }}
        >
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

            <TouchableOpacity onPress={() => handleRemove(setStartAnim)}>
                <Trash size={30} color={theme.COLORS.GRAY_300} />
            </TouchableOpacity>
        </s.Container>
    );
};

import * as s from "./styled"
import { theme } from "../../theme";
import { Feather } from "@expo/vector-icons"
import { ListCount } from "../../components";
import { useState } from "react";

export function Home() {
    const [inputFocus, setInputFocus] = useState(false)

    return (
        <s.Container>
            <s.Header>
                <s.Logo
                    source={require('../../assets/logo.png')}
                    resizeMode="contain"
                />
            </s.Header>

            <s.InputContainer>
                <s.Input
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={theme.COLORS.GRAY_300}
                    onFocus={() => setInputFocus(true)}
                    onBlur={() => setInputFocus(false)}
                    focus={inputFocus}
                />

                <s.AddButton activeOpacity={0.5}>
                    <Feather
                        name="plus-circle" color={theme.COLORS.GRAY_100}
                        size={20}
                    />
                </s.AddButton>
            </s.InputContainer>

            <s.ListContainer>
                <s.ListHeaderContainer>
                    <ListCount text="Criadas" color={theme.COLORS.BLUE} countNumber={0} />
                    <ListCount text="Concluídas" color={theme.COLORS.PURPLE} countNumber={0} />
                </s.ListHeaderContainer>
            </s.ListContainer>
        </s.Container>
    )
}
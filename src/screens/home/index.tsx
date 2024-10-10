import * as s from "./styled"
import { theme } from "../../theme";
import { Feather } from "@expo/vector-icons"

export function Home() {
    return (
        <s.Container>
            <s.Header>
                <s.Logo
                    source={require('../../assets/logo.png')}
                    resizeMode="contain"
                />
            </s.Header>

            <s.ListContainer>
                <s.InputContainer>
                    <s.Input
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor={theme.COLORS.GRAY_300}
                    />

                    <s.AddButton activeOpacity={0.5}>
                        <Feather
                            name="plus-circle" color={theme.COLORS.GRAY_100}
                            size={20}
                        />
                    </s.AddButton>
                </s.InputContainer>
            </s.ListContainer>
        </s.Container>
    )
}
import * as s from "./styled"
import { theme } from "../../theme";
import { ListCount, ListItem } from "../../components";
import { useState } from "react";
import { FlatList, View } from "react-native";
import { Task } from "../../types/task";
import { PlusCircle } from "phosphor-react-native";

const initialTasks: Task[] = [
    { text: "Integer urna interdum massa libero auctor neque turpis turpis semper.", id: 1, isChecked: false },
    { text: "Integer urna interdum massa libero auctor neque turpis turpis semper.", id: 2, isChecked: false },
    { text: "Integer urna interdum massa libero auctor neque turpis turpis semper.", id: 3, isChecked: false },
    { text: "Integer urna interdum massa libero auctor neque turpis turpis semper.", id: 4, isChecked: false },
    { text: "Integer urna interdum massa libero auctor neque turpis turpis semper.", id: 5, isChecked: false },
    { text: "Integer urna interdum massa libero auctor neque turpis turpis semper.", id: 6, isChecked: false },
    { text: "Integer urna interdum massa libero auctor neque turpis turpis semper.", id: 7, isChecked: false },
    { text: "Integer urna interdum massa libero auctor neque turpis turpis semper.", id: 8, isChecked: false },
    { text: "Integer urna interdum massa libero auctor neque turpis turpis semper.", id: 9, isChecked: false },
    { text: "Integer urna interdum massa libero auctor neque turpis turpis semper.", id: 10, isChecked: false },
    { text: "Integer urna interdum massa libero auctor neque turpis turpis semper.", id: 11, isChecked: false },
    { text: "Integer urna interdum massa libero auctor neque turpis turpis semper.", id: 12, isChecked: false },
    { text: "Integer urna interdum massa libero auctor neque turpis turpis semper.", id: 13, isChecked: false },
    { text: "Integer urna interdum massa libero auctor neque turpis turpis semper.", id: 14, isChecked: false },
    { text: "Integer urna interdum massa libero auctor neque turpis turpis semper.", id: 15, isChecked: false }
];

export function Home() {
    const [inputFocus, setInputFocus] = useState(false)
    const [tasks, setTasks] = useState(initialTasks);
    const [finalizedTasks, setFinalizedTasks] = useState(0)

    const handleCheckTask = (id: number, isChecked: boolean) => {
        setTasks((prevItems) =>
            prevItems.map(item =>
                item.id === id ? { ...item, isChecked } : item
            )
        );

        setFinalizedTasks((prevFinalized) =>
            isChecked ? prevFinalized + 1 : prevFinalized - 1
        );
    };

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
                    <PlusCircle size={25} color={theme.COLORS.GRAY_100} />
                </s.AddButton>
            </s.InputContainer>

            <s.ListContainer>
                <s.ListHeaderContainer>
                    <ListCount text="Criadas" color={theme.COLORS.BLUE} countNumber={tasks.length} />
                    <ListCount text="Concluídas" color={theme.COLORS.PURPLE} countNumber={finalizedTasks} />
                </s.ListHeaderContainer>

                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) =>
                        <ListItem
                            isChecked={item.isChecked}
                            text={item.text}
                            onCheckboxChange={(isChecked) => handleCheckTask(item.id, isChecked)}
                        />
                    }
                    ItemSeparatorComponent={() => <View style={{ marginBottom: 8 }} />}
                    ListFooterComponent={<View style={{ marginBottom: 40 }} />}
                    style={{ marginTop: 20, flex: 1 }}
                    showsVerticalScrollIndicator={false}
                />
            </s.ListContainer>
        </s.Container>
    )
}
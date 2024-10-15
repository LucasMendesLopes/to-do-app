import * as s from "./styled"
import { theme } from "../../theme";
import { ListCount, ListItem } from "../../components";
import { useState } from "react";
import { Alert, FlatList, View } from "react-native";
import { Task } from "../../types/task";
import { PlusCircle } from "phosphor-react-native";
import { Toast } from "toastify-react-native";
import * as Crypto from "expo-crypto";

export function Home() {
    const [inputFocus, setInputFocus] = useState(false)
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskText, setTaskText] = useState("");
    const [finalizedTasks, setFinalizedTasks] = useState(0)

    const handleAddTask = () => {
        const formatedTaskText = taskText.trim()

        if (formatedTaskText === "") return Toast.info('Digite as informações da tarefa.')
        if (tasks.some((task) => task.text.trim().toLowerCase() === taskText.trim().toLowerCase())) return Toast.warn('Essa tarefa já existe.')

        const task = { text: formatedTaskText, id: Crypto.randomUUID(), isChecked: false };

        setTasks((prevState) => [...prevState, task])
        setTaskText("")
    }

    const handleRemoveTask = (id: string, setStartAnim: (startAnim: boolean) => void) => {
        Alert.alert('Remover', `Você deseja remover essa tarefa?`, [
            {
                text: 'sim',
                onPress: () => {
                    setStartAnim(false);

                    setTimeout(() => {
                        setTasks((prevState) => prevState.filter((task) => task.id !== id));

                        if (tasks.some((task) => task.id === id && task.isChecked)) {
                            setFinalizedTasks((prevFinalized) => prevFinalized - 1);
                        }
                    }, 300);
                },
            },
            {
                text: 'não',
                style: 'cancel',
            },
        ]);
    };


    const handleCheckTask = (id: string, isChecked: boolean) => {
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
        <s.Container
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 200 }}
        >
            <s.Header>
                <s.Logo
                    source={require('../../assets/logo.png')}
                    resizeMode="contain"
                />
            </s.Header>

            <s.InputContainer>
                <s.Input
                    value={taskText}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={theme.COLORS.GRAY_300}
                    onFocus={() => setInputFocus(true)}
                    onBlur={() => setInputFocus(false)}
                    focus={inputFocus}
                    onChangeText={(text) => setTaskText(text)}
                />

                <s.AddButton activeOpacity={0.5} onPress={handleAddTask}>
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
                            handleRemove={(setStartAnim) => handleRemoveTask(item.id, setStartAnim)}
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
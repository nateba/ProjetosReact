import { Play } from "phosphor-react";
import { CountdowContainer, FormContainer, HomeContainer, MinutesAmountnput, Separator, StartCountdownButton, TaskInput } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput
                        type="task"
                        placeholder="Dê um nome pro seu projeto"
                        list="task-suggestions" />

                    <datalist id="task-suggestions">
                        <option value="Projeto 1" />
                        <option value="Projeto 2" />
                        <option value="Projeto 3" />
                        <option value="Banana" />
                    </datalist>

                    <label htmlFor="">durante</label>
                    <MinutesAmountnput
                        type="number"
                        id="minutesAmount"
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60} />

                    <span>minutos.</span>
                </FormContainer>

                <CountdowContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>

                </CountdowContainer>

                <StartCountdownButton disabled type="submit">
                    <Play size={24} />
                    Começar</StartCountdownButton>
            </form>
        </HomeContainer>
    )
}
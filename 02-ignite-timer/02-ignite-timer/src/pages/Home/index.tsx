import { Play } from "phosphor-react";
import { CountdowContainer, FormContainer, HomeContainer, Separator } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <input type="task" />

                    <label htmlFor="">durante</label>
                    <input type="number" id="minutesAmount" />

                    <span>minutos.</span>
                </FormContainer>

                <CountdowContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>

                </CountdowContainer>

                <button type="submit">
                    <Play size={24} />
                    Começar</button>
            </form>
        </HomeContainer>
    )
}
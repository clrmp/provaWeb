import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

export function Orders() {
    return (
        <Container>
            <OrdersBoard
            icon="✅"
            title="Noticias"/>
            <OrdersBoard
            icon="✅"
            title="Informações"/>
            <OrdersBoard
            icon="✅"
            title="Materiais"/>
            <OrdersBoard
            icon="✅"
            title="feed"/>
        </Container>
    )
}
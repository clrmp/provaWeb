import { Board, OrdersContainer } from "./styles";

interface OrdersBaordProps {
    icon: string;
    title:string;
}

export function OrdersBoard({icon, title}:OrdersBaordProps) {
    return (
        <Board>
                <header>
                    <span>{icon}</span>
                    <strong>{title}</strong>
                    <span>(7)</span>
                </header>

                <OrdersContainer>
                    <h3 >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic in ex iure minus, ratione expedita nam nostrum mollitia cupiditate voluptatum, maiores maxime odio id distinctio fugit recusandae eum qui assumenda?
                    </h3>
                </OrdersContainer>

                
            </Board>

        

            
    );
 
}

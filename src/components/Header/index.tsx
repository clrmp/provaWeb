
import logo from "../../assets/images/logoIFPR.webp"

import { Container, Content } from "./styles";

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logo} alt="AppFood" />

                <div className="page-details">
                    <h1>IFPR</h1>
                    <h2>Campus Cascavel</h2>
                </div>


            </Content>
        </Container>
    );
}
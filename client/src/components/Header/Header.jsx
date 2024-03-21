import { Container } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import './Header.scss'
import { CountContext } from "../Context/ContextProvider/ContextProvider";
import { useContext } from "react";

function Header() {
    // Access the 'url' function from the context
    const { url } = useContext(CountContext);

    // Handle the click event and call the 'url' function with the appropriate data
    const handleContactClick = (data) => {
      url(data);
    };

    return (
        <Container className="header_section d-flex flex-row justify-content-end pt-4 ">
            <Breadcrumb >
                <Breadcrumb.Item onClick={() => handleContactClick("home")}>Home</Breadcrumb.Item>
                <Breadcrumb.Item onClick={() => handleContactClick("about")}>About</Breadcrumb.Item>
                <Breadcrumb.Item onClick={() => handleContactClick("skills")}>Skills</Breadcrumb.Item>
                <Breadcrumb.Item onClick={() => handleContactClick("resume")}>Resume</Breadcrumb.Item>
                <Breadcrumb.Item onClick={() => handleContactClick("projects")}>Projects</Breadcrumb.Item>
                {/* <Breadcrumb.Item onClick={() => handleContactClick("contact")}>Contact</Breadcrumb.Item> */}
            </Breadcrumb>
        </Container>
    );
}

export default Header;

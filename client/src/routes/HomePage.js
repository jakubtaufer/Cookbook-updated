import styles from "../css/home.module.css";
import { Container } from "react-bootstrap";

function HomePage() {
  return (
    <Container>
      <img
        className={styles.heroImg}
        src="https://images.unsplash.com/photo-1576237934915-c716cf54b24d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="cooking something"
      />
    </Container>
  );
}

export default HomePage;

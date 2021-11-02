import { Count } from "./components/Count";
import { Hello } from "./components/Hello";
import "./styles.css";

export default function App() {
  return (
    <>
      <Hello message1="Hello" message2="React!" />
      <Count />
    </>
  );
}

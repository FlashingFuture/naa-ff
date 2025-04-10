import Navbar from "./components/Navbar/Navbar";
import SectionTitle from "./components/SectionTitle/SectionTitle";

export default function App() {
  return (
    <div>
      <Navbar />
      <main
        style={{ maxWidth: "1024px", margin: "0 auto", padding: "2rem 1rem" }}
      >
        <SectionTitle title="Main" />
      </main>
    </div>
  );
}

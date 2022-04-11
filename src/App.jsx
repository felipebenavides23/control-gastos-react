import { useState } from "react";
import Header from "./components/Header";
function App() {
  const [presupuesto, setPresupuesto] = useState(200);
  return (
    <div>
      <Header presupuesto={presupuesto} setPresupuesto={setPresupuesto} />
    </div>
  );
}

export default App;

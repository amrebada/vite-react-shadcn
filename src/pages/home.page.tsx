import { ModeToggle } from "../components/mode-toggle";
import { Button } from "../components/ui/button";

function Home() {
  return (
    <div className="p-6">
      <ModeToggle />
      <Button>Click me</Button>
    </div>
  );
}

export default Home;

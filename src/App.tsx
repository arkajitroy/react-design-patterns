import ContainerPresetationPattern from "./design-patterns/container-presentation-pattern";
import CustomHookPattern from "./design-patterns/custom-hook-pattern";

export default function App() {
  return (
    <main className="mx-auto p-4">
      <h3>React Design Pattern</h3>
      <>
        {/* <ContainerPresetationPattern /> */}
        <CustomHookPattern />
      </>
    </main>
  );
}

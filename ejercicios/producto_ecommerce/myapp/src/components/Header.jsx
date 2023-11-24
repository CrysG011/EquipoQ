import { Filters } from "./Filters";

export function Header() {
  return (
    <header>
      <h1 className="container text-center fw-bold text-success">
        Techno Shop
      </h1>
      <Filters />
    </header>
  );
}

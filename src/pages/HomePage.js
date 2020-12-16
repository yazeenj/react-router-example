import NavbarComp from "../NavbarComp";
import TodoList from "../TodoList";
function HomePage() {
  return (
    <div>
      <NavbarComp />
      <h1>HomePage</h1>
      <p>
        Aliqua ea velit exercitation laboris nostrud excepteur consequat magna.
      </p>
      <TodoList />
    </div>
  );
}
export default HomePage;

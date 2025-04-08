import { MemoryRouter, Route, Routes } from "react-router";
import AboutMe from "../aboutme/AboutMe";
import Landing from "./Landing";

describe("Landing Component", () => {
  it("redirects to about_me after loading completes", () => {
    cy.mount(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about_me" element={<AboutMe />} />
        </Routes>
      </MemoryRouter>
    );

    cy.wait(3100);

    cy.contains("HKZ cambie de pagina").should("exist");
  });
});

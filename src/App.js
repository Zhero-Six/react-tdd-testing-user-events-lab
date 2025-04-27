import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interests: {
      technology: false,
      music: false,
      sports: false,
    },
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      interests: {
        ...prev.interests,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getInterests = () => {
    const selected = Object.keys(formData.interests).filter(
      (key) => formData.interests[key]
    );
    return selected.length > 0 ? selected.join(", ") : "no interests selected";
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <h2>Newsletter Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            aria-label="Name"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            aria-label="Email"
          />
        </div>
        <fieldset>
          <legend>Interests:</legend>
          <label>
            <input
              type="checkbox"
              name="technology"
              checked={formData.interests.technology}
              onChange={handleCheckboxChange}
            />
            Technology
          </label>
          <label>
            <input
              type="checkbox"
              name="music"
              checked={formData.interests.music}
              onChange={handleCheckboxChange}
            />
            Music
          </label>
          <label>
            <input
              type="checkbox"
              name="sports"
              checked={formData.interests.sports}
              onChange={handleCheckboxChange}
            />
            Sports
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <p>
          Thanks, {formData.name}! We’ll send updates to {formData.email}. You’re
          interested in {getInterests()}.
        </p>
      )}
    </main>
  );
}

export default App;
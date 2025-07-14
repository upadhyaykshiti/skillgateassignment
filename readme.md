# SkillGate Custom React Console Renderer

This project is a custom React-like renderer that outputs structured HTML/XML-style markup **to the console** instead of the browser DOM — built as part of the SkillGate React + Architecture Challenge.

---

# Features

- Custom `createElement` implementation
- Component-based rendering (functions as components)
- Support for nested elements
- Console output mimicking HTML structure
- Bonus: Support for Fragments (`React.Fragment`)
- Bonus: Handles nested arrays of children

---

# Tech Stack

- JavaScript (Node.js)
- No external libraries
- Pure functional React-like architecture

---

# Example Output

PS C:\Users\Super\skillgate-console-renderer> node index.js   
>>
<div>
  <header>
    <h1>
      SkillGate Renderer
    </h1>
    <nav>
      <ul>
        <li>
          Home
        </li>
        <li>
          About
        </li>
        <li>
          Contact
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <h2>
        Introduction
      </h2>
      <p>
        This is a custom React-like renderer that prints to the console.
      </p>
    </section>
    <section>
      <h2>
        Features
      </h2>
      <ul>
        <li>
          Custom createElement
        </li>
        <li>
          Support for components
        </li>
        <li>
          Fragments & nested arrays
        </li>
      </ul>
    </section>
    <form>
      <label>
        Name:
        <input>

        </input>
      </label>
      <button>
        Submit
      </button>
    </form>
    <table>
      <thead>
        <tr>
          <th>
            ID
          </th>
          <th>
            Name
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            1
          </td>
          <td>
            Alice
          </td>
        </tr>
        <tr>
          <td>
            2
          </td>
          <td>
            Bob
          </td>
        </tr>
      </tbody>
    </table>
  </main>
  <footer>
    <small>
      © 2025 SkillGate Inc.
    </small>
  </footer>
</div>
PS C:\Users\Super\skillgate-console-renderer>


# How to Run
1. Clone the repo:
git clone https://github.com/upadhyaykshiti/skillgateassignment.git
cd skillgate-console-renderer

2. Run
node index.js
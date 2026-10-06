# Decision Wheel 🎡

A simple, interactive web application that helps you make decisions when you're stuck between multiple options.

**Stop overthinking. Let probability decide.**

## Overview

Decision Wheel is a browser-based decision-making tool where users can enter multiple options and randomly select one using a spinning wheel.

The application provides a simple interface for:

* Adding options to the wheel
* Viewing the current list of options
* Spinning the wheel
* Displaying the selected option
* Presenting the result in a modal
* Celebrating the decision with a confetti animation

---

## Features

### Add Options

Enter an option into the input field and click **Add** to add it to the decision wheel.

For example:

```text
Where should I eat?
- Sushi
- Ramen
- Pizza
- Burgers
```

### Interactive Decision Wheel

The application displays a visual spinning wheel using an HTML `<canvas>` element.

A pointer at the top of the wheel indicates the selected option when the wheel stops.

### Random Selection

When **SPIN** is clicked, the wheel randomly selects one of the available options.

This makes the decision process quick and removes the need to manually choose between alternatives.

### Result Modal

After the wheel finishes spinning, the selected option is displayed in a modal window.

The modal includes:

* The selected decision
* A result message
* A close button

### Confetti Animation

The application uses `canvas-confetti` to provide a visual celebration when a decision is made.

---

## Technologies Used

The project is built with standard web technologies:

* **HTML5** — page structure and application interface
* **CSS3** — styling, layout, and visual design
* **JavaScript** — wheel behavior, option management, spinning, and result handling
* **HTML Canvas** — rendering the decision wheel
* **canvas-confetti** — celebration animation

The confetti library is loaded through jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
```

---

## Project Structure

A typical project structure is:

```text
Decision-Wheel/
│
├── index.html
├── style.css
└── script.js
```

### `index.html`

Contains the structure of the application, including:

* Header and title
* Option input
* Add button
* Option list
* Wheel canvas
* Spin button
* Result modal

### `style.css`

Contains the visual styling for the application, including the page layout, wheel interface, buttons, modal, and background.

### `script.js`

Contains the application's interactive behavior, including option management, wheel rendering, spinning, and displaying the result.

---

## How to Run

No build tools or installation are required.

### 1. Download or clone the project

```bash
git clone <repository-url>
```

### 2. Open the project folder

Navigate to the project directory.

### 3. Open `index.html`

Open `index.html` in a modern web browser.

The application should run directly in the browser.

---

## How to Use

### Step 1 — Add Options

Type an option into:

```text
Add an option...
```

and click **Add**.

Repeat until all possible choices have been added.

### Step 2 — Spin

Click:

```text
SPIN
```

The wheel will rotate and select one of the available options.

### Step 3 — View the Result

Once the spin is complete, the selected option is displayed in the result modal.

---

## Interface

The application is divided into two main sections.

### Options Panel

The left side contains:

* An input field
* An **Add** button
* A list of the options currently available

### Wheel Panel

The right side contains:

* The decision wheel
* A pointer
* Center indicator
* **SPIN** button

A result overlay appears after a decision has been made.

---

## External Dependency

The project uses the following external library:

**canvas-confetti**

Version:

```text
1.6.0
```

It is loaded directly from jsDelivr, so an internet connection is required for the confetti effect unless the library is downloaded and hosted locally.

---

## Possible Use Cases

Decision Wheel can be used for:

* Choosing where to eat
* Picking a movie
* Selecting what to do
* Making group decisions
* Choosing between study tasks
* Randomly assigning activities
* Breaking ties between multiple options

---

## Future Improvements

Potential improvements could include:

* Removing options after they are selected
* Editing existing options
* Saving options using `localStorage`
* Adding custom wheel colors
* Adding sound effects
* Allowing weighted probabilities
* Adding spin history
* Adding keyboard controls
* Adding dark/light themes
* Making the wheel responsive for different screen sizes

---

## License

This project is available for personal and educational use unless otherwise specified by the project repository.

---

## Author

I created as a lightweight interactive web application for making everyday decisions easier. Also, its my first website!!

**Stop overthinking. Let probability decide.** 🎡

# currency-MFS

A lightweight **Mobile Financial Service (MFS)** web application that simulates core digital wallet operations — adding funds, cashing out, and tracking transaction history — all inside a realistic phone mockup UI.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Demo Credentials](#demo-credentials)
- [Author](#author)
- [License](#license)

---

## Overview

**currency-MFS** is a front-end only MFS prototype built with vanilla HTML, CSS, and JavaScript. It demonstrates the basic user flows of a mobile banking or digital wallet application — from secure login to financial transactions — without requiring any backend or database.

---

## Features

- 🔐 **User Authentication** — Login with a phone number and PIN
- ➕ **Add Money** — Deposit funds into your account balance
- 💸 **Cash Out** — Withdraw funds with real-time balance validation
- 📋 **Transaction History** — View a running log of all deposits and withdrawals
- 📱 **Phone Mockup UI** — Rendered inside a realistic mobile device frame

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and markup |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [DaisyUI](https://daisyui.com/) | Pre-built UI components (phone mockup, forms, stats) |
| Vanilla JavaScript | Application logic and DOM manipulation |

---

## Getting Started

No build step or package installation is required. Simply clone the repository and serve the project with a local static file server.

```bash
git clone https://github.com/iftakharH/currencyMFS.git
cd currencyMFS
```

Then serve the project with any static file server:

```bash
# Using Python
python -m http.server 8080

# Using Node.js (npx)
npx serve . -l 8080
```

Navigate to `http://localhost:8080` (or the port reported by your server) to view the application. Opening `index.html` directly via a `file://` URL is not supported.

---

## Usage

1. **Login** — Enter the demo phone number and PIN on the login page (`index.html`).
2. **Add Money** — On the home page, click **Add Money**, enter an amount and your PIN, then confirm.
3. **Cash Out** — Click **Cash Out**, enter the withdrawal amount and your PIN. The app validates that you have sufficient balance before proceeding.
4. **Transactions** — Click **Transactions** to view the full history of your deposits and withdrawals.
5. **Log Out** — Click the **Log Out** button to return to the login screen.

---

## Project Structure

```
currencyMFS/
├── index.html          # Login page
├── home.html           # Dashboard (add money, cash out, transaction history)
├── js/
│   ├── login.js        # Login form handling and authentication
│   ├── addMoney2.js    # Add Money form logic
│   ├── cashOut.js      # Cash Out form logic
│   ├── features.js     # UI section toggling (show/hide forms)
│   └── utilities2.js   # Shared helper functions (input parsing, section visibility)
├── tailwind.config.js  # Tailwind CSS configuration
├── LICENSE             # MIT License
└── README.md           # Project documentation
```

---

## Demo Credentials

> ⚠️ These credentials are for demonstration purposes only. Do **not** use this authentication pattern in production.

| Field | Value |
|---|---|
| Phone Number | `1234` |
| PIN | `1234` |

---

## Author

**Iftakhar Hossain Rafi**

---

## License

This project is licensed under the [MIT License](LICENSE).


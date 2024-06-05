# TodoList Microfrontend

## Overview

This project is a microfrontend (MFE) implementation of a TodoList. It can be seamlessly integrated into various host applications and handles core functionalities like adding, toggling, and filtering todos.

### Design and Architectural Choices

- **State Management:**
  Utilizes a controller component that manage the state of the Todo-list functionality. `useReducer` was chosen for state management instead of `useState`to handle complex state logic more efficiently and in a clear manner.

- **LocalStorage Handling:**
  Manages persistence using localStorage with error handling for unavailable storage scenarios.

- **Component Composition:**
  Follows a modular approach where each component is responsible for a single part of the UI/logic.

## Setup

1. Install dependencies:

```sh
npm install
```

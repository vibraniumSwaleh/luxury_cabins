# Copilot Instructions for Luxury Cabins Project

## Project Overview
This project is a **Next.js** application designed for managing cabin reservations. It utilizes a modular architecture with clear separation of concerns across components, services, and pages.

### Key Components
- **Pages**: Located in the `app` directory, each page corresponds to a route in the application. For example, `app/cabins/page.js` handles the cabin listing.
- **Components**: Reusable UI components are found in `app/_components/`. For instance, `DateSelector.js` is responsible for selecting reservation dates.
- **Services**: The `_lib/` directory contains service files like `data-service.js` for data fetching and `supabase.js` for database interactions.

## Developer Workflows
- **Running the Development Server**: Use the following command to start the development server:
  ```bash
  npm run dev
  ```
  Access the application at [http://localhost:3000](http://localhost:3000).

- **Building for Production**: To create an optimized build, run:
  ```bash
  npm run build
  ```

- **Testing**: Ensure to run tests after making changes. Use the command:
  ```bash
  npm test
  ```

## Project Conventions
- **File Naming**: Components are named using PascalCase (e.g., `CabinCard.js`), while pages use lowercase (e.g., `page.js`).
- **Styling**: Global styles are defined in `globals.css`, and component-specific styles should be scoped within the component files.

## Integration Points
- **Data Fetching**: Components like `CabinList.js` utilize the `data-service.js` to fetch cabin data. Ensure to handle loading states and errors appropriately.
- **State Management**: Use React's context API for managing global state across components, especially for user authentication and reservations.

## External Dependencies
- **Next.js**: The core framework for building the application.
- **Supabase**: Used for backend services, including authentication and database management.

## Communication Patterns
- **Props and Callbacks**: Components communicate through props. For example, `ReservationForm.js` receives data from its parent component and uses callbacks to send data back.
- **Context API**: For shared state, utilize the context API to avoid prop drilling.

## Examples
- **Date Selection**: The `DateSelector.js` component demonstrates how to manage date selection and communicate the selected dates back to the parent component.

## Conclusion
These instructions should help AI coding agents understand the structure and workflows of the Luxury Cabins project. For further details, refer to the specific component and service files as needed.
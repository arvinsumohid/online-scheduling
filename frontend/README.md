# Online Scheduling App

A modern, full-featured online scheduling application for booking appointments with doctors. Built using Next.js, React, TypeScript, and Material UI.

## Features

- Multi-step booking process (select doctor, date/time, patient details, summary)
- State management with React hooks and reducers
- Modular and scalable folder structure
- Responsive and user-friendly UI
- Easy customization for different appointment types

## Tech Stack

- **Framework:** Next.js (React)
- **Language:** TypeScript
- **UI Library:** Material UI (MUI)
- **Date Handling:** Day.js

## Getting Started

### Prerequisites
- Node.js (v16 or above recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
$ git clone https://github.com/arvinsumohid/online-scheduling.git
$ cd online-scheduling

# Install dependencies
$ npm install
# or
yarn install
```

### Running the App
```bash
# Start the development server
$ npm run dev
# or
yarn dev

# The app will be available at http://localhost:3000
```

### Formatting Code
```bash
npm run format
```

### docker
```bash
 
```

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── booking/        # Booking workflow components and pages
│   │   ├── dashboard/      # Dashboard pages
│   │   ├── login/          # Login components and pages
│   │   └── ...
│   ├── components/         # Shared UI components
│   ├── interfaces/         # TypeScript interfaces (e.g., booking.interface.tsx)
│   ├── store/              # Reducers and state management
│   └── ...
├── public/                 # Static assets
├── styles/                 # Global and component styles
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License.

---

For questions or support, open an issue or contact the maintainer.




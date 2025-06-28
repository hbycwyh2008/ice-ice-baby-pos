# Ice Ice Baby POS System 🍦

A modern Point of Sale system designed for Ice Ice Baby restaurant - Complete web-based ordering and management solution.

## About

Ice Ice Baby POS is a comprehensive point-of-sale management system specifically designed for ice cream shops and dessert restaurants. It features a user-friendly frontend interface and a robust backend API service to handle orders, sales, and customer management.

## Project Structure

```
ice-ice-baby-pos/
├── backend/                 # Node.js backend server
│   ├── main.js             # Main server file
│   ├── package.json        # Backend dependencies
│   ├── error.json          # Error handling configuration
│   ├── todo-list.txt       # Development tasks
│   ├── models/             # Data models
│   │   ├── sales.js        # Sales data model
│   │   └── user.js         # User data model
│   └── modules/            # Business logic modules
│       ├── event.js        # Event handling
│       ├── sales.js        # Sales operations
│       └── user.js         # User operations
├── frontend/               # Frontend user interface
│   ├── desk.html          # Main dashboard page
│   ├── config/            # Configuration files
│   └── src/               # Source code
│       ├── assets/        # Static resources
│       │   ├── fonts/     # Custom fonts
│       │   └── img/       # Images and icons
│       ├── css/           # Stylesheets
│       │   ├── deskmain.css
│       │   ├── index.css
│       │   ├── menu.css
│       │   └── style.css
│       ├── script/        # JavaScript files
│       │   ├── menu.js    # Menu functionality
│       │   └── send.js    # Data transmission
│       └── templates/     # HTML templates
│           ├── cards.html
│           ├── index.html
│           ├── menu.html
│           └── ordercompleted.html
└── README.md
```

## Technology Stack

### Backend
- **Node.js** - Server runtime environment
- **JavaScript** - Programming language
- **Express.js** - Web framework (assumed)
- **RESTful API** - API architecture

### Frontend
- **HTML5** - Page structure
- **CSS3** - Styling and responsive design
- **JavaScript** - Interactive functionality
- **Responsive Design** - Multi-device support

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 14.0 or higher)
- **npm** (Node Package Manager)
- **Modern web browser** (Chrome, Firefox, Safari, Edge)
- **Git** (for version control)

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/hbycwyh2008/ice-ice-baby-pos.git
cd ice-ice-baby-pos
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the backend server
npm start

# Alternative: Direct execution
node main.js
```

The backend server will start on: `http://localhost:3000`

### 3. Frontend Setup

Navigate to the frontend directory:
```bash
cd ../frontend
```

#### Option A: Using VS Code Live Server (Recommended)
1. Install the "Live Server" extension in VS Code
2. Right-click on `desk.html`
3. Select "Open with Live Server"

#### Option B: Using Python HTTP Server
```bash
# Python 3
python -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080
```

#### Option C: Using Node.js http-server
```bash
# Install http-server globally
npm install -g http-server

# Start the server
http-server -p 8080
```

#### Option D: Using PHP Built-in Server
```bash
php -S localhost:8080
```

The frontend application will be available at: `http://localhost:8080`

## Usage

### Customer Interface
1. Open your web browser and navigate to `http://localhost:8080`
2. Access the main dashboard via `desk.html`
3. Navigate through different modules:
   - **Menu Page** (`templates/menu.html`) - Browse available items
   - **Order Page** (`templates/index.html`) - Place and manage orders
   - **Cards Page** (`templates/cards.html`) - Payment processing
   - **Completion Page** (`templates/ordercompleted.html`) - Order confirmation

### Admin Features
- Sales management and reporting
- User account management
- Event logging and monitoring
- Order tracking and history

### API Endpoints
The backend provides RESTful API endpoints for:
- User authentication and management
- Sales data processing
- Event handling and logging
- Order management

## Development

### File Structure Explanation
- **`backend/models/`** - Database models and schema definitions
- **`backend/modules/`** - Business logic and service modules
- **`frontend/src/css/`** - Stylesheet files for UI components
- **`frontend/src/script/`** - Client-side JavaScript functionality
- **`frontend/src/assets/`** - Static resources (images, fonts, icons)
- **`frontend/src/templates/`** - HTML page templates

### Development Tools
- **VS Code** - Recommended code editor
- **Live Server** - Real-time frontend preview
- **Postman** - API testing and documentation
- **Chrome DevTools** - Frontend debugging
- **Node.js Debugger** - Backend debugging

### Adding New Features
1. Backend changes: Add new routes in `main.js` and corresponding modules
2. Frontend changes: Create new templates and update stylesheets
3. Update this README with any new installation or usage instructions

## Scripts

### Backend Scripts
```bash
# Start development server
npm start

# Run in production mode
npm run prod

# Run tests (if available)
npm test
```

### Frontend Scripts
```bash
# Build for production (if build process exists)
npm run build

# Start development server
npm run dev
```

## Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Check what's using the port
netstat -ano | findstr :3000

# Kill the process (Windows)
taskkill /PID <PID> /F

# Kill the process (Mac/Linux)
kill -9 <PID>
```

#### Dependency Installation Failed
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

#### Frontend Resources Not Loading
- Verify all file paths are correct
- Check browser console for error messages
- Ensure all asset files exist in the correct directories
- Verify CORS settings if accessing from different origins

#### Backend Server Won't Start
- Check if Node.js is properly installed: `node --version`
- Verify package.json exists and is valid
- Check for syntax errors in main.js
- Ensure all required dependencies are installed

## Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Contribution Guidelines
- Follow existing code style and conventions
- Add comments for complex functionality
- Update documentation for any new features
- Test your changes thoroughly before submitting

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions:

- **Create an issue** on GitHub
- **Check existing issues** for similar problems
- **Review the troubleshooting section** above

## Contact

- **Project Maintainer**: hbycwyh2008
- **GitHub Repository**: https://github.com/hbycwyh2008/ice-ice-baby-pos
- **Issues**: https://github.com/hbycwyh2008/ice-ice-baby-pos/issues

## Acknowledgments

- Thanks to all contributors who have helped improve this project
- Special thanks to the Ice Ice Baby restaurant for the inspiration
- Built with ❤️ for the food service industry

---

⭐ **If this project helps you, please give it a star on GitHub!**

🍦 **Enjoy building your POS system!**

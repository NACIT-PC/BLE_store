# BLE_store

Using bleutooth low energy devices, to share in-store promotions.

UI Wireflame https://www.figma.com/proto/SzGSkizR48gU0NLIhUQqLt/Website-Demo?node-id=13-27&t=qv05hhKDn9AXQaNt-1

## Prerequisites

- Node.js (version 14.18+ or 16+)
- A modern browser that supports Web Bluetooth API (Chrome, Edge, Opera)
- HTTPS connection (required for Web Bluetooth API) or localhost

## Installation

1. Clone the repository:

```bash
git clone https://github.com/NACIT-PC/BLE_store
cd BLE_store
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

## Development

1. Start development server:

```bash
npm run dev
```

2. Build for production:

```bash
npm run build
```

3. Preview production build:

```bash
npm run preview
```

## Security Considerations

- Web Bluetooth API requires a secure context (HTTPS or localhost)
- Browser permissions are required for full Bluetooth functionality
- Some browsers may require user interaction before checking availability

## Common Issues

1. **"Bluetooth not available" on supported browser**
    - Check if Bluetooth is enabled on your device
    - Ensure you're on HTTPS or localhost

2. **Permission denied errors**
    - Ensure proper user interaction
    - Check browser settings for Bluetooth permissions

3. **API not found**
    - Verify browser compatibility
    - Check for proper HTTPS implementation

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Web Bluetooth API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API)
- [Vite](https://vitejs.dev/)
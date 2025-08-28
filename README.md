# Camera Uploader

A modern React/Next.js component for seamless image uploading from camera or device, with drag-and-drop, multi-file support, type and size restrictions, preview, and toast notifications.

**Live demo:** [camera-uploader-one.vercel.app](https://camera-uploader-one.vercel.app)

## Features
- 🌄 Capture images directly from the camera (mobile/web)
- 📁 Drag & drop, or select images from your device
- 🗂 Supports multiple file uploads (up to 5 files, configurable)
- 🔒 File type (default: images) and size (default: 5MB) validation
- ⚡ Real-time toast notifications for upload feedback (using sonner)
- 🎨 Clean, responsive UI supporting dark and light themes
- 🔥 Built with Next.js 15, TypeScript, TailwindCSS, and Radix UI

## Installation
```bash
npm install
# or
pnpm install
```

## Running Locally
```bash
npm run dev
# or
pnpm dev
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Usage
Component file: `src/components/common/camera-uploader.tsx`

```tsx
<CameraUploadComponent
  onFilesChange={handleFilesChange}
  onUpload={handleUpload}
  maxFileSize={5 * 1024 * 1024}  // 5MB
  acceptedTypes={['image/*']}    // Only images
  maxFiles={5}
/>
```

## Technologies
- **Framework:** Next.js, React 19, TypeScript
- **UI:** TailwindCSS, Lucide React, Radix UI
- **Notifications:** sonner
- **Validation:** Restricts by file type/size and number of files

## Customization
- `onFilesChange` – callback when files are selected/changed
- `onUpload` – callback to handle uploads (default logs to console)
- `maxFileSize` – max size per file (in bytes), default 10MB
- `acceptedTypes` – MIME types allowed, default `[image/*, video/*]`
- `maxFiles` – max files allowed at once (default 10)
- `className` – for styling

## License
MIT

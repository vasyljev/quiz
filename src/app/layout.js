import '../index.css';
import { ChakraProvider } from '@chakra-ui/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>React App</title>
        <meta name="description" content="Web site created..." />
      </head>
      <body>
        <ChakraProvider>
          <div id="root">{children}</div>
        </ChakraProvider>
        <audio className="audio-el" controls loop preload="auto">
          <source src="/main-theme.mp3" type="audio/mpeg" />
        </audio>
      </body>
    </html>
  );
}

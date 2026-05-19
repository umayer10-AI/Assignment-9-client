import { ThemeProvider } from 'next-themes';
import React from 'react';

const ProviderTheme = ({children}) => {
    return (
        <div>
            <ThemeProvider attribute="class" defaultTheme="light">
                {children}
            </ThemeProvider>
        </div>
    );
};

export default ProviderTheme;
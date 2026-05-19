import React from 'react';

const ProviderTheme = () => {
    return (
        <div>
            <ThemeProvider attribute="class" defaultTheme="light">
                {children}
            </ThemeProvider>
        </div>
    );
};

export default ProviderTheme;
'use client'

import { SessionProvider } from "next-auth/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "@/context/AuthContext";
import { CartContextProvider } from "@/context/CartConetxt";
import { WishListContextProvider } from "@/context/WishListContext";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AuthContext>
        <CartContextProvider>
          <WishListContextProvider>
        <ThemeProvider theme={theme}>
          {children}
          <Toaster
  position="top-center"
  reverseOrder={true}
/>
          
        </ThemeProvider>
        </WishListContextProvider>
        </CartContextProvider>
      </AuthContext>
    </SessionProvider>
  );
}

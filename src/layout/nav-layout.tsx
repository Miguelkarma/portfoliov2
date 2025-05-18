import { Nav } from "@/components/nav";
import { ThemeProvider } from "@/elements/theme-provider";
import "@/App.css";

export function NavLayout() {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark" disableSystemTheme>
        <div className=" bg-background">
          <div className="container mx-auto pt-4 sm:pt-6 px-2 sm:px-4 relative">
            <div className="flex justify-center">
              <Nav />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

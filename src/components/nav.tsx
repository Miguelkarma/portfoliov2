"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "@/elements/theme-provider";
import { ThemeToggle } from "@/elements/theme-toggle";
import { MobileMenu } from "@/elements/mobile-menu";
import logo from "@/assets/logo.png";
import {
  itemVariants,
  backVariants,
  glowVariants,
  navGlowVariants,
  sharedTransition,
  fadeInScale,
  navScrollVariants,
  logoVariants,
  menuContainerVariants,
  menuItemEntryVariants,
} from "@/animation/motion-variant";
import { menuItems, type MenuItemType } from "@/elements/constants";

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem = React.memo(({ item }: MenuItemProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const targetId = item.href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      document.dispatchEvent(new CustomEvent("forceShowNav"));

      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.pushState(null, "", item.href);
    }
  };

  return (
    <motion.li className="relative flex-shrink-0 ">
      <motion.div
        className="block rounded-lg sm:rounded-xl group relative "
        style={{ perspective: "600px" }}
        whileHover="hover"
        initial="initial"
      >
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          variants={glowVariants}
          style={{
            background: item.gradient,
            opacity: 0,
            borderRadius: "12px",
            willChange: "transform, opacity",
          }}
          layoutId={`glow-${item.label}`}
        />
        <motion.a
          href={item.href}
          onClick={handleClick}
          className="flex items-center gap-1 sm:gap-2 px-2 py-1.5 sm:px-4 sm:py-2 relative z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-lg sm:rounded-xl text-xs sm:text-sm"
          variants={itemVariants}
          transition={sharedTransition}
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "center bottom",
            willChange: "transform, opacity",
          }}
        >
          <span className="hidden xl:inline transition-colors duration-300 text-foreground">
            {item.icon}
          </span>
          <span className="hidden xs:inline lg:inline whitespace-nowrap">
            {item.label}
          </span>
        </motion.a>
        <motion.a
          href={item.href}
          onClick={handleClick}
          className="flex items-center gap-1 sm:gap-2 px-2 py-1.5 sm:px-4 sm:py-2 absolute inset-0 z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-lg sm:rounded-xl text-xs sm:text-sm"
          variants={backVariants}
          transition={sharedTransition}
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "center top",
            rotateX: 90,
            willChange: "transform, opacity",
          }}
        >
          <span className="transition-colors duration-300 text-foreground">
            {item.icon}
          </span>
          <span className="hidden xs:inline sm:inline whitespace-nowrap">
            {item.label}
          </span>
        </motion.a>
      </motion.div>
    </motion.li>
  );
});

MenuItem.displayName = "MenuItem";

export function Nav() {
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [shouldShowNav, setShouldShowNav] = React.useState(true);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const scrollTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const navHeight = 20;
  const scrollThreshold = 10;

  const isDarkTheme = theme === "dark";

  const gradientClass = React.useMemo(() => {
    return `absolute -inset-1 sm:-inset-2 bg-gradient-radial from-transparent ${
      isDarkTheme
        ? "via-blue-400/30 via-30% via-purple-400/30 via-60% via-red-400/30 via-90%"
        : "via-blue-400/20 via-30% via-purple-400/20 via-60% via-red-400/20 via-90%"
    } to-transparent rounded-xl sm:rounded-3xl z-0 pointer-events-none`;
  }, [isDarkTheme]);

  const effectiveNavGlowVariants = prefersReducedMotion
    ? { initial: {}, hover: {} }
    : navGlowVariants;

  React.useEffect(() => {
    const handleForceShowNav = () => {
      setShouldShowNav(true);

      setIsScrolling(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);

        setLastScrollY(window.scrollY);
      }, 1000);
    };

    document.addEventListener("forceShowNav", handleForceShowNav);

    return () => {
      document.removeEventListener("forceShowNav", handleForceShowNav);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  React.useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined" && !isScrolling) {
        const currentScrollY = window.scrollY;
        const scrollDifference = Math.abs(currentScrollY - lastScrollY);

        if (scrollDifference > scrollThreshold) {
          if (currentScrollY < lastScrollY || currentScrollY <= 0) {
            setShouldShowNav(true);
          } else if (
            currentScrollY > lastScrollY &&
            currentScrollY > navHeight
          ) {
            setShouldShowNav(false);
          }

          setLastScrollY(currentScrollY);
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar, { passive: true });

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY, navHeight, scrollThreshold, isScrolling]);

  return (
    <motion.header
      className="fixed z-50 px-4 py-2 "
      initial="hidden"
      animate={shouldShowNav ? "visible" : "hidden"}
      variants={navScrollVariants}
    >
      <motion.nav
        className="p-1 sm:p-2 rounded-xl sm:rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border-2 !border-gray-500 shadow-lg relative overflow-hidden w-full mx-auto bg-background/90"
        initial="initial"
        whileHover="hover"
        style={{ willChange: "transform, opacity" }}
      >
        <motion.div
          className={gradientClass}
          variants={effectiveNavGlowVariants}
          style={{ willChange: "opacity" }}
          layoutId="nav-glow"
        />

        <div className="flex items-center justify-between relative z-10">
          {/* Logo section*/}
          <motion.div
            className="flex items-center gap-1 sm:gap-2"
            variants={logoVariants}
          >
            <img
              src={logo}
              alt="Logo"
              className="flex-shrink-0"
              style={{
                width: "30px",
                height: "30px",
                objectFit: "contain",
              }}
            />
            <span className="text-xl p-1">
              Miguel<span style={{ color: "hsl(var(--logo))" }}>Karma</span>
            </span>
            <div className="h-8 w-px bg-border lg:ml-2 hidden lg:block" />
          </motion.div>

          {/* Desktop menu */}
          <motion.ul
            className="hidden lg:flex items-center gap-1 sm:gap-2"
            variants={menuContainerVariants}
          >
            {menuItems.map((item) => (
              <MenuItem key={item.label} item={item} />
            ))}
            <motion.div variants={menuItemEntryVariants}>
              <ThemeToggle />
            </motion.div>
          </motion.ul>

          {/* Mobile menu */}
          <motion.div
            className="flex ml-2 items-center lg:hidden"
            variants={fadeInScale}
            initial="start"
            animate="end"
            transition={{ delay: 0.7 }}
          >
            <ThemeToggle />
            <MobileMenu menuItems={menuItems} />
          </motion.div>
        </div>
      </motion.nav>
    </motion.header>
  );
}

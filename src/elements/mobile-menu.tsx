"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  gradient: string;
}

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
  willChange: "transform, opacity",
};

const MobileMenuItem = React.memo(
  ({ item, onItemClick }: { item: MenuItem; onItemClick?: () => void }) => {
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

      if (onItemClick) {
        onItemClick();
      }
    };

    return (
      <motion.li className="relative">
        <motion.div
          className="block rounded-lg group relative"
          style={{ perspective: "600px" }}
          whileHover="hover"
          initial="initial"
        >
          <motion.div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background: item.gradient,
              opacity: 0,
              borderRadius: "8px",
              willChange: "transform, opacity",
            }}
            layoutId={`mobile-glow-${item.label}`}
          />
          <motion.a
            href={item.href}
            onClick={handleClick}
            className="flex items-center gap-3 px-3 py-2.5 relative z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-lg text-sm w-full"
            transition={sharedTransition}
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "center bottom",
              willChange: "transform, opacity",
            }}
          >
            <span className="transition-colors duration-300 text-foreground">
              {item.icon}
            </span>
            <span className="whitespace-nowrap">{item.label}</span>
          </motion.a>
          <motion.a
            href={item.href}
            onClick={handleClick}
            className="flex items-center gap-3 px-3 py-2.5 absolute inset-0 z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-lg text-sm w-full"
            transition={sharedTransition}
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "center top",
              rotateX: 90,
              willChange: "transform, opacity",
            }}
          ></motion.a>
        </motion.div>
      </motion.li>
    );
  }
);

MobileMenuItem.displayName = "MobileMenuItem";

interface MobileMenuProps {
  menuItems: MenuItem[];
}

export function MobileMenu({ menuItems }: MobileMenuProps) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleItemClick = () => {
    setIsPopoverOpen(false);
  };

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <motion.button
          className="p-2 rounded-lg hover:bg-accent transition-colors text-foreground ml-2"
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <motion.div
            animate={{ rotate: isPopoverOpen ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {isPopoverOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </motion.div>
        </motion.button>
      </PopoverTrigger>
      <PopoverContent
        className="w-56 p-2 mr-4 mt-2 bg-background/95 backdrop-blur-lg border border-border/40 shadow-lg"
        align="end"
        sideOffset={8}
      >
        <motion.ul
          className="space-y-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
            >
              <MobileMenuItem item={item} onItemClick={handleItemClick} />
            </motion.div>
          ))}
        </motion.ul>
      </PopoverContent>
    </Popover>
  );
}

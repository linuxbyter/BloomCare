"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Users, BookOpen, Newspaper, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: React.ElementType;
}

const defaultItems: NavItem[] = [
  { name: "Home", url: "/", icon: Home },
  { name: "About", url: "/about", icon: Users },
  { name: "Programs", url: "/programs", icon: BookOpen },
  { name: "News", url: "/news", icon: Newspaper },
];

function useActiveTab(items: NavItem[]) {
  const [activeTab, setActiveTab] = useState(items[0].name);

  useEffect(() => {
    function checkPath() {
      const path = window.location.pathname;
      const match = items.find((item) => item.url === path);
      if (match) setActiveTab(match.name);
    }
    checkPath();
    window.addEventListener("popstate", checkPath);
    return () => window.removeEventListener("popstate", checkPath);
  }, [items]);

  return { activeTab, setActiveTab };
}

export function GlassmorphismNavBar({
  items = defaultItems,
  className,
}: {
  items?: NavItem[];
  className?: string;
}) {
  const { activeTab, setActiveTab } = useActiveTab(items);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Desktop — fixed top glassmorphism bar */}
      <div
        className={cn(
          "hidden md:block fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-4",
          className
        )}
      >
        <nav
          aria-label="Main navigation"
          className={cn(
            "flex items-center gap-1 py-1.5 px-2 rounded-full transition-all duration-300",
            "bg-white/40 border border-black/5 backdrop-blur-xl"
          )}
          style={{
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
          }}
        >
          {items.map((item) => {
            const isActive = activeTab === item.name;

            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative text-sm font-medium px-5 py-2 rounded-full transition-all duration-300",
                  "text-gray-500 hover:text-navy",
                  isActive && "text-navy bg-navy/5"
                )}
              >
                <span>{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 w-full rounded-full -z-10 bg-navy/5"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-t-full bg-navy/80">
                      <div className="absolute w-12 h-6 rounded-full blur-md -top-2 -left-2 bg-navy/20" />
                    </div>
                  </motion.div>
                )}
              </Link>
            );
          })}

          <div className="w-px h-6 bg-gray-200 mx-1" />

          <Link
            href="/donate"
            className="text-sm font-semibold px-5 py-2 rounded-full bg-gold text-navy hover:opacity-90 transition-opacity"
          >
            Donate
          </Link>
        </nav>
      </div>

      {/* Mobile — bottom floating glassmorphism bar */}
      {isMobile && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
          <nav
            aria-label="Mobile navigation"
            className={cn(
              "flex items-center gap-1 py-1.5 px-1.5 rounded-full transition-all duration-300",
              "bg-white/40 border border-black/5"
            )}
            style={{
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
            }}
          >
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;

              return (
                <Link
                  key={item.name}
                  href={item.url}
                  onClick={() => setActiveTab(item.name)}
                  className={cn(
                    "relative p-2.5 rounded-full transition-all duration-300",
                    "text-gray-400 hover:text-navy",
                    isActive && "text-navy bg-navy/5"
                  )}
                  aria-label={item.name}
                >
                  <Icon size={20} strokeWidth={2} />
                  {isActive && (
                    <motion.div
                      layoutId="mobile-indicator"
                      className="absolute inset-0 w-full rounded-full -z-10 bg-navy/5"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}

            <div className="w-px h-6 bg-gray-200 mx-0.5" />

            <Link
              href="/donate"
              className="p-2.5 rounded-full text-gold hover:bg-gold/10 transition-colors"
              aria-label="Donate"
            >
              <Heart size={20} strokeWidth={2} />
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

export default GlassmorphismNavBar;

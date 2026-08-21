"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Users, BookOpen, Newspaper, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: React.FC<{ size?: number }>;
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
          "hidden md:block fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-5",
          className
        )}
      >
        <nav
          aria-label="Main navigation"
          className={cn(
            "flex items-center gap-0.5 py-1.5 px-2 rounded-full",
            "bg-white/60 border border-white/80"
          )}
          style={{
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
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
                  "relative text-[13px] font-medium px-5 py-2 rounded-full transition-all duration-300",
                  "text-gray-400 hover:text-navy",
                  isActive && "text-navy font-semibold"
                )}
              >
                <span>{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-full -z-10"
                    style={{ background: "rgba(27, 45, 107, 0.06)" }}
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}

          <div className="w-px h-5 bg-gray-200/80 mx-2" />

          <Link
            href="/donate"
            className="text-[13px] font-semibold px-5 py-2 rounded-full bg-navy text-white hover:bg-navy-light transition-all duration-300"
          >
            Donate
          </Link>
        </nav>
      </div>

      {/* Mobile — bottom floating glassmorphism bar */}
      {isMobile && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 md:hidden">
          <nav
            aria-label="Mobile navigation"
            className={cn(
              "flex items-center gap-1 py-2 px-2 rounded-full",
              "bg-white/70 border border-white/80"
            )}
            style={{
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
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
                    "text-gray-400",
                    isActive && "text-navy"
                  )}
                  aria-label={item.name}
                >
                  <Icon size={20} />
                  {isActive && (
                    <motion.div
                      layoutId="mobile-indicator"
                      className="absolute inset-0 rounded-full -z-10"
                      style={{ background: "rgba(27, 45, 107, 0.06)" }}
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}

            <div className="w-px h-6 bg-gray-200/80 mx-1" />

            <Link
              href="/donate"
              className="p-2.5 rounded-full text-navy"
              aria-label="Donate"
            >
              <Heart size={20} />
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

export default GlassmorphismNavBar;

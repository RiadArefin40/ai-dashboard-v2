'use client';
import AnimatedLink from "./AnimatedLink";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { useTranslation } from "../i18n";

export default function Header({ lang }) {
  const isRTL = lang === 'ar';
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation(lang);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/85 dark:bg-[#050505] backdrop-blur-md border-b border-gray-200/50 dark:border-amber-900/30 shadow-lg dark:shadow-amber-900/10">
      <div className={`max-w-[1900px] mx-auto px-8 h-16 flex items-center ${isRTL ? 'flex-row-reverse' : 'flex-row'} justify-between`}>
        <div className="text-xl font-semibold text-gray-900 dark:text-amber-100">
          {t('dashboard')}
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="flex items-center bg-gray-100/50 dark:bg-[#141414] p-1 rounded-full relative w-[160px]">
            {mounted && (
              <motion.div 
                className="absolute w-[74px] h-8 rounded-full bg-white dark:bg-[#1a1a1a] shadow-sm dark:shadow-amber-900/10"
                initial={false}
                animate={{
                  x: lang === 'en' ? 4 : 82
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.2
                }}
              />
            )}
            <AnimatedLink
              href="/en"
              className={`w-[74px] py-1.5 text-center rounded-full transition-colors duration-200 relative z-10 ${
                lang === 'en'
                  ? 'text-gray-900 dark:text-amber-200'
                  : 'text-gray-700 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-amber-200'
              }`}
            >
              EN
            </AnimatedLink>
            <AnimatedLink
              href="/ar"
              className={`w-[74px] py-1.5 text-center rounded-full transition-colors duration-200 relative z-10 ${
                lang === 'ar'
                  ? 'text-gray-900 dark:text-amber-200'
                  : 'text-gray-700 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-amber-200'
              }`}
            >
              عربي
            </AnimatedLink>
          </div>
        </div>
      </div>
    </header>
  );
} 
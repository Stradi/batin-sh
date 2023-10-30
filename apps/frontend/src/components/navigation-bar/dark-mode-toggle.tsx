'use client';

/* eslint-disable react/jsx-sort-props -- In `motion` components, sorting alphabetically looks bad. */
/* TODO: This component throws an error to Next.js console during SSR. I don't know why, fix that. */

import { MoonIcon, SunIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import useTheme from '@/hooks/use-theme';

const MotionSunIcon = motion(SunIcon);
const MotionMoonIcon = motion(MoonIcon);

const RotateAmount = 30;
const TranslationAmount = 3;

export default function DarkModeToggle() {
  const [theme, _, toggleTheme] = useTheme();
  const Component = theme === 'dark' ? MotionSunIcon : MotionMoonIcon;

  return (
    <button onClick={toggleTheme} type="button">
      <AnimatePresence>
        <Component
          className="w-5 h-5"
          strokeWidth={1.75}
          initial={{
            translateX: -TranslationAmount,
            rotateZ: -RotateAmount,
          }}
          animate={{
            translateX: 0,
            rotateZ: 0,
          }}
          exit={{
            translateX: TranslationAmount,
            rotateZ: RotateAmount,
          }}
        />
      </AnimatePresence>
    </button>
  );
}

import { Variants } from "framer-motion";

export const titleAnimation = {
  animate: { y: 0, opacity: 1 },
  initial: { y: -90, opacity: 0 },
  transition: { type: "tween", ease: "easeInOut",  duration: 0.5}
};

export const smallBasketAnimation = {
  animate: { y: -300, opacity: 1, rotate: 0 },
  initial: { y: -500, opacity: 0, rotate: 60 },
  transition: { type: "tween", ease: "easeInOut", duration: 0.6, }
};

export const bigBasketAnimation = {
  animate: { y: -250, opacity: 1, rotate: 0 },
  initial: { y: -700, opacity: 0, rotate: 40 },
  transition: { type: "tween", ease: "easeInOut", duration: 0.5 }
};

export const trackAnimation = {
  x: ["-50%", "-0%"],
  transition: { duration: 8 * 3, ease: "linear", repeat: Infinity }
};

export const titleVariants: Variants = {
  offscreen: {
    x: -800
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

export const cardVariants: Variants = {
  offscreen: {
    x: -900,
    opacity: 0,
    rotate: -30
  },
  onscreen: (index: number) => ({
    opacity: 1,
    rotate: 0,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.2,
      delay: index * 0.1
    }
  })
};

export const lineVariants: Variants = {
  offscreen: {
    x: -700,
    opacity: 0,
  },
  onscreen: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.7,
      delay: index * 0.1
    }
  })
};

export const cardsPayMentVariants: Variants = {
  offscreen: {
    scale: 0,
    borderRadius: '80%',
  },
  onscreen: (index: number) => ({
    scale: 1,
    borderRadius: '24px',
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.7,
      delay: index * 0.2
    }
  })
}
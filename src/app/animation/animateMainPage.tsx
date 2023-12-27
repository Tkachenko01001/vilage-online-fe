export const titleAnimation = {
  animate: { y: 0, opacity: 1 },
  initial: { y: -90, opacity: 0 },
  transition: { type: "tween", ease: "easeInOut",  duration: 0.5}
};

export const elipseAnimation = {
  animate: { opacity: 1 },
  initial: { opacity: 0 },
  transition: { duration: 0.6 }
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
}
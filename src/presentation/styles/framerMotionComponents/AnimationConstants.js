// Defining reference constants for animation of various components (to ensure style & motion consistency)
export const easing = [0.6, -0.05, 0.01, 0.99];
export const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] };
export const transitionEnd = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9], delay: 1.6 };

// Have multiple grouped animated elements appear at slightly offset times.
export const stagger = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.2,
            staggerDirection: 1,
        }
    }
};

export const backdrop = {
    visible: {opacity: 1},
    hidden: {opacity: 0}
}

export const modal = {
    visible: {y: "200px", opacity: 1},
    hidden: {y: "-100vh", opacity: 0},
    transition: {delay: 0.5}
}

// Defining reference constants for animation of various components (to ensure style & motion consistency)
export const fadeInUp = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 1,
            duration: .3
        }
    }
};


export const sidebarDots = {
    initial: {
      x: "-50vw"
    },
    animate: {
      x: "0vw",
      transition: {
        duration: .2, ...transition
      }
    }
  };

// Animation properties for the sidebar dots which appear on UploadPage.js
export const sidebarDots2 = {
    initial: {
        x: "-100vw"
    },
    animate: {
        x: "-50vw",
        transition: {
            duration: .2, ...transition
        }
    }
};

// Animation properties for the title text which enters from the left on EnablePage.js
export const letter = {
    initial: {
        opacity: 0,
        x: "-80vw",
    },
    animate: {
        opacity: 1,
        x: "0vw",
        transition: {
            duration: 1, ...transition,
            delay: 1.2,
            ease: easing
        }
    }
};

export const h3 = {
    initial: {
        top: "-100%",
        opacity: 0,
        transition: { duration: 0.5, ease: easing },
        scale: 0.8
    },
    animate: {
        top: "0%",
        opacity: 0.15,
        scale: 1,
        transition: {
            duration: 1,
            ease: easing
        }
    }
};

export const h3Opaque = {
    initial: {
        top: "-100%",
        opacity: 0,
        transition: { duration: 0.5, ease: easing },
        scale: 0.8
    },
    animate: {
        top: "0%",
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            ease: easing
        }
    }
}

// Animation constants for title text which enters from the right on EnablePage.js
export const letterR = {
    initial: {
        opacity: 0,
        x: "80vw",
    },
    animate: {
        opacity: 1,
        x: "0vw",
        transition: {
            duration: 1, ...transition,
            delay: 1.2,
            ease: easing
        }
    }
};

// Animation properties for the team logo
export const animateNLU = {
    initial: {
        y: 0,
        x: '-40vw',
        opacity: 0,
        transition: { duration: 0.05, ease: easing }
    },
    animate: {
        y: 0,
        x: '-30vw',
        opacity: 1,
        transition: {
            delay: .8,
            duration: 0.6,
            ease: easing
        }
    }
};

// Attributes for the transition between different pages.
export const containerDropIn = {
    initial: { opacity: 0, height: 0},
    animate: {opacity: 1, height: "100vh"},
    transition: { duration: 1, ease: easing}
}

// Animation properties for svg drawing animations.
export const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
        const delay = 1
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 6, bounce: 0 },
                opacity: { delay, duration: 0.5 },
            }
        };
    }
};

export const drawSuccess = {
    hidden: { pathLength: 0, opacity: 0, rotate: 360},
    visible: (i) => {
      const delay = 0.5
      return {
        pathLength: 1,
        opacity: 1,
        rotate: 0,
        transition: {
          pathLength: { delay, type: "spring", duration: 3, bounce: 0 },
          opacity: { delay, duration: 0.05 },
          rotate: {delay, duration: 1}
        }
      };
    }
  };
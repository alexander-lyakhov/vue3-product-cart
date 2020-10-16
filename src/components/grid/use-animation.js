export const delay = (timeout = 1000) => {
  return new Promise(resolve => setTimeout(resolve, timeout))
};

export const action = (el, className) => {
  el.classList.add(className);

  return new Promise(resolve => {
    const handler = () => {
      el.removeEventListener('animationend', handler);
      el.classList.remove(className);

      resolve();
    }

    el.addEventListener('animationend', handler);
  })
};

export const fadeIn = async (el, timeout = 0) => {
  timeout && await delay(timeout);
  return action(el, 'fade-in');
}

export const fadeOut = async (el, timeout = 0) => {
  timeout && await delay(timeout);
  return action(el, 'fade-out');
}


export default function useAnimation () {
  return {
    delay,
    action,
    fadeIn,
    fadeOut,
  }
};

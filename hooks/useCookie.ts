import { useState, useEffect } from 'react';

const cookieExpireDay = 45;

function setCookie(name: string, val: string) {
  const date = new Date();
  const value = val;

  date.setTime(date.getTime() + cookieExpireDay * 24 * 60 * 60 * 1000);
  document.cookie = name + '=' + value + '; expires=' + date.toUTCString() + '; path=/';
}

function getCookie(name: string) {
  const value = '; ' + document.cookie;
  const parts = value.split('; ' + name + '=');
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift();
  }
}

function useCookie<T>(cookieName: string, initialValue: T) {
  const [value, setValue] = useState(() => {
    const cookieValue = getCookie(cookieName);
    return cookieValue ? JSON.parse(cookieValue) : initialValue;
  });

  useEffect(() => {
    setCookie(cookieName, JSON.stringify(value));
  }, [cookieName, value]);

  return [value, setValue] as const;
}

export default useCookie;

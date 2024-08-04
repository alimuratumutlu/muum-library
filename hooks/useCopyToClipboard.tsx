// useCopyToClipboard hook
import { useState } from 'react';

export default function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  function copy(text: string) {
    if (!navigator.clipboard) {
      console.log(text);
      return;
    }

    navigator.clipboard.writeText(text).then(
      () => {
        setIsCopied(true);
      },
      () => {
        setIsCopied(false);
      },
    );
  }

  return { isCopied, copy };
}

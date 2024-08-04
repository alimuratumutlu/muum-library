import { useEffect, useState } from 'react';

export type ExternalStyleStatus = 'idle' | 'loading' | 'ready' | 'error';

export interface ExternalStyleOptions {
  shouldPreventLoad?: boolean;
  removeOnUnmount?: boolean;
  container?: HTMLElement;
}

const cachedStyleStatuses: Record<string, ExternalStyleStatus | undefined> = {};

function getStyleNode(href: string) {
  const node: HTMLLinkElement | null = document.querySelector(`link[href="${href}"]`);
  const status = node?.getAttribute('data-status') as ExternalStyleStatus | undefined;

  return {
    node,
    status,
  };
}

function useExternalStyle(href: string | null, options?: ExternalStyleOptions): ExternalStyleStatus {
  const [status, setStatus] = useState<ExternalStyleStatus>(() => {
    if (!href || options?.shouldPreventLoad) {
      return 'idle';
    }

    if (typeof window === 'undefined') {
      return 'loading';
    }

    return cachedStyleStatuses[href] ?? 'loading';
  });

  useEffect(() => {
    if (!href || options?.shouldPreventLoad) {
      return;
    }

    const cachedStyleStatus = cachedStyleStatuses[href];
    if (cachedStyleStatus === 'ready' || cachedStyleStatus === 'error') {
      setStatus(cachedStyleStatus);
      return;
    }

    const style = getStyleNode(href);
    let styleNode = style.node;

    if (!styleNode) {
      styleNode = document.createElement('link');
      styleNode.href = href;
      styleNode.rel = 'stylesheet';
      styleNode.setAttribute('data-status', 'loading');
      (options?.container ?? document.head).appendChild(styleNode);

      const setAttributeFromEvent = (event: Event) => {
        const styleStatus: ExternalStyleStatus = event.type === 'load' ? 'ready' : 'error';

        styleNode?.setAttribute('data-status', styleStatus);
      };

      styleNode.addEventListener('load', setAttributeFromEvent);
      styleNode.addEventListener('error', setAttributeFromEvent);
    } else {
      setStatus(style.status ?? cachedStyleStatus ?? 'loading');
    }

    const setStateFromEvent = (event: Event) => {
      const newStatus = event.type === 'load' ? 'ready' : 'error';
      setStatus(newStatus);
      cachedStyleStatuses[href] = newStatus;
    };

    styleNode.addEventListener('load', setStateFromEvent);
    styleNode.addEventListener('error', setStateFromEvent);

    return () => {
      if (styleNode) {
        styleNode.removeEventListener('load', setStateFromEvent);
        styleNode.removeEventListener('error', setStateFromEvent);
      }

      if (styleNode && options?.removeOnUnmount) {
        styleNode.remove();
      }
    };
  }, [href, options?.shouldPreventLoad, options?.removeOnUnmount, options?.container]);

  return status;
}

export default useExternalStyle;

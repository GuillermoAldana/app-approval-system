'use client';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ReactNode } from 'react';

const createEmotionCache = () => {
    return createCache({ key: 'mui', prepend: true });
};

export function EmotionCacheProvider({ children }: { children: ReactNode }) {
    const cache = createEmotionCache();
    return <CacheProvider value={cache}>{children}</CacheProvider>;
}

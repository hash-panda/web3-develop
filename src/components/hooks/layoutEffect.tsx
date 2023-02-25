import {useEffect, useLayoutEffect} from 'react';

export const layoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
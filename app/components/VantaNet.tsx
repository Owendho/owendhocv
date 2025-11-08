"use client";
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
// Vanta imports its effect initializer from the module root (no types bundled by default)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import NET from 'vanta/dist/vanta.net.min';

interface VantaNetProps {
  className?: string;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  scale?: number;
  scaleMobile?: number;
  color?: number; // hex int (e.g. 0xff0000)
  backgroundColor?: number; // hex int
  points?: number;
  maxDistance?: number;
  spacing?: number;
  speed?: number;
}

export default function VantaNet({
  className = '',
  mouseControls = true,
  touchControls = true,
  gyroControls = false,
  minHeight = 200.0,
  minWidth = 200.0,
  scale = 1.0,
  scaleMobile = 1.0,
  color = 0x8080ff,
  backgroundColor = 0x000000,
  points = 12.0,
  maxDistance = 20.0,
  spacing = 18.0,
  speed = 0.3,
}: VantaNetProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const vantaEffectRef = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffectRef.current && ref.current) {
      vantaEffectRef.current = NET({
        el: ref.current,
        THREE,
        mouseControls,
        touchControls,
        gyroControls,
        minHeight,
        minWidth,
        scale,
        scaleMobile,
        color,
        backgroundColor,
        points,
        maxDistance,
        spacing,
        speed,
      });
    }
    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy?.();
        vantaEffectRef.current = null;
      }
    };
  }, []); // Empty dependency array - only run once on mount

  return (
    <div
      ref={ref}
      className={`vanta-net-bg ${className}`.trim()}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    />
  );
}

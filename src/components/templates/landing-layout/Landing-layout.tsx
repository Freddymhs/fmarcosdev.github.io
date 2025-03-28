// MainLayout.tsx
import { ReactNode } from "react";

interface LandingLayoutProps {
  version: string;
  children: ReactNode;
}

const LandingLayout: React.FC<LandingLayoutProps> = ({ version, children }) => {
  return (
    <div className="flex flex-col justify-center h-svh bg-black text-yellow-300 relative">
      <div className="z-10 px-10">{children}</div>
      <div className="flex justify-center mt-7 z-10">{version}</div>
      <BackgroundEffects />
    </div>
  );
};

export default LandingLayout;

function BackgroundEffects() {
  return (
    <>
      {/* Gradientes de fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-black/90"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 pointer-events-none"></div>

      {/* Efecto de líneas de escaneo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent bg-[length:100%_3px] pointer-events-none"></div>

      {/* Efecto de cuadrícula */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,0,255,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(255,0,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
    </>
  );
}

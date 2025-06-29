import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const HelicalScrollCards = ({ hiddenReposition = true }) => {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const [, setScrollPosition] = useState(0);
  const [hiddenCards, setHiddenCards] = useState(new Set());
  const scrollOffsetRef = useRef(0);
  const targetScrollRef = useRef(0);

  const config = {
    radius: 5,
    turns: 4,
    segments: 100,
    heightSpan: 10,
    cardCount: 10,
    scrollSensitivity: 0.15,
    transitionThreshold: 0.95,
  };

  useEffect(() => {
    if (!mountRef.current) return;

    // Limpiar contenido previo
    mountRef.current.innerHTML = "";

    // Obtener dimensiones del contenedor
    const updateSize = () => {
      const rect = mountRef.current.getBoundingClientRect();
      return {
        width: rect.width,
        height: rect.height,
      };
    };

    let { width, height } = updateSize();

    // Setup escena
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    const cameraY = config.heightSpan / 2;
    camera.position.set(0, cameraY, Math.max(20, config.heightSpan * 1.0));
    camera.lookAt(0, cameraY, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    // ✅ Configurar el canvas para que use 100% del espacio
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Generar puntos de la hélice
    const { radius, turns, segments, heightSpan, cardCount } = config;
    const points = Array.from({ length: segments }, (_, i) => {
      const theta = (i / segments) * turns * Math.PI * 2;
      return new THREE.Vector3(
        radius * Math.cos(theta),
        (i / segments) * heightSpan,
        radius * Math.sin(theta)
      );
    });

    // Agregar línea de trayectoria
    scene.add(
      new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(points),
        new THREE.LineBasicMaterial({ color: 0x2563eb, linewidth: 2 })
      )
    );

    // Crear tarjetas con números
    const cards = Array.from({ length: cardCount }, (_, i) => {
      const idx = Math.floor((i / cardCount) * segments);
      const card = new THREE.Mesh(
        new THREE.BoxGeometry(1, 0.5, 0.1),
        new THREE.MeshPhongMaterial({ color: 0xdc2626, shininess: 50 })
      );
      card.position.copy(points[idx]);

      // Canvas para número
      const canvas = Object.assign(document.createElement("canvas"), {
        width: 128,
        height: 64,
      });
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#dc2626";
      ctx.fillRect(0, 0, 128, 64);
      Object.assign(ctx, {
        fillStyle: "#ffffff",
        font: "bold 24px Arial",
        textAlign: "center",
        textBaseline: "middle",
      });
      ctx.fillText(`${i + 1}`, 64, 32);

      const numberPlane = new THREE.Mesh(
        new THREE.PlaneGeometry(0.8, 0.4),
        new THREE.MeshBasicMaterial({
          map: new THREE.CanvasTexture(canvas),
          transparent: true,
        })
      );
      numberPlane.position.z = 0.06;
      card.add(numberPlane);

      card.userData = { index: i };
      scene.add(card);
      return card;
    });

    // Iluminación
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Event handlers
    const handleWheel = (e) => {
      e.preventDefault();
      targetScrollRef.current +=
        (e.deltaY > 0 ? 1 : -1) * config.scrollSensitivity;
    };

    const handleResize = () => {
      if (!mountRef.current || !rendererRef.current || !cameraRef.current)
        return;

      const { width: newWidth, height: newHeight } = updateSize();

      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newWidth, newHeight);
    };

    // ✅ Usar ResizeObserver para detectar cambios de tamaño más precisos
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        if (rendererRef.current && cameraRef.current) {
          cameraRef.current.aspect = newWidth / newHeight;
          cameraRef.current.updateProjectionMatrix();
          rendererRef.current.setSize(newWidth, newHeight);
        }
      }
    });

    resizeObserver.observe(mountRef.current);

    // Función para detectar si una tarjeta está en transición
    const isCardInTransition = (normalizedPos) => {
      const threshold = config.transitionThreshold;
      return normalizedPos > threshold || normalizedPos < 1 - threshold;
    };

    // Animación
    const animate = () => {
      requestAnimationFrame(animate);

      scrollOffsetRef.current +=
        (targetScrollRef.current - scrollOffsetRef.current) * 0.08;
      setScrollPosition(scrollOffsetRef.current);

      const newHiddenCards = new Set();

      cards.forEach((card, index) => {
        let pos =
          ((index / cardCount) * segments + scrollOffsetRef.current) % segments;
        if (pos < 0) pos += segments;

        const posIdx = Math.floor(pos);
        const nextIdx = (posIdx + 1) % points.length;
        const fraction = pos - posIdx;

        const normalizedPos = pos / segments;
        const shouldHide =
          hiddenReposition && isCardInTransition(normalizedPos);

        if (shouldHide) {
          newHiddenCards.add(index);
          card.visible = false;
        } else {
          card.visible = true;

          card.position.copy(
            new THREE.Vector3().lerpVectors(
              points[posIdx],
              points[nextIdx],
              fraction
            )
          );

          const tangent = new THREE.Vector3()
            .subVectors(points[nextIdx], points[posIdx])
            .normalize();

          const lookDirection = new THREE.Vector3()
            .subVectors(camera.position, card.position)
            .normalize();
          card.lookAt(card.position.clone().add(lookDirection));

          card.rotateX(
            Math.atan2(
              tangent.y,
              Math.sqrt(tangent.x * tangent.x + tangent.z * tangent.z)
            )
          );

          if (hiddenCards.has(index) && !shouldHide) {
            card.material.opacity = 0;
            const fadeIn = () => {
              card.material.opacity = Math.min(1, card.material.opacity + 0.05);
              if (card.material.opacity < 1) {
                requestAnimationFrame(fadeIn);
              }
            };
            fadeIn();
          }
        }
      });

      setHiddenCards(newHiddenCards);
      renderer.render(scene, camera);
    };

    // Setup eventos
    mountRef.current.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("resize", handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeEventListener("wheel", handleWheel);
      resizeObserver.disconnect();

      // Limpiar recursos de Three.js
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [hiddenReposition]);

  return (
    <div
      className="holasoyelcomponenteHelicalScroll border-4 border-green-200 "
      style={{
        width: "100%",
        height: `86vh`,
        display: "block",
        position: "relative",
        minHeight: 0,
      }}
    >
      <div
        ref={mountRef}
        style={{
          width: "inherit",
          height: "inherit",
          position: "relative",
          minHeight: 0,
        }}
      />
    </div>
  );
};

export default HelicalScrollCards;

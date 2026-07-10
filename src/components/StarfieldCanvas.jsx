import { useEffect, useRef } from 'react';

export default function StarfieldCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let frameId;
    const stars = Array.from({ length: 78 }, (_, index) => ({
      x: (index * 47) % 1000,
      y: (index * 91) % 700,
      size: 1 + (index % 3),
      speed: 0.16 + (index % 5) * 0.06,
    }));

    function render() {
      const { width, height } = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.clearRect(0, 0, width, height);
      context.fillStyle = '#d9efff';
      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > height) star.y = -star.size;
        context.globalAlpha = 0.35 + (star.size / 5);
        context.fillRect(star.x % width, star.y, star.size, star.size);
      });
      context.globalAlpha = 1;
      frameId = requestAnimationFrame(render);
    }

    render();
    return () => cancelAnimationFrame(frameId);
  }, []);

  return <canvas className="starfield" ref={canvasRef} aria-hidden="true" />;
}

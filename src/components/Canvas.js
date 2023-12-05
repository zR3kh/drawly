import React, { useRef } from 'react'
import './Canvas.css'

export default function Canvas(props) {

  const [isDrawing, setIsDrawing] = React.useState(false);
  const [context, setContext] = React.useState(null);

  const canvasRef = useRef(null);

  /**
   * Render the canvas if context is updated
   * or user is drawing
   */
  React.useEffect(() => {
    const canvas = canvasRef.current;
    setContext(canvas.getContext('2d'));
    canvas.addEventListener('mousedown', draw);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    return () => {
      canvas.removeEventListener('mousedown', draw);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mouseup', stopDrawing);
    }
  }, [context, isDrawing])

  /**
   * Handle drawing process
   * @param {event} e 
   */
  const draw = (e) => {
    if (isDrawing) {
      context.fillStyle = props.currentColor;
      context.strokeStyle = props.currentColor;
      context.lineTo(e.clientX, e.clientY);
      context.lineWidth = props.currentThick * 2;
      context.stroke();
      context.beginPath();
      context.arc(e.clientX, e.clientY, props.currentThick, 0, Math.PI*2);
      context.fill();
      context.beginPath();
      context.moveTo(e.clientX, e.clientY);
    }
  }
  /**
   * Change boolean to process drawing
   */
  const startDrawing = () => {
    setIsDrawing(true);
  }
  /**
   * Change boolean to process drawing
   */
  const stopDrawing = () => {
    setIsDrawing(false)
    context.beginPath();
  }

  return (
    <canvas id='canvas' width={window.innerWidth} height={window.innerHeight} ref={canvasRef} className="canvas"></canvas>
  )
}

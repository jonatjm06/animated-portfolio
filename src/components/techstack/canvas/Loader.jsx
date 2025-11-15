import { Html, useProgress } from "@react-three/drei";
import './loader.scss';

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      className='canvas-loader-container'
    >
      <span className='canvas-loader'></span>
      <p className='canvas-loader-text'>
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
import styles from './style.module.css';

interface IProps {
  thumbNail: string;
}

export const PreviewVideo = (props: IProps) => {
  const {thumbNail} = props 
  
  const src = thumbNail
  const onError = (e: any) => e.target.src = process.env.PUBLIC_URL + "/images/default_empty.png"

  return (
    <img src={src} className={styles["preview_video"]} onError={onError} alt={`video`} />
  )
};
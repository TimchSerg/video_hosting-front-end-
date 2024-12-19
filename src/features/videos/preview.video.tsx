import styles from './style.module.css';

interface IProps {
  thumbNail: string;
}

function detectIphone(){
  const useragent = navigator.userAgent.toLowerCase();
  if (useragent.search("iphone") > -1)
    return true;
  else  return false;
}

export const PreviewVideo = (props: IProps) => {
  const {thumbNail} = props;
  const isIphone = detectIphone();
  const file = isIphone ? thumbNail.replace(".webp", ".gif") : thumbNail;
  
  const src = file
  const onError = (e: any) => e.target.src = process.env.PUBLIC_URL + "/images/default_empty.png"

  return (
    <img src={src} className={styles["preview_video"]} onError={onError} alt={`video`} />
  )
};
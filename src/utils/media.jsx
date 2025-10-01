import Image from 'next-export-optimize-images/image'

const prefix = process.env.NODE_ENV === "production" ? "/Portfolio" : "";

export function StaticImage(props) {
  return <Image {...props} src={props.src} />;
}

export function StaticImg(props) {
  return (
    <a href={prefix + props.src}>
      <Image {...props} 
        alt=""
        src={props.src} 
        width={864} 
        height={540} 
        className="object-contain"/>
    </a>
  );
}

export function Video(props) {
  return (
    <video controls>
      <source {...props} src={prefix + props.src} />
    </video>
  );
}

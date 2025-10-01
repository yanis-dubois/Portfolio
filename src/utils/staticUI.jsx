import Link from "next/link";
import {StaticImage} from "./media.jsx";

export function Section({ children, background = "", body = "", image = "", id }) {
  return (
    <SectionBackground background={background} image={image} id={id}>
      {/* background */}
      <SectionBody body={body} style={{clipPath: `inset(0 0 0 0)`}}>
        {/* properties for childrens */}
        {children}
      </SectionBody>
    </SectionBackground>
  );
}

export function SectionBackground({ children, background = "", image, id }) {
  return (
    <div className={background} style={image ? { backgroundImage: `url('${image}')` } : {}} id={id}>
      {children}
    </div>
  );
}

export function SectionBody({ children, body = "" }) {
  const bodyStyle = `p-6 mx-auto max-w-5xl ${body}`;

  return (
    <div className={bodyStyle} style={{clipPath: `inset(0 0 0 0)`}}>
      {children}
    </div>
  );
}

export function Card({ children, title, titleStyle = "", body = "", variant = "opaque", image = null }) {
  const base = `text-light-soft border border-light-soft/10 shadow-md rounded-2xl ${body}`;
  const styles = {
    opaque: `${base} bg-dark-deep/50`,
    project: `${base} bg-radial-[at_100%_100%] from-dark-soft to-dark-deep`,
    translucent: `${base} bg-dark-deep opacity-92 backdrop-blur-sm`,
  };
  const titleStyleM = `text-light text-xl font-bold mb-4 text-shadow-md/50 ${titleStyle}`;

  // card with an image
  if (variant === "project") {
    return (
      <div className={styles[variant]}>
        <div className="relative">
          <StaticImage src={image} alt="" width={500} height={200} className="w-full h-78 object-cover rounded-t-2xl" />
        </div>
        <div className="p-6">{children}</div>
      </div>
    );
  }

  // default card
  return (
    <div className={`${styles[variant]} p-6`}>
      {title && <h2 className={titleStyleM}>{title}</h2>}
      {children}
    </div>
  );
}

export function Projects({ title, place, date, keywords, pageLink }) {
  return (
    <div>
      {title && <h2 className="text-light text-lg md:text-xl font-bold text-shadow-md/50">{title}</h2>}

      <div className="flex flex-wrap pt-2 pb-2">
        {keywords.map((word, index) => (
          <p key={index} className="pr-1 pt-1">
            <code className="px-2 py-1 bg-dark-soft text-primary-dark rounded-md font-mono text-sm">{word}</code>
          </p>
        ))}
      </div>

      <div className="flex items-center">
        <div>
          {place && <p>📍 {place}</p>}
          <p className="text-light-dark">📅 {date}</p>
        </div>
        <Button link={pageLink} variant="colored" bodyStyle="ml-auto min-w-24">
          Voir plus
        </Button>
      </div>
    </div>
  );
}

export function Button({ children, link, variant = "primary", bodyStyle = "" }) {
  const base = `px-4 py-2 rounded-xl font-medium transition-colors duration-300`;
  const styles = {
    primary: `${base} border border-light-soft hover:border-light bg-dark hover:bg-dark-soft text-light hover:text-light`,
    colored: `${base} bg-primary hover:bg-primary-light text-dark hover:text-dark-soft`,
  };

  return (
    <Link href={link} className={bodyStyle}>
      <button className={styles[variant]}>{children}</button>
    </Link>
  );
}

export function Studies({ title, school, city, date }) {
  return (
    <div className="py-2">
      <h3 className="font-bold text-light">• {title}</h3>
      <p>
        📍 {school}, <span className="text-primary-light">{city}</span>
      </p>
      <p className="text-light-dark">📅 {date}</p>
    </div>
  );
}

export function Links({ emoji, icon, title, url, type = "emoji" }) {
  return type === "emoji" 
    ? (
      <div className="font-bold text-light text-center">
        <Link href={url}>
          {emoji} <span className="underline">{title}</span>
        </Link>
      </div>
    )
    : (
      <div className="font-bold text-light text-center">
        <Link href={url} className="flex justify-center items-center">
          <StaticImage src={icon} alt="" width={32} height={32} className="w-[1rem] h-[1rem]" />
          &nbsp;<span className="underline">{title}</span>
        </Link>
      </div>
    );
}

export function NavLinks({ emoji, icon, title, url, type = "emoji" }) {
  return (
      <div className="text-light-soft">
        <Link href={url}>
          {emoji} <span className="hover:underline hover:text-light">{title}</span>
        </Link>
      </div>
    );
}

export function TitleLinks({ emoji, icon, title, url, type = "emoji" }) {
  return (
      <div className="text-light-soft text-2xl md:text-3xl">
        <Link href={url}>
          {emoji} <span className="hover:text-light">{title}</span>
        </Link>
      </div>
    );
}

export function Footer() {
  return (
    <footer className="bg-dark-soft p-6 text-center text-sm text-light-dark">
      © 2025 Yanis Dubois — Libre et Open Source, hébergé via GitHub Pages<br/>
      Crédits : image #Compétences - Unsplash ; image #Loisirs - Scavengers Reign par Joseph Bennett et Charles Huettner
    </footer>
  );
}

export function PDF({ url }) {
  return (
    <Links url={url} emoji="📄" title="Consultez le rapport PDF →"/>
  );
}

export function Git({ url, title="Accédez au code source →" }) {
  return (
    <Links url={url} icon="/images/icons/Git_icon.png" title={title} type="icon"/>
  );
}

export function Background({ children, src, parentStyle, childStyle }) {
  return (
    <div className={`relative ${parentStyle}`} style={{ clipPath: "inset(0 0 0 0)" }}>

      {/* Background */}
      <div className="fixed inset-0 -z-1" >
        <StaticImage src={src} alt="" fill className="object-cover"/>
      </div>

      {/* Children */}
      <div className={`relative z-1 ${childStyle}`}>
        {children}
      </div>

    </div>
  );
}

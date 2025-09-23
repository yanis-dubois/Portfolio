import Image from "next/image";
import Link from "next/link";

export function Section({ children, background = "", body = "", image = "" }) {
  return (
    <SectionBackground background={background} image={image}>
      {/* background */}
      <SectionBody body={body}>
        {/* properties for childrens */}
        {children}
      </SectionBody>
    </SectionBackground>
  );
}

export function SectionBackground({ children, background = "", image = "" }) {
  const backgroundStyle = `${background}`;
  const imageStyle = `url('${image}')`;

  return (
    <div className={backgroundStyle} style={{ backgroundImage: imageStyle }}>
      {children}
    </div>
  );
}

export function SectionBody({ children, body = "" }) {
  const bodyStyle = `p-6 mx-auto max-w-5xl ${body}`;

  return (
    <div className={bodyStyle}>
      {children}
    </div>
  );
}

export function Card({ children, title, titleStyle = "", body = "", variant = "opaque", type = "", image = null }) {
  const base = `text-light-soft border border-light-soft/10 shadow-md rounded-2xl ${body}`;
  const styles = {
    opaque: `${base} bg-dark`,
    translucent: `${base} bg-dark/70 backdrop-blur-sm`,
  };
  const titleStyleM = `text-light text-xl font-bold mb-4 ${titleStyle}`;

  // card with an image
  if (type === "project") {
    return (
      <div className={styles[variant]}>
        <div className="relative">
          <Image src={image} alt="" width={500} height={200} className="w-full h-78 object-cover rounded-t-2xl" />
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
      {title && <h2 className="text-light text-xl font-bold">{title}</h2>}

      <div className="flex pt-2 pb-2">
        {keywords.map((word, index) => (
          <p key={index} className="pr-1">
            <code className="px-2 py-1 bg-dark-soft text-primary-dark rounded-md font-mono text-sm">{word}</code>
          </p>
        ))}
      </div>

      <div className="flex items-center">
        <div>
          {place && <p>📍 {place}</p>}
          <p className="text-light-dark">📅 {date}</p>
        </div>
        <Button link={pageLink} variant="colored" bodyStyle="ml-auto">
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
          <Image src={icon} alt="" width={32} height={32} className="w-[1rem] h-[1rem]" />
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

export function Footer() {
  return <footer className="bg-dark-soft p-6 text-center text-sm text-light-dark">© 2025 Yanis Dubois — Libre et Open Source</footer>;
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

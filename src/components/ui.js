export function Section({ children, background = "", body = "", image = ""}) {
    const backgroundStyle = `${background}`;
    const bodyStyle = `p-6 mx-auto max-w-5xl ${body}`;
    const imageStyle = `url('${image}')`;

    return (
        <div className={backgroundStyle} style={{backgroundImage: imageStyle}}>
        {/* background */}
            <div className={bodyStyle}>
                {/* properties for childrens */}
                {children}
            </div>
        </div>
    );
}

export function Card({ children, title, body = "", variant = "opaque", type = "", image = ""}) {
    const base = `text-light-soft border border-light-soft/10 shadow-md rounded-2xl ${body}`;
    const styles = {
        opaque: `${base} bg-dark`,
        translucent: `${base} bg-dark/70 backdrop-blur-sm`,
    };

    // card with an image
    if (type === "project") {
        return (
            <div className={styles[variant]}>
                <img className="rounded-t-2xl" src={image} alt="project"/>
                <div className="p-6">
                    {children}
                </div>
            </div>
        );
    }

    // default card
    return (
        <div className={`${styles[variant]} p-6`}>
            {title && <h2 className="text-light text-xl font-bold mb-4">{title}</h2>}
            {children}
        </div>
    );
}

export function Projects({ title, place, date, keywords }) {
    return (
        <div>
            {title && <h2 className="text-light text-xl font-bold">{title}</h2>}

            <p className="flex pt-2 pb-2">
                {keywords.map((word, index) => (
                    <p className="pr-1"><code className="px-2 py-1 bg-dark-soft text-primary-dark rounded-md font-mono text-sm">
                        {word}
                    </code></p>
                ))}
            </p>

            <div className="flex items-center">
                <div>
                    <p>📍 {place}</p>
                    <p className="text-light-dark">📅 {date}</p>
                </div>
                <Button variant="colored" bodyStyle="ml-auto">Voir plus</Button>
            </div>
        </div>
    );
}

export function Button({ children, onClick, variant = "primary", bodyStyle = "" }) {
    const base = `px-4 py-2 rounded-xl font-medium transition-colors duration-200 ${bodyStyle}`;
    const styles = {
        primary: `${base} border border-light-soft hover:border-light bg-dark hover:bg-dark-soft text-light hover:text-light`,
        colored: `${base} bg-primary hover:bg-primary-light text-dark hover:text-dark-soft`,
    };

    return (
        <button onClick={onClick} className={styles[variant]}>
            {children}
        </button>
    );
}

export function Studies({ title, school, city, date }) {
    return (
        <div className="py-2">
            <h3 className="font-bold text-light">• {title}</h3>
            <p>📍 {school}, <span className="text-primary-light">{city}</span></p>
            <p className="text-light-dark">📅 {date}</p>
        </div>
    );
}

export function Link({ emoji, title, url }) {
    return (
        <a className="font-bold text-light text-center" href={url}>
            {emoji} <span className="underline">{title} →</span>
        </a>
    );
}

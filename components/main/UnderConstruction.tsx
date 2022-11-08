import "./styles.css";

type Props = {};

const phrasalArray = "COMING SOON...!";

const UnderConstruction = (props: Props) => {
  return (
    <section className="main__section--underConstruction waviy">
      {phrasalArray.split("").map((word, index) => (
        <span
          className="main__h1--underConstruction"
          key={index}
          style={{ "--i": `${index}` } as React.CSSProperties}
        >{` ${word} `}</span>
      ))}
    </section>
  );
};

export default UnderConstruction;

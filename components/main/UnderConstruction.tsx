import "./styles.css";

import { useTranslation } from "react-i18next";
import { tkeys } from "../../translations";

const UnderConstruction = () => {
  const { t, i18n } = useTranslation();

  const phrasalArray = `${t(tkeys.in_building)}`;
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

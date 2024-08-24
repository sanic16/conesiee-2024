import HomeHeading from "@/components/homeHeading/HomeHeading";
import classes from "./info.module.css";

const info = [
  {
    id: 1,
    title: "Estudiantes USAC",
    options: [
      {
        id: 1,
        title: "Simple (Sin Cena de Gala)",
        price: 400,
      },
      {
        id: 2,
        title: "Completo (Con Cena de Gala)",
        price: 500,
      },
    ],
  },
  {
    id: 3,
    title: "Combo Estudiantes USAC (3 personas)",
    options: [
      {
        id: 2,
        title: "Completo (Con Cena de Gala)",
        price: 450 * 3,
      },
    ],
  },
  {
    id: 2,
    title: "Externos",
    options: [
      {
        id: 1,
        title: "Simple (Sin Cena de Gala)",
        price: 500,
      },
      {
        id: 2,
        title: "Completo (Con Cena de Gala)",
        price: 600,
      },
    ],
  },

  {
    id: 4,
    title: "Combo Externos (3 personas)",
    options: [
      {
        id: 2,
        title: "Completo (Con Cena de Gala)",
        price: 550 * 3,
      },
    ],
  },
  {
    id: 5,
    title: "Day Pass (Solo un día de actividades)",
    options: [
      {
        id: 3,
        title: "Day Pass",
        price: 200,
      },
    ],
  },
];

const Info = () => {
  return (
    <div className={classes.info__container}>
      <HomeHeading title="Información de inscripción" description="" />
      <div className={classes.info}>
        {info.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <ul>
                {item.options.map((option) => {
                  return (
                    <li key={option.id}>
                      {option.title} - Q{option.price}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Info;

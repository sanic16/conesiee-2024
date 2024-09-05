import Link from "next/link";
import classes from "./scheduleTable.module.css";

const ScheduleTable = () => {
  return (
    <div className={classes.schedule__wrapper}>
      <div className={classes.schedule__table}>
        <div className={`${classes.row} ${classes.header}`}>
          <div className={classes.cell}>HORA</div>
          <div className={classes.cell}>LUNES 23</div>
          <div className={classes.cell}>MARTES 24</div>
          <div className={classes.cell}>MIÉRCOLES 25</div>
          <div className={classes.cell}>JUEVES 26</div>
          <div className={classes.cell}>VIERNES 27</div>
          <div className={classes.cell}>SÁBADO 28</div>
        </div>
        {/* HOUR 08:00 */}
        <div className={classes.row}>
          <div className={`${classes.cell} ${classes.gray}`}>08:00</div>
          <div className={`${classes.cell} ${classes.rowspan} ${classes.blue}`}>
            VISITA TÉCNICA
            <Link href={`/visitas/planta-industrial-samboro-23`}>Samboro</Link>
            <Link href={`/visitas/colgate`}>Colgate</Link>
            <Link href={`/visitas/alimentos-sa`}>Alimentos S.A.</Link>
            <Link href={`/visitas/subestacion-guatemala-sur-23`}>
              Subestación Guate Sur
            </Link>
          </div>
          <div className={`${classes.cell} ${classes.rowspan} ${classes.blue}`}>
            VISITA TÉCNICA{" "}
            <Link href={`/visitas/parque-eolico-san-antonio`}>
              Parque Eólico San Antonio
            </Link>
            <Link href={`/visitas/administrador-de-mercado-mayorista`}>
              AMM
            </Link>
            <Link href={`/visitas/planta-industrial-samboro-24`}>Samboro</Link>
            <Link href={`/visitas/subestacion-guatemala-sur-24`}>
              Subestación Guate Sur
            </Link>
          </div>
          <div
            className={`${classes.cell} ${classes.rowspan} ${classes.green}`}
          >
            TALLER UNIVERSIDAD GALILEO
            <Link href="/congreso/talleres/talleres-universidad-galileo">
              Taller Internet de las Cosas (IoT)
            </Link>
            <Link href="/congreso/talleres/talleres-universidad-galileo">
              Taller Diseño Asistido por Computadora (CAD) e Impresión 3D
            </Link>
            <Link href="/congreso/talleres/talleres-universidad-galileo">
              Taller Sistemas Operativos de Robots (ROS)
            </Link>
            <Link href="/congreso/talleres/talleres-universidad-galileo">
              Taller Hackeo Ético
            </Link>
            <Link href="/congreso/talleres/talleres-universidad-galileo">
              Taller Diseño de PCB´s en Altium
            </Link>
          </div>
          <div className={`${classes.cell} ${classes.dark__green}`}>
            INGRESO HOTEL
          </div>
          <div
            className={`${classes.cell} ${classes.rowspan} ${classes.green}`}
          >
            TALLER EN INTECAP
            <Link href="/congreso/talleres/talleres-intecap">Robótica</Link>
            <Link href="/congreso/talleres/talleres-intecap">
              Industria 4.0
            </Link>
            <Link href="/congreso/talleres/talleres-intecap">
              Procesos Industriales
            </Link>
            <Link href="/congreso/talleres/talleres-intecap">
              Energía renovable
            </Link>
          </div>
          <div
            className={`${classes.cell} ${classes.rowspan__9} ${classes.gray}`}
          ></div>
        </div>
        {/* HOUR 09:00 */}
        <div className={classes.row}>
          <div className={`${classes.cell} ${classes.gray}`}>09:00</div>
          <div className={`${classes.cell} ${classes.hidden}`}></div>{" "}
          <div className={`${classes.cell} ${classes.hidden}`}></div>{" "}
          <div className={`${classes.cell} ${classes.hidden}`}></div>{" "}
          <div className={`${classes.cell} ${classes.yellow}`}>CONFERENCIA</div>
          <div className={`${classes.cell} ${classes.hidden}`}></div>{" "}
          <div className={`${classes.cell} ${classes.hidden}`}></div>{" "}
        </div>
        {/* HOUR 10:00 */}
        <div className={classes.row}>
          <div className={`${classes.cell} ${classes.gray}`}>10:00</div>
          <div className={`${classes.cell} ${classes.hidden}`}></div>{" "}
          <div className={`${classes.cell} ${classes.hidden}`}></div>{" "}
          <div className={`${classes.cell} ${classes.hidden}`}></div>{" "}
          <div className={`${classes.cell} ${classes.orange}`}>
            COFFEE BREAK
          </div>
          <div className={`${classes.cell} ${classes.hidden}`}></div>{" "}
          <div className={`${classes.cell} ${classes.hidden}`}></div>{" "}
        </div>
        {/* HOUR 11:00 */}
        <div className={classes.row}>
          <div className={`${classes.cell} ${classes.gray}`}>11:00</div>
          <div className={`${classes.cell} ${classes.hidden}`}></div>
          <div className={`${classes.cell} ${classes.hidden}`}></div>
          <div className={`${classes.cell} ${classes.hidden}`}></div>
          <div className={`${classes.cell} ${classes.yellow}`}>
            MARKETING Y TECNOLOGÍA - José Algara
          </div>
          <div className={`${classes.cell} ${classes.hidden}`}></div>
          <div className={`${classes.cell} ${classes.hidden}`}></div>
        </div>
        {/* HOUR 12:00 */}
        <div className={classes.row}>
          <div className={`${classes.cell} ${classes.gray}`}>12:00</div>
          <div className={`${classes.cell} ${classes.hidden}`}></div>
          <div className={`${classes.cell} ${classes.hidden}`}></div>
          <div className={`${classes.cell} ${classes.hidden}`}></div>
          <div className={`${classes.cell} ${classes.yellow}`}>
            AUTOMATIZACIÓN ENFOCADO A PROCESOS DE BIOTECNOLOGÍA - Ing. Juan
            Valdéz
          </div>
          <div className={`${classes.cell} ${classes.hidden}`}></div>{" "}
          <div className={`${classes.cell} ${classes.hidden}`}></div>{" "}
        </div>
        {/* HOUR 13:00 */}
        <div className={classes.row}>
          <div className={`${classes.cell} ${classes.gray}`}>13:00</div>
          <div className={`${classes.cell} ${classes.dark__green}`}>
            BIENVENIDA HOTEL
          </div>
          <div className={`${classes.cell} ${classes.dark__green}`}>
            INGRESO HOTEL
          </div>
          <div className={`${classes.cell} ${classes.dark__green}`}>
            INGRESO HOTEL
          </div>
          <div className={`${classes.cell} ${classes.orange}`}>RECESO</div>
          <div className={`${classes.cell} ${classes.orange}`}>
            ALMUERZO INTECAP
          </div>
          <div className={`${classes.cell} ${classes.hidden}`}></div>
        </div>
        {/* HOUR 14:00 */}
        <div className={classes.row}>
          <div className={`${classes.cell} ${classes.gray}`}>14:00</div>
          <div className={`${classes.cell} ${classes.yellow}`}>
            INTELIGENCIA EMOCIONAL - Marcelo Bobadilla (BC Solutions)
          </div>
          <div className={`${classes.cell} ${classes.yellow}`}>
            INGENIERÍA BIOMÉDICA - Andrea Lara
          </div>
          <div className={`${classes.cell} ${classes.yellow}`}>
            LA BRECHA DIGITAL - Ing. Ricardo Valenzuela
          </div>
          <div className={`${classes.cell} ${classes.yellow}`}>
            INTELIGENCIA ARTIFICAL Y SUS APLICACIONES EN LA INDUSTRIA - Erick
            Sosa (Microsoft)
          </div>
          <div className={`${classes.cell} ${classes.rowspan}`}>
            TARDE DEPORTIVA INTECAP
          </div>
          <div className={`${classes.cell} ${classes.hidden}`}></div>
        </div>
        {/* HOUR 15:00 */}
        <div className={classes.row}>
          <div className={`${classes.cell} ${classes.gray}`}>15:00</div>
          <div className={`${classes.cell} ${classes.yellow}`}>
            CIBERSEGURIDAD - Josue Gómez (Banco GYT)
          </div>
          <div className={`${classes.cell} ${classes.yellow}`}>
            SATÉLITE QUETZAL1 Y PROYECTOS NACIONALES - Hugo Elvira (Amivalle)
          </div>
          <div className={`${classes.cell} ${classes.yellow}`}>
            TRANSFORMADORES - Ing. Bryan Villela
          </div>
          <div className={`${classes.cell} ${classes.yellow}`}>
            INDUSTRIA 4.0 - Ing. Eddy Cumar (ENERGÍA ACTIVA)
          </div>
          <div className={`${classes.cell} ${classes.hidden}`}>VIERNES 27</div>
          <div className={`${classes.cell} ${classes.hidden}`}></div>
        </div>
        {/* HOUR 16:00 */}
        <div className={classes.row}>
          <div className={`${classes.cell} ${classes.gray}`}>16:00</div>
          <div className={`${classes.cell} ${classes.orange}`}>
            COFFEE BREAK
          </div>
          <div className={`${classes.cell} ${classes.orange}`}>
            COFFEE BREAK
          </div>
          <div className={`${classes.cell} ${classes.orange}`}>
            COFFEE BREAK
          </div>
          <div className={`${classes.cell} ${classes.orange}`}>
            COFFEE BREAK
          </div>
          <div className={`${classes.cell} ${classes.hidden}`}>VIERNES 27</div>
          <div className={`${classes.cell} ${classes.hidden}`}></div>
        </div>
        {/* HOUR 17:00 */}
        <div className={classes.row}>
          <div className={`${classes.cell} ${classes.gray}`}>17:00</div>
          <div className={`${classes.cell} ${classes.yellow}`}>CONFERENCIA</div>
          <div className={`${classes.cell} ${classes.yellow}`}>CONFERENCIA</div>
          <div className={`${classes.cell} ${classes.rowspan__2}`}>
            TALLER PRIMERO AUXILIOS
          </div>
          <div className={`${classes.cell} ${classes.yellow}`}>CONFERENCIA</div>
          <div className={`${classes.cell} ${classes.hidden}`}></div>
          <div className={`${classes.cell} ${classes.rowspan__2}`}>
            CENA DE GALA Y FIESTA
          </div>
        </div>
        {/* HOUR 18:00 */}
        <div className={classes.row}>
          <div className={`${classes.cell} ${classes.gray}`}>18:00</div>
          <div className={`${classes.cell} ${classes.yellow}`}>
            FACTIBLIDAD DE PROYECTOS ENERGÉTICOS EN BAJA Y MEDIA TENSIÓN -
            Carlos Morales (CNEE)
          </div>
          <div className={`${classes.cell} ${classes.yellow}`}>
            ENERGÍA RENOVABLES EN GUATEMALA - Victor Hugo Ventura (Ministro
            Energía y Minas)
          </div>
          <div className={`${classes.cell} ${classes.hidden}`}></div>
          <div className={classes.cell}>
            DESARROLLO PERSONAL - Jose Libros (Influencer @jose.libros)
          </div>
          <div className={`${classes.cell} ${classes.hidden}`}></div>
          <div className={`${classes.cell} ${classes.hidden}`}></div>
        </div>

        {/* Create rows similarly with cells */}
      </div>
    </div>
  );
};

export default ScheduleTable;

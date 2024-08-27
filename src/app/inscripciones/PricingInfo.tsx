import classes from "./pricingInfo.module.css";

const PricingInfo = () => {
  return (
    <div className={classes.tableWrapper}>
      <table className={classes.table}>
        <thead>
          <tr className={classes.tableHeaderRow}>
            <th className={classes.tableHeader}>Paquetes</th>
            <th className={classes.tableHeader}>Estudiante USAC</th>
            <th className={classes.tableHeader}>Externos</th>
          </tr>
        </thead>
        <tbody>
          <tr className={`${classes.tableRow} ${classes.rowHover}`}>
            <td className={classes.tableData}>Simple (Sin Cena de Gala)</td>
            <td className={classes.tableData}>Q 400.00</td>
            <td className={classes.tableData}>Q 500.00</td>
          </tr>
          <tr className={`${classes.tableRow} ${classes.evenRow}`}>
            <td className={classes.tableData}>Completo (Con Cena de Gala)</td>
            <td className={classes.tableData}>Q 500.00</td>
            <td className={classes.tableData}>Q 600.00</td>
          </tr>
          <tr className={`${classes.tableRow} ${classes.rowHover}`}>
            <td className={classes.tableData}>
              Combo Cuates (3 personas + cena de gala)
            </td>
            <td className={classes.tableData}>Q 450.00 c/u</td>
            <td className={classes.tableData}>Q 550.00 c/u</td>
          </tr>
          <tr className={`${classes.tableRow} ${classes.evenRow}`}>
            <td className={classes.tableData}>
              Day Pass (Solo un día de Actividades)
            </td>
            <td className={classes.tableData}>Q 200.00</td>
            <td className={classes.tableData}>Q 250.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PricingInfo;

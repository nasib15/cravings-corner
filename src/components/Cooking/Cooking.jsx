/* eslint-disable react/prop-types */
const Cooking = ({
  cookings,
  handleCurrentlyCooking,
  currentlyCooking,
  totalCalories,
  totalTime,
}) => {
  return (
    <div className="border rounded-2xl pt-8 pb-20">
      <h2 className="text-4xl text-center mx-auto">
        Want To Cook: {cookings.length}
      </h2>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-center">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          {cookings.map((cooking, index) => (
            <tbody key={index} className="text-center">
              {/* row 1 */}
              <tr className="bg-base-200">
                <th>{index + 1}</th>
                <td>{cooking.recipe_name}</td>
                <td>{cooking.prep_time}</td>
                <td>{cooking.calories}</td>
                <td>
                  <button
                    onClick={() =>
                      handleCurrentlyCooking(cooking, cooking.recipe_id)
                    }
                    className="btn bg-[#0BE58A]"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <h2 className="text-4xl text-center mx-auto pt-8">
        Currently Cooking: {currentlyCooking.length}
      </h2>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-center">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          {currentlyCooking.map((cooking, index) => (
            <tbody className="text-center" key={index}>
              {/* row 1 */}
              <tr className="bg-base-200">
                <th>{index + 1}</th>
                <td>{cooking.recipe_name}</td>
                <td>{cooking.prep_time}</td>
                <td>{cooking.calories}</td>
              </tr>
            </tbody>
          ))}
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td>
                Total Time=
                <br />
                {totalTime}
                Minutes
              </td>
              <td>
                Total Calories= <br />
                {totalCalories} Calories
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Cooking;
